import { defineRouting } from 'next-intl/routing'

/**
 * Server-side locale routing for the museum. The proxy middleware uses this
 * to send bare visitors to their locale entry (`/zh-CN/` or `/en/`), keeping
 * the two-locale contract of `src/i18n/locale.ts` in one place.
 */
export const routing = defineRouting({
  locales: ['zh-CN', 'en'],
  defaultLocale: 'en',
  localePrefix: 'always',
})
