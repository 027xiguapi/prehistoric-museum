import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

import { allAnimals } from '../src/content/catalog'
import { seoPageCopy, type SeoPageLocale } from '../src/seo/metadata'

// Museum-level SEO social card rendering, extracted from the former static
// site generator so `npm run generate:seo-social-cards` keeps working under
// the Next.js pipeline (output lives in public/social/).

export interface SeoSocialCardManifest {
  readonly version: 1
  readonly width: 1200
  readonly height: 630
  readonly cards: Readonly<
    Record<
      SeoPageLocale,
      {
        readonly fileName: string
        readonly sourceSha256: string
      }
    >
  >
}

/** Render order shared by the PNG generator and the manifest builder. */
export const seoSocialCardLocales = [
  'x-default',
  'zh-CN',
  'zh-TW',
  'ja',
  'ko',
  'fr',
  'de',
  'es',
  'en',
] as const satisfies readonly SeoPageLocale[]

// The zoo publicly displays every catalogue animal across its seven zones,
// not only the curated main collection.
const zooAnimalCount = allAnimals.length

interface SocialCardCopy {
  /** One-line pitch rendered under the WonZoo title. */
  readonly subtitle: string
  /** Zone summary line at the bottom of the card. */
  readonly galleryLabel: string
  /** Latin scripts need a smaller size to fit seven zone names on one line. */
  readonly galleryFontSize: 25 | 22
  /** CJK fallback family appended after the Latin font; null = Latin only. */
  readonly cjkFont: 'chinese' | 'korean' | null
}

const socialCardCopy: Readonly<Record<SeoPageLocale, SocialCardCopy>> = {
  'x-default': {
    subtitle: 'A bilingual 3D family zoo · 双语亲子 3D 动物园',
    galleryLabel:
      'Dinosaurs · Grassland · Forest · Ice Age · Ocean · Insects · Sky',
    galleryFontSize: 22,
    cjkFont: 'chinese',
  },
  'zh-CN': {
    subtitle: `和孩子一起探索动物园的 ${zooAnimalCount} 位动物朋友`,
    galleryLabel: '恐龙 · 草原 · 森林 · 冰川 · 海洋 · 昆虫 · 天空',
    galleryFontSize: 25,
    cjkFont: 'chinese',
  },
  'zh-TW': {
    subtitle: `和孩子一起探索動物園的 ${zooAnimalCount} 位動物朋友`,
    galleryLabel: '恐龍 · 草原 · 森林 · 冰川 · 海洋 · 昆蟲 · 天空',
    galleryFontSize: 25,
    cjkFont: 'chinese',
  },
  ja: {
    subtitle: `お子さまと一緒に 3D 動物園で ${zooAnimalCount} 匹の動物を探索`,
    galleryLabel: '恐竜 · 草原 · 森 · 氷河 · 海 · 昆虫 · 空',
    galleryFontSize: 25,
    cjkFont: 'chinese',
  },
  ko: {
    subtitle: `아이와 함께 3D 동물원의 ${zooAnimalCount}마리 동물 친구`,
    galleryLabel: '공룡 · 초원 · 숲 · 빙하 · 바다 · 곤충 · 하늘',
    galleryFontSize: 25,
    cjkFont: 'korean',
  },
  fr: {
    subtitle: `Rencontrez les ${zooAnimalCount} animaux du zoo en 3D`,
    galleryLabel:
      'Dinosaures · Prairies · Forêt · Ère glaciaire · Océan · Insectes · Ciel',
    galleryFontSize: 22,
    cjkFont: null,
  },
  de: {
    subtitle: `Entdecke ${zooAnimalCount} Zoo-Tiere in 3D`,
    galleryLabel:
      'Dinosaurier · Grasland · Wald · Eiszeit · Ozean · Insekten · Himmel',
    galleryFontSize: 22,
    cjkFont: null,
  },
  es: {
    subtitle: `Conoce ${zooAnimalCount} animales del zoo en 3D`,
    galleryLabel:
      'Dinosaurios · Praderas · Bosque · Hielo · Océano · Insectos · Cielo',
    galleryFontSize: 22,
    cjkFont: null,
  },
  en: {
    subtitle: `Meet ${zooAnimalCount} zoo animals in 3D`,
    galleryLabel:
      'Dinosaurs · Grassland · Forest · Ice Age · Ocean · Insects · Sky',
    galleryFontSize: 22,
    cjkFont: null,
  },
}

interface EmbeddedFont {
  readonly family: string
  readonly weight: string
  readonly data: string
}

function loadEmbeddedFont(
  family: string,
  file: string,
  weight: string,
): EmbeddedFont {
  const data = readFileSync(
    fileURLToPath(new URL(file, import.meta.url)),
  ).toString('base64')
  return { family, weight, data }
}

const latinFont = loadEmbeddedFont(
  'Museum Latin',
  '../node_modules/@fontsource-variable/fredoka/files/fredoka-latin-wght-normal.woff2',
  '300 700',
)
const cjkFonts = {
  chinese: loadEmbeddedFont(
    'Museum Chinese',
    '../node_modules/@fontsource/zcool-kuaile/files/zcool-kuaile-chinese-simplified-400-normal.woff2',
    '400',
  ),
  korean: loadEmbeddedFont(
    'Museum Korean',
    '../node_modules/@fontsource/jua/files/jua-korean-400-normal.woff2',
    '400',
  ),
} as const

function socialCardFontStyles(fonts: readonly EmbeddedFont[]): string {
  if (fonts.length === 0) {
    return ''
  }
  const faces = fonts
    .map(
      (font) =>
        `@font-face { font-family: "${font.family}"; src: url("data:font/woff2;base64,${font.data}") format("woff2"); font-style: normal; font-weight: ${font.weight}; }`,
    )
    .join('\n    ')
  return `<style>\n    ${faces}\n  </style>`
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function renderSocialCard(
  locale: SeoPageLocale,
  embedFonts = false,
): string {
  const copy = seoPageCopy[locale]
  const text = socialCardCopy[locale]
  const cjkFont = text.cjkFont === null ? null : cjkFonts[text.cjkFont]
  // The x-default subtitle is a longer bilingual line, so its title shrinks.
  const titleFontSize = locale === 'x-default' ? 58 : 68
  const fontFamily = embedFonts
    ? cjkFont === null
      ? latinFont.family
      : `${latinFont.family}, ${cjkFont.family}`
    : 'ui-rounded, system-ui, sans-serif'
  const fontStyles = embedFonts
    ? socialCardFontStyles(cjkFont === null ? [latinFont] : [latinFont, cjkFont])
    : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title description">
  <title id="title">${escapeHtml(copy.socialImageAlt)}</title>
  <desc id="description">${escapeHtml(text.subtitle)}</desc>
  <defs>
    ${fontStyles}
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eef4df"/><stop offset=".58" stop-color="#d8e7c2"/><stop offset="1" stop-color="#9dc8c5"/></linearGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#173a35" flood-opacity=".2"/></filter>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <circle cx="1030" cy="120" r="180" fill="#fff" opacity=".25"/>
  <circle cx="1040" cy="570" r="270" fill="#487e70" opacity=".13"/>
  <g fill="#315f53" opacity=".7"><path d="M920 430c65-90 153-100 222-34-52 1-77 24-84 70-42-46-85-57-138-36Z"/><path d="M827 494c53-64 119-63 166-7-40-5-62 11-73 46-28-38-58-51-93-39Z"/></g>
  <g filter="url(#shadow)">
    <rect x="72" y="70" width="860" height="490" rx="44" fill="#fff" opacity=".84"/>
    <text x="125" y="270" fill="#20382f" font-family="${fontFamily}" font-size="${titleFontSize}" font-weight="700">WonZoo</text>
    <text x="125" y="382" fill="#355b50" font-family="${fontFamily}" font-size="31" font-weight="600">${escapeHtml(text.subtitle)}</text>
    <g transform="translate(125 420)" fill="#d6724d"><circle cx="33" cy="33" r="33"/><circle cx="111" cy="33" r="33"/><circle cx="189" cy="33" r="33"/></g>
    <text x="125" y="525" fill="#527a6e" font-family="${fontFamily}" font-size="${text.galleryFontSize}">${escapeHtml(text.galleryLabel)}</text>
  </g>
</svg>
`
}

export async function renderSocialCardPng(
  locale: SeoPageLocale,
): Promise<Buffer> {
  return sharp(Buffer.from(renderSocialCard(locale, true)))
    .png({ compressionLevel: 9 })
    .toBuffer()
}

export function createSeoSocialCardManifest(): SeoSocialCardManifest {
  const cards = Object.fromEntries(
    seoSocialCardLocales.map((locale) => [
      locale,
      {
        fileName: seoPageCopy[locale].socialImageFileName.replace(
          'social/',
          '',
        ),
        sourceSha256: createHash('sha256')
          .update(renderSocialCard(locale, true))
          .digest('hex'),
      },
    ]),
  ) as SeoSocialCardManifest['cards']
  return { version: 1, width: 1200, height: 630, cards }
}
