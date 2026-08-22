import type { MetadataRoute } from 'next'

import { seoSitemapUrls } from '@/src/seo/metadata'

export const dynamic = 'force-static'

// Canonical URLs always point at the production origin; see src/seo/metadata.
export default function sitemap(): MetadataRoute.Sitemap {
  return seoSitemapUrls.map((url) => ({ url }))
}
