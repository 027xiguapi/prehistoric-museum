'use client'

import { useEffect } from 'react'

// Root entry for static builds (Capacitor). The web deployment resolves the
// bare `/` path through the next-intl middleware instead, so this page only
// matters when `output: 'export'` produces `out/index.html` as the app entry.
// `redirect()` renders a Next.js client-navigation stub that can leave
// Capacitor's WebView on a blank screen, so navigate with the browser
// location directly instead.
export default function RootPage() {
  useEffect(() => {
    window.location.replace('/zh-CN/')
  }, [])

  return null
}
