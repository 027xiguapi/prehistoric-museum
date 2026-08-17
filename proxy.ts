import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'

import { isPrivateLocalMaterialRequest } from './scripts/review-server-security'
import { routing } from './src/i18n/routing'

// Locale entry selection is delegated to next-intl (cookie + Accept-Language
// detection, always-prefixed routes). The proxy keeps guarding private local
// review material before the locale middleware runs.
const handleI18nRouting = createMiddleware(routing)

export default function proxy(request: NextRequest) {
  if (isPrivateLocalMaterialRequest(request.url)) {
    return new NextResponse(null, { status: 404 })
  }
  return handleI18nRouting(request)
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/v1`, `/trpc`, `/img`, `/md` or `/_next`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|img|md|.well-known|_next|_vercel|.*\\..*).*)',
}
