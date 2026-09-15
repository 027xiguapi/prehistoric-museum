'use client'

import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import {
  BookOpen,
  Bot,
  Compass,
  HelpCircle,
  Map as MapIcon,
  RotateCcw,
  Tag,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react'
import { useI18n } from '@/src/i18n/I18nProvider'
import { isLocale } from '@/src/i18n/locale'
import { updateLocalizedMetadata } from '@/src/i18n/metadata'
import type { ZooExhibit } from '@/src/zoo/zoo-exhibits'
import type { ZooGame, ZooSnapshot } from '@/src/zoo/zoo-game'

const TITLE_COLORS = [
  '#d97967',
  '#f4b85f',
  '#e0c04a',
  '#5aa86a',
  '#4a9ec4',
  '#356859',
  '#a07cc4',
  '#d9748f',
]

type ZooPhase = 'loading' | 'ready' | 'playing' | 'failed'

const NO_DISCOVERIES: readonly string[] = []

/**
 * Touch layouts are a media query, not component state: reading it through
 * `useSyncExternalStore` keeps the server snapshot stable and avoids a
 * cascading render on mount.
 */
function useTouchDevice(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia('(pointer: coarse)')
      const listener = (): void => {
        onChange()
      }
      query.addEventListener('change', listener)
      window.addEventListener('resize', listener)
      return () => {
        query.removeEventListener('change', listener)
        window.removeEventListener('resize', listener)
      }
    },
    () => window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 800,
    () => false,
  )
}

interface ZooGameViewProps {
  readonly locale: string
}

/**
 * The park's shell: a loading gate, the heads-up display, the field notebook
 * and the modals. All of the 3D work lives in `ZooGame`, which is imported
 * dynamically so three.js never enters the first-load bundle and the static
 * export still renders this page.
 */
export function ZooGameView({ locale }: ZooGameViewProps) {
  const { messages } = useI18n()
  const hostRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<ZooGame | null>(null)
  const joystickRef = useRef<HTMLDivElement>(null)
  const joystickKnobRef = useRef<HTMLDivElement>(null)
  const toastTimer = useRef<number | null>(null)

  const [phase, setPhase] = useState<ZooPhase>('loading')
  const [booted, setBooted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [progressLabel, setProgressLabel] = useState('')
  const [snapshot, setSnapshot] = useState<ZooSnapshot | null>(null)
  const [exhibits, setExhibits] = useState<readonly ZooExhibit[]>([])
  const [nearby, setNearby] = useState<ZooExhibit | null>(null)
  const [toast, setToast] = useState<{ text: string; key: number } | null>(null)
  const [notebookOpen, setNotebookOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [celebrateOpen, setCelebrateOpen] = useState(false)
  const [fatal, setFatal] = useState<string | null>(null)
  const touchDevice = useTouchDevice()

  const zoo = messages.zoo

  const titleChars = useMemo(() => [...zoo.title], [zoo.title])

  const showToast = useCallback((text: string) => {
    setToast({ text, key: Date.now() })
    if (toastTimer.current !== null) {
      window.clearTimeout(toastTimer.current)
    }
    toastTimer.current = window.setTimeout(() => {
      setToast(null)
      toastTimer.current = null
    }, 3000)
  }, [])

  useEffect(() => {
    if (!isLocale(locale)) {
      return
    }
    updateLocalizedMetadata({
      locale,
      documentTitle: zoo.documentTitle,
      museumTitle: messages.museumName,
      creatorBrand: messages.creatorBrand,
      description: zoo.subtitle,
      socialImageAlt: messages.seo.socialImageAlt,
    })
  }, [locale, messages, zoo])

  useEffect(() => {
    const host = hostRef.current
    if (!host) {
      return
    }
    let cancelled = false
    let game: ZooGame | null = null

    const boot = async () => {
      try {
        const module = await import('@/src/zoo/zoo-game')
        if (cancelled) {
          return
        }
        game = new module.ZooGame({
          container: host,
          locale: isLocale(locale) ? locale : 'en',
          callbacks: {
            onProgress: (fraction, label) => {
              setProgress(fraction)
              setProgressLabel(label)
            },
            onReady: () => {
              setExhibits(game?.exhibitList ?? [])
              setBooted(true)
              setPhase('ready')
            },
            onSnapshot: (next) => {
              setSnapshot(next)
            },
            onExhibitInfo: (exhibit) => {
              setNearby(exhibit)
            },
            onToast: showToast,
            onCelebrate: () => {
              setCelebrateOpen(true)
            },
            onFatal: (message) => {
              setFatal(message)
              setPhase('failed')
            },
          },
        })
        gameRef.current = game
        await game.start()
      } catch (error) {
        if (!cancelled) {
          console.error(error)
          setFatal(messages.zoo.errors.model)
          setPhase('failed')
        }
      }
    }
    void boot()

    return () => {
      cancelled = true
      game?.dispose()
      gameRef.current = null
    }
    // Mount once: the park owns its own lifetime from here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale])

  useEffect(() => {
    return () => {
      if (toastTimer.current !== null) {
        window.clearTimeout(toastTimer.current)
      }
    }
  }, [])

  // ------------------------------------------------------------- joystick

  useEffect(() => {
    const pad = joystickRef.current
    const knob = joystickKnobRef.current
    if (!pad || !knob || !touchDevice) {
      return
    }
    const radius = 44
    let pointerId: number | null = null
    let centreX = 0
    let centreY = 0

    const apply = (dx: number, dy: number): void => {
      const length = Math.hypot(dx, dy) || 1
      const strength = Math.min(1, length / radius)
      const nx = (dx / length) * strength
      const ny = (dy / length) * strength
      knob.style.transform = `translate(${nx * radius}px, ${ny * radius}px)`
      gameRef.current?.setJoystick(nx, ny)
    }

    const down = (event: PointerEvent): void => {
      pointerId = event.pointerId
      const rect = pad.getBoundingClientRect()
      centreX = rect.left + rect.width / 2
      centreY = rect.top + rect.height / 2
      apply(event.clientX - centreX, event.clientY - centreY)
      pad.setPointerCapture(pointerId)
      event.stopPropagation()
    }
    const move = (event: PointerEvent): void => {
      if (pointerId === null || event.pointerId !== pointerId) {
        return
      }
      apply(event.clientX - centreX, event.clientY - centreY)
      event.stopPropagation()
    }
    const up = (): void => {
      pointerId = null
      knob.style.transform = ''
      gameRef.current?.setJoystick(0, 0)
    }

    pad.addEventListener('pointerdown', down)
    pad.addEventListener('pointermove', move)
    pad.addEventListener('pointerup', up)
    pad.addEventListener('pointercancel', up)
    return () => {
      pad.removeEventListener('pointerdown', down)
      pad.removeEventListener('pointermove', move)
      pad.removeEventListener('pointerup', up)
      pad.removeEventListener('pointercancel', up)
    }
  }, [touchDevice])

  const discovered = snapshot?.discovered ?? NO_DISCOVERIES
  const discoveredSet = useMemo(() => new Set(discovered), [discovered])
  const total = snapshot?.total ?? exhibits.length
  const tourActive = snapshot?.tourActive ?? false
  const labelsVisible = snapshot?.labelsVisible ?? true
  const soundEnabled = snapshot?.soundEnabled ?? true
  const overview = snapshot?.overview ?? false

  const startExploring = (): void => {
    gameRef.current?.begin()
    setPhase('playing')
  }

  return (
    <main className="zoo-page" data-zoo-phase={phase}>
      <div className="zoo-canvas-host" ref={hostRef} />

      {phase !== 'playing' ? (
        <div className="zoo-gate">
          <div className="zoo-gate-inner">
            <h1 className="zoo-puffy" aria-label={zoo.title}>
              {titleChars.map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  aria-hidden="true"
                  style={{
                    color: TITLE_COLORS[index % TITLE_COLORS.length],
                    animationDelay: `${-(index * 0.17)}s`,
                  }}
                >
                  {character}
                </span>
              ))}
            </h1>
            <p className="zoo-gate-subtitle">{zoo.subtitle}</p>

            {phase === 'failed' ? (
              <div className="zoo-gate-error" role="status">
                <strong>{fatal ?? zoo.errors.webgl}</strong>
                <Link className="zoo-button" href={`/${locale}/`}>
                  {messages.returnToMuseum}
                </Link>
              </div>
            ) : (
              <>
                <div className="zoo-gate-bar">
                  <div
                    className="zoo-gate-bar-fill"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
                <p className="zoo-gate-progress" aria-live="polite">
                  {progressLabel || zoo.loadingTitle}
                </p>
                <button
                  className="zoo-button zoo-button--big"
                  disabled={!booted}
                  onClick={startExploring}
                  type="button"
                >
                  {booted ? `${zoo.start} ▶` : zoo.loadingTitle}
                </button>
              </>
            )}

            <div className="zoo-gate-hints">
              <span>{zoo.hints.drag}</span>
              <span>{zoo.hints.walk}</span>
              <span>{zoo.hints.tap}</span>
            </div>
          </div>
        </div>
      ) : null}

      <div className="zoo-hud" hidden={phase !== 'playing'}>
        <div className="zoo-chip-row">
          <Link className="zoo-chip zoo-chip--link" href={`/${locale}/`}>
            <Compass aria-hidden="true" size={18} />
            <span>{messages.museumName}</span>
          </Link>
          <span className="zoo-chip">{zoo.title}</span>
          {snapshot && snapshot.pendingCount > 0 ? (
            <span className="zoo-chip zoo-chip--muted">{zoo.hud.travelling}</span>
          ) : null}
        </div>

        <button
          aria-label={zoo.hud.collection}
          className="zoo-notebook"
          onClick={() => setNotebookOpen(true)}
          type="button"
        >
          <span className="zoo-notebook-title">
            <BookOpen aria-hidden="true" size={17} />
            {zoo.hud.book}
          </span>
          <span className="zoo-notebook-count">
            {discovered.length} / {total}
          </span>
          <span className="zoo-notebook-dots" aria-hidden="true">
            {exhibits.slice(0, 18).map((exhibit) => (
              <span
                className="zoo-notch"
                data-met={discoveredSet.has(exhibit.id)}
                key={exhibit.id}
                style={{ background: exhibit.accent }}
              />
            ))}
          </span>
        </button>

        {nearby ? (
          <article className="zoo-card" data-met={discoveredSet.has(nearby.id)}>
            <header className="zoo-card-head">
              <img alt="" className="zoo-card-thumb" src={nearby.thumbnail} />
              <div className="zoo-card-titles">
                <h2>{nearby.name}</h2>
                <p>
                  <span
                    className="zoo-card-zone"
                    style={{ background: nearby.accent }}
                  >
                    {nearby.zoneName}
                  </span>
                  {nearby.classification}
                </p>
              </div>
              <span className="zoo-card-badge">
                {discoveredSet.has(nearby.id) ? zoo.card.met : zoo.card.unmet}
              </span>
            </header>
            <p className="zoo-card-feature">{nearby.visibleFeature}</p>
            <dl className="zoo-card-facts">
              <div>
                <dt>{zoo.card.period}</dt>
                <dd>{nearby.period}</dd>
              </div>
              <div>
                <dt>{zoo.card.size}</dt>
                <dd>
                  {nearby.sizeLabel} {nearby.sizeValue}
                </dd>
              </div>
              <div>
                <dt>{zoo.card.diet}</dt>
                <dd>{nearby.dietLabel}</dd>
              </div>
              <div>
                <dt>{zoo.card.regions}</dt>
                <dd>{messages.parent.joinRegions(nearby.regions)}</dd>
              </div>
            </dl>
            <div className="zoo-card-actions">
              <button
                className="zoo-button"
                onClick={() => gameRef.current?.greetNearby()}
                type="button"
              >
                {zoo.hud.meet}
              </button>
              <button
                className="zoo-button zoo-button--ghost"
                onClick={() => gameRef.current?.speakNearby()}
                type="button"
              >
                {snapshot?.speaking ? zoo.hud.speaking : zoo.hud.speak}
              </button>
              {snapshot?.speaking ? (
                <button
                  className="zoo-button zoo-button--ghost"
                  onClick={() => gameRef.current?.stopNarration()}
                  type="button"
                >
                  {zoo.hud.stopSpeak}
                </button>
              ) : null}
            </div>
          </article>
        ) : null}

        <div className="zoo-actions">
          <button
            aria-label={zoo.hud.collection}
            className="zoo-round"
            onClick={() => setNotebookOpen(true)}
            title={zoo.hud.collection}
            type="button"
          >
            <BookOpen size={20} />
          </button>
          <button
            aria-label={tourActive ? zoo.hud.tourStop : zoo.hud.tour}
            className="zoo-round"
            data-on={tourActive}
            onClick={() => gameRef.current?.toggleTour()}
            title={tourActive ? zoo.hud.tourStop : zoo.hud.tour}
            type="button"
          >
            <Bot size={20} />
          </button>
          <button
            aria-label={overview ? zoo.hud.overviewExit : zoo.hud.overview}
            className="zoo-round"
            data-on={overview}
            onClick={() => gameRef.current?.toggleOverview()}
            title={overview ? zoo.hud.overviewExit : zoo.hud.overview}
            type="button"
          >
            <MapIcon size={20} />
          </button>
          <button
            aria-label={zoo.hud.labels}
            className="zoo-round"
            data-on={labelsVisible}
            onClick={() => gameRef.current?.toggleLabels()}
            title={zoo.hud.labels}
            type="button"
          >
            <Tag size={20} />
          </button>
          <button
            aria-label={soundEnabled ? zoo.hud.soundOff : zoo.hud.soundOn}
            className="zoo-round"
            data-on={soundEnabled}
            onClick={() => gameRef.current?.setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? zoo.hud.soundOff : zoo.hud.soundOn}
            type="button"
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button
            aria-label={zoo.hud.reset}
            className="zoo-round"
            onClick={() => gameRef.current?.resetView()}
            title={zoo.hud.reset}
            type="button"
          >
            <RotateCcw size={20} />
          </button>
          <button
            aria-label={zoo.hud.help}
            className="zoo-round"
            onClick={() => setHelpOpen(true)}
            title={zoo.hud.help}
            type="button"
          >
            <HelpCircle size={20} />
          </button>
        </div>

        {touchDevice ? (
          <div className="zoo-joystick" ref={joystickRef}>
            <div className="zoo-joystick-knob" ref={joystickKnobRef} />
          </div>
        ) : null}

        {tourActive ? (
          <p className="zoo-tour-banner">
            🤖 {zoo.hud.tour}
            {snapshot?.tourAnimalId
              ? ` · ${exhibits.find((exhibit) => exhibit.id === snapshot.tourAnimalId)?.name ?? ''}`
              : ''}
          </p>
        ) : null}

        {toast ? (
          <p className="zoo-toast" key={toast.key} role="status">
            {toast.text}
          </p>
        ) : null}
      </div>

      {notebookOpen ? (
        <div className="zoo-modal" role="dialog" aria-label={zoo.collection.title}>
          <div className="zoo-modal-box zoo-modal-box--wide">
            <header className="zoo-modal-head">
              <h2>{zoo.collection.title}</h2>
              <button
                aria-label={zoo.hud.close}
                className="zoo-round zoo-round--small"
                onClick={() => setNotebookOpen(false)}
                type="button"
              >
                <X size={18} />
              </button>
            </header>
            <p className="zoo-modal-hint">{zoo.collection.hint}</p>
            <div className="zoo-notebook-grid">
              {exhibits.map((exhibit) => (
                <button
                  className="zoo-notes"
                  data-met={discoveredSet.has(exhibit.id)}
                  key={exhibit.id}
                  onClick={() => {
                    gameRef.current?.travelTo(exhibit.id)
                    setNotebookOpen(false)
                  }}
                  type="button"
                >
                  <img alt="" loading="lazy" src={exhibit.thumbnail} />
                  <span className="zoo-notes-name">{exhibit.name}</span>
                  <span
                    className="zoo-notes-zone"
                    style={{ background: exhibit.accent }}
                  >
                    {exhibit.zoneName}
                  </span>
                  {discoveredSet.has(exhibit.id) ? (
                    <span className="zoo-notes-star" aria-hidden="true">
                      ★
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
            <footer className="zoo-modal-foot">
              <button
                className="zoo-button zoo-button--ghost"
                onClick={() => gameRef.current?.resetProgress()}
                type="button"
              >
                {zoo.collection.reset}
              </button>
            </footer>
          </div>
        </div>
      ) : null}

      {helpOpen ? (
        <div className="zoo-modal" role="dialog" aria-label={zoo.help.title}>
          <div className="zoo-modal-box">
            <header className="zoo-modal-head">
              <h2>{zoo.help.title}</h2>
              <button
                aria-label={zoo.hud.close}
                className="zoo-round zoo-round--small"
                onClick={() => setHelpOpen(false)}
                type="button"
              >
                <X size={18} />
              </button>
            </header>
            <ul className="zoo-help-list">
              {zoo.help.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <footer className="zoo-modal-foot">
              <button
                className="zoo-button"
                onClick={() => setHelpOpen(false)}
                type="button"
              >
                {zoo.help.close}
              </button>
            </footer>
          </div>
        </div>
      ) : null}

      {celebrateOpen ? (
        <div className="zoo-modal" role="dialog" aria-label={zoo.celebrate.title}>
          <div className="zoo-modal-box zoo-modal-box--centre">
            <h2 className="zoo-celebrate-title">{zoo.celebrate.title}</h2>
            <p>{zoo.celebrate.body}</p>
            <button
              className="zoo-button zoo-button--big"
              onClick={() => setCelebrateOpen(false)}
              type="button"
            >
              {zoo.celebrate.close}
            </button>
          </div>
        </div>
      ) : null}
    </main>
  )
}
