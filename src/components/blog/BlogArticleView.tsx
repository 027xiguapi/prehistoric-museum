import Link from 'next/link'

import type { AnimalContent } from '@/src/content/types'
import type { BlogArticleRecord } from '@/src/content/blog/types'
import type { Locale } from '@/src/i18n/locale'
import { blogLabels } from '@/src/components/blog/blog-labels'
import { BackButton } from '@/src/components/buttons/BackButton'

const PAGE_CLASS =
  'blog-article mx-auto grid w-[min(760px,calc(100%-28px))] content-start gap-5 ' +
  'pt-[max(28px,env(safe-area-inset-top))] pb-[max(48px,env(safe-area-inset-bottom))]'
const TOPBAR_CLASS =
  'grid grid-cols-[auto_1fr_auto] items-center gap-3 max-[720px]:gap-2'
const BACK_CLASS =
  'inline-flex h-11 w-11 items-center justify-center rounded-full ' +
  'border-[2.5px] border-[#fffdf7] bg-[#fffaf2] text-[#28493a] ' +
  'shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)] ' +
  'transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[2px] hover:rotate-[-5deg] ' +
  'active:translate-y-[2px] active:shadow-[0_1px_0_rgb(60_90_60/16%),0_4px_10px_rgb(30_50_30/14%)]'
const TOPBAR_LINK_CLASS =
  'justify-self-end text-[0.86rem] font-[800] tracking-[0.02em] text-[#214c3c] ' +
  'underline decoration-[#cfe0b4] decoration-2 underline-offset-4 hover:decoration-[#356859]'
const HERO_CLASS =
  'grid gap-[12px] rounded-[34px_40px_32px_42px/40px_32px_42px_34px] ' +
  'border-[3px] border-[#fffdf7] bg-[rgb(255_250_242/92%)] px-[30px] pt-[22px] pb-[24px] ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)] ' +
  'max-[720px]:rotate-[-0.4deg] max-[720px]:rounded-[30px_36px_28px_38px/36px_28px_38px_30px] ' +
  'max-[720px]:px-[20px] max-[720px]:pt-[24px] max-[720px]:pb-[18px]'
const SECTION_PILL_CLASS =
  'm-0 inline-flex w-fit items-center rounded-full border-2 border-[#fffdf7] bg-[#356859] ' +
  'px-[13px] py-[5px] text-[0.76rem] font-[820] tracking-[0.08em] text-[#fffdf7] ' +
  'shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)]'
const H1_CLASS =
  'm-0 font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-normal leading-[1.12] text-[#2e7d4f] ' +
  '[text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]'
const META_CLASS =
  'm-0 flex flex-wrap gap-x-[14px] gap-y-[6px] text-[0.82rem] font-[650] text-[var(--ink-muted)]'
const META_ITEM_CLASS = 'm-0'
const FACT_CLASS =
  'grid gap-[3px] rounded-[24px] border-[2.5px] border-[#fffdf7] bg-[#f5efdd] p-[18px] ' +
  'shadow-[0_4px_0_rgb(60_90_60/8%),0_12px_24px_rgb(30_50_30/8%)]'
const FACT_HEADING_CLASS =
  'm-0 text-[0.92rem] font-[850] text-[#214c3c]'
const FACT_DL_CLASS =
  'm-0 grid grid-cols-[auto_1fr] gap-x-[14px] gap-y-[6px] text-[0.9rem] leading-[1.6]'
const FACT_DT_CLASS = 'm-0 font-[750] text-[var(--ink-muted)]'
const FACT_DD_CLASS = 'm-0 min-w-0 text-[var(--ink)]'
const PROSE_CLASS = 'blog-prose'
const CTA_CLASS =
  'inline-flex w-fit items-center gap-[8px] rounded-full border-[2.5px] border-[#fffdf7] ' +
  'bg-[#356859] px-[18px] py-[10px] text-[0.92rem] font-[820] text-[#fffdf7] ' +
  'shadow-[0_4px_0_rgb(60_90_60/16%),0_12px_22px_rgb(30_50_30/16%)] ' +
  'transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[2px] hover:shadow-[0_6px_0_rgb(60_90_60/16%),0_18px_30px_rgb(30_50_30/18%)] ' +
  'active:translate-y-[2px] active:shadow-[0_1px_0_rgb(60_90_60/16%),0_4px_10px_rgb(30_50_30/14%)]'

const dietLabel = {
  herbivore: 'dietHerbivore',
  carnivore: 'dietCarnivore',
  omnivore: 'dietOmnivore',
  unknown: 'dietUnknown',
} as const

function sizeText(
  facts: AnimalContent['facts'],
  sizeKind: ReturnType<typeof labelFor>,
) {
  const s = facts.size
  const kind =
    s.kind === 'body-length'
      ? sizeKind.sizeBodyLength
      : s.kind === 'shoulder-height'
        ? sizeKind.sizeShoulderHeight
        : s.kind === 'wingspan'
          ? sizeKind.sizeWingspan
          : sizeKind.sizeGroupRange
  return `${kind} ${s.minMeters}–${s.maxMeters} ${sizeKind.meters}`
}

function labelFor(locale: Locale) {
  return blogLabels(locale)
}

export function BlogArticleView({
  locale,
  article,
  animal,
}: {
  readonly locale: Locale
  readonly article: BlogArticleRecord
  readonly animal: {
    readonly id: string
    readonly status: string
    readonly name: string
    readonly classificationLabel: string
    readonly facts: AnimalContent['facts']
    readonly sources: AnimalContent['sources']
  }
}) {
  const labels = labelFor(locale)
  const facts = animal.facts
  const size = sizeText(facts, labels)
  const diet = labels[dietLabel[facts.diet]]
  const regions = facts.discoveryRegions.join(
    locale === 'zh-CN' ? '、' : ', ',
  )
  const meta = article.meta

  return (
    <article className={PAGE_CLASS}>
      <nav className={TOPBAR_CLASS}>
        <BackButton
          className={BACK_CLASS}
          href={`/${locale}/blog/`}
          label={labels.backToBlog}
        />
        <span />
        <Link className={TOPBAR_LINK_CLASS} href={`/${locale}/`}>
          {labels.backToMuseum}
        </Link>
      </nav>

      <header className={HERO_CLASS}>
        <p className={SECTION_PILL_CLASS}>{meta.section}</p>
        <h1 className={H1_CLASS}>{meta.title}</h1>
        <ul className={META_CLASS}>
          <li className={META_ITEM_CLASS}>
            {labels.authorTitle}：{meta.author} · {meta.authorTitle}
          </li>
          <li className={META_ITEM_CLASS}>
            {labels.publishedLabel} {meta.datePublished}
          </li>
          <li className={META_ITEM_CLASS}>
            {labels.updated} {meta.dateModified}
          </li>
          <li className={META_ITEM_CLASS}>
            {labels.readingTime} {meta.readingTime}
          </li>
        </ul>
      </header>

      <section className={FACT_CLASS}>
        <h2 className={FACT_HEADING_CLASS}>{labels.factCard}</h2>
        <dl className={FACT_DL_CLASS}>
          <dt className={FACT_DT_CLASS}>{labels.fieldClassification}</dt>
          <dd className={FACT_DD_CLASS}>{animal.classificationLabel}</dd>
          <dt className={FACT_DT_CLASS}>{labels.fieldPeriod}</dt>
          <dd className={FACT_DD_CLASS}>{facts.period}</dd>
          <dt className={FACT_DT_CLASS}>{labels.fieldRegions}</dt>
          <dd className={FACT_DD_CLASS}>{regions}</dd>
          <dt className={FACT_DT_CLASS}>{labels.fieldSize}</dt>
          <dd className={FACT_DD_CLASS}>{size}</dd>
          <dt className={FACT_DT_CLASS}>{labels.fieldDiet}</dt>
          <dd className={FACT_DD_CLASS}>{diet}</dd>
        </dl>
      </section>

      {/* Trusted, self-authored markdown, rendered on the server. */}
      <section
        className={PROSE_CLASS}
        dangerouslySetInnerHTML={{ __html: article.html }}
      />

      {animal.sources.length > 0 && (
        <section className={FACT_CLASS}>
          <h2 className={FACT_HEADING_CLASS}>{labels.sources}</h2>
          <ul className="blog-sources">
            {animal.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} rel="noreferrer" target="_blank">
                  {source.title}
                </a>
                <span> · {source.accessedOn}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <aside className={FACT_CLASS}>
        <h2 className={FACT_HEADING_CLASS}>{labels.authorTitle}</h2>
        <p className="m-0 text-[0.9rem] leading-[1.7] text-[var(--ink)]">
          {meta.author} — {meta.authorTitle}
        </p>
        {meta.authorBio && (
          <p className="m-0 text-[0.88rem] leading-[1.7] text-[var(--ink-muted)]">
            {meta.authorBio}
          </p>
        )}
        {meta.reviewedBy && (
          <p className="m-0 text-[0.82rem] font-[700] text-[var(--ink-muted)]">
            {labels.reviewerTitle}：{meta.reviewedBy} ·{' '}
            {labels.reviewedOnLabel} {meta.reviewedOn}
          </p>
        )}
      </aside>

      {animal.status === 'published' && (
        <Link className={CTA_CLASS} href={`/${locale}/animal/${animal.id}/`}>
          {labels.exhibitCta(animal.name)}
        </Link>
      )}
    </article>
  )
}
