import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { museumMode } from '../../../../src/app-mode'
import type { InitialAppState } from '../../../../src/app-bootstrap'
import { getAnimalById } from '../../../../src/content/catalog'
import { staticAnimalDetailIds } from '../../../../src/content/static-animal-details'
import type { PublishedAnimalPackage } from '../../../../src/content/types'
import { isLocale, type Locale } from '../../../../src/i18n/locale'
import { MuseumClient } from '../../../../src/MuseumClient'
import {
  animalCanonicalUrl,
  animalDetailSeo,
  type AnimalDetailSeo,
} from '../../../../src/seo/metadata'

export function generateStaticParams() {
  return staticAnimalDetailIds.flatMap((animalId) => [
    { locale: 'zh-CN', animalId },
    { locale: 'en', animalId },
  ])
}

export const dynamicParams = false

interface AnimalDetailPageProps {
  readonly params: Promise<{ readonly locale: string; animalId: string }>
  readonly searchParams: Promise<
    Record<string, string | string[] | undefined>
  >
}

function resolveAnimalDetail(params: {
  readonly locale: string
  readonly animalId: string
}): { locale: Locale; animal: PublishedAnimalPackage; seo: AnimalDetailSeo } | null {
  if (!isLocale(params.locale)) {
    return null
  }
  const animal = getAnimalById(params.animalId)
  if (
    !animal ||
    animal.status !== 'published' ||
    !staticAnimalDetailIds.includes(params.animalId)
  ) {
    return null
  }
  const content = animal.content[params.locale]
  return {
    locale: params.locale,
    animal,
    seo: animalDetailSeo(params.locale, {
      id: animal.id,
      content: {
        name: content.name,
        narrationSentences: content.narration.sentences,
      },
    }),
  }
}

export async function generateMetadata({
  params,
}: AnimalDetailPageProps): Promise<Metadata> {
  const resolved = resolveAnimalDetail(await params)
  if (!resolved) {
    return {}
  }
  const { seo, locale, animal } = resolved
  const name = animal.content[locale].name

  return {
    title: seo.title,
    description: seo.description,
    robots: 'index, follow, max-image-preview:large',
    alternates: {
      canonical: seo.canonical,
      languages: {
        'zh-CN': animalCanonicalUrl('zh-CN', animal.id),
        en: animalCanonicalUrl('en', animal.id),
      },
    },
    openGraph: {
      type: 'article',
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      images: [
        {
          url: seo.socialImage,
          type: 'image/webp',
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.socialImage, alt: name }],
    },
  }
}

export default async function AnimalDetailPage({
  params,
  searchParams,
}: AnimalDetailPageProps) {
  const resolved = resolveAnimalDetail(await params)
  if (!resolved) {
    notFound()
  }
  const { locale, animal, seo } = resolved

  // Short-circuits outside e2e builds so production prerendering never
  // touches `searchParams` (which would opt the page into dynamic rendering).
  const csrOnly = museumMode === 'e2e' && (await searchParams).fixtures === '1'

  const initialState: InitialAppState = {
    animalId: animal.id,
    locale,
    pageKind: 'animal-detail',
    preference: locale,
  }

  return (
    <>
      <script
        id="animal-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seo.structuredData).replaceAll(
            '<',
            '\\u003c',
          ),
        }}
      />
      <MuseumClient initialState={initialState} csrOnly={csrOnly} />
    </>
  )
}
