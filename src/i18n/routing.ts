import { defineRouting } from 'next-intl/routing'

/**
 * Server-side locale routing for the museum. The proxy middleware uses this
 * to send bare visitors to their locale entry (`/zh-CN/`, `/zh-TW/`, `/ja/`
 * or `/en/`), keeping the locale contract of `src/i18n/locale.ts` in one
 * place.
 */
export const routing = defineRouting({
  locales: ['zh-CN', 'zh-TW', 'ja', 'en'],
  defaultLocale: 'en',
  localePrefix: 'always',
})
