import {
  BookOpen,
  ChevronLeft,
  Eye,
  LayoutGrid,
  Leaf,
  Map as MapIcon,
  Pause,
  Volume2,
} from 'lucide-react'
import { useId, type RefObject } from 'react'
import { getNarrationControlLabel, type NarrationSnapshot } from '../audio'
import { ResponsiveAnimalTitle } from '../components/ResponsiveAnimalTitle'
import { StoryPanelToggle } from '../components/StoryPanelToggle'
import type { ZoneCategoryId } from '../content/collections/categories'
import { useI18n } from '../i18n/I18nProvider'
import { localReviewMode, type RuntimeAnimal } from './runtime-animal'
import { museumExhibitHref, type AppPageKind } from './routing'

interface StoryPanelProps {
  readonly activeAnimal: RuntimeAnimal
  readonly collectionTriggerRef: RefObject<HTMLElement | null>
  readonly detailCategoryId: ZoneCategoryId | null
  readonly drawerTriggerRef: RefObject<HTMLButtonElement | null>
  readonly narrationSnapshot: NarrationSnapshot
  readonly onCollapseStory: () => void
  readonly onExpandStory: () => void
  readonly onNarrationToggle: () => Promise<void>
  readonly onOpenCollection: () => void
  readonly onOpenDrawer: () => void
  readonly onReturnToMuseum: () => void
  readonly onReturnToZoneSelect: () => void
  readonly overlayOpen: boolean
  readonly pageKind: AppPageKind
  readonly storyCollapsed: boolean
}

export function StoryPanel({
  activeAnimal,
  collectionTriggerRef,
  detailCategoryId,
  drawerTriggerRef,
  narrationSnapshot,
  onCollapseStory,
  onExpandStory,
  onNarrationToggle,
  onOpenCollection,
  onOpenDrawer,
  onReturnToMuseum,
  onReturnToZoneSelect,
  overlayOpen,
  pageKind,
  storyCollapsed,
}: StoryPanelProps) {
  const { locale, messages } = useI18n()
  const narrationScriptId = useId()
  const narrationLabel = getNarrationControlLabel(
    narrationSnapshot,
    messages.narration,
  )
  const narrationVisibleLabel =
    narrationSnapshot.availability === 'available'
      ? narrationSnapshot.playback === 'playing'
        ? messages.narration.pauseShort
        : messages.narration.listenShort
      : messages.narration.unavailableShort

  if (storyCollapsed) {
    return (
      <StoryPanelToggle
        collapsed
        onCollapse={onCollapseStory}
        onExpand={onExpandStory}
        overlayOpen={overlayOpen}
      />
    )
  }

  return (
    <section aria-hidden={overlayOpen} className="story-panel" inert={overlayOpen}>
      <div className="story-card">
        <div className="museum-header relative">
          <StoryPanelToggle
            collapsed={false}
            onCollapse={onCollapseStory}
            onExpand={onExpandStory}
            overlayOpen={overlayOpen}
          />
          {pageKind === 'animal-detail' && detailCategoryId ? (
            <a
              aria-label={messages.returnToCategory}
              className="museum-back-link"
              href={`/${locale}/category/${detailCategoryId}/`}
            >
              <ChevronLeft aria-hidden="true" size={18} strokeWidth={2.4} />
              <span>{messages.returnToCategoryShort}</span>
            </a>
          ) : null}
          {pageKind === 'animal-detail' ? (
            <div className="museum-kicker">
              <span className="museum-mark" aria-hidden="true">
                <Leaf size={16} strokeWidth={2.3} />
              </span>
              <span>{messages.museumName}</span>
              {localReviewMode ? (
                <span className="review-mode-label">{messages.localReview}</span>
              ) : null}
            </div>
          ) : (
            <h1 className="museum-kicker">
              <span className="museum-mark" aria-hidden="true">
                <Leaf size={16} strokeWidth={2.3} />
              </span>
              <span>{messages.museumName}</span>
              {localReviewMode ? (
                <span className="review-mode-label">{messages.localReview}</span>
              ) : null}
            </h1>
          )}
        </div>
        <div className="title-lockup" key={`title-${activeAnimal.id}`}>
          <div className="animal-copy">
            <div className="animal-eyebrow">
              <span>{messages.todayMeet}</span>
              <span className="classification-chip">
                {activeAnimal.classification}
              </span>
              {localReviewMode && activeAnimal.review ? (
                <span
                  className="review-state-chip"
                  data-package-status={activeAnimal.review.packageStatus}
                >
                  {activeAnimal.review.displayLabel}
                </span>
              ) : null}
            </div>
            <ResponsiveAnimalTitle
              as={pageKind === 'animal-detail' ? 'h1' : 'h2'}
              locale={locale}
            >
              {activeAnimal.name}
            </ResponsiveAnimalTitle>
            <p className="child-intro">
              <Eye aria-hidden="true" size={21} strokeWidth={2.2} />
              <span>{activeAnimal.intro}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="story-actions">
        <div className="narration-control">
          <button
            aria-label={narrationLabel}
            aria-describedby={
              narrationSnapshot.availability === 'available'
                ? narrationScriptId
                : undefined
            }
            className="narration-button"
            data-playback={narrationSnapshot.playback}
            disabled={narrationSnapshot.availability !== 'available'}
            onClick={() => {
              void onNarrationToggle()
            }}
            type="button"
          >
            {narrationSnapshot.playback === 'playing' ? (
              <Pause aria-hidden="true" size={22} strokeWidth={2.25} />
            ) : (
              <Volume2 aria-hidden="true" size={22} strokeWidth={2.25} />
            )}
            <span>{narrationVisibleLabel}</span>
            {narrationSnapshot.playback === 'playing' ? (
              <span aria-hidden="true" className="narration-wave">
                <span />
                <span />
                <span />
                <span />
              </span>
            ) : null}
          </button>
          <span
            className="narration-script-popover"
            id={narrationScriptId}
            role="tooltip"
          >
            {activeAnimal.narrationScript.join(locale === 'zh-CN' ? '' : ' ')}
          </span>
        </div>
          <button
            aria-label={messages.parentInfo}
            className="parent-info-button"
            onClick={onOpenDrawer}
            ref={drawerTriggerRef}
            type="button"
        >
          <BookOpen aria-hidden="true" size={21} strokeWidth={2.1} />
          <span>{messages.parentInfoShort}</span>
        </button>
        {pageKind === 'animal-detail' ? (
          <a
            aria-label={messages.returnToMuseum}
            className="collection-open-button"
            data-museum-return=""
            href={museumExhibitHref()}
            onClick={(event) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              ) {
                return
              }
              event.preventDefault()
              onReturnToMuseum()
            }}
            ref={(element) => {
              collectionTriggerRef.current = element
            }}
          >
            <LayoutGrid aria-hidden="true" size={21} strokeWidth={2.1} />
            <span>{messages.returnToMuseumShort}</span>
          </a>
        ) : (
          <button
            aria-label={messages.openCollection}
            className="collection-open-button"
            onClick={onOpenCollection}
            ref={(element) => {
              collectionTriggerRef.current = element
            }}
            type="button"
          >
            <LayoutGrid aria-hidden="true" size={21} strokeWidth={2.1} />
            <span>{messages.collectionShort}</span>
          </button>
        )}
        {pageKind === 'museum' ? (
          <button
            aria-label={messages.zoneSelect.backToZones}
            className="zone-return-button"
            onClick={onReturnToZoneSelect}
            type="button"
          >
            <MapIcon aria-hidden="true" size={21} strokeWidth={2.1} />
            <span>{messages.zoneSelect.backToZonesShort}</span>
          </button>
        ) : null}
      </div>
    </section>
  )
}
