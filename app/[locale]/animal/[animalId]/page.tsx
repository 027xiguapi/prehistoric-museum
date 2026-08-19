import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAnimalById } from '../../../../src/content/catalog'
import { staticAnimalDetailIds } from '../../../../src/content/static-animal-details'
import type {
  AnimalContent,
  AnimalPackage,
} from '../../../../src/content/types'
import { isLocale, type Locale } from '../../../../src/i18n/locale'
import { AnimalExhibit } from './AnimalExhibit'
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
}

interface ResolvedAnimalDetail {
  readonly locale: Locale
  readonly animal: AnimalPackage
  readonly content: AnimalContent
  readonly isDraft: boolean
  readonly seo: AnimalDetailSeo
}

function resolveAnimalDetail(
  params: {
    readonly locale: string
    readonly animalId: string
  },
): ResolvedAnimalDetail | null {
  if (!isLocale(params.locale)) {
    return null
  }
  const animal = getAnimalById(params.animalId)
  if (!animal || !staticAnimalDetailIds.includes(params.animalId)) {
    return null
  }

  // Drafts may still be migrating a locale, mirroring the client-side
  // fallback to the zh-CN package content.
  const content =
    animal.content[params.locale] ??
    (animal.status === 'draft' ? animal.content['zh-CN'] : undefined)
  if (!content) {
    return null
  }
  return {
    locale: params.locale,
    animal,
    content,
    isDraft: animal.status === 'draft',
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
  const { seo, animal, content, isDraft } = resolved
  const name = content.name

  return {
    title: seo.title,
    description: seo.description,
    // Draft pilots are dev-only previews and must never be indexed.
    robots: isDraft ? 'noindex, follow' : 'index, follow, max-image-preview:large',
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
}: AnimalDetailPageProps) {
  const resolved = resolveAnimalDetail(await params)
  if (!resolved) {
    notFound()
  }
  const { locale, animal, seo } = resolved

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
      <AnimalExhibit animalId={animal.id} locale={locale} />
    </>
  )
}
