import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { mainAnimals } from '../../src/content/catalog'
import { isLocale } from '../../src/i18n/locale'
import { museumPageMetadata } from '../../src/seo/museum-page-metadata'
import { MuseumHome } from './MuseumHome'

export function generateStaticParams() {
  return [{ locale: 'zh-CN' }, { locale: 'en' }]
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

  const defaultAnimalId = mainAnimals[0]?.id
  if (!defaultAnimalId) {
    throw new Error('主展览集合中没有可展示的动物。')
  }

  return <MuseumHome defaultAnimalId={defaultAnimalId} />
}
