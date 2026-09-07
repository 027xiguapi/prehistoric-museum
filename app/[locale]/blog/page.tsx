import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  getBlogIndexEntries,
} from '@/src/content/blog'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import {
  blogIndexMetadata,
  blogIndexStructuredData,
} from '@/src/seo/blog-metadata'
import { BlogIndexView } from '@/src/components/blog/BlogIndexView'

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

export const dynamicParams = false

interface BlogIndexPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: BlogIndexPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return blogIndexMetadata(locale)
}

export default async function BlogIndexPage({
  params,
}: BlogIndexPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const entries = getBlogIndexEntries(locale)
  const structuredData = blogIndexStructuredData(locale)

  return (
    <>
      <script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replaceAll('<', '\\u003c'),
        }}
      />
      <BlogIndexView locale={locale} entries={entries} />
    </>
  )
}
