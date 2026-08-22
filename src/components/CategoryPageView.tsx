import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footprints } from 'lucide-react'

import { BackButton } from '@/src/components/buttons/BackButton'
import { mainAnimals } from '@/src/content/catalog'
import { draftAnimalsByZone } from '@/src/content/collections/draft-zones'
import { zoneCategories } from '@/src/content/collections/categories'
import type { Locale } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'

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

// Shared class strings keep the prehistoric and draft card variants identical.
const CARD_CLASS =
  'relative grid w-full min-h-[112px] grid-cols-[88px_minmax(0,1fr)] ' +
  'items-center gap-[12px] overflow-hidden rounded-[22px] border ' +
  'border-[rgb(46_72_58/13%)] bg-[#f5f0df] p-[10px] text-[var(--ink)] ' +
  'transition-[transform,border-color,background-color] duration-150 ' +
  'hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--animal-accent)_36%,transparent)] ' +
  'hover:bg-white max-[720px]:min-h-[92px] ' +
  'max-[720px]:grid-cols-[72px_minmax(0,1fr)]'
const CARD_IMAGE_CLASS =
  'block h-[88px] w-[88px] overflow-hidden rounded-2xl bg-[#ece7d5] ' +
  'max-[720px]:h-[72px] max-[720px]:w-[72px]'
const CARD_COPY_CLASS = 'grid min-w-0 gap-[3px] pr-[26px]'

export function CategoryPageView({ locale, zone }: CategoryPageViewProps) {
  if (zone !== null && !isCategoryPageZoneId(zone)) {
    notFound()
  }

  const messages = messagesFor(locale)
  const zones = zone === null ? [...categoryPageZoneIds] : [zone]
  const animalCount = mainAnimals.length + draftAnimals.length

  return (
    <main
      className="category-page mx-auto grid min-h-dvh w-[min(1080px,calc(100%-28px))] content-start gap-[18px] bg-[#fffdf7] pt-[max(28px,env(safe-area-inset-top))] pb-[max(40px,env(safe-area-inset-bottom))]"
      data-zone={zone ?? undefined}
    >
      <header className="relative flex flex-col items-center gap-[10px] rounded-[28px] border border-[rgb(255_255_255/72%)] px-[30px] pt-[20px] pb-[22px] text-center shadow-[0_18px_60px_rgb(18_32_25/18%)] max-[720px]:px-[20px] max-[720px]:pt-[24px] max-[720px]:pb-[14px]">
        <BackButton
          className="absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(46_72_58/18%)] bg-[#f5f0df] text-[var(--ink)] transition-[transform,border-color,background-color] duration-150 hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--animal-accent)_36%,transparent)] hover:bg-white"
          href={`/${locale}`}
          label={messages.collection.back}
        />
        <div>
          <p className="m-0 flex items-center justify-center gap-[7px] text-[0.76rem] font-[820] tracking-[0.08em] text-[var(--leaf)]">
            <Footprints aria-hidden="true" size={17} strokeWidth={2.2} />
            {messages.collection.friends(animalCount)}
          </p>
          <h1 className="mt-[3px] font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.08] text-[#214c3c]">
            {zone === null ? messages.collection.title : zoneTitle(locale, zone)}
          </h1>
          <p className="mt-2 text-[0.9rem] text-[var(--ink-muted)]">
            {messages.collection.intro}
          </p>
        </div>
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
            className="grid gap-[10px]"
            key={zoneId}
          >
            <div className="grid gap-[2px] px-[30px] max-[720px]:px-0">
              <h2
                id={`zone-${zoneId}`}
                className="m-0 flex items-center gap-[10px] font-display text-[clamp(1.3rem,2.6vw,1.7rem)] font-normal leading-[1.15] text-[#214c3c]"
              >
                <span>{zoneTitle(locale, zoneId)}</span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[rgb(46_72_58/14%)]"
                />
              </h2>
              <p className="m-0 text-[0.82rem] text-[var(--ink-muted)]">
                {messages.zones[zoneId].tagline}
              </p>
            </div>
            <div
              className="grid grid-cols-3 gap-[10px] px-[30px] max-[720px]:grid-cols-1 max-[720px]:px-0"
              role="list"
            >
              {prehistoric.map((animal, index) => {
                const content = animal.content[locale]
                return (
                  <div key={animal.id} role="listitem">
                    <Link
                      aria-label={messages.collection.cardLabel(
                        content.name,
                        false,
                      )}
                      className={CARD_CLASS}
                      href={`/${locale}/animal/${animal.id}`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-2 right-[9px] text-[0.64rem] font-[820] tracking-[0.08em] text-[rgb(39_70_56/38%)]"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={CARD_IMAGE_CLASS}>
                        <img
                          alt=""
                          className="block h-full w-full object-cover"
                          decoding="async"
                          loading="lazy"
                          src={animal.assets.thumbnail}
                        />
                      </span>
                      <span className={CARD_COPY_CLASS}>
                        <strong className="overflow-hidden text-base leading-[1.2] text-ellipsis whitespace-nowrap text-[var(--ink)]">
                          {content.name}
                        </strong>
                        <small className="overflow-hidden text-[0.72rem] text-ellipsis whitespace-nowrap text-[var(--ink-muted)]">
                          {content.classificationLabel}
                        </small>
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
                      className={CARD_CLASS}
                      href={`/${locale}/animal/${animal.id}`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-2 right-[9px] text-[0.64rem] font-[820] tracking-[0.08em] text-[rgb(39_70_56/38%)]"
                      >
                        {String(prehistoric.length + index + 1).padStart(2, '0')}
                      </span>
                      <span className={CARD_IMAGE_CLASS}>
                        <img
                          alt=""
                          className="block h-full w-full object-cover"
                          decoding="async"
                          loading="lazy"
                          src={animal.assets.thumbnail ?? animal.assets.poster}
                        />
                      </span>
                      <span className={CARD_COPY_CLASS}>
                        <strong className="overflow-hidden text-base leading-[1.2] text-ellipsis whitespace-nowrap text-[var(--ink)]">
                          {content.name}
                        </strong>
                        <small className="overflow-hidden text-[0.72rem] text-ellipsis whitespace-nowrap text-[var(--ink-muted)]">
                          {content.classificationLabel}
                        </small>
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
