import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CreditsPageView } from '@/src/components/CreditsPageView'
import { creditsPageFor } from '@/src/i18n/credits'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface CreditsPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: CreditsPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  const credits = creditsPageFor(locale)
  return {
    title: `${credits.title} | ${messages.museumName}`,
    description: credits.summary,
  }
}

export default async function CreditsPage({ params }: CreditsPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <CreditsPageView locale={locale} />
}
