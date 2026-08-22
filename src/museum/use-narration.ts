import {
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  type RefObject,
} from 'react'
import { NarrationController, type NarrationSnapshot } from '../audio'
import type {
  AnimalLoadCoordinator,
  AnimalLoadPhase,
} from '../state'
import type { LoadedRuntimeAnimal } from './runtime-animal'

const NARRATION_IDLE_PRELOAD_DELAY_MS = 2_000

interface WindowWithIdleCallback {
  readonly requestIdleCallback?: (
    callback: () => void,
    options?: { readonly timeout: number },
  ) => number
  readonly cancelIdleCallback?: (handle: number) => void
}

interface UseNarrationOptions {
  readonly activeAnimalId: string
  readonly coordinatorRef: RefObject<AnimalLoadCoordinator<LoadedRuntimeAnimal> | null>
  readonly loadPhase: AnimalLoadPhase
  readonly modelReady: boolean
  readonly narrationSource: string | null
  readonly readyAnimalId: string | null
}

interface UseNarrationResult {
  readonly narration: NarrationController
  readonly narrationSnapshot: NarrationSnapshot
}

/**
 * Owns the shared narration controller: its mount lifecycle, the per-animal
 * commit, and the delayed idle-prepare that warms up the audio once an
 * exhibit has fully settled.
 */
export function useNarration({
  activeAnimalId,
  coordinatorRef,
  loadPhase,
  modelReady,
  narrationSource,
  readyAnimalId,
}: UseNarrationOptions): UseNarrationResult {
  const narration = useMemo(() => new NarrationController(), [])
  const narrationSnapshot = useSyncExternalStore(
    narration.subscribe,
    narration.getSnapshot,
    narration.getServerSnapshot,
  )
  const narrationLifecycleRef = useRef(0)

  useEffect(() => {
    const lifecycle = ++narrationLifecycleRef.current
    return () => {
      queueMicrotask(() => {
        // StrictMode immediately mounts the effect again; only the final
        // lifecycle should release the shared controller after unmount.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (narrationLifecycleRef.current === lifecycle) {
          narration.destroy()
        }
      })
    }
  }, [narration])

  useEffect(() => {
    narration.commit({
      animalId: activeAnimalId,
      source: narrationSource,
    })
  }, [activeAnimalId, narration, narrationSource])

  useEffect(() => {
    if (
      !modelReady ||
      loadPhase !== 'idle' ||
      readyAnimalId !== activeAnimalId ||
      narrationSnapshot.animalId !== activeAnimalId ||
      narrationSnapshot.availability !== 'available'
    ) {
      return
    }

    const idleWindow = window as typeof window & WindowWithIdleCallback
    let delayTimer: number | null = null
    let idleHandle: number | null = null
    const cancelScheduledWork = () => {
      if (delayTimer !== null) {
        window.clearTimeout(delayTimer)
        delayTimer = null
      }
      if (idleHandle !== null) {
        idleWindow.cancelIdleCallback?.(idleHandle)
        idleHandle = null
      }
    }
    const prepareIfStillCurrent = () => {
      idleHandle = null
      const currentLoad = coordinatorRef.current?.getSnapshot()
      const currentNarration = narration.getSnapshot()
      if (
        document.visibilityState !== 'hidden' &&
        currentLoad?.phase === 'idle' &&
        currentLoad.readyAnimalId === activeAnimalId &&
        currentNarration.animalId === activeAnimalId
      ) {
        narration.prepare()
      }
    }
    const schedule = () => {
      cancelScheduledWork()
      if (document.visibilityState === 'hidden') {
        return
      }
      delayTimer = window.setTimeout(() => {
        delayTimer = null
        if (document.visibilityState === 'hidden') {
          return
        }
        if (idleWindow.requestIdleCallback) {
          idleHandle = idleWindow.requestIdleCallback(
            prepareIfStillCurrent,
            { timeout: 1_000 },
          )
        } else {
          prepareIfStillCurrent()
        }
      }, NARRATION_IDLE_PRELOAD_DELAY_MS)
    }
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        cancelScheduledWork()
      } else {
        schedule()
      }
    }

    schedule()
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      cancelScheduledWork()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [
    activeAnimalId,
    coordinatorRef,
    loadPhase,
    readyAnimalId,
    modelReady,
    narration,
    narrationSnapshot.animalId,
    narrationSnapshot.availability,
  ])

  return { narration, narrationSnapshot }
}
