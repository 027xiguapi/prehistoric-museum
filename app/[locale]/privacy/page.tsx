import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PrivacyPageView } from '../../../src/components/PrivacyPageView'
import { isLocale, supportedLocales } from '../../../src/i18n/locale'
import { messagesFor } from '../../../src/i18n/messages'
import { privacyPolicyFor } from '../../../src/i18n/privacy-policy'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface PrivacyPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  const privacy = privacyPolicyFor(locale)
  return {
    title: `${privacy.title} | ${messages.museumName}`,
    description: privacy.summary,
  }
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <PrivacyPageView locale={locale} />
}
