import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import type { NextConfig } from 'next'

// The local review catalog is aliased at compile time so production bundles
// can never include private review material. Turbopack resolves alias targets
// relative to the project root (absolute Windows paths are unsupported).
const isReviewMode = process.env.NEXT_PUBLIC_MUSEUM_MODE === 'review'
// The Capacitor app is a pure static bundle: `NEXT_STATIC_EXPORT=1` switches
// the build to `output: 'export'` (the web deployment keeps its Node server
// and locale middleware otherwise).
const isStaticExport = process.env.NEXT_STATIC_EXPORT === '1'
const reviewCatalogAliasTarget = isReviewMode
  ? './src/review/catalog.ts'
  : './src/review/empty-catalog.ts'
// Review-only runtime helpers (model preview URLs) follow the same pattern so
// the private review asset route never enters a production bundle.
const reviewRuntimeAliasTarget = isReviewMode
  ? './src/review/runtime-preview-url.ts'
  : './src/review/empty-runtime-preview-url.ts'


const nextConfig: NextConfig = {
  reactStrictMode: false,
  // The former static site served every page as `<dir>/index.html`, so all
  // canonical, sitemap and in-app URLs carry a trailing slash.
  trailingSlash: true,
  // Capacitor serves the exported bundle from its local web root, so Next's
  // image optimizer (which needs a server) must be disabled.
  ...(isStaticExport ? { output: 'export' as const } : {}),
  images: { unoptimized: true },
  // Models and narration audio under `public/animals/` are fetched on demand
  // by the Capacitor app (origin `https://localhost`) from the remote
  // `NEXT_PUBLIC_ASSET_ORIGIN`. Allow cross-origin reads so the browser does
  // not block those responses.
  headers() {
    return Promise.resolve([
      {
        source: '/animals/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ])
  },
  productionBrowserSourceMaps: process.env.NEXT_PUBLIC_MUSEUM_MODE === 'e2e',
  turbopack: {
    // Binary content assets: emit the file and import its URL.
    rules: {
      '*.glb': { type: 'asset' },
      '*.mp3': { type: 'asset' },
    },
    resolveAlias: {
      '$museum-review-catalog': reviewCatalogAliasTarget,
      '$museum-review-runtime': reviewRuntimeAliasTarget,
    },
  },
}

export default function createNextConfig({
  phase,
}: {
  readonly phase: string
}): NextConfig {
  // Mirrors the former `assertReviewModeIsServeOnly` gate: private review
  // material must never be compiled into a deployable bundle.
  if (
    phase === PHASE_PRODUCTION_BUILD &&
    process.env.NEXT_PUBLIC_MUSEUM_MODE === 'review'
  ) {
    throw new Error(
      'Local review mode is serve-only and cannot produce a deployable bundle.',
    )
  }
  return nextConfig
}
