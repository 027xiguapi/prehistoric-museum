import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

// next-intl still needs a request config even though this museum serves its
// own messages through `I18nProvider`: the `NextIntlClientProvider` in the
// locale layout only consumes the negotiated locale (for `Link` and the
// router helpers in `navigation.ts`), so the message catalog stays empty.
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return { locale, messages: {} }
})
