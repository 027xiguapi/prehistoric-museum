import { museumMode } from '@/src/app-mode'
import type {
  ParentFacts,
  ParentReviewFacts,
} from '@/src/components/ParentDrawer'
import { allAnimals, mainAnimals } from '@/src/content/catalog'
import { credits } from '@/src/content/credits.generated'
import type {
  AnimalKind,
  AnimalPackage,
  Diet,
  DraftAnimalPackage,
  PublishedAnimalPackage,
} from '@/src/content/types'
import type { Locale } from '@/src/i18n/locale'
import { dietLabel, formatSizeFact, messagesFor } from '@/src/i18n/messages'
import type {
  DisplayableAnimalPackage,
  LegacyLocalReviewAnimalPackage,
} from '@/src/review/types'
import { createViewerModelDescriptor } from '@/src/viewer/create-viewer-model-descriptor'
import type {
  StagedViewerModel,
  ViewerModelDescriptor,
} from '@/src/viewer/ViewerController'
import { animalDetailIdFromPath } from '@/src/museum/routing'

export interface RuntimeAnimal {
  readonly id: string
  readonly name: string
  readonly intro: string
  readonly kind: AnimalKind
  readonly habitat: DisplayableAnimalPackage['habitat']
  readonly atmosphere: DisplayableAnimalPackage['atmosphere']
  readonly classification: string
  readonly accent: string
  readonly accentSoft: string
  readonly dietCode: Diet
  readonly narrationScript: readonly [string, string]
  readonly facts: ParentFacts
  readonly review: NonNullable<ParentFacts['review']> | null
  readonly assets: {
    readonly model: string
    readonly modelBytes: number
    readonly poster: string
    readonly posterPortrait: string
    readonly thumbnail: string
    readonly backgroundLandscape: string
    readonly backgroundPortrait: string
    readonly narration: string | null
  }
  readonly viewer: ViewerModelDescriptor
}

export interface LoadedRuntimeAnimal {
  readonly animal: RuntimeAnimal
  readonly staged: StagedViewerModel
}

export const publishedMainAnimals = mainAnimals.filter(
  (animal): animal is PublishedAnimalPackage => animal.status === 'published',
)
const firstPublishedAnimal = publishedMainAnimals[0]

if (!firstPublishedAnimal) {
  throw new Error('主展览集合中没有可展示的动物。')
}

/** First published main animal; the guard above proves it exists. */
export const defaultPackage: PublishedAnimalPackage = firstPublishedAnimal

// Draft pilots preview on the dev server only, so a package is displayable
// when it carries the review-style metadata and at least zh-CN content.
// Production builds discover no drafts, so this list collapses to published.
function isPreviewableDraftAnimal(
  animal: AnimalPackage,
): animal is DraftAnimalPackage & LegacyLocalReviewAnimalPackage {
  if (animal.status !== 'draft' || animal.content['zh-CN'] === undefined) {
    return false
  }
  return (animal as LegacyLocalReviewAnimalPackage).review !== undefined
}

// Draft (unpromoted) animals are included in every build by owner decision.
export const previewableAnimalPackages = [
  ...publishedMainAnimals,
  ...allAnimals.filter(isPreviewableDraftAnimal),
]

export const localReviewMode = museumMode === 'review'

function narrationUrlFor(
  animal: DisplayableAnimalPackage,
  locale: Locale,
): string | null {
  // Animal packages ship zh-CN/en tracks only; Traditional Chinese reuses
  // the Mandarin narration and Japanese reuses the English narration until
  // dedicated tracks exist.
  const contentLocale =
    locale === 'zh-TW' ? 'zh-CN' : locale === 'ja' ? 'en' : locale
  const narration = animal.assets.narration as unknown
  if (!narration || typeof narration !== 'object') {
    return null
  }
  const localeNarration = (narration as Record<string, unknown>)[contentLocale]
  if (
    localeNarration &&
    typeof localeNarration === 'object' &&
    (localeNarration as { status?: unknown }).status === 'ready'
  ) {
    return (
      (localeNarration as { url?: string }).url ??
      (contentLocale === 'zh-CN'
        ? (narration as { url?: string }).url
        : undefined) ??
      null
    )
  }
  // Local review packages may still be migrated one at a time. Never reuse a
  // Mandarin track in the English interface.
  if (
    contentLocale === 'zh-CN' &&
    (narration as { status?: unknown }).status === 'ready'
  ) {
    return (narration as { url?: string }).url ?? null
  }
  return null
}

export function toRuntimeAnimal(
  animal: DisplayableAnimalPackage,
  locale: Locale,
): RuntimeAnimal {
  // Packages only carry zh-CN/en content; Traditional Chinese falls back to
  // the zh-CN copy and Japanese to the English copy until translations exist.
  const contentLocale =
    locale === 'zh-TW' ? 'zh-CN' : locale === 'ja' ? 'en' : locale
  const content =
    animal.content[contentLocale] ??
    (animal.status === 'draft' ? animal.content['zh-CN'] : undefined)
  if (!content) {
    throw new Error(`动物 “${animal.id}” 没有可预览的 ${contentLocale} 内容。`)
  }
  const size = formatSizeFact(content.facts.size, locale)
  const review: ParentReviewFacts | null = animal.review
    ? {
        badge: animal.review.badge,
        checks: [...animal.review.checks],
        displayLabel:
          animal.status === 'draft'
            ? `草稿 · ${animal.review.badge}`
            : animal.review.badge,
        note: animal.review.note,
        packageStatus: animal.status,
        stateLabel: animal.status === 'draft' ? '草稿' : '已听审',
        status: animal.review.status,
      }
    : null
  const accent =
    animal.review?.accent ??
    (animal.id === 'stegosaurus'
      ? { strong: '#a85f2f', soft: '#f2d1a5' }
      : { strong: '#356859', soft: '#d9e6d8' })
  const assetCredits: ParentFacts['assetCredits'] = credits
    .filter((credit) => credit.animalId === animal.id && credit.assetKind === 'model')
    .map((credit) => ({
      sourceTitle: credit.sourceTitle,
      ...('sourceUrl' in credit ? { sourceUrl: credit.sourceUrl } : {}),
    }))
  if (animal.review?.modelCredit) {
    assetCredits.push({ ...animal.review.modelCredit })
  }
  return {
    id: animal.id,
    name: content.name,
    intro: content.visibleFeature,
    kind: animal.kind,
    habitat: animal.habitat,
    atmosphere: animal.atmosphere,
    classification: content.classificationLabel,
    accent: accent.strong,
    accentSoft: accent.soft,
    dietCode: content.facts.diet,
    narrationScript: content.narration.sentences,
    review,
    facts: {
      assetCredits,
      classification: content.classificationLabel,
      classificationNote: content.parentClassificationNote,
      diet: dietLabel(content.facts.diet, locale),
      discoveryRegions: [...content.facts.discoveryRegions],
      size: size.value,
      sizeLabel: size.label,
      period: content.facts.period,
      narrationScript: content.narration.sentences,
      ...(review ? { review } : {}),
      sources: content.sources.map(({ title, url }) => ({ title, url })),
    },
    assets: {
      model: animal.assets.model,
      modelBytes: animal.assets.modelBytes,
      poster: animal.assets.poster,
      posterPortrait: animal.assets.posterPortrait ?? animal.assets.poster,
      thumbnail: animal.assets.thumbnail,
      backgroundLandscape: animal.assets.backgrounds.landscape,
      backgroundPortrait: animal.assets.backgrounds.portrait,
      narration: narrationUrlFor(animal, locale),
    },
    viewer: createViewerModelDescriptor(
      animal,
      content.name,
      animal.assets.model,
      messagesFor(locale).viewer.modelLabel(content.name),
    ),
  }
}

export function readInitialAnimal(
  animals: readonly RuntimeAnimal[],
  fallback: RuntimeAnimal,
): RuntimeAnimal {
  const requestedId =
    animalDetailIdFromPath(window.location.pathname) ??
    new URLSearchParams(window.location.search).get('animal')
  return (
    animals.find((animal) => animal.id === requestedId) ??
    animals[0] ??
    fallback
  )
}
