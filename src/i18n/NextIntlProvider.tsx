'use client'

import { NextIntlClientProvider } from 'next-intl'

/**
 * Client re-export of next-intl's provider. The react-server build always
 * resolves its props through next-intl's request config (`src/i18n/request.ts`),
 * which this project doesn't have — copy lives in the project's own
 * I18nProvider instead. The client build is a plain context provider, so
 * passing `locale` is all the next-intl navigation helpers (`Link`) need.
 */
export default NextIntlClientProvider
