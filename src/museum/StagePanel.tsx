import { Maximize2, Minimize2, RotateCcw } from 'lucide-react'
import type {
  CSSProperties,
  PointerEvent as ReactPointerEvent,
  RefObject,
} from 'react'
import { CareDock } from '@/src/components/CareDock'
import { IconButton } from '@/src/components/IconButton'
import { LanguageMenu } from '@/src/components/LanguageMenu'
import {
  StagePlayEffect,
  type CarePlayKind,
} from '@/src/components/StagePlayEffect'
import { ViewerStage } from '@/src/components/ViewerStage'
import { useI18n } from '@/src/i18n/I18nProvider'
import type { ModelCache } from '@/src/viewer/model-cache'
import type {
  ViewerController,
  ViewerFailure,
} from '@/src/viewer/ViewerController'
import type { RuntimeAnimal } from '@/src/museum/runtime-animal'
import type { ModelLoadingProgress } from '@/src/museum/types'

// 先隐藏：暂时关闭舞台右侧的互动 dock（喂食/洗澡/走一走/摇摇头/打球）。
// 恢复时把该值改回 true 即可。
const SHOW_CARE_DOCK = false

// 先隐藏：暂时关闭舞台头部的操作按钮（语言切换/恢复视角/专注/AR）。
// 恢复时把该值改回 true 即可。
const SHOW_STAGE_ACTIONS = false

/** "AR" text glyph used in place of a lucide icon on the AR button. */
function ArGlyph({
  size = 25,
  style,
}: {
  size?: number
  style?: CSSProperties
}) {
  return (
    <span
      aria-hidden="true"
      className="ar-glyph"
      style={{ fontSize: `${Math.round(size * 0.62)}px`, ...style }}
    >
      AR
    </span>
  )
}

interface StagePanelProps {
  readonly activeAnimal: RuntimeAnimal
  readonly carePlay: CarePlayKind | null
  readonly failureMessage: string | null
  readonly focusExitRef: RefObject<HTMLButtonElement | null>
  readonly focusMode: boolean
  readonly focusTriggerRef: RefObject<HTMLButtonElement | null>
  readonly initialLoading: boolean
  readonly loadingPercent: number | null
  readonly loadingPhase: ModelLoadingProgress['phase'] | null
  readonly modelCache: ModelCache
  readonly modelReady: boolean
  readonly onCarePlayDone: () => void
  readonly onCareShake: () => void
  readonly onCareWalk: () => void
  readonly onControllerReady: (controller: ViewerController | null) => void
  readonly onEnterFocusMode: () => void
  readonly onExitFocusMode: () => void
  readonly onFeedPick: (kind: 'meat' | 'leaf') => void
  readonly onFirstFrameRendered: (animalId: string) => void
  readonly onFocusPointerCancel: () => void
  readonly onFocusPointerDown: (event: ReactPointerEvent<HTMLElement>) => void
  readonly onFocusPointerUp: (event: ReactPointerEvent<HTMLElement>) => void
  readonly onOpenAr: () => void
  readonly onPlay: (kind: CarePlayKind) => void
  readonly onResetView: () => void
  readonly onRetry: () => void
  readonly onViewerFailure: (failure: ViewerFailure) => void
  readonly overlayOpen: boolean
  readonly viewerRetryKey: number
}

export function StagePanel({
  activeAnimal,
  carePlay,
  failureMessage,
  focusExitRef,
  focusMode,
  focusTriggerRef,
  initialLoading,
  loadingPercent,
  loadingPhase,
  modelCache,
  modelReady,
  onCarePlayDone,
  onCareShake,
  onCareWalk,
  onControllerReady,
  onEnterFocusMode,
  onExitFocusMode,
  onFeedPick,
  onFirstFrameRendered,
  onFocusPointerCancel,
  onFocusPointerDown,
  onFocusPointerUp,
  onOpenAr,
  onPlay,
  onResetView,
  onRetry,
  onViewerFailure,
  overlayOpen,
  viewerRetryKey,
}: StagePanelProps) {
  const { messages } = useI18n()
  return (
    <section
      aria-hidden={overlayOpen && !focusMode}
      aria-label={messages.stageLabel(activeAnimal.name)}
      className="stage-panel"
      data-testid="model-stage"
      inert={overlayOpen && !focusMode}
      onPointerCancel={onFocusPointerCancel}
      onPointerDownCapture={onFocusPointerDown}
      onPointerUpCapture={onFocusPointerUp}
    >
      <ViewerStage
        animalId={activeAnimal.id}
        failureMessage={failureMessage}
        initialLoading={initialLoading}
        key={`viewer-${viewerRetryKey}`}
        label={activeAnimal.name}
        loadingPhase={loadingPhase}
        loadingPercent={loadingPercent}
        modelCache={modelCache}
        modelReady={modelReady}
        onControllerReady={onControllerReady}
        onFirstFrameRendered={onFirstFrameRendered}
        onRetry={onRetry}
        onViewerFailure={onViewerFailure}
        posterUrl={activeAnimal.assets.poster}
        posterPortraitUrl={activeAnimal.assets.posterPortrait}
      />
      {carePlay ? (
        <StagePlayEffect kind={carePlay} onDone={onCarePlayDone} />
      ) : null}
      {SHOW_CARE_DOCK && !focusMode ? (
        <CareDock
          dietCode={activeAnimal.dietCode}
          disabled={!modelReady}
          onFeedPick={onFeedPick}
          onPlay={onPlay}
          onShake={onCareShake}
          onWalk={onCareWalk}
          overlayOpen={overlayOpen}
        />
      ) : null}
      {!focusMode ? (
        SHOW_STAGE_ACTIONS ? (
          <div aria-hidden={overlayOpen} className="stage-actions" inert={overlayOpen}>
            <LanguageMenu />
            <IconButton
              icon={RotateCcw}
              label={messages.resetView}
              onClick={onResetView}
            />
            <IconButton
              disabled={!modelReady}
              icon={Maximize2}
              hideTooltipOnFocus
              label={messages.focusView}
              onClick={onEnterFocusMode}
              ref={focusTriggerRef}
            />
            <IconButton
              disabled={!modelReady}
              icon={ArGlyph}
              label={messages.ar.open}
              onClick={onOpenAr}
            />
          </div>
        ) : null
      ) : (
        <>
          <p aria-hidden="true" className="focus-return-hint">
            {messages.focusReturnHint}
          </p>
          <div className="focus-actions">
            <LanguageMenu />
            <IconButton
              className="focus-exit"
              hideTooltipOnFocus
              icon={Minimize2}
              label={messages.exitFocus}
              onClick={onExitFocusMode}
              ref={focusExitRef}
            />
          </div>
        </>
      )}
    </section>
  )
}
