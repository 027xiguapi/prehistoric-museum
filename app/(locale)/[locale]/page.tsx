import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { museumMode } from '../../../src/app-mode'
import type { InitialAppState } from '../../../src/app-bootstrap'
import { mainAnimals } from '../../../src/content/catalog'
import { isLocale } from '../../../src/i18n/locale'
import { MuseumClient } from '../../../src/MuseumClient'
import {
  museumPageMetadata,
  museumQueryRedirectSource,
} from '../../../src/seo/museum-page-metadata'

export function generateStaticParams() {
  return [{ locale: 'zh-CN' }, { locale: 'en' }]
}

interface MuseumPageProps {
  readonly params: Promise<{ readonly locale: string }>
  readonly searchParams: Promise<
    Record<string, string | string[] | undefined>
  >
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

export default async function MuseumLocalePage({
  params,
  searchParams,
}: MuseumPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }

  const defaultAnimalId = mainAnimals[0]?.id
  if (!defaultAnimalId) {
    throw new Error('主展览集合中没有可展示的动物。')
  }

  // Short-circuits outside e2e builds so production prerendering never
  // touches `searchParams` (which would opt the page into dynamic rendering).
  const csrOnly = museumMode === 'e2e' && (await searchParams).fixtures === '1'

  const initialState: InitialAppState = {
    animalId: defaultAnimalId,
    locale,
    pageKind: 'zone-select',
    preference: locale,
  }

  return (
    <>
      <script
        data-museum-query-redirect=""
        dangerouslySetInnerHTML={{
          __html: museumQueryRedirectSource('./'),
        }}
      />
      <MuseumClient initialState={initialState} csrOnly={csrOnly} />
    </>
  )
}
