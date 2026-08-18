import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { supportedLocales, isLocale } from '../../../../src/i18n/locale'
import { messagesFor } from '../../../../src/i18n/messages'
import {
  CategoryPageView,
  categoryPageZoneIds,
  categoryZoneTitle,
  isCategoryPageZoneId,
} from '../../../../src/components/CategoryPageView'

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    categoryPageZoneIds.map((zone) => ({ locale, zone })),
  )
}

export const dynamicParams = false

interface CategoryZonePageProps {
  readonly params: Promise<{ readonly locale: string; readonly zone: string }>
}

export async function generateMetadata({
  params,
}: CategoryZonePageProps): Promise<Metadata> {
  const { locale, zone } = await params
  if (!isLocale(locale) || !isCategoryPageZoneId(zone)) {
    return {}
  }
  const messages = messagesFor(locale)
  return {
    title: categoryZoneTitle(locale, zone),
    description: messages.collection.intro,
  }
}

export default async function CategoryZonePage({
  params,
}: CategoryZonePageProps) {
  const { locale, zone } = await params
  if (!isLocale(locale) || !isCategoryPageZoneId(zone)) {
    notFound()
  }
  return <CategoryPageView locale={locale} zone={zone} />
}
