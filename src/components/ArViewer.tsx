import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import type { ArState } from '../ar/CameraArSession'
import { isWebXrArAvailable } from '../ar/WebXrArSession'
import type { ModelCache } from '../viewer/model-cache'
import type { ViewerModelDescriptor } from '../viewer/viewer-model-descriptor'

interface ArViewerProps {
  readonly descriptor: ViewerModelDescriptor
  readonly animalName: string
  readonly modelCache: ModelCache | undefined
  readonly onClose: () => void
}

/** Structural surface shared by both session implementations. */
interface ArSessionLike {
  readonly start: () => Promise<boolean | void>
  readonly setDescriptor: (descriptor: ViewerModelDescriptor) => Promise<void>
  readonly dispose: () => void
}

export function ArViewer({
  descriptor,
  animalName,
  modelCache,
  onClose,
}: ArViewerProps) {
  const { messages } = useI18n()
  const rootRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const sessionRef = useRef<ArSessionLike | null>(null)
  // Keep the latest descriptor reachable from the async session bootstrap.
  const descriptorRef = useRef(descriptor)
  const [state, setState] = useState<ArState>('requesting-camera')
  // WebXR (Android Chrome) when available; every other browser — including
  // iOS Safari — composites the animal over the plain camera feed.
  const [mode, setMode] = useState<'xr' | 'camera'>(() =>
    isWebXrArAvailable() ? 'xr' : 'camera',
  )

  useEffect(() => {
    const stage = stageRef.current
    const root = rootRef.current
    if (!stage || !root) {
      return
    }
    let disposed = false
    const bootCameraSession = () => {
      if (disposed) {
        return
      }
      setMode('camera')
      void import('../ar/CameraArSession').then(
        ({ CameraArSession: CameraArSessionClass }) => {
          if (disposed) {
            return
          }
          const session = new CameraArSessionClass({
            container: stage,
            modelCache,
            onStateChange: (next) => setState(next),
          })
          sessionRef.current = session
          void session.start()
          void session.setDescriptor(descriptorRef.current)
        },
        () => {
          setState('error')
        },
      )
    }
    if (isWebXrArAvailable()) {
      void import('../ar/WebXrArSession').then(
        ({ WebXrArSession: WebXrArSessionClass }) => {
          if (disposed) {
            return
          }
          const session = new WebXrArSessionClass({
            overlayRoot: root,
            modelCache,
            onStateChange: (next) => setState(next),
            onEnded: () => onClose(),
          })
          sessionRef.current = session
          void session.start().then((started) => {
            if (!started && !disposed) {
              // No immersive-ar here (e.g. iOS Safari): composite over the
              // plain camera feed instead — no marker card needed.
              session.dispose()
              sessionRef.current = null
              bootCameraSession()
            }
          })
          void session.setDescriptor(descriptorRef.current)
        },
        () => {
          bootCameraSession()
        },
      )
    } else {
      bootCameraSession()
    }
    return () => {
      disposed = true
      sessionRef.current?.dispose()
      sessionRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Swap the staged model when the selected animal changes.
  useEffect(() => {
    descriptorRef.current = descriptor
    void sessionRef.current?.setDescriptor(descriptor)
  }, [descriptor])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  void animalName // reserved for future per-animal announcements / switching UX

  const showCameraPrompt = state === 'requesting-camera'
  const showFailure =
    state === 'unsupported' || state === 'camera-denied' || state === 'error'

  return (
    <div
      aria-label={messages.ar.title}
      aria-modal="true"
      className="ar-viewer"
      data-ar-mode={mode}
      data-ar-state={state}
      ref={rootRef}
      role="dialog"
    >
      <div
        aria-hidden="true"
        className="ar-stage"
        onClick={() => {
          if (mode === 'camera') {
            const session = sessionRef.current as
              | { recenter?: () => void }
              | null
            session?.recenter?.()
          }
        }}
        ref={stageRef}
      />
      <button
        aria-label={messages.ar.close}
        className="ar-close friendly-button friendly-button--small"
        onClick={onClose}
        type="button"
      >
        <X aria-hidden="true" size={22} strokeWidth={2.25} />
      </button>
      <div aria-live="polite" className="ar-hud" role="status">
        {state === 'scanning' ? (
          <div className="ar-hud__message">
            <p>{messages.ar.xrSearching}</p>
          </div>
        ) : null}
        {state === 'tracking' && mode === 'xr' ? (
          <p className="ar-hud__message">{messages.ar.xrPlaced}</p>
        ) : null}
        {state === 'tracking' && mode === 'camera' ? (
          <p className="ar-hud__message">{messages.ar.cameraMode}</p>
        ) : null}
        {showCameraPrompt ? (
          <p className="ar-hud__message">{messages.ar.requestingCamera}</p>
        ) : null}
        {showFailure ? (
          <div className="ar-hud__failure">
            <p>
              {state === 'camera-denied'
                ? messages.ar.cameraDenied
                : state === 'error'
                  ? messages.ar.error
                  : messages.ar.unsupported}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
