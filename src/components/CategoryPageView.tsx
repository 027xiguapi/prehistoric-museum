import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footprints } from 'lucide-react'

import { mainAnimals } from '../content/catalog'
import { draftAnimalsByZone } from '../content/collections/draft-zones'
import { zoneCategories } from '../content/collections/categories'
import type { Locale } from '../i18n/locale'
import { messagesFor } from '../i18n/messages'

export const categoryPageZoneIds = zoneCategories.map((zone) => zone.id)

export type CategoryPageZoneId = (typeof categoryPageZoneIds)[number]

// Draft 3D animals appear as unlocked exhibit cards. A draft in several
// zones is counted once here.
const draftAnimals = [
  ...new Map(
    [...draftAnimalsByZone.values()]
      .flat()
      .map((animal) => [animal.id, animal] as const),
  ).values(),
]

export function isCategoryPageZoneId(
  value: string,
): value is CategoryPageZoneId {
  return (categoryPageZoneIds as readonly string[]).includes(value)
}

function zoneTitle(locale: Locale, zone: CategoryPageZoneId): string {
  const messages = messagesFor(locale)
  return messages.zones[zone].name
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
  const animalCount = mainAnimals.length + draftAnimals.length

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
        const prehistoric = mainAnimals.filter((animal) =>
          zoneCategories
            .find((zone) => zone.id === zoneId)!
            .animalIds.includes(animal.id),
        )
        const drafts = draftAnimalsByZone.get(zoneId) ?? []
        if (prehistoric.length === 0 && drafts.length === 0) {
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
              <p>{messages.zones[zoneId].tagline}</p>
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
            </div>
          </section>
        )
      })}
    </main>
  )
}
