import { createPortal } from 'react-dom'
import { Eye, X } from 'lucide-react'
import { useEffect, useRef, type RefObject } from 'react'
import { IconButton } from '@/src/components/IconButton'
import { ResponsiveAnimalTitle } from '@/src/components/ResponsiveAnimalTitle'
import { useI18n } from '@/src/i18n/I18nProvider'
import { localReviewMode, type RuntimeAnimal } from '@/src/museum/runtime-animal'
import { type AppPageKind } from '@/src/museum/routing'

interface StoryPanelProps {
  readonly activeAnimal: RuntimeAnimal
  readonly isCompact: boolean
  readonly onClose: () => void
  readonly overlayOpen: boolean
  readonly pageKind: AppPageKind
  readonly returnFocusTo: RefObject<HTMLElement | null>
}

/**
 * Story panel rendered inline on wide screens and as a bottom sheet (portal +
 * backdrop) on compact screens, mirroring the parent drawer.
 */
export function StoryPanel({
  activeAnimal,
  isCompact,
  onClose,
  overlayOpen,
  pageKind,
  returnFocusTo,
}: StoryPanelProps) {
  const { locale, messages } = useI18n()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isCompact) {
      return
    }
    closeButtonRef.current?.focus()
    const returnTarget = returnFocusTo.current
    return () => {
      returnTarget?.focus()
    }
  }, [isCompact, returnFocusTo])

  const panel = (
    <section
      aria-modal={isCompact ? 'true' : undefined}
      className={`story-panel${isCompact ? ' story-panel--sheet' : ''}`}
      inert={overlayOpen}
      role={isCompact ? 'dialog' : undefined}
    >
      <div className="drawer-handle" aria-hidden="true" />
      <IconButton
        className="story-panel__close"
        hideTooltipOnFocus
        icon={X}
        label={messages.storyCollapse}
        onClick={onClose}
        ref={closeButtonRef}
      />
      <div className="story-card">
        <div className="museum-header relative">
          {pageKind === 'animal-detail' ? (
            <div className="museum-kicker">
              <span>{messages.museumName}</span>
              {localReviewMode ? (
                <span className="review-mode-label">{messages.localReview}</span>
              ) : null}
            </div>
          ) : (
            <h1 className="museum-kicker">
              <span>{messages.museumName}</span>
              {localReviewMode ? (
                <span className="review-mode-label">{messages.localReview}</span>
              ) : null}
            </h1>
          )}
        </div>
        <div className="drawer-scroll story-panel__scroll">
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
      </div>
    </section>
  )

  if (!isCompact) {
    return panel
  }

  return createPortal(
    <div className="drawer-layer">
      <div
        aria-hidden="true"
        className="drawer-backdrop"
        onMouseDown={(event) => {
          if (event.currentTarget === event.target) {
            onClose()
          }
        }}
      />
      {panel}
    </div>,
    document.body,
  )
}
