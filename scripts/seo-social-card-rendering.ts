import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

import {
  seoCatalogueAnimalIds,
  seoPageCopy,
  type SeoPageLocale,
} from '../src/seo/metadata'

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

const catalogueAnimalCount = seoCatalogueAnimalIds.length

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

const socialLatinFontData = readFileSync(
  fileURLToPath(
    new URL(
      '../node_modules/@fontsource-variable/fredoka/files/fredoka-latin-wght-normal.woff2',
      import.meta.url,
    ),
  ),
).toString('base64')
const socialChineseFontData = readFileSync(
  fileURLToPath(
    new URL(
      '../node_modules/@fontsource/zcool-kuaile/files/zcool-kuaile-chinese-simplified-400-normal.woff2',
      import.meta.url,
    ),
  ),
).toString('base64')

function socialCardFontStyles(): string {
  return `<style>
    @font-face { font-family: "Museum Latin"; src: url("data:font/woff2;base64,${socialLatinFontData}") format("woff2"); font-style: normal; font-weight: 300 700; }
    @font-face { font-family: "Museum Chinese"; src: url("data:font/woff2;base64,${socialChineseFontData}") format("woff2"); font-style: normal; font-weight: 400; }
  </style>`
}

export function renderSocialCard(
  locale: SeoPageLocale,
  embedFonts = false,
): string {
  const copy = seoPageCopy[locale]
  const titleLines = ['WonZoo']
  const titleFontSize = locale === 'x-default' ? 58 : 68
  const titleStartY = titleLines.length === 1 ? 270 : 225
  const titleMarkup = titleLines
    .map(
      (line, index) =>
        `<tspan x="125" y="${titleStartY + index * 76}">${escapeHtml(line)}</tspan>`,
    )
    .join('')
  const subtitle =
    locale === 'zh-CN'
      ? `和孩子一起探索 ${catalogueAnimalCount} 位史前动物朋友`
      : locale === 'zh-TW'
        ? `和孩子一起探索 ${catalogueAnimalCount} 位史前動物朋友`
        : locale === 'en'
          ? `Meet ${catalogueAnimalCount} prehistoric animals in 3D`
          : 'A bilingual 3D family museum · 双语亲子 3D 博物馆'
  const galleryLabel =
    locale === 'zh-TW'
      ? '陸地 · 天空 · 水中'
      : locale === 'zh-CN'
        ? '陆地 · 天空 · 水中'
        : locale === 'en'
          ? 'Land · Sky · Sea'
          : 'Land · Sky · Sea | 陆地 · 天空 · 水中'
  const fontFamily = embedFonts
    ? 'Museum Latin, Museum Chinese'
    : 'ui-rounded, system-ui, sans-serif'
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title description">
  <title id="title">${escapeHtml(copy.socialImageAlt)}</title>
  <desc id="description">${escapeHtml(subtitle)}</desc>
  <defs>
    ${embedFonts ? socialCardFontStyles() : ''}
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eef4df"/><stop offset=".58" stop-color="#d8e7c2"/><stop offset="1" stop-color="#9dc8c5"/></linearGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#173a35" flood-opacity=".2"/></filter>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <circle cx="1030" cy="120" r="180" fill="#fff" opacity=".25"/>
  <circle cx="1040" cy="570" r="270" fill="#487e70" opacity=".13"/>
  <g fill="#315f53" opacity=".7"><path d="M920 430c65-90 153-100 222-34-52 1-77 24-84 70-42-46-85-57-138-36Z"/><path d="M827 494c53-64 119-63 166-7-40-5-62 11-73 46-28-38-58-51-93-39Z"/></g>
  <g filter="url(#shadow)">
    <rect x="72" y="70" width="860" height="490" rx="44" fill="#fff" opacity=".84"/>
    <text fill="#20382f" font-family="${fontFamily}" font-size="${titleFontSize}" font-weight="700">${titleMarkup}</text>
    <text x="125" y="382" fill="#355b50" font-family="${fontFamily}" font-size="31" font-weight="600">${escapeHtml(subtitle)}</text>
    <g transform="translate(125 420)" fill="#d6724d"><circle cx="33" cy="33" r="33"/><circle cx="111" cy="33" r="33"/><circle cx="189" cy="33" r="33"/></g>
    <text x="125" y="525" fill="#527a6e" font-family="${fontFamily}" font-size="25">${escapeHtml(galleryLabel)}</text>
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
    (['x-default', 'zh-CN', 'zh-TW', 'en'] as const).map((locale) => [
      locale,
      {
        fileName: seoPageCopy[locale].socialImageFileName.replace('social/', ''),
        sourceSha256: createHash('sha256')
          .update(renderSocialCard(locale, true))
          .digest('hex'),
      },
    ]),
  ) as SeoSocialCardManifest['cards']
  return { version: 1, width: 1200, height: 630, cards }
}
