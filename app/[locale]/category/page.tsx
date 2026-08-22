import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { supportedLocales, isLocale } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'
import { CategoryPageView } from '@/src/components/CategoryPageView'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface CategoryPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  return {
    title: `${messages.collection.title} | ${messages.museumName}`,
    description: messages.collection.intro,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <CategoryPageView locale={locale} zone={null} />
}
