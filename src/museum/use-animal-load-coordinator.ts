import {
  useEffect,
  useRef,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react'
import type { NarrationController } from '@/src/audio'
import { museumMode } from '@/src/app-mode'
import type { Locale } from '@/src/i18n/locale'
import type { MuseumMessages } from '@/src/i18n/messages'
import {
  AnimalLoadCoordinator,
  IdlePreloadCoordinator,
  type AnimalLoadContext,
  type AnimalLoadSnapshot,
  type IdlePreloadTarget,
} from '@/src/state'
import type { ModelCache } from '@/src/viewer/model-cache'
import type {
  ModelLoadProgress,
  ViewerController,
} from '@/src/viewer/ViewerController'
import { replaceAnimalUrl } from '@/src/museum/routing'
import type { LoadedRuntimeAnimal, RuntimeAnimal } from '@/src/museum/runtime-animal'
import type { ModelLoadingProgress, ViewerFailureKind } from '@/src/museum/types'

const INITIAL_PRESENTATION_MINIMUM_MS = 900
const REDUCED_MOTION_INITIAL_MINIMUM_MS = 180
const MODEL_PROGRESS_STEP = 5

function abortError(): DOMException {
  return new DOMException('请求已取消。', 'AbortError')
}

function waitForInitialMinimum(
  startedAt: number,
  signal: AbortSignal,
): Promise<void> {
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  const minimum =
    museumMode === 'test'
      ? 0
      : reducedMotion
        ? REDUCED_MOTION_INITIAL_MINIMUM_MS
        : INITIAL_PRESENTATION_MINIMUM_MS
  const remaining = Math.max(0, minimum - (performance.now() - startedAt))
  if (remaining === 0) {
    signal.throwIfAborted()
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      signal.removeEventListener('abort', handleAbort)
      resolve()
    }, remaining)
    const handleAbort = () => {
      window.clearTimeout(timer)
      reject(abortError())
    }
    if (signal.aborted) {
      handleAbort()
      return
    }
    signal.addEventListener('abort', handleAbort, { once: true })
  })
}

function preloadImageAsset(
  url: string,
  signal?: AbortSignal,
  priority: RequestPriority = 'auto',
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    let settled = false

    const cleanup = () => {
      image.onload = null
      image.onerror = null
      signal?.removeEventListener('abort', handleAbort)
    }
    const finish = (
      result: { readonly image: HTMLImageElement } | { readonly error: Error },
    ) => {
      if (settled) {
        return
      }
      settled = true
      cleanup()
      if ('image' in result) {
        resolve(result.image)
      } else {
        reject(result.error)
      }
    }
    const handleAbort = () => {
      image.src = ''
      finish({ error: abortError() })
    }

    image.decoding = 'async'
    image.fetchPriority = priority
    image.onload = () => {
      const decoded: Promise<void> =
        typeof image.decode === 'function'
          ? image.decode()
          : Promise.resolve()
      void decoded.then(
        () => finish({ image }),
        () => finish({ error: new Error(`场景图片解码失败：${url}`) }),
      )
    }
    image.onerror = () => {
      finish({ error: new Error(`场景图片加载失败：${url}`) })
    }
    if (signal?.aborted) {
      handleAbort()
      return
    }
    signal?.addEventListener('abort', handleAbort, { once: true })
    image.src = url
  })
}

interface UseAnimalLoadCoordinatorOptions {
  readonly activeAnimalRef: RefObject<RuntimeAnimal>
  readonly animalIndexRef: RefObject<Map<string, RuntimeAnimal>>
  readonly backgroundTimerRef: RefObject<number | null>
  readonly clearLargeModelNotice: () => void
  readonly clearLargeModelNoticeForToken: (requestToken: number) => void
  readonly coordinatorRef: RefObject<AnimalLoadCoordinator<LoadedRuntimeAnimal> | null>
  readonly idlePreloadCoordinatorRef: RefObject<IdlePreloadCoordinator | null>
  readonly idlePreloadTargets: readonly IdlePreloadTarget[]
  readonly locale: Locale
  readonly messagesRef: RefObject<MuseumMessages>
  readonly modelCache: ModelCache
  readonly narration: NarrationController
  readonly preloadedImagesRef: RefObject<Map<string, HTMLImageElement>>
  readonly scheduleLargeModelNotice: (
    animal: RuntimeAnimal,
    requestToken: number,
  ) => void
  readonly setActiveAnimalId: Dispatch<SetStateAction<string>>
  readonly setBackgroundTransitionReady: Dispatch<SetStateAction<boolean>>
  readonly setLiveMessage: Dispatch<SetStateAction<string>>
  readonly setLoadSnapshot: Dispatch<SetStateAction<AnimalLoadSnapshot>>
  readonly setModelLoadingProgress: Dispatch<
    SetStateAction<ModelLoadingProgress | null>
  >
  readonly setOutgoingAnimal: Dispatch<SetStateAction<RuntimeAnimal | null>>
  readonly setViewerFailure: Dispatch<SetStateAction<ViewerFailureKind | null>>
  readonly viewerController: ViewerController | null
  readonly visibleBackgroundRef: RefObject<RuntimeAnimal>
}

/**
 * Creates the animal-load and idle-preload coordinators bound to the current
 * viewer controller, and keeps the exhibit state (active animal, background
 * transition, load snapshot, live announcements) in sync with them.
 */
export function useAnimalLoadCoordinator({
  activeAnimalRef,
  animalIndexRef,
  backgroundTimerRef,
  clearLargeModelNotice,
  clearLargeModelNoticeForToken,
  coordinatorRef,
  idlePreloadCoordinatorRef,
  idlePreloadTargets,
  locale,
  messagesRef,
  modelCache,
  narration,
  preloadedImagesRef,
  scheduleLargeModelNotice,
  setActiveAnimalId,
  setBackgroundTransitionReady,
  setLiveMessage,
  setLoadSnapshot,
  setModelLoadingProgress,
  setOutgoingAnimal,
  setViewerFailure,
  viewerController,
  visibleBackgroundRef,
}: UseAnimalLoadCoordinatorOptions): void {
  const requestTokenRef = useRef(0)
  const lastReportedModelProgressRef = useRef('')
  const initialPresentationPendingRef = useRef(true)

  useEffect(() => {
    const controller = viewerController
    coordinatorRef.current?.destroy()
    coordinatorRef.current = null
    idlePreloadCoordinatorRef.current?.destroy()
    idlePreloadCoordinatorRef.current = null

    if (!controller) {
      return
    }

    const idlePreloadCoordinator = new IdlePreloadCoordinator({
      isImageInMemory: (url) => preloadedImagesRef.current.has(url),
      modelCache,
      targets: idlePreloadTargets,
    })
    idlePreloadCoordinatorRef.current = idlePreloadCoordinator

    const coordinator = new AnimalLoadCoordinator<LoadedRuntimeAnimal>({
      initialReadyAnimalId: null,
      initialRequestToken: requestTokenRef.current,
      load: async (animalId, context: AnimalLoadContext) => {
        idlePreloadCoordinator.cancelAll()
        clearLargeModelNotice()
        const animal = animalIndexRef.current.get(animalId)
        if (!animal) {
          throw new Error(`没有找到动物 ${animalId}。`)
        }
        const ignoreAbort = false
        const shouldHoldInitial = initialPresentationPendingRef.current
        const startedAt = performance.now()
        const reportModelProgress = (progress: ModelLoadProgress) => {
          if (context.signal.aborted) {
            return
          }
          const totalBytes = progress.totalBytes ?? animal.assets.modelBytes
          const phase =
            progress.source !== 'network' ||
            (progress.totalBytes !== null &&
              progress.loadedBytes >= progress.totalBytes)
              ? 'preparing'
              : 'downloading'
          const rawPercent = Math.min(
            phase === 'downloading' ? 99 : 100,
            Math.floor((progress.loadedBytes / totalBytes) * 100),
          )
          const percent =
            phase === 'downloading'
              ? Math.floor(rawPercent / MODEL_PROGRESS_STEP) * MODEL_PROGRESS_STEP
              : null
          const progressKey = `${context.requestToken}:${progress.source}:${phase}:${percent ?? 'done'}`
          if (lastReportedModelProgressRef.current === progressKey) {
            return
          }
          lastReportedModelProgressRef.current = progressKey
          if (phase === 'downloading') {
            scheduleLargeModelNotice(animal, context.requestToken)
          } else {
            clearLargeModelNoticeForToken(context.requestToken)
          }
          setModelLoadingProgress({
            animalId,
            loadedBytes: progress.loadedBytes,
            percent,
            phase,
            requestToken: context.requestToken,
            source: progress.source,
            totalBytes,
          })
        }
        lastReportedModelProgressRef.current = `${context.requestToken}:checking-cache`
        setModelLoadingProgress({
          animalId,
          loadedBytes: 0,
          percent: null,
          phase: 'checking-cache',
          requestToken: context.requestToken,
          source: null,
          totalBytes: animal.assets.modelBytes,
        })
        const selectedBackground = window.matchMedia(
          '(orientation: portrait)',
        ).matches
          ? animal.assets.backgroundPortrait
          : animal.assets.backgroundLandscape
        const modelPromise = controller.stageModel(
          animal.viewer,
          ignoreAbort ? undefined : context.signal,
          reportModelProgress,
        )
        const cachedBackground =
          preloadedImagesRef.current.get(selectedBackground)
        const backgroundPromise =
          museumMode === 'test'
            ? Promise.resolve<HTMLImageElement | null>(null)
            : cachedBackground
              ? Promise.resolve(cachedBackground)
              : preloadImageAsset(
                  selectedBackground,
                  context.signal,
                  'high',
                )
        const [modelResult, backgroundResult] = await Promise.allSettled([
          modelPromise,
          backgroundPromise,
        ])
        if (
          backgroundResult.status === 'fulfilled' &&
          backgroundResult.value
        ) {
          preloadedImagesRef.current.set(
            selectedBackground,
            backgroundResult.value,
          )
        }
        if (modelResult.status === 'rejected') {
          throw modelResult.reason
        }
        const staged = modelResult.value
        if (backgroundResult.status === 'rejected') {
          controller.disposeStagedModel(staged)
          throw backgroundResult.reason
        }

        if (shouldHoldInitial) {
          try {
            await waitForInitialMinimum(startedAt, context.signal)
          } catch (error: unknown) {
            controller.disposeStagedModel(staged)
            throw error
          }
        }
        return { animal, staged }
      },
      commit: ({ animal, staged }) => {
        const isInitialCommit = initialPresentationPendingRef.current
        const localizedAnimal = animalIndexRef.current.get(animal.id) ?? animal
        controller.commitModel(staged)
        controller.setAccessibilityLabel(
          localizedAnimal.viewer.accessibilityLabel ??
            messagesRef.current.viewer.modelLabel(localizedAnimal.name),
        )
        const previousAnimal = activeAnimalRef.current
        if (previousAnimal.id !== localizedAnimal.id) {
          if (backgroundTimerRef.current !== null) {
            window.clearTimeout(backgroundTimerRef.current)
            backgroundTimerRef.current = null
          }
          setBackgroundTransitionReady(false)
          setOutgoingAnimal(
            (current) => current ?? visibleBackgroundRef.current,
          )
        }
        initialPresentationPendingRef.current = false
        activeAnimalRef.current = localizedAnimal
        setActiveAnimalId(localizedAnimal.id)
        if (!isInitialCommit) {
          setModelLoadingProgress(null)
        }
        setViewerFailure(null)
        replaceAnimalUrl(localizedAnimal.id, locale)
        narration.commit({
          animalId: localizedAnimal.id,
          source: localizedAnimal.assets.narration,
        })
        idlePreloadCoordinator.scheduleAfterCommit(localizedAnimal.id)
        setLiveMessage(
          messagesRef.current.loading.arrived(localizedAnimal.name),
        )
      },
      dispose: ({ staged }) => {
        controller.disposeStagedModel(staged)
      },
      onDisposeError: (error) => {
        console.error('释放过期模型失败。', error)
      },
    })
    coordinatorRef.current = coordinator
    setLoadSnapshot(coordinator.getSnapshot())
    const unsubscribe = coordinator.subscribe(() => {
      const snapshot = coordinator.getSnapshot()
      requestTokenRef.current = Math.max(requestTokenRef.current, snapshot.requestToken)
      setLoadSnapshot(snapshot)
      if (snapshot.phase === 'failed' && snapshot.failure) {
        clearLargeModelNotice()
        setModelLoadingProgress(null)
        const failedAnimal = animalIndexRef.current.get(snapshot.failure.animalId)
        setLiveMessage(
          messagesRef.current.loading.failedRetry(
            failedAnimal?.name ?? messagesRef.current.loading.unknownAnimal,
          ),
        )
      }
    })
    void coordinator.request(activeAnimalRef.current.id)

    return () => {
      unsubscribe()
      coordinator.destroy()
      idlePreloadCoordinator.destroy()
      if (coordinatorRef.current === coordinator) {
        coordinatorRef.current = null
      }
      if (idlePreloadCoordinatorRef.current === idlePreloadCoordinator) {
        idlePreloadCoordinatorRef.current = null
      }
    }
  }, [
    activeAnimalRef,
    animalIndexRef,
    backgroundTimerRef,
    clearLargeModelNotice,
    clearLargeModelNoticeForToken,
    coordinatorRef,
    idlePreloadCoordinatorRef,
    idlePreloadTargets,
    locale,
    messagesRef,
    modelCache,
    narration,
    preloadedImagesRef,
    scheduleLargeModelNotice,
    setActiveAnimalId,
    setBackgroundTransitionReady,
    setLiveMessage,
    setLoadSnapshot,
    setModelLoadingProgress,
    setOutgoingAnimal,
    setViewerFailure,
    viewerController,
    visibleBackgroundRef,
  ])
}
