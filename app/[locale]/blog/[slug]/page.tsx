import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAnimalById } from '@/src/content/catalog'
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
  const animal = getAnimalById(slug)
  if (!article || !animal) notFound()

  // Draft packages may only ship one content locale; fall back for the other
  // (mirroring the exhibit pages), and prefer whichever content has sources.
  const primaryContent =
    animal.content[contentLocale] ?? animal.content['zh-CN'] ?? animal.content.en
  if (!primaryContent) notFound()
  const otherLocale = contentLocale === 'zh-CN' ? 'en' : 'zh-CN'
  const fallbackContent = animal.content[otherLocale]
  const sources =
    primaryContent.sources.length > 0
      ? primaryContent.sources
      : (fallbackContent?.sources ?? primaryContent.sources)

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
          name: primaryContent.name,
          classificationLabel: primaryContent.classificationLabel,
          facts: primaryContent.facts,
          sources,
        }}
      />
    </>
  )
}
