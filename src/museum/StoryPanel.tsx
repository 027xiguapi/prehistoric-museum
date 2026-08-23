import { Eye } from 'lucide-react'
import { ResponsiveAnimalTitle } from '@/src/components/ResponsiveAnimalTitle'
import { useI18n } from '@/src/i18n/I18nProvider'
import { localReviewMode, type RuntimeAnimal } from '@/src/museum/runtime-animal'
import { type AppPageKind } from '@/src/museum/routing'

interface StoryPanelProps {
  readonly activeAnimal: RuntimeAnimal
  readonly overlayOpen: boolean
  readonly pageKind: AppPageKind
}

/**
 * Standalone story card rendered inline in the exhibit grid. It is toggled by
 * the toolbar's info button and stays a plain card on every breakpoint (it is
 * not wrapped in a drawer/sheet).
 */
export function StoryPanel({
  activeAnimal,
  overlayOpen,
  pageKind,
}: StoryPanelProps) {
  const { locale, messages } = useI18n()

  return (
    <section aria-hidden={overlayOpen} className="story-panel" inert={overlayOpen}>
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
    </section>
  )
}
