import createMiddleware from 'next-intl/middleware'

import { routing } from './src/i18n/routing'

// Locale entry selection is delegated to next-intl (cookie + Accept-Language
// detection, always-prefixed routes).
export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/img`, `/md` or `/_next`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|img|md|.well-known|_next|_vercel|.*\\..*).*)',
}
