// Shared multilingual SEO copy and metadata builders.

import { animalSeoDescription } from '@/src/content/animal-seo'
import { mainAnimals } from '@/src/content/catalog'
import { staticAnimalDetailIds } from '@/src/content/static-animal-details'
import type { Habitat, Locale } from '@/src/content/types'

// Locales with SEO copy. Korean, French, German and Spanish currently get
// dedicated social cards only (prepared ahead of full site localization) and
// are not part of the app `Locale` union yet.
export type SeoPageLocale =
  | 'x-default'
  | Locale

export const seoSiteOrigin = 'http://museum.routerpark.com/'

export interface SeoCatalogueEntry {
  readonly id: string
  readonly habitat: Habitat
  readonly zhCN: string
  readonly zhTW: string
  readonly ja: string
  readonly en: string
}

export interface SeoCatalogueGroup {
  readonly habitat: Habitat
  readonly zhCN: string
  readonly zhTW: string
  readonly ja: string
  readonly en: string
  readonly animals: readonly SeoCatalogueEntry[]
}

export interface SeoPageCopy {
  readonly locale: SeoPageLocale
  readonly htmlLang: Exclude<SeoPageLocale, 'x-default'>
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
    zhTW: '陸地展廳',
    ja: '陸のギャラリー',
    en: 'Land gallery',
  },
  air: {
    zhCN: '天空展厅',
    zhTW: '天空展廳',
    ja: '空のギャラリー',
    en: 'Sky gallery',
  },
  water: {
    zhCN: '水中展厅',
    zhTW: '水中展廳',
    ja: '海のギャラリー',
    en: 'Sea gallery',
  },
} as const satisfies Record<
  Habitat,
  Pick<SeoCatalogueGroup, 'zhCN' | 'zhTW' | 'ja' | 'en'>
>

const catalogueHabitatOrder = ['land', 'air', 'water'] as const satisfies
  readonly Habitat[]

const catalogueAnimals: readonly SeoCatalogueEntry[] = mainAnimals.map(
  (animal) => {
    const zhCN = animal.content['zh-CN'].name.trim()
    // No per-animal Traditional/Japanese copy exists yet; the zh-TW catalogue
    // reuses the zh-CN public name and the ja catalogue the English name.
    const zhTW = animal.content['zh-CN'].name.trim()
    const ja = animal.content.en.name.trim()
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
      zhTW,
      ja,
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
    description: `Choose Simplified Chinese, Traditional Chinese, Japanese or English for a family-friendly 3D museum featuring ${catalogueAnimalCount} prehistoric animals. 選擇簡體中文、繁體中文、日本語或 English，和孩子一起探索 ${catalogueAnimalCount} 位史前動物朋友。`,
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
  'zh-TW': {
    locale: 'zh-TW',
    htmlLang: 'zh-TW',
    title: 'WonZoo | 親子 3D 動物園',
    description: `和孩子一起走進 3D WonZoo，觀察 ${catalogueAnimalCount} 位來自陸地、天空與水中的史前朋友。`,
    heading: 'WonZoo',
    introduction:
      '這是一個面向 2–6 歲孩子和家長的 3D WonZoo。一起轉動模型，聽觀察引導，再讀給家長的科學資料。',
    privacy: `展廳收錄 ${catalogueAnimalCount} 位來自陸地、天空與水中的史前動物。無需帳號，沒有廣告和頁面分析，聲音只會在你主動點擊後播放。`,
    catalogueHeading: '博物館藏品',
    languageLabel: '選擇語言',
    systemLanguageLabel: '跟隨系統',
    socialImageFileName: 'social/museum.zh-TW.png',
    socialImageAlt: 'WonZoo親子 3D 展館',
  },
  ja: {
    locale: 'ja',
    htmlLang: 'ja',
    title: 'WonZoo | 親子向け 3D 動物図鑑',
    description: `お子さまと一緒に 3D WonZoo で、陸・空・海の ${catalogueAnimalCount} 体の先史時代の仲間たちを観察しましょう。`,
    heading: 'WonZoo',
    introduction:
      '2～6 歳のお子さまと保護者のための 3D WonZoo です。モデルを回し、観察ガイドを聞き、保護者向けの解説を開いて一緒に深く知ることができます。',
    privacy: `陸・空・海の ${catalogueAnimalCount} 体の先史時代の動物を収蔵。アカウント不要で広告やページ解析もなく、音声はタップしたときだけ再生されます。`,
    catalogueHeading: 'ミュージアム収蔵品',
    languageLabel: '言語を選ぶ',
    systemLanguageLabel: 'システムに従う',
    socialImageFileName: 'social/museum.ja.png',
    socialImageAlt: 'WonZoo 親子向け 3D ミュージアム',
  },
  ko: {
    locale: 'ko',
    htmlLang: 'ko',
    title: 'WonZoo | 가족과 함께 즐기는 3D 동물원',
    description:
      '아이와 함께 3D 동물원을 둘러보며 동물 친구들을 만나보세요. 모델을 돌려 보고 관찰 이야기를 들어 보세요.',
    heading: 'WonZoo',
    introduction:
      '2~6세 아이와 보호자를 위한 3D 동물원입니다. 모델을 함께 돌리고 관찰 가이드를 들은 뒤 보호자용 해설로 더 깊이 알아보세요.',
    privacy:
      '동물원의 모든 동물을 둘러볼 수 있어요. 계정이 필요 없고 광고와 페이지 분석도 없으며, 음성은 직접 눌렀을 때만 재생됩니다.',
    catalogueHeading: '동물원 컬렉션',
    languageLabel: '언어 선택',
    systemLanguageLabel: '시스템 설정 따르기',
    socialImageFileName: 'social/museum.ko.png',
    socialImageAlt: 'WonZoo 가족 3D 동물원',
  },
  fr: {
    locale: 'fr',
    htmlLang: 'fr',
    title: 'WonZoo | Zoo 3D en famille',
    description:
      'Explorez le zoo 3D avec vos enfants et rencontrez ses animaux. Tournez les modèles, écoutez le guide d\'observation.',
    heading: 'WonZoo',
    introduction:
      'Un zoo 3D pensé pour les 2–6 ans et leurs accompagnants. Tournez chaque modèle, écoutez un court guide d\'observation et ouvrez les notes pour adultes.',
    privacy:
      'Rencontrez les animaux du zoo sans compte, sans publicité ni mesure d\'audience ; la narration ne démarre jamais seule.',
    catalogueHeading: 'Collections du zoo',
    languageLabel: 'Choisir une langue',
    systemLanguageLabel: 'Suivre le système',
    socialImageFileName: 'social/museum.fr.png',
    socialImageAlt: 'WonZoo, zoo 3D en famille',
  },
  de: {
    locale: 'de',
    htmlLang: 'de',
    title: 'WonZoo | 3D-Zoo für Familien',
    description:
      'Entdecke den 3D-Zoo mit deinen Kindern und triff seine Tiere. Drehe die Modelle und hör dir die Beobachtungstipps an.',
    heading: 'WonZoo',
    introduction:
      'Ein 3D-Zoo für 2–6-Jährige und ihre Begleitpersonen. Drehe jedes Modell, höre eine kurze Beobachtungstour und öffne die Notizen für Erwachsene.',
    privacy:
      'Triff die Tiere des Zoos ohne Konto, ohne Werbung und ohne Seitenanalyse; die Sprachausgabe startet nie von allein.',
    catalogueHeading: 'Zoo-Sammlung',
    languageLabel: 'Sprache wählen',
    systemLanguageLabel: 'Systemeinstellung folgen',
    socialImageFileName: 'social/museum.de.png',
    socialImageAlt: 'WonZoo, 3D-Zoo für Familien',
  },
  es: {
    locale: 'es',
    htmlLang: 'es',
    title: 'WonZoo | Zoo 3D en familia',
    description:
      'Explora el zoo 3D con tus peques y conoce a sus animales. Gira los modelos y escucha la guía de observación.',
    heading: 'WonZoo',
    introduction:
      'Un zoo 3D pensado para niños de 2–6 años y sus acompañantes. Gira cada modelo, escucha una guía breve de observación y abre las notas para adultos.',
    privacy:
      'Conoce a los animales del zoo sin cuenta, sin anuncios ni analítica de páginas; la narración nunca empieza sola.',
    catalogueHeading: 'Colección del zoo',
    languageLabel: 'Elegir idioma',
    systemLanguageLabel: 'Seguir el sistema',
    socialImageFileName: 'social/museum.es.png',
    socialImageAlt: 'WonZoo, zoo 3D en familia',
  },
  ru: {
    locale: 'ru',
    htmlLang: 'ru',
    title: 'WonZoo | Семейный 3D-зоопарк',
    description:
      'Исследуйте 3D-зоопарк вместе с детьми и познакомьтесь с его обитателями. Вращайте модели и слушайте подсказки для наблюдений.',
    heading: 'WonZoo',
    introduction:
      '3D-зоопарк для детей 2–6 лет и их родителей. Вращайте каждую модель, слушайте короткие подсказки и открывайте заметки для взрослых.',
    privacy:
      'Знакомьтесь с животными зоопарка без учётной записи, без рекламы и аналитики страниц; озвучка никогда не запускается сама.',
    catalogueHeading: 'Коллекция зоопарка',
    languageLabel: 'Выбрать язык',
    systemLanguageLabel: 'Следовать системе',
    socialImageFileName: 'social/museum.ru.png',
    socialImageAlt: 'WonZoo, семейный 3D-зоопарк',
  },
  pt: {
    locale: 'pt',
    htmlLang: 'pt',
    title: 'WonZoo | Zoo 3D em família',
    description:
      'Explore o zoo 3D com os seus filhos e conheça os seus animais. Rode os modelos e ouça o guia de observação.',
    heading: 'WonZoo',
    introduction:
      'Um zoo 3D pensado para crianças dos 2 aos 6 anos e para os adultos que as acompanham. Rode cada modelo, ouça um guia curto de observação e abra as notas para adultos.',
    privacy:
      'Conheça os animais do zoo sem conta, sem anúncios nem análise de páginas; a narração nunca começa sozinha.',
    catalogueHeading: 'Coleção do zoo',
    languageLabel: 'Escolher idioma',
    systemLanguageLabel: 'Seguir o sistema',
    socialImageFileName: 'social/museum.pt.png',
    socialImageAlt: 'WonZoo, zoo 3D em família',
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
  museumCanonicalUrl('zh-TW'),
  museumCanonicalUrl('ja'),
  museumCanonicalUrl('en'),
  ...staticAnimalDetailIds.flatMap((animalId) => [
    animalCanonicalUrl('zh-CN', animalId),
    animalCanonicalUrl('zh-TW', animalId),
    animalCanonicalUrl('ja', animalId),
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
  // Point the hreflang alternate at the page whose content this locale falls
  // back to: zh-TW reuses zh-CN, ja reuses en, and en/zh-CN point at the
  // other source language.
  const otherLocale: Locale =
    locale === 'en' || locale === 'zh-TW' ? 'zh-CN' : 'en'
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
