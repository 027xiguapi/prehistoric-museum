import { LifeBuoy } from 'lucide-react'

import { BackButton } from '@/src/components/buttons/BackButton'
import type { Locale } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'
import { technicalSupportFor } from '@/src/i18n/technical-support'

// The document pages share the homepage park-map gradient, painted by the
// global `body:has(.config-page)` rule in styles.css, so the page itself
// stays transparent.
const PAGE_CLASS =
  'config-page mx-auto grid min-h-dvh w-[min(720px,calc(100%-28px))] content-start gap-4 pt-[max(28px,env(safe-area-inset-top))] pb-[max(40px,env(safe-area-inset-bottom))]'
// Round sticker back button, matching the homepage compass sticker.
const BACK_CLASS =
  'ml-[30px] inline-flex h-[42px] w-[42px] items-center justify-center justify-self-start rounded-full ' +
  'border-[2.5px] border-[#fffdf7] bg-[#fffaf2] text-[#28493a] ' +
  'shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)] ' +
  'transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[2px] hover:rotate-[-5deg] ' +
  'active:translate-y-[2px] active:shadow-[0_1px_0_rgb(60_90_60/16%),0_4px_10px_rgb(30_50_30/14%)] ' +
  'focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-2 ' +
  'max-[720px]:ml-[20px] max-[720px]:h-11 max-[720px]:w-11'
// Sticker-sheet header: white die-cut rim, hand-drawn radius and the chunky
// offset shadow used by the park-map signs on the homepage.
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

/**
 * Public, static technical-support page. Reachable at a public URL for App
 * Store review, with an FAQ, device requirements and a contact route in the
 * route's locale.
 */
export function TechnicalSupportPageView({ locale }: { readonly locale: Locale }) {
  const messages = messagesFor(locale)
  const support = technicalSupportFor(locale)

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
            <LifeBuoy aria-hidden="true" size={15} strokeWidth={2.4} />
            {messages.museumName}
          </p>
          <h1 className="mt-[10px] font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.08] text-[#2e7d4f] [text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]">
            {support.title}
          </h1>
        </div>
      </header>

      <div className="grid gap-[18px]">
        {support.sections.map((section) => (
          <section className={SECTION_CLASS} key={section.title}>
            <div className="grid gap-[2px]">
              <h2 className={H2_CLASS}>{section.title}</h2>
            </div>
            {section.questions && section.questions.length > 0 ? (
              <div className="grid gap-[14px]">
                {section.questions.map((item) => (
                  <div className="grid gap-[4px]" key={item.question}>
                    <h3 className="m-0 text-[0.94rem] font-[820] leading-[1.4] text-[#214c3c]">
                      {item.question}
                    </h3>
                    <p className="m-0 text-[0.9rem] leading-[1.7] text-[var(--ink)]">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={TEXT_CLASS}>
                {section.paragraphs.map((paragraph) => (
                  <p
                    className="m-0 text-[0.92rem] leading-[1.7] text-[var(--ink)]"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className={SECTION_CLASS}>
          <div className="grid gap-[2px]">
            <h2 className={H2_CLASS}>{support.contactLabel}</h2>
          </div>
          <div className={TEXT_CLASS}>
            <p className="m-0 text-[0.92rem] leading-[1.7] text-[var(--ink)]">
              {support.contactIntro}
            </p>
            <p className="m-0 text-[0.92rem] leading-[1.7] text-[var(--ink)]">
              <a
                className="font-[720] text-[var(--leaf)] no-underline hover:underline"
                href={`mailto:${support.contactEmail}`}
              >
                {support.contactEmail}
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
