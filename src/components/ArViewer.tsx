import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import type { ArSession, ArState } from '../ar/ArSession'
import { isWebXrArAvailable } from '../ar/WebXrArSession'
import type { ModelCache } from '../viewer/model-cache'
import type { ViewerModelDescriptor } from '../viewer/viewer-model-descriptor'

interface ArViewerProps {
  readonly descriptor: ViewerModelDescriptor
  readonly animalName: string
  readonly modelCache: ModelCache | undefined
  readonly onClose: () => void
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
  const sessionRef = useRef<ArSession | WebXrSessionLike | null>(null)
  // Keep the latest descriptor reachable from the async session bootstrap.
  const descriptorRef = useRef(descriptor)
  const [state, setState] = useState<ArState>('requesting-camera')
  const [mode, setMode] = useState<'xr' | 'marker'>(() =>
    isWebXrArAvailable() ? 'xr' : 'marker',
  )

  // Boot the AR session once. The session implementations (and Three.js AR
  // renderer) are pulled in via dynamic import so they stay in separate chunks
  // until AR opens. WebXR (Android Chrome) gives markerless placement; other
  // devices fall back to the marker-based AR.js session.
  useEffect(() => {
    const stage = stageRef.current
    const root = rootRef.current
    if (!stage || !root) {
      return
    }
    let disposed = false
    const bootMarkerSession = () => {
      if (disposed) {
        return
      }
      setMode('marker')
      void import('../ar/ArSession').then(({ ArSession: ArSessionClass }) => {
        if (disposed) {
          return
        }
        const session = new ArSessionClass({
          container: stage,
          modelCache,
          onStateChange: (next) => setState(next),
        })
        sessionRef.current = session
        void session.start()
        void session.setDescriptor(descriptorRef.current)
      })
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
              // No immersive-ar here (e.g. iOS Safari): use the marker card.
              session.dispose()
              sessionRef.current = null
              bootMarkerSession()
            }
          })
          void session.setDescriptor(descriptorRef.current)
        },
        () => {
          bootMarkerSession()
        },
      )
    } else {
      bootMarkerSession()
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
  const usingMarker = mode !== 'xr'

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
      <div aria-hidden="true" className="ar-stage" ref={stageRef} />
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
            {usingMarker ? (
              <img
                alt=""
                className="ar-marker-hint"
                decoding="async"
                loading="lazy"
                src="./ar/marker.png"
              />
            ) : null}
            <p>
              {usingMarker ? messages.ar.pointAtMarker : messages.ar.xrSearching}
            </p>
          </div>
        ) : null}
        {state === 'tracking' && !usingMarker ? (
          <p className="ar-hud__message">{messages.ar.xrPlaced}</p>
        ) : null}
        {state === 'tracking' && usingMarker ? (
          <p className="ar-hud__message">{messages.ar.trackingHint}</p>
        ) : null}
        {state === 'lost' ? (
          <p className="ar-hud__message">
            {usingMarker ? messages.ar.lost : messages.ar.xrLost}
          </p>
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
            {state === 'unsupported' && usingMarker ? (
              <a
                className="friendly-button friendly-button--small"
                href="./ar/marker.png"
                rel="noreferrer"
                target="_blank"
              >
                {messages.ar.printMarker}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

/** Structural surface shared by both session implementations. */
interface WebXrSessionLike {
  readonly start: () => Promise<boolean>
  readonly setDescriptor: (descriptor: ViewerModelDescriptor) => Promise<void>
  readonly dispose: () => void
}
