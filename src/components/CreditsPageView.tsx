import { ExternalLink, Heart } from 'lucide-react'

import { BackButton } from '@/src/components/buttons/BackButton'
import { DocumentFooter } from '@/src/components/DocumentFooter'
import { credits } from '@/src/content/credits.generated'
import { getAnimalById } from '@/src/content/catalog'
import type { AssetKind } from '@/src/content/types'
import { creditsPageFor } from '@/src/i18n/credits'
import type { Locale } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'

// The document pages share the homepage park-map gradient, painted by the
// global `body:has(.config-page)` rule in styles.css.
const PAGE_CLASS =
  'config-page mx-auto grid min-h-dvh w-[min(720px,calc(100%-28px))] content-start gap-4 pt-[max(28px,env(safe-area-inset-top))] pb-[max(40px,env(safe-area-inset-bottom))]'
const BACK_CLASS =
  'ml-[30px] inline-flex h-[42px] w-[42px] items-center justify-center justify-self-start rounded-full ' +
  'border-[2.5px] border-[#fffdf7] bg-[#fffaf2] text-[#28493a] ' +
  'shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)] ' +
  'transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[2px] hover:rotate-[-5deg] ' +
  'active:translate-y-[2px] active:shadow-[0_1px_0_rgb(60_90_60/16%),0_4px_10px_rgb(30_50_30/14%)] ' +
  'focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-2 ' +
  'max-[720px]:ml-[20px] max-[720px]:h-11 max-[720px]:w-11'
const HERO_CLASS =
  'flex items-start justify-between gap-5 rounded-[34px_40px_32px_42px/40px_32px_42px_34px] ' +
  'border-[3px] border-[#fffdf7] bg-[rgb(255_250_242/92%)] px-[26px] pt-[22px] pb-[20px] ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)] ' +
  'max-[720px]:flex-col max-[720px]:rotate-[-0.4deg] ' +
  'max-[720px]:rounded-[30px_36px_28px_38px/36px_28px_38px_30px] ' +
  'max-[720px]:px-[20px] max-[720px]:pt-[24px] max-[720px]:pb-[16px]'
const SECTION_CLASS = 'grid gap-2 px-[30px] max-[720px]:px-[20px]'
const H2_CLASS = 'm-0 text-[1.02rem] font-[850] leading-[1.25] text-[#214c3c]'
const TEXT_CLASS = 'grid gap-[10px]'
const ITEM_CLASS =
  'grid gap-[3px] rounded-[18px] border-2 border-[#fffdf7] bg-[rgb(255_250_242/88%)] px-[16px] py-[12px] shadow-[0_2px_0_rgb(60_90_60/8%)]'

/**
 * Packages only carry zh-CN and en exhibit copy, so Traditional Chinese reads
 * the zh-CN name and Japanese reads the English name — the same fallback the
 * exhibit routes use for their own copy.
 */
function animalNameFor(locale: Locale, animalId: string): string | undefined {
  const animal = getAnimalById(animalId)
  if (!animal) {
    return undefined
  }
  const contentLocale =
    locale === 'zh-TW' ? 'zh-CN' : locale === 'ja' ? 'en' : locale
  return (
    animal.content[contentLocale]?.name ??
    animal.content['zh-CN']?.name ??
    animal.content.en?.name
  )
}

function countByKind(kind: AssetKind): number {
  return credits.filter((entry) => entry.assetKind === kind).length
}

/**
 * Public, static credits and attribution page.
 *
 * The 3D models in the exhibits are third-party assets whose open licences
 * require attribution, so this page publishes the author and original source
 * URL of every model used by a published exhibit. It is deliberately rendered
 * from `credits.generated.ts` rather than hand-maintained, so it cannot drift
 * away from the provenance records that `npm run generate:credits` validates.
 */
export function CreditsPageView({ locale }: { readonly locale: Locale }) {
  const messages = messagesFor(locale)
  const copy = creditsPageFor(locale)

  const models = credits.filter((entry) => entry.assetKind === 'model')

  return (
    <main className={PAGE_CLASS}>
      <BackButton
        className={BACK_CLASS}
        href={`/${locale}`}
        label={messages.collection.back}
      />

      <header className={HERO_CLASS}>
        <div>
          <p className="m-0 inline-flex items-center gap-[7px] rounded-full border-2 border-[#fffdf7] bg-[var(--leaf)] px-[13px] py-[5px] text-[0.76rem] font-[820] tracking-[0.08em] text-[#fffdf7] shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)]">
            <Heart aria-hidden="true" size={15} strokeWidth={2.4} />
            {messages.museumName}
          </p>
          <h1 className="mt-[10px] font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.08] text-[#2e7d4f] [text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]">
            {copy.title}
          </h1>
          <p className="mt-2 text-[0.9rem] text-[var(--ink-muted)]">
            {copy.summary}
          </p>
        </div>
      </header>

      <div className="grid gap-[18px]">
        <section className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>{copy.modelsTitle}</h2>
          <p className="m-0 text-[0.92rem] leading-[1.7] text-[var(--ink)]">
            {copy.modelsIntro}
          </p>
          <ul className="m-0 grid list-none gap-[8px] p-0">
            {models.map((entry) => {
              const animalName = animalNameFor(locale, entry.animalId)
              return (
                <li className={ITEM_CLASS} key={entry.id}>
                  <a
                    className="inline-flex items-center gap-[6px] text-[0.94rem] font-[760] leading-[1.35] text-[var(--leaf)] no-underline hover:underline"
                    href={entry.sourceUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {entry.sourceTitle}
                    <ExternalLink aria-hidden="true" size={14} strokeWidth={2.6} />
                  </a>
                  <p className="m-0 text-[0.86rem] leading-[1.55] text-[var(--ink)]">
                    {entry.author}
                    {animalName ? ` · ${animalName}` : ''}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>{copy.generatedTitle}</h2>
          <p className="m-0 text-[0.92rem] leading-[1.7] text-[var(--ink)]">
            {copy.generatedIntro}
          </p>
          <ul className={TEXT_CLASS}>
            <li className="text-[0.92rem] leading-[1.7] text-[var(--ink)]">
              <strong className="font-[760]">
                {copy.kindLabels.narration}
              </strong>
              {` (${countByKind('narration')}) — ${copy.generatedNarration}`}
            </li>
            <li className="text-[0.92rem] leading-[1.7] text-[var(--ink)]">
              <strong className="font-[760]">
                {copy.kindLabels.background}
              </strong>
              {` (${countByKind('background')}) — ${copy.generatedBackground}`}
            </li>
            <li className="text-[0.92rem] leading-[1.7] text-[var(--ink)]">
              <strong className="font-[760]">
                {copy.kindLabels.poster} · {copy.kindLabels.thumbnail}
              </strong>
              {` (${countByKind('poster')} · ${countByKind('thumbnail')}) — ${copy.generatedDerived}`}
            </li>
            <li className="text-[0.92rem] leading-[1.7] text-[var(--ink)]">
              {copy.generatedProvinceMaps}
            </li>
          </ul>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>{copy.licensingTitle}</h2>
          <p className="m-0 text-[0.92rem] leading-[1.7] text-[var(--ink)]">
            {copy.licensingBody}
          </p>
        </section>
      </div>

      <DocumentFooter locale={locale} />
    </main>
  )
}
