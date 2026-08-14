// Shared multilingual SEO copy and metadata builders.
//
// Ported from the former static-site `scripts/multilingual-seo.ts` generator.
// Canonical URLs intentionally always point at the production origin and the
// `/museum/` path, regardless of the current build's basePath, so e2e and
// local builds keep identical SEO output.

import { animalSeoDescription } from '../content/animal-seo'
import { mainAnimals } from '../content/catalog'
import { staticAnimalDetailIds } from '../content/static-animal-details'
import type { Habitat, Locale } from '../content/types'

export type SeoPageLocale = 'x-default' | Locale

export const seoSiteOrigin = 'https://leon-made-this.work'
export const seoMuseumPath = '/museum/'
export const seoNotFoundReturnPath = '/prehistoric-animal-museum/'

export interface SeoCatalogueEntry {
  readonly id: string
  readonly habitat: Habitat
  readonly zhCN: string
  readonly en: string
}

export interface SeoCatalogueGroup {
  readonly habitat: Habitat
  readonly zhCN: string
  readonly en: string
  readonly animals: readonly SeoCatalogueEntry[]
}

export interface SeoPageCopy {
  readonly locale: SeoPageLocale
  readonly htmlLang: Locale
  readonly brand: string
  readonly title: string
  readonly description: string
  readonly heading: string
  readonly introduction: string
  readonly privacy: string
  readonly catalogueHeading: string
  readonly languageLabel: string
  readonly systemLanguageLabel: string
  readonly socialImageFileName: string
  readonly socialImageAlt: string
}

const catalogueGroupCopy = {
  land: {
    zhCN: '陆地展厅',
    en: 'Land gallery',
  },
  air: {
    zhCN: '天空展厅',
    en: 'Sky gallery',
  },
  water: {
    zhCN: '水中展厅',
    en: 'Sea gallery',
  },
} as const satisfies Record<Habitat, Pick<SeoCatalogueGroup, 'zhCN' | 'en'>>

const catalogueHabitatOrder = ['land', 'air', 'water'] as const satisfies
  readonly Habitat[]

const catalogueAnimals: readonly SeoCatalogueEntry[] = mainAnimals.map(
  (animal) => {
    const zhCN = animal.content['zh-CN'].name.trim()
    const en = animal.content.en.name.trim()
    if (!zhCN || !en) {
      throw new Error(
        `SEO catalogue animal “${animal.id}” must have both public names.`,
      )
    }
    return {
      id: animal.id,
      habitat: animal.habitat,
      zhCN,
      en,
    }
  },
)

export const seoCatalogueGroups: readonly SeoCatalogueGroup[] =
  catalogueHabitatOrder.map((habitat) => ({
    habitat,
    ...catalogueGroupCopy[habitat],
    animals: catalogueAnimals.filter((animal) => animal.habitat === habitat),
  }))

export const seoCatalogueAnimalIds = catalogueAnimals.map(({ id }) => id)

const catalogueAnimalCount = seoCatalogueAnimalIds.length

export const seoPageCopy = {
  'x-default': {
    locale: 'x-default',
    htmlLang: 'en',
    brand: 'Leon Made This | Leon做了个',
    title: 'Prehistoric Animal Museum | 史前动物博物馆',
    description: `Choose Simplified Chinese or English for a family-friendly 3D museum featuring ${catalogueAnimalCount} prehistoric animals. 选择简体中文或 English，和孩子一起探索 ${catalogueAnimalCount} 位史前动物朋友。`,
    heading: 'Prehistoric Animal Museum | 史前动物博物馆',
    introduction:
      'A gentle 3D museum for children aged 2–6 and the grown-ups exploring with them. 一座为 2–6 岁孩子和陪伴探索的家长准备的 3D 史前动物博物馆。',
    privacy: `Explore ${catalogueAnimalCount} prehistoric animals from land, sky and sea. No account, advertising or page analytics are used, and narration never starts by itself. 展厅收录陆地、天空与水中的 ${catalogueAnimalCount} 位史前动物，无需账号，没有广告和页面分析，也不会自动播放声音。`,
    catalogueHeading: 'Museum collection | 博物馆藏品',
    languageLabel: 'Choose a language | 选择语言',
    systemLanguageLabel: 'Follow system | 跟随系统',
    socialImageFileName: 'social/museum.png',
    socialImageAlt: 'Prehistoric Animal Museum — 史前动物博物馆',
  },
  'zh-CN': {
    locale: 'zh-CN',
    htmlLang: 'zh-CN',
    brand: 'Leon做了个',
    title: '史前动物博物馆 | 亲子 3D 史前动物展',
    description: `和孩子一起走进 3D 史前动物博物馆，观察 ${catalogueAnimalCount} 位来自陆地、天空与水中的史前朋友。`,
    heading: '史前动物博物馆',
    introduction:
      '这是一座面向 2–6 岁孩子和家长的 3D 史前动物博物馆。一起转动模型，听观察引导，再读给家长的科学资料。',
    privacy: `展厅收录 ${catalogueAnimalCount} 位来自陆地、天空与水中的史前动物。无需账号，没有广告和页面分析，声音只会在你主动点击后播放。`,
    catalogueHeading: '博物馆藏品',
    languageLabel: '选择语言',
    systemLanguageLabel: '跟随系统',
    socialImageFileName: 'social/museum.zh-CN.png',
    socialImageAlt: '史前动物博物馆亲子 3D 展馆',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    brand: 'Leon Made This',
    title: 'Prehistoric Animal Museum | A 3D Family Adventure',
    description: `Explore ${catalogueAnimalCount} prehistoric animals from land, sky and sea in a gentle 3D museum made for young children and their grown-ups.`,
    heading: 'Prehistoric Animal Museum',
    introduction:
      'A gentle 3D museum for children aged 2–6 and the grown-ups exploring with them. Turn each model, listen to a short observation guide and open the grown-up notes when you want to go deeper.',
    privacy: `Meet ${catalogueAnimalCount} prehistoric animals from land, sky and sea. There are no accounts, adverts or page analytics, and narration only plays when you choose it.`,
    catalogueHeading: 'Museum collection',
    languageLabel: 'Choose a language',
    systemLanguageLabel: 'Follow system',
    socialImageFileName: 'social/museum.en.png',
    socialImageAlt:
      'Prehistoric Animal Museum, a 3D family adventure by Leon Made This',
  },
} as const satisfies Record<SeoPageLocale, SeoPageCopy>

export function museumCanonicalUrl(locale: SeoPageLocale): string {
  const suffix = locale === 'x-default' ? '' : `${locale}/`
  return `${seoSiteOrigin}${seoMuseumPath}${suffix}`
}

export function animalCanonicalUrl(
  locale: Locale,
  animalId: string,
): string {
  return `${seoSiteOrigin}${seoMuseumPath}${locale}/${animalId}/`
}

export function museumSocialImageUrl(locale: SeoPageLocale): string {
  return `${seoSiteOrigin}${seoMuseumPath}${seoPageCopy[locale].socialImageFileName}`
}

export function animalSocialImageUrl(animalId: string): string {
  return `${seoSiteOrigin}${seoMuseumPath}${animalId}/social.webp`
}

export const seoSitemapUrls: readonly string[] = [
  museumCanonicalUrl('zh-CN'),
  museumCanonicalUrl('en'),
  ...staticAnimalDetailIds.flatMap((animalId) => [
    animalCanonicalUrl('zh-CN', animalId),
    animalCanonicalUrl('en', animalId),
  ]),
]

export const seoRobotsTxt = `User-agent: *\nAllow: /\nSitemap: ${seoSiteOrigin}/sitemap.xml\n`

export interface AnimalDetailSeo {
  readonly title: string
  readonly description: string
  readonly canonical: string
  readonly alternate: string
  readonly socialImage: string
  readonly structuredData: Readonly<Record<string, unknown>>
}

export function animalDetailSeo(
  locale: Locale,
  animal: {
    readonly id: string
    readonly content: {
      readonly name: string
      readonly narrationSentences: readonly string[]
    }
  },
): AnimalDetailSeo {
  const otherLocale: Locale = locale === 'zh-CN' ? 'en' : 'zh-CN'
  const description = animalSeoDescription(animal.content.narrationSentences)
  const title =
    locale === 'zh-CN'
      ? `${animal.content.name} | 史前动物博物馆`
      : `${animal.content.name} | Prehistoric Animal Museum`
  const canonical = animalCanonicalUrl(locale, animal.id)
  const museumName =
    locale === 'zh-CN' ? '史前动物博物馆' : 'Prehistoric Animal Museum'
  return {
    title,
    description,
    canonical,
    alternate: animalCanonicalUrl(otherLocale, animal.id),
    socialImage: animalSocialImageUrl(animal.id),
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: museumName,
            item: museumCanonicalUrl(locale),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: animal.content.name,
            item: canonical,
          },
        ],
      },
      description,
      image: animalSocialImageUrl(animal.id),
      inLanguage: locale,
      name: animal.content.name,
      url: canonical,
    },
  }
}

export const seoNotFoundCopy = {
  title: 'Page not found | 页面没有找到',
  heading: '404 · Page not found · 页面没有找到',
  message: 'The trail ends here. 这条参观路线暂时走不通。',
  returnLabel: 'Return to the museum · 返回博物馆',
} as const
