import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState, type RefObject } from 'react'
import { IconButton } from '../components/IconButton'
import { staticAnimalDetailIds } from '../content/static-animal-details'
import { useI18n } from '../i18n/I18nProvider'
import type { AnimalLoadSnapshot } from '../state'
import { localReviewMode, type RuntimeAnimal } from './runtime-animal'
import { animalDetailHref, type AppPageKind } from './routing'
import type { ModelLoadingProgress } from './types'

const staticAnimalDetailIdSet = new Set<string>(staticAnimalDetailIds)

function RailThumbnail({
  priority,
  rootRef,
  src,
}: {
  readonly priority: boolean
  readonly rootRef: RefObject<HTMLDivElement | null>
  readonly src: string
}) {
  const imageRef = useRef<HTMLImageElement>(null)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const loadImage = priority || shouldLoad

  useEffect(() => {
    if (loadImage) {
      return
    }
    const image = imageRef.current
    const root = rootRef.current
    if (!image || !root || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        root,
        rootMargin: '0px 180px',
        threshold: 0.01,
      },
    )
    observer.observe(image)
    return () => {
      observer.disconnect()
    }
  }, [loadImage, rootRef])

  return (
    <img
      alt=""
      decoding="async"
      fetchPriority="low"
      loading="lazy"
      ref={imageRef}
      src={loadImage ? src : undefined}
    />
  )
}

interface AnimalNavigationProps {
  readonly activeAnimalId: string
  readonly initialLoading: boolean
  readonly loadingPercent: number | null
  readonly loadingPhase: ModelLoadingProgress['phase'] | null
  readonly loadSnapshot: AnimalLoadSnapshot
  readonly navigationAnimals: readonly RuntimeAnimal[]
  readonly onRequestAnimal: (animalId: string) => void
  readonly onRetryAnimal: () => void
  readonly onStepAnimal: (offset: -1 | 1) => void
  readonly overlayOpen: boolean
  readonly pageKind: AppPageKind
  readonly rootFallback: boolean
}

export function AnimalNavigation({
  activeAnimalId,
  initialLoading,
  loadingPercent,
  loadingPhase,
  loadSnapshot,
  navigationAnimals,
  onRequestAnimal,
  onRetryAnimal,
  onStepAnimal,
  overlayOpen,
  pageKind,
  rootFallback,
}: AnimalNavigationProps) {
  const { locale, messages } = useI18n()
  const railRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const followRequestedAnimal =
      loadSnapshot.phase === 'loading' || loadSnapshot.phase === 'failed'
    const railAnimalId =
      followRequestedAnimal
        ? loadSnapshot.requestedAnimalId
        : loadSnapshot.readyAnimalId
    if (!railAnimalId) {
      return
    }
    const selectedCard = railRef.current?.querySelector<HTMLElement>(
      `[data-animal-id="${railAnimalId}"]`,
    )
    selectedCard?.scrollIntoView?.({
      behavior:
        followRequestedAnimal ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [
    loadSnapshot.phase,
    loadSnapshot.readyAnimalId,
    loadSnapshot.requestedAnimalId,
  ])

  return (
    <section
      aria-hidden={overlayOpen}
      aria-label={
        localReviewMode
          ? messages.reviewNavigationLabel
          : messages.navigationLabel
      }
      className={`animal-navigation ${
        navigationAnimals.length === 1 ? 'animal-navigation--single' : ''
      }`}
      data-animal-count={navigationAnimals.length}
      inert={overlayOpen}
    >
      <IconButton
        className="animal-step animal-step--previous"
        icon={ChevronLeft}
        label={messages.previousAnimal}
        onClick={() => onStepAnimal(-1)}
      />
      <div className="animal-rail" ref={railRef} role="list">
        {navigationAnimals.map((animal) => {
          const loading =
            loadSnapshot.phase === 'loading' &&
            loadSnapshot.requestedAnimalId === animal.id
          const failed =
            loadSnapshot.phase === 'failed' &&
            loadSnapshot.requestedAnimalId === animal.id
          const selected = loadSnapshot.readyAnimalId === animal.id
          const activateAnimal = () => {
            if (failed) {
              onRetryAnimal()
            } else {
              onRequestAnimal(animal.id)
            }
          }
          const cardAttributes = {
            'aria-current': selected ? ('true' as const) : undefined,
            'aria-label': messages.viewAnimal(
              animal.name,
              localReviewMode && animal.review
                ? animal.review.displayLabel
                : '',
              failed,
            ),
            className: 'animal-card',
            'data-animal-id': animal.id,
            'data-failed': failed,
            'data-loading': loading,
            'data-selected': selected,
          }
          const cardContents = (
            <>
              <span className="thumbnail-frame">
                <RailThumbnail
                  priority={
                    animal.id === activeAnimalId ||
                    animal.id === loadSnapshot.requestedAnimalId
                  }
                  rootRef={railRef}
                  src={animal.assets.thumbnail}
                />
                {localReviewMode && animal.review ? (
                  <span
                    aria-hidden="true"
                    className="review-thumbnail-badge"
                    data-package-status={animal.review.packageStatus}
                  >
                    {animal.review.stateLabel}
                  </span>
                ) : null}
                {loading ? (
                  <span aria-hidden="true" className="loading-orbit" />
                ) : null}
              </span>
              <strong>{animal.name}</strong>
              {loading &&
              !initialLoading &&
              loadSnapshot.showDelayedLabel ? (
                <span className="card-status">
                  {loadingPhase === 'preparing'
                    ? messages.loading.opening
                    : loadingPercent === null
                      ? messages.loading.inviting
                      : messages.loading.downloading(loadingPercent)}
                </span>
              ) : null}
              {failed ? (
                <span className="card-status">{messages.loading.retry}</span>
              ) : null}
              {!failed &&
              (!loading || !loadSnapshot.showDelayedLabel) &&
              localReviewMode &&
              animal.review ? (
                <span className="card-review-status">
                  {messages.localReview}
                </span>
              ) : null}
            </>
          )
          const detailHref = staticAnimalDetailIdSet.has(animal.id)
            ? animalDetailHref(
                locale,
                animal.id,
                rootFallback,
                pageKind,
              )
            : null
          return (
            <div className="animal-card-slot" key={animal.id} role="listitem">
              {detailHref ? (
                <a
                  {...cardAttributes}
                  data-animal-detail-link=""
                  href={detailHref}
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
                    activateAnimal()
                  }}
                >
                  {cardContents}
                </a>
              ) : (
                <button
                  {...cardAttributes}
                  onClick={activateAnimal}
                  type="button"
                >
                  {cardContents}
                </button>
              )}
            </div>
          )
        })}
      </div>
      <IconButton
        className="animal-step animal-step--next"
        icon={ChevronRight}
        label={messages.nextAnimal}
        onClick={() => onStepAnimal(1)}
      />
    </section>
  )
}
