import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Footprints } from 'lucide-react'

import { BackButton } from '@/src/components/buttons/BackButton'
import { mainAnimals } from '@/src/content/catalog'
import { draftAnimalsByZone } from '@/src/content/collections/draft-zones'
import { zoneCategories } from '@/src/content/collections/categories'
import type {
  AnimalContent,
  AnimalPackage,
} from '@/src/content/types'
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

// Per-zone accent, mirroring the homepage map piece colours; drives the
// count pill, the index badges, the go arrows and the card hover rim. The
// values are full arbitrary-property classes so Tailwind picks them up.
const ZONE_ACCENT_CLASS: Readonly<Record<CategoryPageZoneId | 'all', string>> =
  {
    all: '[--zone-accent:#356859]',
    dinosaur: '[--zone-accent:#a85f16]',
    forest: '[--zone-accent:#1e7a4a]',
    ice: '[--zone-accent:#3d7ea6]',
    insect: '[--zone-accent:#a97b12]',
    ocean: '[--zone-accent:#2073bd]',
    plains: '[--zone-accent:#4c8a30]',
    sky: '[--zone-accent:#3d8bd9]',
  }

// Sticker-sheet header: white die-cut rim, hand-drawn radius and the chunky
// offset shadow used by the park-map signs on the homepage. On mobile the
// panel tips playfully.
const HERO_CLASS =
  'relative flex flex-col items-center gap-[12px] rounded-[34px_40px_32px_42px/40px_32px_42px_34px] ' +
  'border-[3px] border-[#fffdf7] bg-[rgb(255_250_242/92%)] px-[30px] pt-[20px] pb-[22px] text-center ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)] ' +
  'max-[720px]:rotate-[-0.4deg] max-[720px]:rounded-[30px_36px_28px_38px/36px_28px_38px_30px] ' +
  'max-[720px]:px-[20px] max-[720px]:pt-[26px] max-[720px]:pb-[18px]'
const BACK_CLASS =
  'absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full ' +
  'border-[2.5px] border-[#fffdf7] bg-[#fffaf2] text-[#28493a] ' +
  'shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)] ' +
  'transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[2px] hover:rotate-[-5deg] ' +
  'active:translate-y-[2px] active:shadow-[0_1px_0_rgb(60_90_60/16%),0_4px_10px_rgb(30_50_30/14%)] ' +
  'max-[720px]:h-11 max-[720px]:w-11'
// Friend-count badge, shaped like the pills on the homepage map signs.
const COUNT_CLASS =
  'm-0 inline-flex items-center gap-[7px] rounded-full border-2 border-[#fffdf7] ' +
  'bg-[var(--zone-accent)] px-[13px] py-[5px] text-[0.76rem] font-[820] tracking-[0.08em] ' +
  'text-[#fffdf7] shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)]'
const TITLE_CLASS =
  'mt-[10px] font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.08] text-[#2e7d4f] ' +
  '[text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]'

// Q-cute mobile trail: cards alternate a gentle wobble on hand-cut
// silhouettes. The tilt lives on the frame so it composes with the card's
// own hover / press transforms.
const CARD_FRAME_CLASS =
  'transition-[rotate] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'max-[720px]:odd:rotate-[-0.7deg] max-[720px]:odd:rounded-[28px_34px_26px_34px/32px_26px_34px_28px] ' +
  'max-[720px]:even:rotate-[0.7deg] max-[720px]:even:rounded-[34px_26px_34px_28px/26px_34px_28px_32px] ' +
  'max-[720px]:hover:rotate-0'
// Die-cut sticker card: white rim, warm paper fill, chunky bottom edge and a
// springy press so it feels like a toy.
const CARD_CLASS =
  'group relative grid min-h-[112px] w-full grid-cols-[88px_minmax(0,1fr)] items-center gap-[12px] ' +
  'overflow-hidden rounded-[26px] border-[3px] border-[#fffdf7] bg-[#fffaf2] p-[10px] ' +
  'text-[var(--ink)] shadow-[0_4px_0_rgb(60_90_60/10%),0_14px_30px_rgb(30_50_30/10%)] ' +
  'transition-[transform,border-color,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,var(--zone-accent)_48%,#fffdf7)] ' +
  'hover:shadow-[0_7px_0_rgb(60_90_60/12%),0_22px_40px_rgb(30_50_30/16%)] ' +
  'active:translate-y-[2px] active:scale-[0.98] ' +
  'active:shadow-[0_1px_0_rgb(60_90_60/12%),0_8px_18px_rgb(30_50_30/12%)] ' +
  'max-[720px]:min-h-[108px] max-[720px]:grid-cols-[84px_minmax(0,1fr)_auto] max-[720px]:gap-[13px] ' +
  'max-[720px]:rounded-[inherit] max-[720px]:p-[12px] max-[720px]:hover:scale-[1.01] ' +
  'max-[720px]:active:translate-y-[3px] max-[720px]:active:scale-[0.96]'
const CARD_IMAGE_CLASS =
  'block h-[88px] w-[88px] overflow-hidden rounded-[20px] border-[3px] border-[#fffdf7] ' +
  'bg-[#ece7d5] shadow-[0_3px_8px_rgb(30_50_30/14%)] ' +
  'max-[720px]:h-[84px] max-[720px]:w-[84px] max-[720px]:rounded-[22px]'
const CARD_INDEX_CLASS =
  'absolute top-2 right-[9px] grid h-[25px] min-w-[25px] place-items-center rounded-full ' +
  'border-2 border-[#fffdf7] bg-[var(--zone-accent)] px-[7px] text-[0.64rem] font-[820] ' +
  'tracking-[0.05em] text-[#fffdf7] shadow-[0_2px_0_rgb(60_90_60/18%)]'
const CARD_COPY_CLASS = 'grid min-w-0 gap-[3px] pr-[26px] max-[720px]:gap-1 max-[720px]:pr-0'
const CARD_NAME_CLASS =
  'overflow-hidden text-base font-bold leading-[1.2] text-ellipsis whitespace-nowrap ' +
  'text-[var(--ink)] max-[720px]:text-[1.08rem] max-[720px]:font-extrabold'
const CARD_META_CLASS =
  'overflow-hidden text-[0.72rem] text-ellipsis whitespace-nowrap text-[var(--ink-muted)] ' +
  'max-[720px]:text-[0.78rem]'
// Chunky "go" arrow — the tap affordance for small hands. Hidden on wide
// layouts where the whole-row hover already communicates the link.
const CARD_GO_CLASS =
  'mr-[2px] hidden h-[42px] w-[42px] place-items-center rounded-full border-[2.5px] ' +
  'border-[#fffdf7] bg-[var(--zone-accent)] text-[#fffdf7] ' +
  'shadow-[inset_0_-3px_rgb(0_0_0/16%),0_3px_0_rgb(60_90_60/18%)] ' +
  'group-active:shadow-[inset_0_-1px_rgb(0_0_0/16%),0_1px_0_rgb(60_90_60/18%)] ' +
  'max-[720px]:grid'

interface CategoryCardProps {
  readonly classificationLabel: string
  readonly href: string
  readonly index: number
  readonly label: string
  readonly name: string
  readonly thumbnail: string | undefined
}

/**
 * Resolves the display content for a package, falling back from zh-TW to the
 * zh-CN copy and from ja to the English copy (packages ship zh-CN/en only),
 * then from a draft's missing locale to its zh-CN draft text.
 */
function animalContentFor(
  animal: AnimalPackage,
  locale: Locale,
): AnimalContent | undefined {
  const contentLocale =
    locale === 'zh-TW' ? 'zh-CN' : locale === 'ja' ? 'en' : locale
  return (
    animal.content[contentLocale] ?? animal.content['zh-CN']
  )
}

// Shared sticker card keeps the prehistoric and draft variants identical.
function CategoryCard({
  classificationLabel,
  href,
  index,
  label,
  name,
  thumbnail,
}: CategoryCardProps) {
  return (
    <div className={CARD_FRAME_CLASS} role="listitem">
      <Link aria-label={label} className={CARD_CLASS} href={href}>
        <span aria-hidden="true" className={CARD_INDEX_CLASS}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={CARD_IMAGE_CLASS}>
          <img
            alt=""
            className="block h-full w-full object-cover"
            decoding="async"
            loading="lazy"
            src={thumbnail}
          />
        </span>
        <span className={CARD_COPY_CLASS}>
          <strong className={CARD_NAME_CLASS}>{name}</strong>
          <small className={CARD_META_CLASS}>{classificationLabel}</small>
        </span>
        <span aria-hidden="true" className={CARD_GO_CLASS}>
          <ChevronRight size={22} strokeWidth={2.8} />
        </span>
      </Link>
    </div>
  )
}

export function CategoryPageView({ locale, zone }: CategoryPageViewProps) {
  if (zone !== null && !isCategoryPageZoneId(zone)) {
    notFound()
  }

  const messages = messagesFor(locale)
  const zones = zone === null ? [...categoryPageZoneIds] : [zone]
  const animalCount = mainAnimals.length + draftAnimals.length

  return (
    <main
      className={`category-page ${ZONE_ACCENT_CLASS[zone ?? 'all']} mx-auto grid min-h-dvh w-[min(1080px,calc(100%-28px))] content-start gap-[18px] pt-[max(28px,env(safe-area-inset-top))] pb-[max(40px,env(safe-area-inset-bottom))]`}
      data-zone={zone ?? undefined}
    >
      <header className={HERO_CLASS}>
        <BackButton
          className={BACK_CLASS}
          href={`/${locale}`}
          label={messages.collection.back}
        />
        <div>
          <p className={COUNT_CLASS}>
            <Footprints aria-hidden="true" size={16} strokeWidth={2.4} />
            {zone === null
              ? messages.collection.friends(animalCount)
              : messages.collection.zoneFriends(
                  animalCount,
                  zoneTitle(locale, zone),
                )}
          </p>
          <h1 className={TITLE_CLASS}>
            {zone === null ? messages.collection.title : zoneTitle(locale, zone)}
          </h1>
          <p className="mt-2 text-[0.9rem] text-[var(--ink-muted)]">
            {messages.collection.intro}
          </p>
        </div>
      </header>
      {zones.map((zoneId) => {
        const zoneAnimalIds =
          zoneCategories.find((zone) => zone.id === zoneId)?.animalIds ?? []
        const prehistoric = mainAnimals.filter((animal) =>
          zoneAnimalIds.includes(animal.id),
        )
        const drafts = draftAnimalsByZone.get(zoneId) ?? []
        if (prehistoric.length === 0 && drafts.length === 0) {
          return null
        }
        return (
          <section
            aria-labelledby={`zone-${zoneId}`}
            className="grid gap-[12px]"
            key={zoneId}
          >
            <div className="grid gap-[2px] px-[30px] max-[720px]:px-[6px]">
              <h2
                id={`zone-${zoneId}`}
                className="m-0 flex items-center gap-[10px] font-display text-[clamp(1.3rem,2.6vw,1.7rem)] font-normal leading-[1.15] text-[#214c3c]"
              >
                <span>{zoneTitle(locale, zoneId)}</span>
                <span
                  aria-hidden="true"
                  className="h-[4px] flex-1 rounded-full bg-[color-mix(in_srgb,var(--zone-accent)_30%,transparent)]"
                />
              </h2>
              <p className="m-0 text-[0.82rem] text-[var(--ink-muted)]">
                {messages.zones[zoneId].tagline}
              </p>
            </div>
            <div
              className="grid grid-cols-3 gap-[12px] px-[30px] max-[720px]:grid-cols-1 max-[720px]:gap-[14px] max-[720px]:px-[2px]"
              role="list"
            >
              {prehistoric.map((animal, index) => {
                const content = animalContentFor(animal, locale)
                if (!content) {
                  return null
                }
                return (
                  <CategoryCard
                    key={animal.id}
                    classificationLabel={content.classificationLabel}
                    href={`/${locale}/animal/${animal.id}`}
                    index={index}
                    label={messages.collection.cardLabel(content.name, false)}
                    name={content.name}
                    thumbnail={animal.assets.thumbnail}
                  />
                )
              })}
              {drafts.map((animal, index) => {
                const content = animalContentFor(animal, locale)
                if (!content) {
                  return null
                }
                return (
                  <CategoryCard
                    key={animal.id}
                    classificationLabel={content.classificationLabel}
                    href={`/${locale}/animal/${animal.id}`}
                    index={prehistoric.length + index}
                    label={messages.collection.cardLabel(content.name, false)}
                    name={content.name}
                    thumbnail={animal.assets.thumbnail ?? animal.assets.poster}
                  />
                )
              })}
            </div>
          </section>
        )
      })}
    </main>
  )
}
