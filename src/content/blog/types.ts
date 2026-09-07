import type { ContentLocale } from '@/src/content/types'

/**
 * Front-matter metadata for a single blog article. Kept deliberately
 * expressive so the article page can surface every one of the E-E-A-T
 * (Experience, Expertise, Authoritativeness, Trustworthiness) signals in both
 * the rendered page and the Article structured data.
 */
export interface BlogArticleMeta {
  readonly title: string
  readonly description: string
  /** Author byline shown on the page and in schema.org Author. */
  readonly author: string
  /** The author's expertise credential (jobTitle / background). */
  readonly authorTitle: string
  readonly authorBio: string
  readonly publisher: string
  readonly datePublished: string
  readonly dateModified: string
  /** The reviewer's credential — a trust signal. */
  readonly reviewedBy: string
  readonly reviewedOn: string
  readonly section: string
  readonly keywords: readonly string[]
  readonly readingTime: string
}

/**
 * A parsed blog article loaded from its markdown source for one content
 * locale. `html` is the trusted, server-rendered markdown output.
 */
export interface BlogArticleRecord {
  readonly animalId: string
  readonly locale: ContentLocale
  readonly meta: BlogArticleMeta
  readonly markdown: string
  readonly html: string
  readonly wordCount: number
}

/** An index/listing entry for one animal, resolved to a display locale. */
export interface BlogIndexEntry {
  readonly animalId: string
  readonly animalName: string
  readonly animalClassificationLabel: string
  readonly meta: BlogArticleMeta
}
