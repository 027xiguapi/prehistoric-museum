import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { isLocale, supportedLocales } from '@/src/i18n/locale'
import { museumPageMetadata } from '@/src/seo/museum-page-metadata'
import { MuseumHome } from '@/app/[locale]/MuseumHome'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface MuseumPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: MuseumPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  return museumPageMetadata(locale)
}

export default async function MuseumLocalePage({ params }: MuseumPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }

  return <MuseumHome />
}
