import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { TechnicalSupportPageView } from '../../../src/components/TechnicalSupportPageView'
import { isLocale, supportedLocales } from '../../../src/i18n/locale'
import { messagesFor } from '../../../src/i18n/messages'
import { technicalSupportFor } from '../../../src/i18n/technical-support'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface SupportPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: SupportPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  const support = technicalSupportFor(locale)
  return {
    title: `${support.title} | ${messages.museumName}`,
    description: support.summary,
  }
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <TechnicalSupportPageView locale={locale} />
}
