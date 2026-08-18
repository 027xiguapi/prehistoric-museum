import { animalIdPattern } from './content/types'
import type { Locale, LocalePreference } from './i18n/locale'

export type AppPageKind = 'zone-select' | 'museum' | 'animal-detail'

export interface InitialAppState {
  readonly animalId: string
  readonly locale: Locale
  readonly pageKind: AppPageKind
  readonly preference: LocalePreference
  readonly rootFallback?: boolean
}

export function animalDetailIdFromPath(pathname: string): string | null {
  const match = pathname.match(
    /(?:^|\/)(?:zh-CN|en)\/animal\/([a-z0-9]+(?:-[a-z0-9]+)*)(?:\/|$)/,
  )
  return match?.[1] && animalIdPattern.test(match[1]) ? match[1] : null
}
