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

const languageChoices: readonly LocalePreference[] = ['system', 'zh-CN', 'en']

const ZH_FONT_STACK =
  '"Noto Sans SC Variable", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
const EN_FONT_STACK =
  '"Nunito Variable", "Avenir Next", Avenir, system-ui, sans-serif'

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
    resolved === 'zh-CN' ? messages.language.chinese : messages.language.english
  const fullLabel = messages.language.systemResolved(resolvedLabel)
  const resolvedLabelStart = fullLabel.indexOf(resolvedLabel)
  return (
    <span lang={locale}>
      {fullLabel.slice(0, resolvedLabelStart)}
      <span
        lang={resolved}
        style={{
          fontFamily: resolved === 'zh-CN' ? ZH_FONT_STACK : EN_FONT_STACK,
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
        fontFamily: choice === 'zh-CN' ? ZH_FONT_STACK : EN_FONT_STACK,
      }}
    >
      {choice === 'zh-CN' ? messages.language.chinese : messages.language.english}
    </span>
  )
}

function LanguageRow({ choice }: { readonly choice: LocalePreference }) {
  const { preference, setPreference } = useI18n()
  const selected = preference === choice
  return (
    <button
      aria-checked={selected}
      className="config-row"
      onClick={() => setPreference(choice)}
      role="radio"
      type="button"
    >
      <span className="config-row__label">
        <span aria-hidden="true" className="config-radio" />
        <LanguageChoiceLabel choice={choice} />
      </span>
      <span
        aria-hidden="true"
        className={`config-row__check${
          selected ? '' : ' config-row__check--hidden'
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
    <main className="config-page">
      <CloseButton
        className="config-close"
        href={`/${locale}`}
        label={messages.config.close}
      />
      <header className="config-hero">
        <div>
          <p className="config-hero__eyebrow">
            <Settings aria-hidden="true" size={16} strokeWidth={2.2} />
            {messages.museumName}
          </p>
          <h1>{messages.config.title}</h1>
          <p>{messages.config.intro}</p>
        </div>
      </header>

      <section
        aria-labelledby="config-language-title"
        className="config-section"
      >
        <div className="config-section__head">
          <h2 id="config-language-title">
            <Languages aria-hidden="true" size={18} strokeWidth={2.2} />
            {messages.config.languageTitle}
          </h2>
          <p>{messages.config.languageHint}</p>
        </div>
        <div
          aria-label={messages.config.languageTitle}
          className="config-group"
          role="radiogroup"
        >
          {languageChoices.map((choice) => (
            <LanguageRow choice={choice} key={choice} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="config-appearance-title"
        className="config-section"
      >
        <div className="config-section__head">
          <h2 id="config-appearance-title">
            <Moon aria-hidden="true" size={18} strokeWidth={2.2} />
            {messages.config.appearanceTitle}
          </h2>
          <p>{messages.config.appearanceHint}</p>
        </div>
        <div className="config-group">
          <div aria-disabled="true" className="config-row config-row--disabled">
            <span className="config-row__label">
              {messages.config.darkMode}
            </span>
            <span className="config-row__aside">
              <span className="config-badge">{messages.config.comingSoon}</span>
              <span aria-hidden="true" className="config-switch">
                <span className="config-switch__thumb" />
              </span>
            </span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="config-account-title"
        className="config-section"
      >
        <div className="config-section__head">
          <h2 id="config-account-title">
            <UserRound aria-hidden="true" size={18} strokeWidth={2.2} />
            {messages.config.accountTitle}
          </h2>
          <p>{messages.config.accountHint}</p>
        </div>
        <div className="config-group">
          <div aria-disabled="true" className="config-row config-row--disabled">
            <span className="config-row__label">
              {messages.config.accountAction}
            </span>
            <span className="config-row__aside">
              <span className="config-badge">{messages.config.comingSoon}</span>
            </span>
          </div>
        </div>
      </section>

      <section aria-labelledby="config-about-title" className="config-section">
        <div className="config-section__head">
          <h2 id="config-about-title">
            <Info aria-hidden="true" size={18} strokeWidth={2.2} />
            {messages.config.aboutTitle}
          </h2>
        </div>
        <div className="config-group">
          <div className="config-row config-row--static">
            <span className="config-row__label">
              {messages.config.versionLabel}
            </span>
            <span className="config-row__aside">
              <span className="config-row__value">v{version}</span>
            </span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="config-privacy-title"
        className="config-section"
      >
        <div className="config-section__head">
          <h2 id="config-privacy-title">
            <ShieldCheck aria-hidden="true" size={18} strokeWidth={2.2} />
            {messages.config.privacyTitle}
          </h2>
          <p>{messages.config.privacyHint}</p>
        </div>
        <div className="config-group">
          <Link className="config-row" href={`/${locale}/privacy/`}>
            <span className="config-row__label">
              {messages.config.privacyAction}
            </span>
            <span className="config-row__aside">
              <ChevronRight aria-hidden="true" size={18} strokeWidth={2.2} />
            </span>
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="config-support-title"
        className="config-section"
      >
        <div className="config-section__head">
          <h2 id="config-support-title">
            <LifeBuoy aria-hidden="true" size={18} strokeWidth={2.2} />
            {messages.config.supportTitle}
          </h2>
          <p>{messages.config.supportHint}</p>
        </div>
        <div className="config-group">
          <Link className="config-row" href={`/${locale}/support/`}>
            <span className="config-row__label">
              {messages.config.supportAction}
            </span>
            <span className="config-row__aside">
              <ChevronRight aria-hidden="true" size={18} strokeWidth={2.2} />
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
