import type { Metadata } from 'next'

import { mainAnimals } from '@/src/content/catalog'
import {
  contentLocaleFor,
  getBlogIndexEntries,
} from '@/src/content/blog'
import type { BlogArticleRecord } from '@/src/content/blog/types'
import type { Locale } from '@/src/i18n/locale'
import {
  animalSocialImageUrl,
  blogArticleCanonicalUrl,
  blogCanonicalUrl,
  seoSiteOrigin,
} from '@/src/seo/metadata'

interface BlogIndexSeoCopy {
  readonly title: string
  readonly description: string
}

const blogIndexSeoCopy: Record<Locale, BlogIndexSeoCopy> = {
  'zh-CN': {
    title: 'WonZoo 动物科普 | 认识每一只史前动物',
    description:
      'WonZoo 动物科普博客：从剑龙到巨齿鲨，逐只认识史前动物。每篇都有介绍、科学名片与权威来源，适合亲子共读。',
  },
  'zh-TW': {
    title: 'WonZoo 動物科普 | 認識每一隻史前動物',
    description:
      'WonZoo 動物科普部落格：從劍龍到巨齒鯊，逐隻認識史前動物。每篇都有介紹、科學名片與權威來源，適合親子共讀。',
  },
  ja: {
    title: 'WonZoo 動物ビジュアルズ | 先史の動物をひとりずつ',
    description:
      '先史の動物をひとりずつ紹介する WonZoo の動物ビジュアルズ。紹介文・サイエンスカード・信頼できる出典をご家庭でどうぞ。',
  },
  en: {
    title: 'WonZoo Animal Science | Meet every prehistoric animal',
    description:
      'WonZoo animal science blog: meet every prehistoric animal from Stegosaurus to Megalodon, with introductions, science cards and cited sources for families.',
  },
}

export function blogIndexStructuredData(
  locale: Locale,
): Readonly<Record<string, unknown>> {
  const contentLocale = contentLocaleFor(locale)
  const blogPosts = getBlogIndexEntries(locale).map((entry) => ({
    '@type': 'BlogPosting',
    headline: entry.meta.title,
    description: entry.meta.description,
    mainEntityOfPage: blogArticleCanonicalUrl(locale, entry.animalId),
    datePublished: entry.meta.datePublished,
    dateModified: entry.meta.dateModified,
    inLanguage: contentLocale,
    url: blogArticleCanonicalUrl(locale, entry.animalId),
  }))
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: blogIndexSeoCopy[locale].title,
    description: blogIndexSeoCopy[locale].description,
    url: blogCanonicalUrl(locale),
    inLanguage: contentLocale,
    blogPost: blogPosts,
    publisher: {
      '@type': 'Organization',
      name: 'WonZoo',
      logo: {
        '@type': 'ImageObject',
        url: `${seoSiteOrigin}WonZoo.png`,
      },
    },
  }
}

export function blogIndexMetadata(locale: Locale): Metadata {
  const copy = blogIndexSeoCopy[locale]
  const canonical = blogCanonicalUrl(locale)
  const ogLocale =
    locale === 'zh-TW'
      ? 'zh_TW'
      : locale === 'zh-CN'
        ? 'zh_CN'
        : locale === 'ja'
          ? 'ja_JP'
          : 'en_GB'
  return {
    title: copy.title,
    description: copy.description,
    robots: 'index, follow, max-image-preview:large',
    alternates: {
      canonical,
      languages: {
        'zh-CN': blogCanonicalUrl('zh-CN'),
        'zh-TW': blogCanonicalUrl('zh-TW'),
        ja: blogCanonicalUrl('ja'),
        en: blogCanonicalUrl('en'),
      },
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      title: copy.title,
      description: copy.description,
      url: canonical,
      siteName: 'WonZoo',
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
    },
  }
}

export interface BlogArticleSeo {
  readonly title: string
  readonly description: string
  readonly canonical: string
  readonly contentLocale: Locale
  readonly socialImage: string
  readonly structuredData: Readonly<Record<string, unknown>>
}

export function blogArticleSeo(
  locale: Locale,
  animalId: string,
  article: BlogArticleRecord,
): BlogArticleSeo {
  const contentLocale = contentLocaleFor(locale)
  const animal = mainAnimals.find((item) => item.id === animalId)
  const animalName =
    animal?.content[contentLocale]?.name?.trim() ?? article.meta.title
  const canonical = blogArticleCanonicalUrl(locale, animalId)
  const socialImage = animalSocialImageUrl(animalId)

  return {
    title: `${article.meta.title} | WonZoo`,
    description: article.meta.description,
    canonical,
    contentLocale,
    socialImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.meta.title,
      description: article.meta.description,
      image: socialImage,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
      datePublished: article.meta.datePublished,
      dateModified: article.meta.dateModified,
      inLanguage: contentLocale,
      author: {
        '@type': 'Person',
        name: article.meta.author,
        jobTitle: article.meta.authorTitle,
        description: article.meta.authorBio,
      },
      publisher: {
        '@type': 'Organization',
        name: article.meta.publisher,
        logo: {
          '@type': 'ImageObject',
          url: `${seoSiteOrigin}WonZoo.png`,
        },
      },
      articleSection: article.meta.section,
      keywords: article.meta.keywords.join(','),
      wordCount: article.wordCount,
      isAccessibleForFree: true,
      about: {
        '@type': 'Thing',
        name: animalName,
      },
      url: canonical,
    },
  }
}

export function blogArticleMetadata(
  locale: Locale,
  animalId: string,
  article: BlogArticleRecord,
): Metadata {
  const seo = blogArticleSeo(locale, animalId, article)
  return {
    title: seo.title,
    description: seo.description,
    robots: 'index, follow, max-image-preview:large',
    alternates: {
      canonical: seo.canonical,
      languages: {
        'zh-CN': blogArticleCanonicalUrl('zh-CN', animalId),
        'zh-TW': blogArticleCanonicalUrl('zh-TW', animalId),
        ja: blogArticleCanonicalUrl('ja', animalId),
        en: blogArticleCanonicalUrl('en', animalId),
      },
    },
    openGraph: {
      type: 'article',
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: 'WonZoo',
      publishedTime: article.meta.datePublished,
      modifiedTime: article.meta.dateModified,
      authors: [article.meta.author],
      images: [
        {
          url: seo.socialImage,
          type: 'image/webp',
          width: 1200,
          height: 630,
          alt: article.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.socialImage, alt: article.meta.title }],
    },
  }
}
