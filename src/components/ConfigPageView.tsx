'use client'

import Link from 'next/link'
import {
  Check,
  ChevronRight,
  Info,
  Languages,
  LifeBuoy,
  Moon,
  Settings,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { useSyncExternalStore } from 'react'

import { CloseButton } from '@/src/components/buttons/CloseButton'
import { useI18n } from '@/src/i18n/I18nProvider'
import {
  systemLocale,
  type Locale,
  type LocalePreference,
} from '@/src/i18n/locale'

const languageChoices: readonly LocalePreference[] = [
  'system',
  'zh-CN',
  'zh-TW',
  'en',
]

const ZH_FONT_STACK =
  '"Noto Sans SC Variable", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
const ZH_TW_FONT_STACK =
  '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Noto Sans SC Variable", system-ui, sans-serif'
const EN_FONT_STACK =
  '"Nunito Variable", "Avenir Next", Avenir, system-ui, sans-serif'

// The document pages share the homepage park-map gradient, painted by the
// global `body:has(.config-page)` rule in styles.css, so the page itself
// stays transparent.
const PAGE_CLASS =
  'config-page mx-auto grid min-h-dvh w-[min(720px,calc(100%-28px))] content-start gap-4 pt-[max(28px,env(safe-area-inset-top))] pb-[max(40px,env(safe-area-inset-bottom))] max-[720px]:gap-[18px]'
// Round sticker close button, matching the homepage compass sticker.
const CLOSE_CLASS =
  'mr-[30px] inline-flex h-[42px] w-[42px] items-center justify-center justify-self-end rounded-full ' +
  'border-[2.5px] border-[#fffdf7] bg-[#fffaf2] text-[#28493a] ' +
  'shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)] ' +
  'transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-[2px] hover:rotate-[5deg] ' +
  'active:translate-y-[2px] active:shadow-[0_1px_0_rgb(60_90_60/16%),0_4px_10px_rgb(30_50_30/14%)] ' +
  'focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-2 ' +
  'max-[720px]:mr-[20px] max-[720px]:h-11 max-[720px]:w-11'
// Sticker-sheet header: white die-cut rim, hand-drawn radius and the chunky
// offset shadow used by the park-map signs on the homepage.
const HERO_CLASS =
  'flex items-start justify-between gap-5 rounded-[34px_40px_32px_42px/40px_32px_42px_34px] ' +
  'border-[3px] border-[#fffdf7] bg-[rgb(255_250_242/92%)] px-[26px] pt-[22px] pb-[20px] ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)] ' +
  'max-[720px]:flex-col max-[720px]:rotate-[-0.4deg] ' +
  'max-[720px]:rounded-[30px_36px_28px_38px/36px_28px_38px_30px] ' +
  'max-[720px]:px-[20px] max-[720px]:pt-[24px] max-[720px]:pb-[16px]'
const SECTION_CLASS = 'grid gap-2 px-[30px] max-[720px]:px-[2px]'
const HEAD_CLASS = 'grid gap-[2px]'
const H2_CLASS =
  'm-0 flex items-center gap-[10px] text-[1.02rem] font-[850] leading-[1.25] text-[#214c3c] max-[720px]:text-[1.08rem]'
// Round section icon badge, coloured like the homepage map sign icons.
const ICON_BADGE_CLASS =
  'flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-2 ' +
  'border-[#fffdf7] text-[#fffdf7] shadow-[0_2px_0_rgb(60_90_60/18%),0_4px_10px_rgb(30_50_30/16%)]'
// Option groups are die-cut sticker cards: white rim, warm paper fill,
// chunky bottom edge.
const GROUP_CLASS =
  'grid overflow-hidden rounded-[24px] border-[3px] border-[#fffdf7] bg-[#fffaf2] ' +
  'shadow-[0_4px_0_rgb(60_90_60/10%),0_14px_30px_rgb(30_50_30/10%)] ' +
  'max-[720px]:rounded-[26px_30px_24px_30px/28px_24px_30px_26px]'
const ROW_CLASS =
  'flex min-h-[54px] w-full items-center justify-between gap-[14px] rounded-none border-0 bg-transparent px-4 py-[10px] text-left text-[0.92rem] font-[720] text-[var(--ink)] [&:not(:first-child)]:shadow-[inset_0_1px_0_rgb(46_72_58/10%)] max-[720px]:min-h-[62px] max-[720px]:px-[18px] max-[720px]:text-[0.96rem]'
// Tappable rows get a springy press so they feel like a toy.
const ROW_INTERACTIVE_CLASS =
  'cursor-pointer transition-[transform,background-color] duration-[180ms] ' +
  'ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-[rgb(255_255_255/55%)] ' +
  'active:scale-[0.99] focus-visible:-outline-offset-2 focus-visible:outline-2 ' +
  'focus-visible:outline-[var(--focus)]'
const COMING_SOON_CLASS =
  'inline-flex items-center whitespace-nowrap rounded-full border-2 border-[#fffdf7] ' +
  'bg-[var(--sun)] px-[10px] py-[3px] text-[0.68rem] font-[820] tracking-[0.04em] ' +
  'text-[#6b4400] shadow-[inset_0_-2px_rgb(0_0_0/8%)]'
const GO_BADGE_CLASS =
  'grid h-[34px] w-[34px] place-items-center rounded-full border-2 border-[#fffdf7] ' +
  'bg-[var(--leaf)] text-[#fffdf7] ' +
  'shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)] ' +
  'max-[720px]:h-[40px] max-[720px]:w-[40px]'

function subscribeToSystemLanguage(onChange: () => void): () => void {
  window.addEventListener('languagechange', onChange)
  return () => window.removeEventListener('languagechange', onChange)
}

function readSystemLocale(): Locale {
  return systemLocale(
    navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language],
  )
}

// The server render cannot know the browser language.
function unresolvedSystemLocale(): Locale | null {
  return null
}

// The "follow system" row names the language the system resolves to, which
// only exists in the browser; useSyncExternalStore keeps the first paint
// hydration-stable and reveals the resolved name right after hydration.
function SystemLanguageLabel() {
  const { locale, messages } = useI18n()
  const resolved = useSyncExternalStore(
    subscribeToSystemLanguage,
    readSystemLocale,
    unresolvedSystemLocale,
  )

  if (resolved === null) {
    return <span lang={locale}>{messages.language.system}</span>
  }
  const resolvedLabel =
    resolved === 'zh-CN'
      ? messages.language.chinese
      : resolved === 'zh-TW'
        ? messages.language.traditionalChinese
        : messages.language.english
  const fullLabel = messages.language.systemResolved(resolvedLabel)
  const resolvedLabelStart = fullLabel.indexOf(resolvedLabel)
  return (
    <span lang={locale}>
      {fullLabel.slice(0, resolvedLabelStart)}
      <span
        lang={resolved}
        style={{
          fontFamily:
            resolved === 'zh-CN'
              ? ZH_FONT_STACK
              : resolved === 'zh-TW'
                ? ZH_TW_FONT_STACK
                : EN_FONT_STACK,
        }}
      >
        {resolvedLabel}
      </span>
      {fullLabel.slice(resolvedLabelStart + resolvedLabel.length)}
    </span>
  )
}

function LanguageChoiceLabel({
  choice,
}: {
  readonly choice: LocalePreference
}) {
  const { messages } = useI18n()
  if (choice === 'system') {
    return <SystemLanguageLabel />
  }
  return (
    <span
      lang={choice}
      style={{
        fontFamily:
          choice === 'zh-CN'
            ? ZH_FONT_STACK
            : choice === 'zh-TW'
              ? ZH_TW_FONT_STACK
              : EN_FONT_STACK,
      }}
    >
      {choice === 'zh-CN'
        ? messages.language.chinese
        : choice === 'zh-TW'
          ? messages.language.traditionalChinese
          : messages.language.english}
    </span>
  )
}

function LanguageRow({ choice }: { readonly choice: LocalePreference }) {
  const { preference, setPreference } = useI18n()
  const selected = preference === choice
  return (
    <button
      aria-checked={selected}
      className={`${ROW_CLASS} ${ROW_INTERACTIVE_CLASS} ${
        selected ? 'bg-[rgb(255_255_255/78%)]' : ''
      }`}
      onClick={() => setPreference(choice)}
      role="radio"
      type="button"
    >
      <span className="flex min-w-0 items-center gap-[10px]">
        <span
          aria-hidden="true"
          className={`relative block h-[20px] w-[20px] shrink-0 rounded-full border-2 bg-[#fffdf7] max-[720px]:h-[24px] max-[720px]:w-[24px] ${
            selected ? 'border-[var(--leaf)]' : 'border-[rgb(44_75_60/45%)]'
          }`}
        >
          {selected ? (
            <span className="absolute inset-[3px] rounded-full bg-[var(--leaf)] max-[720px]:inset-[4px]" />
          ) : null}
        </span>
        <LanguageChoiceLabel choice={choice} />
      </span>
      <span
        aria-hidden="true"
        className={`inline-flex w-[18px] justify-center text-[var(--leaf)] ${
          selected ? '' : 'invisible'
        }`}
      >
        <Check size={17} strokeWidth={3} />
      </span>
    </button>
  )
}

function ConfigContent({ version }: { readonly version: string }) {
  const { locale, messages } = useI18n()

  return (
    <main className={PAGE_CLASS}>
      <CloseButton
        className={CLOSE_CLASS}
        href={`/${locale}`}
        label={messages.config.close}
      />
      <header className={HERO_CLASS}>
        <div>
          <p className="m-0 inline-flex items-center gap-[7px] rounded-full border-2 border-[#fffdf7] bg-[var(--leaf)] px-[13px] py-[5px] text-[0.76rem] font-[820] tracking-[0.08em] text-[#fffdf7] shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)]">
            <Settings aria-hidden="true" size={15} strokeWidth={2.4} />
            {messages.museumName}
          </p>
          <h1 className="mt-[10px] font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.08] text-[#2e7d4f] [text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]">
            {messages.config.title}
          </h1>
          <p className="mt-2 text-[0.9rem] text-[var(--ink-muted)]">
            {messages.config.intro}
          </p>
        </div>
      </header>

      <section
        aria-labelledby="config-language-title"
        className={SECTION_CLASS}
      >
        <div className={HEAD_CLASS}>
          <h2 id="config-language-title" className={H2_CLASS}>
            <span
              aria-hidden="true"
              className={`${ICON_BADGE_CLASS} bg-[#3d8bd9]`}
            >
              <Languages size={15} strokeWidth={2.4} />
            </span>
            {messages.config.languageTitle}
          </h2>
          <p className="m-0 text-[0.8rem] text-[var(--ink-muted)]">
            {messages.config.languageHint}
          </p>
        </div>
        <div
          aria-label={messages.config.languageTitle}
          className={GROUP_CLASS}
          role="radiogroup"
        >
          {languageChoices.map((choice) => (
            <LanguageRow choice={choice} key={choice} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="config-appearance-title"
        className={SECTION_CLASS}
      >
        <div className={HEAD_CLASS}>
          <h2 id="config-appearance-title" className={H2_CLASS}>
            <span
              aria-hidden="true"
              className={`${ICON_BADGE_CLASS} bg-[#9b7ed9]`}
            >
              <Moon size={15} strokeWidth={2.4} />
            </span>
            {messages.config.appearanceTitle}
          </h2>
          <p className="m-0 text-[0.8rem] text-[var(--ink-muted)]">
            {messages.config.appearanceHint}
          </p>
        </div>
        <div className={GROUP_CLASS}>
          <div
            aria-disabled="true"
            className={`${ROW_CLASS} text-[rgb(32_53_47/55%)]`}
          >
            <span className="flex min-w-0 items-center gap-[10px]">
              {messages.config.darkMode}
            </span>
            <span className="inline-flex shrink-0 items-center gap-[10px]">
              <span className={COMING_SOON_CLASS}>
                {messages.config.comingSoon}
              </span>
              <span
                aria-hidden="true"
                className="relative inline-block h-[24px] w-[40px] shrink-0 rounded-full bg-[rgb(32_53_47/18%)] max-[720px]:h-[28px] max-[720px]:w-[48px]"
              >
                <span className="absolute top-[3px] left-[3px] h-[18px] w-[18px] rounded-full bg-[#fffdf7] shadow-[0_1px_3px_rgb(18_32_25/28%)] max-[720px]:h-[22px] max-[720px]:w-[22px]" />
              </span>
            </span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="config-account-title"
        className={SECTION_CLASS}
      >
        <div className={HEAD_CLASS}>
          <h2 id="config-account-title" className={H2_CLASS}>
            <span
              aria-hidden="true"
              className={`${ICON_BADGE_CLASS} bg-[#c98a2b]`}
            >
              <UserRound size={15} strokeWidth={2.4} />
            </span>
            {messages.config.accountTitle}
          </h2>
          <p className="m-0 text-[0.8rem] text-[var(--ink-muted)]">
            {messages.config.accountHint}
          </p>
        </div>
        <div className={GROUP_CLASS}>
          <div
            aria-disabled="true"
            className={`${ROW_CLASS} text-[rgb(32_53_47/55%)]`}
          >
            <span className="flex min-w-0 items-center gap-[10px]">
              {messages.config.accountAction}
            </span>
            <span className="inline-flex shrink-0 items-center gap-[10px]">
              <span className={COMING_SOON_CLASS}>
                {messages.config.comingSoon}
              </span>
            </span>
          </div>
        </div>
      </section>

      <section aria-labelledby="config-about-title" className={SECTION_CLASS}>
        <div className={HEAD_CLASS}>
          <h2 id="config-about-title" className={H2_CLASS}>
            <span
              aria-hidden="true"
              className={`${ICON_BADGE_CLASS} bg-[#3f9db0]`}
            >
              <Info size={15} strokeWidth={2.4} />
            </span>
            {messages.config.aboutTitle}
          </h2>
        </div>
        <div className={GROUP_CLASS}>
          <div className={ROW_CLASS}>
            <span className="flex min-w-0 items-center gap-[10px]">
              {messages.config.versionLabel}
            </span>
            <span className="inline-flex shrink-0 items-center gap-[10px]">
              <span className="font-[680] tabular-nums text-[var(--ink-muted)]">
                v{version}
              </span>
            </span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="config-privacy-title"
        className={SECTION_CLASS}
      >
        <div className={HEAD_CLASS}>
          <h2 id="config-privacy-title" className={H2_CLASS}>
            <span
              aria-hidden="true"
              className={`${ICON_BADGE_CLASS} bg-[#1e7a4a]`}
            >
              <ShieldCheck size={15} strokeWidth={2.4} />
            </span>
            {messages.config.privacyTitle}
          </h2>
          <p className="m-0 text-[0.8rem] text-[var(--ink-muted)]">
            {messages.config.privacyHint}
          </p>
        </div>
        <div className={GROUP_CLASS}>
          <Link
            className={`${ROW_CLASS} ${ROW_INTERACTIVE_CLASS} no-underline`}
            href={`/${locale}/privacy/`}
          >
            <span className="flex min-w-0 items-center gap-[10px]">
              {messages.config.privacyAction}
            </span>
            <span className="inline-flex shrink-0 items-center gap-[10px]">
              <span aria-hidden="true" className={GO_BADGE_CLASS}>
                <ChevronRight size={18} strokeWidth={2.6} />
              </span>
            </span>
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="config-support-title"
        className={SECTION_CLASS}
      >
        <div className={HEAD_CLASS}>
          <h2 id="config-support-title" className={H2_CLASS}>
            <span
              aria-hidden="true"
              className={`${ICON_BADGE_CLASS} bg-[#d97967]`}
            >
              <LifeBuoy size={15} strokeWidth={2.4} />
            </span>
            {messages.config.supportTitle}
          </h2>
          <p className="m-0 text-[0.8rem] text-[var(--ink-muted)]">
            {messages.config.supportHint}
          </p>
        </div>
        <div className={GROUP_CLASS}>
          <Link
            className={`${ROW_CLASS} ${ROW_INTERACTIVE_CLASS} no-underline`}
            href={`/${locale}/support/`}
          >
            <span className="flex min-w-0 items-center gap-[10px]">
              {messages.config.supportAction}
            </span>
            <span className="inline-flex shrink-0 items-center gap-[10px]">
              <span aria-hidden="true" className={GO_BADGE_CLASS}>
                <ChevronRight size={18} strokeWidth={2.6} />
              </span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}

interface ConfigPageViewProps {
  readonly version: string
}

// The settings page lives under the shared [locale] layout, whose I18nProvider
// seeds the initial language from the path locale the same way the rest of the
// app does.
export function ConfigPageView({ version }: ConfigPageViewProps) {
  return <ConfigContent version={version} />
}
