'use client'

import { useSyncExternalStore } from 'react'
import { seoNotFoundCopy } from '../seo/metadata'
import { messagesFor } from '../i18n/messages'
import { localeFromPath, type Locale } from '../i18n/locale'
import '../styles.css'

function subscribeToNothing(onChange: () => void): () => void {
  void onChange
  return () => {}
}

function getServerLocale(): Locale {
  return 'zh-CN'
}

function getClientLocale(): Locale {
  return (
    localeFromPath(window.location.pathname) ??
    (navigator.languages.some((language) => language.startsWith('zh'))
      ? 'zh-CN'
      : 'en')
  )
}

/**
 * Standalone 404 shell: renders its own <html> so it works both as the root
 * not-found boundary and under the locale group. The locale is resolved on
 * the client from the URL path (then browser languages); the server render
 * defaults to Chinese so markup stays hydration-stable.
 */
export function LocaleNotFoundPage() {
  const locale = useSyncExternalStore(
    subscribeToNothing,
    getClientLocale,
    getServerLocale,
  )

  const copy = messagesFor(locale).notFound
  const home = locale === 'en' ? '/en/' : '/zh-CN/'

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, follow" />
        <title>{seoNotFoundCopy.title}</title>
      </head>
      <body className="bg-[#d8e7c2]">
        <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
          <p className="text-6xl font-black tracking-tight text-[#356859] sm:text-7xl">
            {copy.code}
          </p>
          <h1 className="text-2xl font-bold text-[#20382f] sm:text-3xl">
            {copy.title}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-[#5c6e68]">
            {copy.body}
          </p>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-transparent bg-[#356859] px-7 text-base font-bold text-[#fffdf7] no-underline shadow-[0_10px_24px_rgb(35_83_62/20%)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#2c5a4d] active:translate-y-0 active:scale-95"
            data-museum-return
            href={home}
          >
            {copy.return}
          </a>
        </main>
      </body>
    </html>
  )
}
