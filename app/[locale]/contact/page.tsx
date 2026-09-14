import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DocumentPageView } from '@/src/components/DocumentPageView'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'
import { contactDocumentFor } from '@/src/i18n/site-documents'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface ContactPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  const contact = contactDocumentFor(locale)
  return {
    title: `${contact.title} | ${messages.museumName}`,
    description: contact.summary,
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return (
    <DocumentPageView content={contactDocumentFor(locale)} locale={locale} />
  )
}
