import { animalIdPattern } from '@/src/content/types'
import { localeFromPath, type Locale } from '@/src/i18n/locale'

export type AppPageKind = 'zone-select' | 'museum' | 'animal-detail'

export function animalDetailHref(
  locale: Locale,
  animalId: string,
  rootFallback: boolean,
  pageKind: AppPageKind,
): string {
  if (pageKind === 'animal-detail') {
    return `../${animalId}/`
  }
  const needsLocaleSegment =
    typeof window === 'undefined'
      ? rootFallback
      : localeFromPath(window.location.pathname) === null
  return needsLocaleSegment
    ? `./${locale}/${animalId}/`
    : `./${animalId}/`
}

export function museumExhibitHref(): string {
  return `../../`
}

/**
 * `/{prefix}/{locale}/` — the prefix keeps any configured basePath intact.
 * Unlike `museumExhibitHref` this works from any museum URL shape (the
 * animal-id path included), mirroring the prefix logic of `replaceAnimalUrl`.
 */
export function zoneEntryHref(locale: Locale): string {
  const localized = window.location.pathname.match(
    /^(.*\/)(?:zh-CN|zh-TW|ja|en)(?:\/|$)/,
  )
  const prefix = localized
    ? localized[1]
    : window.location.pathname.replace(/[^/]*$/, '')
  return `${prefix}${locale}/`
}

export function animalDetailIdFromPath(pathname: string): string | null {
  const match = pathname.match(
    /(?:^|\/)(?:zh-CN|zh-TW|ja|en)\/animal\/([a-z0-9]+(?:-[a-z0-9]+)*)(?:\/|$)/,
  )
  return match?.[1] && animalIdPattern.test(match[1]) ? match[1] : null
}

export function replaceAnimalUrl(animalId: string, locale: Locale): void {
  const url = new URL(window.location.href)
  // `/{prefix}/{locale}/animal/{animalId}/` — the prefix keeps any configured
  // basePath intact; a locale-less root path gets the locale inserted.
  const localized = url.pathname.match(/^(.*\/)(?:zh-CN|zh-TW|ja|en)(?:\/|$)/)
  const prefix = localized ? localized[1] : url.pathname.replace(/[^/]*$/, '')
  url.pathname = `${prefix}${locale}/animal/${animalId}/`
  url.searchParams.delete('animal')
  window.history.replaceState(
    window.history.state,
    '',
    `${url.pathname}${url.search}${url.hash}`,
  )
}
