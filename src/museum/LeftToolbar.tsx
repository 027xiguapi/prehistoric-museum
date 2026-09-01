import {
  BookOpen,
  Info,
  LayoutGrid,
  Pause,
  RotateCcw,
  Ruler,
  Scale,
  Volume2,
} from 'lucide-react'
import type { RefObject } from 'react'
import { getNarrationControlLabel, type NarrationSnapshot } from '@/src/audio'
import { IconButton } from '@/src/components/IconButton'
import { useI18n } from '@/src/i18n/I18nProvider'
import type { RuntimeAnimal } from '@/src/museum/runtime-animal'
import { type AppPageKind } from '@/src/museum/routing'
import { StoryPanel } from '@/src/museum/StoryPanel'

interface LeftToolbarProps {
  readonly activeAnimal: RuntimeAnimal
  readonly collectionTriggerRef: RefObject<HTMLElement | null>
  readonly drawerTriggerRef: RefObject<HTMLButtonElement | null>
  readonly heightTriggerRef: RefObject<HTMLButtonElement | null>
  readonly narrationSnapshot: NarrationSnapshot
  readonly onNarrationToggle: () => Promise<void>
  readonly onOpenCollection: () => void
  readonly onOpenDrawer: () => void
  readonly onOpenHeight: () => void
  readonly onOpenWeight: () => void
  readonly onResetView: () => void
  readonly onToggleStory: () => void
  readonly overlayOpen: boolean
  readonly pageKind: AppPageKind
  readonly storyOpen: boolean
  readonly weightTriggerRef: RefObject<HTMLButtonElement | null>
}

export function LeftToolbar({
  activeAnimal,
  collectionTriggerRef,
  drawerTriggerRef,
  heightTriggerRef,
  narrationSnapshot,
  onNarrationToggle,
  onOpenCollection,
  onOpenDrawer,
  onOpenHeight,
  onOpenWeight,
  onResetView,
  onToggleStory,
  overlayOpen,
  pageKind,
  storyOpen,
  weightTriggerRef,
}: LeftToolbarProps) {
  const { messages } = useI18n()
  const narrationPlaying = narrationSnapshot.playback === 'playing'
  const narrationAvailable = narrationSnapshot.availability === 'available'
  const narrationLabel = getNarrationControlLabel(
    narrationSnapshot,
    messages.narration,
  )

  return (
    <>
      <nav
        aria-hidden={overlayOpen}
        aria-label={messages.toolbar.label}
        className="left-toolbar"
        inert={overlayOpen}
      >
        <IconButton
          icon={RotateCcw}
          label={messages.toolbar.reset}
          onClick={onResetView}
        />
        <IconButton
          disabled={!narrationAvailable}
          icon={narrationPlaying ? Pause : Volume2}
          label={narrationLabel}
          onClick={() => {
            void onNarrationToggle()
          }}
        />
        <IconButton
          aria-expanded={storyOpen}
          icon={Info}
          label={storyOpen ? messages.storyCollapse : messages.storyExpand}
          onClick={onToggleStory}
        />
        <IconButton
          icon={BookOpen}
          label={messages.toolbar.info}
          onClick={onOpenDrawer}
          ref={drawerTriggerRef}
        />
        <IconButton
          icon={LayoutGrid}
          label={messages.toolbar.collection}
          onClick={onOpenCollection}
          ref={(element) => {
            collectionTriggerRef.current = element
          }}
        />
        <IconButton
          icon={Ruler}
          label={`${messages.toolbar.height}：${activeAnimal.facts.sizeLabel} ${activeAnimal.facts.size}`}
          onClick={onOpenHeight}
          ref={heightTriggerRef}
        />
        <IconButton
          icon={Scale}
          label={`${messages.toolbar.weight}：${activeAnimal.facts.weight ?? messages.toolbar.weightUnavailable}`}
          onClick={onOpenWeight}
          ref={weightTriggerRef}
        />
      </nav>
      {storyOpen ? (
        <StoryPanel
          activeAnimal={activeAnimal}
          overlayOpen={overlayOpen}
          pageKind={pageKind}
        />
      ) : null}
    </>
  )
}
