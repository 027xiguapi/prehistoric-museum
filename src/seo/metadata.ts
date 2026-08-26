// Shared multilingual SEO copy and metadata builders.

import { animalSeoDescription } from '@/src/content/animal-seo'
import { mainAnimals } from '@/src/content/catalog'
import { staticAnimalDetailIds } from '@/src/content/static-animal-details'
import type { Habitat, Locale } from '@/src/content/types'

export type SeoPageLocale = 'x-default' | Locale

export const seoSiteOrigin = 'http://museum.routerpark.com/'

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
  readonly brand?: string
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
    title: 'WonZoo',
    description: `Choose Simplified Chinese or English for a family-friendly 3D museum featuring ${catalogueAnimalCount} prehistoric animals. 选择简体中文或 English，和孩子一起探索 ${catalogueAnimalCount} 位史前动物朋友。`,
    heading: 'WonZoo',
    introduction:
      'A gentle 3D museum for children aged 2–6 and the grown-ups exploring with them. 一个为 2–6 岁孩子和陪伴探索的家长准备的 3D WonZoo。',
    privacy: `Explore ${catalogueAnimalCount} prehistoric animals from land, sky and sea. No account, advertising or page analytics are used, and narration never starts by itself. 展厅收录陆地、天空与水中的 ${catalogueAnimalCount} 位史前动物，无需账号，没有广告和页面分析，也不会自动播放声音。`,
    catalogueHeading: 'Museum collection | 博物馆藏品',
    languageLabel: 'Choose a language | 选择语言',
    systemLanguageLabel: 'Follow system | 跟随系统',
    socialImageFileName: 'social/museum.png',
    socialImageAlt: 'WonZoo',
  },
  'zh-CN': {
    locale: 'zh-CN',
    htmlLang: 'zh-CN',
    title: 'WonZoo | 亲子 3D 动物园',
    description: `和孩子一起走进 3D WonZoo，观察 ${catalogueAnimalCount} 位来自陆地、天空与水中的史前朋友。`,
    heading: 'WonZoo',
    introduction:
      '这是一个面向 2–6 岁孩子和家长的 3D WonZoo。一起转动模型，听观察引导，再读给家长的科学资料。',
    privacy: `展厅收录 ${catalogueAnimalCount} 位来自陆地、天空与水中的史前动物。无需账号，没有广告和页面分析，声音只会在你主动点击后播放。`,
    catalogueHeading: '博物馆藏品',
    languageLabel: '选择语言',
    systemLanguageLabel: '跟随系统',
    socialImageFileName: 'social/museum.zh-CN.png',
    socialImageAlt: 'WonZoo亲子 3D 展馆',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'WonZoo | A 3D Family Zoo',
    description: `Explore ${catalogueAnimalCount} prehistoric animals from land, sky and sea in a gentle 3D museum made for young children and their grown-ups.`,
    heading: 'WonZoo',
    introduction:
      'A gentle 3D museum for children aged 2–6 and the grown-ups exploring with them. Turn each model, listen to a short observation guide and open the grown-up notes when you want to go deeper.',
    privacy: `Meet ${catalogueAnimalCount} prehistoric animals from land, sky and sea. There are no accounts, adverts or page analytics, and narration only plays when you choose it.`,
    catalogueHeading: 'Museum collection',
    languageLabel: 'Choose a language',
    systemLanguageLabel: 'Follow system',
    socialImageFileName: 'social/museum.en.png',
    socialImageAlt:
      'WonZoo, a 3D family adventure by Leon Made This',
  },
} as const satisfies Record<SeoPageLocale, SeoPageCopy>

export function museumCanonicalUrl(locale: SeoPageLocale): string {
  const suffix = locale === 'x-default' ? '' : `${locale}/`
  return `${seoSiteOrigin}${suffix}`
}

export function animalCanonicalUrl(
  locale: Locale,
  animalId: string,
): string {
  return `${seoSiteOrigin}${locale}/animal/${animalId}/`
}

export function museumSocialImageUrl(locale: SeoPageLocale): string {
  return `${seoSiteOrigin}${seoPageCopy[locale].socialImageFileName}`
}

export function animalSocialImageUrl(animalId: string): string {
  return `${seoSiteOrigin}${animalId}/social.webp`
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
  const title = `${animal.content.name} | WonZoo`
  const canonical = animalCanonicalUrl(locale, animal.id)
  const museumName = 'WonZoo'
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
  returnLabel: 'Back · 返回',
} as const
