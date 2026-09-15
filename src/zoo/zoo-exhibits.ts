import { mainAnimals } from '@/src/content/catalog'
import type {
  AnimalSizeFact,
  Diet,
  PublishedAnimalPackage,
} from '@/src/content/types'
import { dietLabel, formatSizeFact, messagesFor } from '@/src/i18n/messages'
import { clamp } from '@/src/zoo/noise'
import type { Locale } from '@/src/i18n/locale'
import { createViewerModelDescriptor } from '@/src/viewer/create-viewer-model-descriptor'
import type { ViewerModelDescriptor } from '@/src/viewer/viewer-model-descriptor'
import { SITE_BY_ID, ZONES, type AnimalSite, type ZoneId } from '@/src/zoo/park-data'

/**
 * Everything the zoo needs to know about one exhibit: where it stands, how to
 * render it, and the localized copy the HUD and the label show.
 *
 * Built from the museum's own published packages, so an exhibit inherits the
 * normalized model, its provenance-checked animation clip and the approved
 * narration track without any zoo-specific content.
 */
export interface ZooExhibit {
  readonly id: string
  readonly site: AnimalSite
  readonly descriptor: ViewerModelDescriptor
  readonly modelBytes: number
  readonly name: string
  readonly classification: string
  readonly visibleFeature: string
  readonly period: string
  readonly regions: readonly string[]
  readonly diet: Diet
  readonly dietLabel: string
  readonly sizeLabel: string
  readonly sizeValue: string
  readonly size: AnimalSizeFact
  /** The museum's own caveat for a `group-range` size, when it has one. */
  readonly sizeNote: string | null
  readonly zone: ZoneId
  readonly zoneName: string
  readonly accent: string
  readonly narrationSentences: readonly [string, string]
  readonly narrationUrl: string | null
  readonly thumbnail: string
  readonly publication: string
}

/** Exhibits whose packages ship clean zh-CN/en content in both locales. */
function contentLocaleFor(locale: Locale): 'zh-CN' | 'en' {
  return locale === 'zh-CN' || locale === 'zh-TW' ? 'zh-CN' : 'en'
}

function narrationUrlFor(
  animal: PublishedAnimalPackage,
  contentLocale: 'zh-CN' | 'en',
): string | null {
  const track = animal.assets.narration[contentLocale]
  return track.url
}

export function buildZooExhibits(locale: Locale): ZooExhibit[] {
  const contentLocale = contentLocaleFor(locale)
  const messages = messagesFor(locale)
  const exhibits: ZooExhibit[] = []

  for (const animal of mainAnimals) {
    const site = SITE_BY_ID.get(animal.id)
    if (!site) {
      // The park layout is authored per exhibition animal; a new published
      // animal without a site is a content bug, not a runtime failure.
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`动物园缺少 “${animal.id}” 的展位配置。`)
      }
      continue
    }
    const content = animal.content[contentLocale]
    const zone = ZONES[site.zone]
    const size = formatSizeFact(content.facts.size, locale)
    exhibits.push({
      id: animal.id,
      site,
      descriptor: createViewerModelDescriptor(
        animal,
        content.name,
        animal.assets.model,
        messages.viewer.modelLabel(content.name),
      ),
      modelBytes: animal.assets.modelBytes,
      name: content.name,
      classification: content.classificationLabel,
      visibleFeature: content.visibleFeature,
      period: content.facts.period,
      regions: [...content.facts.discoveryRegions],
      diet: content.facts.diet,
      dietLabel: dietLabel(content.facts.diet, locale),
      sizeLabel: size.label,
      sizeValue: size.value,
      size: content.facts.size,
      sizeNote:
        content.facts.size.kind === 'group-range' ? content.facts.size.note : null,
      zone: site.zone,
      zoneName: messages.zoo.zones[site.zone].name,
      accent: zone.accent,
      narrationSentences: content.narration.sentences,
      narrationUrl: narrationUrlFor(animal, contentLocale),
      thumbnail: animal.assets.thumbnail,
      publication: animal.content['zh-CN'].name,
    })
  }

  return exhibits
}

/**
 * The museum normalizes its models for *framing*, not for absolute scale: the
 * published GLBs run from a 0.7 m dragonfly to a marine reptile authored 474×
 * too large. The park is a life-size walk, so every model is scaled until the
 * dimension its own size fact describes matches that fact.
 *
 * The longest horizontal axis is a proxy for the body, so a curled tail or a
 * walking pose makes this approximate — good enough to read a paddock at a
 * glance, and far truer than leaving 18 models at 18 unrelated scales.
 *
 * A `group-range` fact describes a whole group rather than the individual on
 * screen, so the model is scaled to the geometric mean of the range and the
 * museum's caveat travels with the number in the exhibit card.
 */
export function modelScaleForSizeFact(
  size: AnimalSizeFact,
  measured: readonly [number, number, number],
): number {
  const [width, height, depth] = measured
  const longestHorizontal = Math.max(width, depth)
  const target =
    size.kind === 'group-range'
      ? Math.sqrt(size.minMeters * size.maxMeters)
      : (size.minMeters + size.maxMeters) / 2
  const current = size.kind === 'shoulder-height' ? height : longestHorizontal
  if (!Number.isFinite(current) || current < 0.001) {
    return 1
  }
  // The published spreads are wide: one marine reptile is authored 474× too
  // large, so the lower bound has to allow a very small correction.
  return clamp(target / current, 0.0004, 500)
}

export function exhibitById(
  exhibits: readonly ZooExhibit[],
  animalId: string,
): ZooExhibit | undefined {
  return exhibits.find((exhibit) => exhibit.id === animalId)
}
