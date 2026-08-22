import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import packageManifest from '@/package.json'
import { ConfigPageView } from '@/src/components/ConfigPageView'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface ConfigPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: ConfigPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  return {
    title: `${messages.config.title} | ${messages.museumName}`,
    description: messages.config.intro,
    // The settings page is a utility screen, not exhibit content.
    robots: { index: false, follow: false },
  }
}

export default async function ConfigPage({ params }: ConfigPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <ConfigPageView version={packageManifest.version} />
}
