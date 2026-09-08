import Link from 'next/link'
import { Home } from 'lucide-react'

import { mainAnimals } from '@/src/content/catalog'
import type { BlogIndexEntry } from '@/src/content/blog/types'
import { blogLabels } from '@/src/components/blog/blog-labels'

// Sticker-book listing, reusing the homepage map-piece vocabulary: warm paper
// fill, white die-cut rim, chunky offset shadow, gentle hand-drawn radius.
const PAGE_CLASS =
  'blog-index mx-auto grid w-[min(860px,calc(100%-28px))] content-start gap-5 ' +
  'pt-[max(28px,env(safe-area-inset-top))] pb-[max(48px,env(safe-area-inset-bottom))]'
const HERO_CLASS =
  'grid gap-[10px] rounded-[34px_40px_32px_42px/40px_32px_42px_34px] ' +
  'border-[3px] border-[#fffdf7] bg-[rgb(255_250_242/92%)] px-[30px] pt-[22px] pb-[24px] ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)] ' +
  'max-[720px]:rotate-[-0.4deg] max-[720px]:rounded-[30px_36px_28px_38px/36px_28px_38px_30px] ' +
  'max-[720px]:px-[20px] max-[720px]:pt-[24px] max-[720px]:pb-[18px]'
const H1_CLASS =
  'm-0 font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.08] text-[#2e7d4f] ' +
  '[text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]'
const INTRO_CLASS =
  'm-0 max-w-[62ch] text-[0.98rem] leading-[1.7] text-[var(--ink-muted)]'
const COUNT_CLASS =
  'm-0 inline-flex w-fit items-center gap-[7px] rounded-full border-2 border-[#fffdf7] ' +
  'bg-[#356859] px-[13px] py-[5px] text-[0.76rem] font-[820] tracking-[0.08em] text-[#fffdf7] ' +
  'shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)]'
const GRID_CLASS = 'grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'
// Top bar: a clear "back to home" sticker button, matching the museum-home
// action pills (frosted paper, white rim, chunky offset shadow).
const TOPBAR_CLASS = 'flex items-center'
const HOME_CLASS =
  'inline-flex h-[46px] items-center gap-[8px] rounded-full border-[2.5px] border-[#fffdf7] ' +
  'bg-[#fffaf2] px-[16px] text-[0.9rem] font-[800] text-[#214c3c] ' +
  'shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)] ' +
  'transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[2px] hover:rotate-[-1deg] ' +
  'active:translate-y-[2px] active:shadow-[0_1px_0_rgb(60_90_60/16%),0_4px_10px_rgb(30_50_30/14%)]'
const CARD_CLASS =
  'group relative grid grid-cols-[72px_minmax(0,1fr)] items-center gap-[14px] ' +
  'overflow-hidden rounded-[26px] border-[3px] border-[#fffdf7] bg-[#fffaf2] p-[12px] ' +
  'text-[var(--ink)] shadow-[0_4px_0_rgb(60_90_60/10%),0_14px_30px_rgb(30_50_30/10%)] ' +
  'transition-[transform,border-color,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,#356859_48%,#fffdf7)] ' +
  'hover:shadow-[0_7px_0_rgb(60_90_60/12%),0_22px_40px_rgb(30_50_30/16%)] ' +
  'active:translate-y-[2px] active:scale-[0.98]'
const THUMB_CLASS =
  'block h-[72px] w-[72px] overflow-hidden rounded-[20px] border-[3px] border-[#fffdf7] ' +
  'bg-[#ece7d5] shadow-[0_3px_8px_rgb(30_50_30/14%)]'
const CARD_BODY_CLASS = 'grid min-w-0 gap-[4px]'
const CARD_TITLE_CLASS =
  'm-0 truncate text-[1.02rem] font-[850] leading-[1.25] text-[#214c3c]'
const CARD_DATE_CLASS =
  'm-0 text-[0.72rem] font-[650] tracking-[0.04em] text-[var(--ink-muted)]'

function thumbnailFor(animalId: string): string | null {
  const animal = mainAnimals.find((item) => item.id === animalId)
  return animal?.assets.thumbnail ?? null
}

export function BlogIndexView({
  locale,
  entries,
}: {
  readonly locale: string
  readonly entries: readonly BlogIndexEntry[]
}) {
  const labels = blogLabels(locale as Parameters<typeof blogLabels>[0])
  return (
    <div className={PAGE_CLASS}>
      <nav className={TOPBAR_CLASS}>
        <Link className={HOME_CLASS} href={`/${locale}/`}>
          <Home aria-hidden="true" size={18} strokeWidth={2.3} />
          <span>{labels.backToHome}</span>
        </Link>
      </nav>

      <header className={HERO_CLASS}>
        <p className={COUNT_CLASS}>{labels.countLabel(entries.length)}</p>
        <h1 className={H1_CLASS}>{labels.heading}</h1>
        <p className={INTRO_CLASS}>{labels.intro}</p>
      </header>

      {entries.length === 0 ? (
        <p className={INTRO_CLASS}>{labels.empty}</p>
      ) : (
        <section className={GRID_CLASS}>
          {entries.map((entry) => {
            const thumb = thumbnailFor(entry.animalId)
            const date = entry.meta.dateModified || entry.meta.datePublished
            return (
              <Link
                key={entry.animalId}
                className={CARD_CLASS}
                href={`/${locale}/blog/${entry.animalId}/`}
              >
                {thumb && (
                  <img
                    alt={entry.animalName}
                    className={THUMB_CLASS}
                    src={thumb}
                  />
                )}
                <div className={CARD_BODY_CLASS}>
                  <h2 className={CARD_TITLE_CLASS}>{entry.animalName}</h2>
                  <p className={CARD_DATE_CLASS}>{date}</p>
                  <p className={CARD_DATE_CLASS}>{entry.meta.readingTime}</p>
                </div>
              </Link>
            )
          })}
        </section>
      )}
    </div>
  )
}
