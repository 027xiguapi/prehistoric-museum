import { NextResponse, type NextRequest } from 'next/server'

import { isPrivateLocalMaterialRequest } from './scripts/review-server-security'

// Locale selection stays client-driven (the application normalizes the root
// URL and honours saved preferences), matching the former fail-open edge
// behaviour. The proxy only guards private local material routes.
export default function proxy(request: NextRequest) {
  if (isPrivateLocalMaterialRequest(request.url)) {
    return new NextResponse(null, { status: 404 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
