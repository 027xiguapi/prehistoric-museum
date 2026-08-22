'use client'

import { useEffect } from 'react'

// Root entry for static builds (Capacitor). The web deployment resolves the
// bare `/` path through the next-intl middleware instead, so this page only
// matters when `output: 'export'` produces `out/index.html` as the app entry.
// `redirect()` renders a Next.js client-navigation stub that can leave
// Capacitor's WebView on a blank screen, so navigate with the browser
// location directly instead.
//
// The meta refresh and the visible link are prerendered into the static
// HTML, so even a WebView too old to parse the modern JS chunks (which would
// otherwise strand the app on this blank page forever) still reaches the
// prerendered catalogue — or at least shows a tappable way in.
//
// The target must carry the `index.html` suffix: Capacitor's local server
// (Android `WebViewLocalServer` and the iOS `Router` alike) answers every
// extension-less path with the ROOT index.html (SPA fallback), so pointing
// at `/zh-CN/` makes the WebView receive this stub again at that very URL —
// an infinite self-reload loop that re-fetches all chunks and never paints.
export default function RootPage() {
  useEffect(() => {
    window.location.replace('/zh-CN/index.html')
  }, [])

  return (
    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <meta httpEquiv="refresh" content="0;url=/zh-CN/index.html" />
      <a href="/zh-CN/index.html" style={{ fontSize: '1.25rem', color: '#2e5e46' }}>
        正在进入动物园…
        <br />
        Tap to enter the zoo
      </a>
    </main>
  )
}
