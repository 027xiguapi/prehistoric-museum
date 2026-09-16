'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Footprints, Maximize2, Minimize2, X } from 'lucide-react'
import { useI18n } from '@/src/i18n/I18nProvider'

// Sticker-sheet vocabulary shared with the category browser and the document
// pages: warm paper fill, white die-cut rim, chunky offset shadow.
const SECTION_CLASS =
  'mx-auto grid w-[min(1080px,calc(100%-28px))] content-start gap-[14px] pb-[max(28px,env(safe-area-inset-bottom))]'
const HERO_CLASS =
  'relative flex flex-col items-center gap-[10px] rounded-[34px_40px_32px_42px/40px_32px_42px_34px] ' +
  'border-[3px] border-[#fffdf7] bg-[rgb(255_250_242/92%)] px-[30px] pt-[20px] pb-[22px] text-center ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)]'
const BADGE_CLASS =
  'm-0 inline-flex items-center rounded-full border-2 border-[#fffdf7] bg-[var(--leaf)] ' +
  'px-[13px] py-[5px] text-[0.76rem] font-[820] tracking-[0.08em] text-[#fffdf7] ' +
  'shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)]'
const HEADING_CLASS =
  'm-0 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-normal leading-[1.1] text-[#2e7d4f] ' +
  '[text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]'
const INTRO_CLASS =
  'm-0 max-w-[62ch] text-[0.9rem] leading-[1.6] text-[var(--ink-muted)]'
const HINTS_CLASS =
  'm-0 max-w-[62ch] text-[0.8rem] leading-[1.5] text-[var(--ink-muted)] opacity-85'
const FRAME_SHELL_CLASS =
  'relative aspect-[16/10] overflow-hidden rounded-[28px] border-[3px] border-[#fffdf7] bg-[#dff3ff] ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)] ' +
  'max-[720px]:aspect-[3/4] max-[720px]:min-h-[520px]'
// Expanded, the frame drops its aspect ratio and letterbox and simply fills
// whatever the screen leaves below the control bar.
const FRAME_EXPANDED_CLASS =
  'relative min-h-0 flex-1 overflow-hidden rounded-[18px] bg-[#dff3ff]'
const SCREEN_CLASS = 'grid gap-[10px]'
// The control bar sits inside the full-screen element, so it stays reachable
// to leave full screen or to close the park.
const SCREEN_EXPANDED_CLASS =
  'flex h-full w-full flex-col gap-[10px] bg-[#101c17] p-[12px]'
const CONTROLS_CLASS = 'flex flex-wrap items-center justify-end gap-[8px]'
const CONTROL_CLASS =
  'inline-flex min-h-[40px] cursor-pointer items-center gap-[7px] rounded-full border-2 border-[#fffdf7] ' +
  'bg-[rgb(255_250_242/94%)] px-[14px] text-[0.82rem] font-[800] text-[var(--ink)] ' +
  'shadow-[0_3px_0_rgb(60_90_60/12%),0_10px_22px_rgb(30_50_30/14%)] ' +
  'transition-transform duration-150 ease-out hover:-translate-y-[1px]'
const PLACEHOLDER_CLASS =
  'absolute inset-0 grid content-center place-items-center gap-[12px] text-center ' +
  'bg-[radial-gradient(circle_at_14%_16%,rgb(244_184_95/30%),transparent_36%),' +
  'radial-gradient(circle_at_86%_12%,rgb(125_183_218/34%),transparent_38%),' +
  'linear-gradient(160deg,#f8f1df_0%,#eef3dc_55%,#dfecd8_100%)]'
const OPEN_CLASS =
  'inline-flex min-h-[48px] items-center justify-center gap-[8px] rounded-full border-2 border-[#fffdf7] ' +
  'bg-[var(--leaf)] px-[22px] text-[0.9rem] font-[800] text-[#fffdf7] no-underline ' +
  'shadow-[inset_0_-3px_rgb(0_0_0/16%),0_6px_0_rgb(60_90_60/18%),0_14px_30px_rgb(30_50_30/18%)] ' +
  'transition-transform duration-150 ease-out hover:-translate-y-[1px]'

/**
 * The hero is exactly `100dvh`, so this section begins at the fold: a zero
 * margin already counts as intersecting there, which would put ~12 MiB of
 * exhibit models on the path of every visitor who only came for the map. A
 * small visible fraction asks for a real scroll first, and by the time the
 * section is properly on screen the park is usually already up.
 *
 * The poster is also a button, so a visitor who does want it now never has to
 * wait for a scroll.
 */
const MOUNT_VISIBLE_FRACTION = 0.02

/**
 * The walkable park, embedded in the homepage.
 *
 * The frame is deliberately not part of the hero's critical path: the park
 * boots a 320 m valley and streams exhibit models, so it is mounted once the
 * visitor scrolls to it or asks for it, and it is told to stop rendering
 * whenever it leaves the viewport. A poster panel holds its place until then,
 * so the page never shows a blank rectangle.
 *
 * The frame stays mounted while the visitor reads the rest of the page, but
 * the close control unmounts it, which is the only way to hand its WebGL
 * context and streamed models back to the device.
 */
export function ZooParkSection() {
  const { locale, messages } = useI18n()
  const zoo = messages.zoo
  const sectionRef = useRef<HTMLElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const posterRef = useRef<HTMLButtonElement>(null)
  const visibleRef = useRef(true)
  const expandedRef = useRef(false)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [closedOnce, setClosedOnce] = useState(false)

  // Mount the frame as the section approaches the viewport — but never again
  // after the visitor has closed the park on purpose, or the section is still
  // on screen and the observer would reopen it immediately.
  useEffect(() => {
    if (mounted || dismissed) {
      return
    }
    const node = sectionRef.current
    if (!node) {
      return
    }
    if (typeof IntersectionObserver === 'undefined') {
      const onScroll = (): void => {
        setMounted(true)
      }
      window.addEventListener('scroll', onScroll, { once: true, passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true)
        }
      },
      { threshold: MOUNT_VISIBLE_FRACTION },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
    }
  }, [dismissed, mounted])

  // Track whether the frame is actually on screen, so an off-screen game can
  // be paused rather than left rendering behind the rest of the page.
  useEffect(() => {
    const node = frameRef.current
    if (!mounted || !node || typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) {
          setVisible(entry.isIntersecting)
        }
      },
      { threshold: 0 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
    }
  }, [dismissed, mounted])

  /** Tells the frame the two facts it cannot work out for itself. */
  const postEmbedState = useCallback(
    (rendering: boolean, fullscreen: boolean) => {
      visibleRef.current = rendering
      expandedRef.current = fullscreen
      iframeRef.current?.contentWindow?.postMessage(
        { fullscreen, rendering, source: 'wonzoo-home', type: 'zoo:embed' },
        window.location.origin,
      )
    },
    [],
  )

  useEffect(() => {
    postEmbedState(visible, expanded)
  }, [expanded, mounted, postEmbedState, visible])

  // The park is not listening yet when the frame first loads, so repeat the
  // current state once its document is ready.
  const announce = useCallback((): void => {
    postEmbedState(visibleRef.current, expandedRef.current)
  }, [postEmbedState])

  // The browser owns full screen, so the only way to know the state is to ask.
  useEffect(() => {
    const onChange = (): void => {
      setExpanded(document.fullscreenElement === screenRef.current)
    }
    document.addEventListener('fullscreenchange', onChange)
    return () => {
      document.removeEventListener('fullscreenchange', onChange)
    }
  }, [])

  const toggleFullscreen = useCallback((): void => {
    const target = screenRef.current
    if (!target) {
      return
    }
    if (document.fullscreenElement) {
      void document.exitFullscreen()
      return
    }
    if (typeof target.requestFullscreen !== 'function') {
      // No element full screen here (older iOS Safari): the park's own page is
      // the only honest way to give it a whole screen.
      window.location.assign(`/${locale}/zoo/`)
      return
    }
    target.requestFullscreen().catch(() => {
      // The browser refused, usually for a missing user gesture. Leaving the
      // embed as it is beats navigating the visitor somewhere unexpected.
    })
  }, [locale])

  // A request from the park's own HUD button. It asks rather than acts,
  // because only the page that owns the frame can expand it.
  useEffect(() => {
    if (!mounted) {
      return
    }
    const onMessage = (event: MessageEvent): void => {
      if (event.source !== iframeRef.current?.contentWindow) {
        return
      }
      const data = event.data as { source?: unknown; type?: unknown } | null
      if (
        !data ||
        data.source !== 'wonzoo-park' ||
        data.type !== 'zoo:fullscreen'
      ) {
        return
      }
      toggleFullscreen()
    }
    window.addEventListener('message', onMessage)
    return () => {
      window.removeEventListener('message', onMessage)
    }
  }, [mounted, toggleFullscreen])

  const closePark = useCallback((): void => {
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    }
    setDismissed(true)
    setMounted(false)
    setClosedOnce(true)
    // Back to the default, so a reopened park is not told it is off screen.
    setVisible(true)
  }, [])

  // Closing hands the visitor back to the poster; send focus there too, or a
  // keyboard visitor is left with nothing.
  useEffect(() => {
    if (!mounted && closedOnce) {
      posterRef.current?.focus()
    }
  }, [closedOnce, mounted])

  return (
    <section
      aria-labelledby="zoo-park-heading"
      className={SECTION_CLASS}
      id="zoo-park"
      ref={sectionRef}
    >
      <header className={HERO_CLASS}>
        <p className={BADGE_CLASS}>{zoo.embed.badge}</p>
        <h2 className={HEADING_CLASS} id="zoo-park-heading">
          {zoo.title}
        </h2>
        <p className={INTRO_CLASS}>{zoo.embed.intro}</p>
        <p className={HINTS_CLASS}>{zoo.embed.controls}</p>
      </header>

      <div
        className={expanded ? SCREEN_EXPANDED_CLASS : SCREEN_CLASS}
        ref={screenRef}
      >
        {mounted ? (
          <div className={CONTROLS_CLASS}>
            <button
              aria-label={
                expanded ? zoo.embed.exitFullscreen : zoo.embed.fullscreen
              }
              className={CONTROL_CLASS}
              onClick={toggleFullscreen}
              title={expanded ? zoo.embed.exitFullscreen : zoo.embed.fullscreen}
              type="button"
            >
              {expanded ? (
                <Minimize2 aria-hidden="true" size={16} strokeWidth={2.4} />
              ) : (
                <Maximize2 aria-hidden="true" size={16} strokeWidth={2.4} />
              )}
              {expanded ? zoo.embed.exitFullscreen : zoo.embed.fullscreen}
            </button>
          </div>
        ) : null}

        <div
          className={expanded ? FRAME_EXPANDED_CLASS : FRAME_SHELL_CLASS}
          data-frame-expanded={expanded}
          data-frame-mounted={mounted}
          data-frame-visible={visible}
          ref={frameRef}
        >
          {mounted ? (
            <iframe
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
              onLoad={announce}
              ref={iframeRef}
              src={`/${locale}/zoo/?embed=1`}
              title={zoo.embed.frameTitle}
            />
          ) : (
            <button
              className={`${PLACEHOLDER_CLASS} cursor-pointer border-0 p-0 font-[inherit] text-[inherit]`}
              onClick={() => {
                setDismissed(false)
                setMounted(true)
              }}
              ref={posterRef}
              type="button"
            >
              <span className="grid h-[62px] w-[62px] place-items-center rounded-full border-2 border-[#fffdf7] bg-[var(--leaf)] text-[#fffdf7] shadow-[0_10px_22px_rgb(30_50_30/22%)]">
                <Footprints aria-hidden="true" size={28} strokeWidth={2} />
              </span>
              <span className="text-[0.92rem] font-[820] text-[var(--leaf)]">
                {zoo.embed.open}
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Link className={OPEN_CLASS} href={`/${locale}/zoo/`}>
          <Maximize2 aria-hidden="true" size={18} strokeWidth={2.2} />
          {zoo.embed.ownPage}
        </Link>
      </div>
    </section>
  )
}
