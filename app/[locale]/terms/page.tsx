import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DocumentPageView } from '@/src/components/DocumentPageView'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'
import { termsDocumentFor } from '@/src/i18n/site-documents'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface TermsPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  const terms = termsDocumentFor(locale)
  return {
    title: `${terms.title} | ${messages.museumName}`,
    description: terms.summary,
  }
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <DocumentPageView content={termsDocumentFor(locale)} locale={locale} />
}
