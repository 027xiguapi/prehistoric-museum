import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import type { NextConfig } from 'next'

import { parseAllowedHosts } from './scripts/review-server-security'

// The local review catalog is aliased at compile time so production bundles
// can never include private review material. Turbopack resolves alias targets
// relative to the project root (absolute Windows paths are unsupported).
const isReviewMode = process.env.NEXT_PUBLIC_MUSEUM_MODE === 'review'
const reviewCatalogAliasTarget = isReviewMode
  ? './src/review/catalog.ts'
  : './src/review/empty-catalog.ts'
// Review-only runtime helpers (model preview URLs) follow the same pattern so
// the private review asset route never enters a production bundle.
const reviewRuntimeAliasTarget = isReviewMode
  ? './src/review/runtime-preview-url.ts'
  : './src/review/empty-runtime-preview-url.ts'

function normalizedBasePath(rawBasePath: string | undefined): string {
  const segments = (rawBasePath ?? '').split('/').filter(Boolean)
  return segments.length === 0 ? '' : `/${segments.join('/')}`
}

// Defaults to the host root; set MUSEUM_BASE_PATH to serve under a prefix
// (e.g. the e2e build uses /prehistoric-animal-museum).
const basePath = normalizedBasePath(process.env.MUSEUM_BASE_PATH)
// LAN hosts allowed to load dev resources (phone testing). Extend with
// MUSEUM_ALLOWED_HOSTS (comma-separated) instead of editing this list.
const defaultDevOrigins = ['192.168.31.118']
const allowedDevOrigins = [
  ...new Set([
    ...defaultDevOrigins,
    ...parseAllowedHosts(process.env.MUSEUM_ALLOWED_HOSTS),
  ]),
]

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(allowedDevOrigins.length > 0 ? { allowedDevOrigins } : {}),
  reactStrictMode: true,
  // The site lives under `basePath`; send visitors of the bare host root to
  // the museum entry instead of a 404. Without a basePath, only the legacy
  // `/{locale}/animals/{id}` detail URLs redirect to the flattened route.
  redirects: () =>
    Promise.resolve(
      basePath
        ? [
            {
              source: '/',
              destination: `${basePath}/`,
              permanent: false,
              basePath: false,
            },
          ]
        : [
            {
              source: '/:locale/animals/:animalId',
              destination: '/:locale/:animalId',
              permanent: true,
            },
          ],
    ),
  // The former static site served every page as `<dir>/index.html`, so all
  // canonical, sitemap and in-app URLs carry a trailing slash.
  trailingSlash: true,
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
