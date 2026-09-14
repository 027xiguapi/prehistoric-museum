import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DocumentPageView } from '@/src/components/DocumentPageView'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'
import { aboutDocumentFor } from '@/src/i18n/site-documents'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface AboutPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  const about = aboutDocumentFor(locale)
  return {
    title: `${about.title} | ${messages.museumName}`,
    description: about.summary,
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <DocumentPageView content={aboutDocumentFor(locale)} locale={locale} />
}
