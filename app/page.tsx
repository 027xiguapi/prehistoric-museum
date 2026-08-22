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
// otherwise strand the app on this page forever) still reaches the
// prerendered catalogue — or at least shows a tappable way in.
//
// The target must carry the `index.html` suffix: Capacitor's local server
// (Android `WebViewLocalServer` and the iOS `Router` alike) answers every
// extension-less path with the ROOT index.html (SPA fallback), so pointing
// at `/zh-CN/` makes the WebView receive this page again at that very URL —
// an infinite self-reload loop that re-fetches all chunks and never paints.
//
// This page has no root layout, so no global CSS or fonts are loaded here;
// the splash is self-contained (inline styles plus one <style> block for
// keyframes) and the animations degrade gracefully on ancient WebViews.
const LOADER_STYLES = `
.root-loader-ring { animation: root-loader-spin 1.1s linear infinite; }
.root-loader-disc { animation: root-loader-pulse 1.6s ease-in-out infinite; }
.root-loader-dot { animation: root-loader-bounce 1.2s ease-in-out infinite; }
.root-loader-dot:nth-child(2) { animation-delay: .15s; }
.root-loader-dot:nth-child(3) { animation-delay: .3s; }
@keyframes root-loader-spin { to { transform: rotate(360deg); } }
@keyframes root-loader-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
@keyframes root-loader-bounce { 0%, 60%, 100% { transform: translateY(0); opacity: .35; } 30% { transform: translateY(-7px); opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  .root-loader-disc, .root-loader-dot, .root-loader-ring { animation: none; }
}
`

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/zh-CN/index.html')
  }, [])

  return (
    <main
      aria-busy="true"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(160deg, #f3f9e6 0%, #d8e7c2 55%, #bcd6a6 100%)',
        fontFamily:
          "ui-rounded, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', system-ui, sans-serif",
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <meta httpEquiv="refresh" content="0;url=/zh-CN/index.html" />
      <style>{LOADER_STYLES}</style>
      <a
        href="/zh-CN/index.html"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.85rem',
          padding: '2rem',
          color: '#2e5e46',
          textDecoration: 'none',
        }}
      >
        <span
          style={{ position: 'relative', display: 'block', width: 120, height: 120 }}
        >
          <svg
            aria-hidden="true"
            className="root-loader-ring"
            height="120"
            style={{ position: 'absolute', inset: 0 }}
            viewBox="0 0 120 120"
            width="120"
          >
            <circle
              cx="60"
              cy="60"
              fill="none"
              r="54"
              stroke="rgba(53, 104, 89, 0.18)"
              strokeWidth="6"
            />
            <circle
              cx="60"
              cy="60"
              fill="none"
              r="54"
              stroke="#356859"
              strokeDasharray="90 250"
              strokeLinecap="round"
              strokeWidth="6"
            />
          </svg>
          <span
            className="root-loader-disc"
            style={{
              position: 'absolute',
              inset: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 12px 32px rgba(46, 94, 70, 0.28)',
            }}
          >
            {/* Plain img: this splash has no root layout, so next/image is unavailable. */}
            <img alt="WonZoo" height={68} src="/WonZoo.png" width={68} />
          </span>
        </span>
        <strong
          style={{
            fontSize: 'clamp(2rem, 7vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '0.03em',
            lineHeight: 1.1,
          }}
        >
          WonZoo
        </strong>
        <span
          style={{
            fontSize: 'clamp(1rem, 3.6vw, 1.2rem)',
            fontWeight: 600,
            opacity: 0.85,
          }}
        >
          正在进入动物园…
        </span>
        <span style={{ fontSize: 'clamp(0.8rem, 3vw, 0.95rem)', opacity: 0.6 }}>
          Tap to enter the zoo
        </span>
        <span style={{ display: 'flex', gap: 8, marginTop: 6 }}>
          <span
            className="root-loader-dot"
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#356859' }}
          />
          <span
            className="root-loader-dot"
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#356859' }}
          />
          <span
            className="root-loader-dot"
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#356859' }}
          />
        </span>
      </a>
    </main>
  )
}
