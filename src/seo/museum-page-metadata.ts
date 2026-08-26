import type { Metadata } from 'next'

import type { Locale } from '@/src/content/types'
import {
  museumCanonicalUrl,
  museumSocialImageUrl,
  seoPageCopy,
} from '@/src/seo/metadata'

export function museumPageMetadata(locale: Locale): Metadata {
  const copy = seoPageCopy[locale]
  const canonical = museumCanonicalUrl(locale)
  const socialImage = museumSocialImageUrl(locale)
  const ogLocale =
    locale === 'zh-TW'
      ? 'zh_TW'
      : locale === 'zh-CN'
        ? 'zh_CN'
        : 'en_GB'
  const ogAlternate = locale === 'en' ? 'zh_CN' : 'en_GB'

  return {
    title: copy.title,
    description: copy.description,
    robots: 'index, follow, max-image-preview:large',
    alternates: {
      canonical,
      languages: {
        'zh-CN': museumCanonicalUrl('zh-CN'),
        'zh-TW': museumCanonicalUrl('zh-TW'),
        en: museumCanonicalUrl('en'),
        'x-default': museumCanonicalUrl('x-default'),
      },
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      alternateLocale: ogAlternate,
      title: copy.title,
      description: copy.description,
      url: canonical,
      images: [
        {
          url: socialImage,
          type: 'image/png',
          width: 1200,
          height: 630,
          alt: copy.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [{ url: socialImage, alt: copy.socialImageAlt }],
    },
  }
}
