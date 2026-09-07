import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { mainAnimals } from '@/src/content/catalog'
import {
  contentLocaleFor,
  getBlogArticle,
  getBlogSlugs,
} from '@/src/content/blog'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import {
  blogArticleMetadata,
  blogArticleSeo,
} from '@/src/seo/blog-metadata'
import { BlogArticleView } from '@/src/components/blog/BlogArticleView'

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) => {
    const contentLocale = contentLocaleFor(locale)
    return getBlogSlugs()
      .filter((slug) => getBlogArticle(slug, contentLocale))
      .map((slug) => ({ locale, slug }))
  })
}

export const dynamicParams = false

interface BlogArticlePageProps {
  readonly params: Promise<{ readonly locale: string; readonly slug: string }>
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const article = getBlogArticle(slug, contentLocaleFor(locale))
  if (!article) return {}
  return blogArticleMetadata(locale, slug, article)
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const contentLocale = contentLocaleFor(locale)
  const article = getBlogArticle(slug, contentLocale)
  const animal = mainAnimals.find((item) => item.id === slug)
  if (!article || !animal) notFound()
  const content = animal.content[contentLocale] ?? animal.content['zh-CN']
  if (!content) notFound()

  const seo = blogArticleSeo(locale, slug, article)

  return (
    <>
      <script
        id="blog-article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seo.structuredData).replaceAll('<', '\\u003c'),
        }}
      />
      <BlogArticleView
        locale={locale}
        article={article}
        animal={{
          id: animal.id,
          status: animal.status,
          name: content.name,
          classificationLabel: content.classificationLabel,
          facts: content.facts,
          sources: content.sources,
        }}
      />
    </>
  )
}
