import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footprints, Lock } from 'lucide-react'

import { mainAnimals, allAnimals } from '../content/catalog'
import { draftAnimalsByZone } from '../content/collections/draft-zones'
import { zoneCategories } from '../content/collections/categories'
import type { ZoneCategoryId } from '../content/collections/categories'
import {
  modernAnimals,
  modernAnimalsByCategory,
  modernAnimalName,
} from '../content/modern-animals'
import type { Locale } from '../i18n/locale'
import { messagesFor } from '../i18n/messages'

/** Modern photo-only animals join the matching prehistoric zone sections. */
const modernCategoryByZone: Partial<
  Record<ZoneCategoryId, Parameters<typeof modernAnimalsByCategory>[0]>
> = {
  plains: 'grassland',
  forest: 'forest',
  ocean: 'ocean',
}

export const categoryPageZoneIds = [
  ...zoneCategories.map((zone) => zone.id),
  'sky',
] as const

export type CategoryPageZoneId = (typeof categoryPageZoneIds)[number]

// Draft 3D animals appear as unlocked exhibit cards. Animals that already
// exist as a modern placeholder card (e.g. tiger, owl) are unlocked in place
// instead, so they are not listed twice.
const modernAnimalIds = new Set(modernAnimals.map((animal) => animal.id))

const draftAnimals = [...draftAnimalsByZone.values()]
  .flat()
  .filter((animal) => !modernAnimalIds.has(animal.id))

/** Modern placeholder card becomes an unlocked link when a 3D exhibit exists. */
function modern3dAnimal(id: string) {
  return allAnimals.find((animal) => animal.id === id)
}

export function isCategoryPageZoneId(
  value: string,
): value is CategoryPageZoneId {
  return (categoryPageZoneIds as readonly string[]).includes(value)
}

function zoneTitle(locale: Locale, zone: CategoryPageZoneId): string {
  const messages = messagesFor(locale)
  return zone === 'sky'
    ? messages.modern.categories.sky
    : messages.zones[zone].name
}

export function categoryZoneTitle(locale: Locale, zone: CategoryPageZoneId) {
  const messages = messagesFor(locale)
  return `${zoneTitle(locale, zone)} | ${messages.collection.title}`
}

interface CategoryPageViewProps {
  readonly locale: Locale
  /** Zone to show exclusively, or null to show every category. */
  readonly zone: CategoryPageZoneId | null
}

export function CategoryPageView({ locale, zone }: CategoryPageViewProps) {
  if (zone !== null && !isCategoryPageZoneId(zone)) {
    notFound()
  }

  const messages = messagesFor(locale)
  const zones = zone === null ? [...categoryPageZoneIds] : [zone]
  const animalCount =
    mainAnimals.length +
    draftAnimals.length +
    modernAnimalsByCategory('sky').length

  return (
    <main className="category-page">
      <header className="category-hero">
        <div>
          <p className="category-hero__eyebrow">
            <Footprints aria-hidden="true" size={17} strokeWidth={2.2} />
            {messages.collection.friends(animalCount)}
          </p>
          <h1>{zone === null ? messages.collection.title : zoneTitle(locale, zone)}</h1>
          <p>{messages.collection.intro}</p>
        </div>
        <Link className="category-hero__back" href={`/${locale}`}>
          {messages.collection.back}
        </Link>
      </header>
      {zones.map((zoneId) => {
        const prehistoric =
          zoneId === 'sky'
            ? []
            : mainAnimals.filter((animal) =>
                zoneCategories
                  .find((zone) => zone.id === zoneId)!
                  .animalIds.includes(animal.id),
              )
        const modernCategory =
          zoneId === 'sky' ? 'sky' : modernCategoryByZone[zoneId]
        const modern = modernCategory
          ? modernAnimalsByCategory(modernCategory)
          : []
        const drafts = (draftAnimalsByZone.get(zoneId) ?? []).filter(
          (animal) => !modernAnimalIds.has(animal.id),
        )
        if (prehistoric.length === 0 && modern.length === 0 && drafts.length === 0) {
          return null
        }
        return (
          <section
            aria-labelledby={`zone-${zoneId}`}
            className="category-section"
            key={zoneId}
          >
            <div className="category-section__head">
              <h2 id={`zone-${zoneId}`}>{zoneTitle(locale, zoneId)}</h2>
              <p>
                {zoneId === 'sky'
                  ? messages.modern.intro
                  : messages.zones[zoneId].tagline}
              </p>
            </div>
            <div className="category-grid" role="list">
              {prehistoric.map((animal, index) => {
                const content = animal.content[locale]
                return (
                  <div key={animal.id} role="listitem">
                    <Link
                      aria-label={messages.collection.cardLabel(
                        content.name,
                        false,
                      )}
                      className="category-card"
                      href={`/${locale}/animal/${animal.id}`}
                    >
                      <span
                        aria-hidden="true"
                        className="category-card__number"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="category-card__image">
                        <img
                          alt=""
                          decoding="async"
                          loading="lazy"
                          src={animal.assets.thumbnail}
                        />
                      </span>
                      <span className="category-card__copy">
                        <strong>{content.name}</strong>
                        <small>{content.classificationLabel}</small>
                      </span>
                    </Link>
                  </div>
                )
              })}
              {drafts.map((animal, index) => {
                const content = animal.content[locale] ?? animal.content['zh-CN']
                if (!content) {
                  return null
                }
                return (
                  <div key={animal.id} role="listitem">
                    <Link
                      aria-label={messages.collection.cardLabel(
                        content.name,
                        false,
                      )}
                      className="category-card"
                      href={`/${locale}/animal/${animal.id}`}
                    >
                      <span
                        aria-hidden="true"
                        className="category-card__number"
                      >
                        {String(prehistoric.length + index + 1).padStart(2, '0')}
                      </span>
                      <span className="category-card__image">
                        <img
                          alt=""
                          decoding="async"
                          loading="lazy"
                          src={animal.assets.thumbnail ?? animal.assets.poster}
                        />
                      </span>
                      <span className="category-card__copy">
                        <strong>{content.name}</strong>
                        <small>{content.classificationLabel}</small>
                      </span>
                    </Link>
                  </div>
                )
              })}
              {modern.map((animal) => {
                const unlocked = modern3dAnimal(animal.id)
                if (unlocked) {
                  const content =
                    unlocked.content[locale] ?? unlocked.content['zh-CN']
                  if (content) {
                    return (
                      <div key={animal.id} role="listitem">
                        <Link
                          aria-label={messages.collection.cardLabel(
                            content.name,
                            false,
                          )}
                          className="category-card"
                          href={`/${locale}/animal/${animal.id}`}
                        >
                          <span
                            aria-hidden="true"
                            className="category-card__image"
                          >
                            <img
                              alt=""
                              decoding="async"
                              loading="lazy"
                              src={unlocked.assets.thumbnail}
                            />
                          </span>
                          <span className="category-card__copy">
                            <strong>{content.name}</strong>
                            <small>{content.classificationLabel}</small>
                          </span>
                        </Link>
                      </div>
                    )
                  }
                }
                return (
                <div
                  className="category-card category-card--static"
                  key={animal.id}
                  role="listitem"
                >
                  <span className="category-card__image category-card__image--locked">
                    <img
                      alt=""
                      decoding="async"
                      loading="lazy"
                      src={animal.thumbnail}
                    />
                    <span
                      aria-label={messages.modern.locked}
                      className="category-card__lock"
                      role="img"
                    >
                      <Lock aria-hidden="true" size={14} strokeWidth={2.4} />
                    </span>
                  </span>
                  <span className="category-card__copy">
                    <strong>{modernAnimalName(animal, locale)}</strong>
                    <small>{messages.modern.soon}</small>
                  </span>
                </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </main>
  )
}
