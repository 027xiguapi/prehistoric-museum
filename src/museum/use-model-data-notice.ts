import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from 'react'
import {
  MODEL_DATA_REMINDER_STORAGE_KEY,
  NARROW_TOUCH_MEDIA_QUERY,
  isLargeModel,
} from '../model-policy'
import type { AnimalLoadCoordinator } from '../state'
import type { LoadedRuntimeAnimal, RuntimeAnimal } from './runtime-animal'
import type { ModelDataNotice } from './types'

const LARGE_MODEL_NOTICE_DELAY_MS = 600

interface UseModelDataNoticeResult {
  readonly clearLargeModelNotice: () => void
  readonly clearLargeModelNoticeForToken: (requestToken: number) => void
  readonly dismissModelDataNotice: () => void
  readonly modelDataNotice: ModelDataNotice | null
  readonly scheduleLargeModelNotice: (
    animal: RuntimeAnimal,
    requestToken: number,
  ) => void
}

/**
 * Owns the transient model-data notices (the first-entry Wi-Fi reminder and
 * the large-model download hint) together with their timers and the request
 * token that dedupes network-transfer hints across animal loads.
 */
export function useModelDataNotice(
  coordinatorRef: RefObject<AnimalLoadCoordinator<LoadedRuntimeAnimal> | null>,
): UseModelDataNoticeResult {
  const modelDataNoticeTimerRef = useRef<number | null>(null)
  const largeModelNoticeDelayTimerRef = useRef<number | null>(null)
  const networkTransferRequestTokenRef = useRef<number | null>(null)
  const modelDataNoticeKindRef =
    useRef<ModelDataNotice['kind'] | null>(null)
  const modelDataNoticeLifecycleRef = useRef(0)
  const [modelDataNotice, setModelDataNotice] =
    useState<ModelDataNotice | null>(null)

  const dismissModelDataNotice = useCallback(() => {
    if (modelDataNoticeTimerRef.current !== null) {
      window.clearTimeout(modelDataNoticeTimerRef.current)
      modelDataNoticeTimerRef.current = null
    }
    modelDataNoticeKindRef.current = null
    setModelDataNotice(null)
  }, [])

  const presentModelDataNotice = useCallback((notice: ModelDataNotice) => {
    if (modelDataNoticeTimerRef.current !== null) {
      window.clearTimeout(modelDataNoticeTimerRef.current)
    }
    modelDataNoticeKindRef.current = notice.kind
    setModelDataNotice(notice)
    modelDataNoticeTimerRef.current = window.setTimeout(() => {
      modelDataNoticeTimerRef.current = null
      modelDataNoticeKindRef.current = null
      setModelDataNotice(null)
    }, notice.kind === 'first-entry' ? 8_000 : 5_500)
  }, [])

  const clearLargeModelNotice = useCallback(() => {
    if (largeModelNoticeDelayTimerRef.current !== null) {
      window.clearTimeout(largeModelNoticeDelayTimerRef.current)
      largeModelNoticeDelayTimerRef.current = null
    }
    networkTransferRequestTokenRef.current = null
    if (modelDataNoticeKindRef.current === 'large-model') {
      dismissModelDataNotice()
    }
  }, [dismissModelDataNotice])

  /** Clears the notice only when it was scheduled for this very request. */
  const clearLargeModelNoticeForToken = useCallback(
    (requestToken: number) => {
      if (networkTransferRequestTokenRef.current === requestToken) {
        clearLargeModelNotice()
      }
    },
    [clearLargeModelNotice],
  )

  const scheduleLargeModelNotice = useCallback(
    (animal: RuntimeAnimal, requestToken: number) => {
      if (
        !isLargeModel(animal.assets.modelBytes) ||
        modelDataNoticeKindRef.current === 'first-entry'
      ) {
        return
      }
      if (networkTransferRequestTokenRef.current === requestToken) {
        return
      }
      networkTransferRequestTokenRef.current = requestToken
      largeModelNoticeDelayTimerRef.current = window.setTimeout(() => {
        largeModelNoticeDelayTimerRef.current = null
        const snapshot = coordinatorRef.current?.getSnapshot()
        if (
          networkTransferRequestTokenRef.current !== requestToken ||
          snapshot?.phase !== 'loading' ||
          snapshot.requestToken !== requestToken ||
          modelDataNoticeKindRef.current === 'first-entry'
        ) {
          return
        }
        presentModelDataNotice({
          animalId: animal.id,
          kind: 'large-model',
          modelBytes: animal.assets.modelBytes,
        })
      }, LARGE_MODEL_NOTICE_DELAY_MS)
    },
    [coordinatorRef, presentModelDataNotice],
  )

  useEffect(() => {
    const lifecycle = ++modelDataNoticeLifecycleRef.current
    return () => {
      queueMicrotask(() => {
        // React StrictMode immediately starts the next lifecycle. Only clear
        // the timer after the final unmount.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (modelDataNoticeLifecycleRef.current === lifecycle) {
          if (modelDataNoticeTimerRef.current !== null) {
            window.clearTimeout(modelDataNoticeTimerRef.current)
            modelDataNoticeTimerRef.current = null
          }
          if (largeModelNoticeDelayTimerRef.current !== null) {
            window.clearTimeout(largeModelNoticeDelayTimerRef.current)
            largeModelNoticeDelayTimerRef.current = null
          }
          networkTransferRequestTokenRef.current = null
          modelDataNoticeKindRef.current = null
        }
      })
    }
  }, [])

  useEffect(() => {
    if (!window.matchMedia(NARROW_TOUCH_MEDIA_QUERY).matches) {
      return
    }

    try {
      if (window.localStorage.getItem(MODEL_DATA_REMINDER_STORAGE_KEY)) {
        return
      }
    } catch {
      // Privacy settings may disable storage. The reminder still works for
      // this visit without blocking the museum.
    }

    const reminderTimer = window.setTimeout(() => {
      try {
        if (window.localStorage.getItem(MODEL_DATA_REMINDER_STORAGE_KEY)) {
          return
        }
        window.localStorage.setItem(MODEL_DATA_REMINDER_STORAGE_KEY, 'seen')
      } catch {
        // Keep the current visit useful when persistent storage is blocked.
      }
      presentModelDataNotice({
        kind: 'first-entry',
      })
    }, 0)

    return () => {
      window.clearTimeout(reminderTimer)
    }
  }, [presentModelDataNotice])

  return {
    clearLargeModelNotice,
    clearLargeModelNoticeForToken,
    dismissModelDataNotice,
    modelDataNotice,
    scheduleLargeModelNotice,
  }
}
