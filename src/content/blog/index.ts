import matter from 'gray-matter'
import { marked } from 'marked'

import { mainAnimals } from '@/src/content/catalog'
import type { ContentLocale } from '@/src/content/types'
import type { Locale } from '@/src/i18n/locale'
import { articleSources } from '@/src/content/blog/articles'
import type {
  BlogArticleMeta,
  BlogArticleRecord,
  BlogIndexEntry,
} from '@/src/content/blog/types'

/** Maps the UI locales that share article copy to the locale that holds it. */
export function contentLocaleFor(locale: Locale): ContentLocale {
  if (locale === 'zh-TW') return 'zh-CN'
  if (locale === 'ja') return 'en'
  return locale
}

function countWords(text: string): number {
  // CJK counts each character as a word; latin words split on whitespace; the
  // sum is a fair `wordCount` signal for the Article schema.
  const cjk = (text.match(/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g) ?? [])
    .length
  const latin = (text.replace(/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g, ' ')
    .match(/[A-Za-z0-9''-]+/g) ?? []).length
  return cjk + latin
}

function headingFromMarkdown(markdown: string): string {
  const firstHeading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim()
  if (firstHeading) return firstHeading
  return markdown.trim().split('\n')[0]?.slice(0, 80) ?? ''
}

/** A section label derived from the animal kind, in the article's language. */
function sectionLabel(kind: string, locale: ContentLocale): string {
  const zh: Record<string, string> = {
    dinosaur: '恐龙',
    pterosaur: '翼龙',
    'marine-reptile': '海生爬行动物',
    'other-prehistoric-animal': '史前动物',
    'modern-animal': '现代动物',
  }
  const en: Record<string, string> = {
    dinosaur: 'Dinosaurs',
    pterosaur: 'Pterosaurs',
    'marine-reptile': 'Marine reptiles',
    'other-prehistoric-animal': 'Prehistoric animals',
    'modern-animal': 'Modern animals',
  }
  const table = locale === 'zh-CN' ? zh : en
  const fallback = locale === 'zh-CN' ? '史前动物' : 'Prehistoric animals'
  return table[kind] ?? fallback
}

function normalizeMeta(
  data: Readonly<Record<string, unknown>>,
  kind: string,
  locale: ContentLocale,
  markdownBody: string,
): BlogArticleMeta {
  const str = (key: string, fallback = '') => {
    const value = data[key]
    return typeof value === 'string' && value.trim() ? value.trim() : fallback
  }
  const list = (key: string): readonly string[] =>
    Array.isArray(data[key])
      ? data[key].filter((v): v is string => typeof v === 'string')
      : []

  return {
    title: str('title', headingFromMarkdown(markdownBody)),
    description: str('description'),
    author: str('author', 'WonZoo 编辑部'),
    authorTitle: str('authorTitle', '儿童科普内容团队'),
    authorBio: str('authorBio'),
    publisher: str('publisher', 'WonZoo'),
    datePublished: str('datePublished', new Date().toISOString().slice(0, 10)),
    dateModified: str('dateModified', new Date().toISOString().slice(0, 10)),
    reviewedBy: str('reviewedBy'),
    reviewedOn: str('reviewedOn'),
    section: str('section', sectionLabel(kind, locale)),
    keywords: list('keywords'),
    readingTime: str('readingTime'),
  }
}

function loadArticle(
  animalId: string,
  locale: ContentLocale,
): BlogArticleRecord | undefined {
  const source = articleSources[animalId];
  if (!source) return undefined
  const raw = locale === 'zh-CN' ? source.zhCN : source.en
  const parsed = matter(raw)
  const kind = mainAnimals.find((animal) => animal.id === animalId)?.kind ?? ''
  const meta = normalizeMeta(parsed.data, kind, locale, parsed.content)
  const html = marked.parse(parsed.content) as string
  return {
    animalId,
    locale,
    meta,
    markdown: parsed.content,
    html,
    wordCount: countWords(parsed.content),
  }
}

interface LoadedIndex<T> {
  readonly zhCN: T | undefined
  readonly en: T | undefined
}

const loadedManifest: ReadonlyMap<string, LoadedIndex<BlogArticleRecord>> =
  (() => {
    const map = new Map<string, LoadedIndex<BlogArticleRecord>>()
    for (const animal of mainAnimals) {
      map.set(animal.id, {
        zhCN: loadArticle(animal.id, 'zh-CN'),
        en: loadArticle(animal.id, 'en'),
      })
    }
    return map
  })()

/** Animal ids that have at least one authored article. */
export function getBlogSlugs(): readonly string[] {
  return [...loadedManifest.entries()]
    .filter(([, value]) => value.zhCN ?? value.en)
    .map(([id]) => id)
    .sort()
}

export function getBlogArticle(
  animalId: string,
  contentLocale: ContentLocale,
): BlogArticleRecord | undefined {
  return loadedManifest.get(animalId)?.[
    contentLocale === 'zh-CN' ? 'zhCN' : 'en'
  ]
}

/**
 * Articles for an index page, resolved to the display locale. Sorted newest
 * first by publication date.
 */
export function getBlogIndexEntries(
  locale: Locale,
): readonly BlogIndexEntry[] {
  const contentLocale = contentLocaleFor(locale)
  const entries: BlogIndexEntry[] = []
  for (const animal of mainAnimals) {
    const article = getBlogArticle(animal.id, contentLocale)
    if (!article) continue
    const name = animal.content[contentLocale]?.name?.trim() ?? animal.id
    const classification =
      animal.content[contentLocale]?.classificationLabel?.trim() ?? ''
    entries.push({
      animalId: animal.id,
      animalName: name,
      animalClassificationLabel: classification,
      meta: article.meta,
    })
  }
  return entries.sort((a, b) =>
    b.meta.datePublished.localeCompare(a.meta.datePublished),
  )
}
