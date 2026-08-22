import type { MetadataRoute } from 'next'

import { seoSiteOrigin } from '@/src/seo/metadata'

export const dynamic = 'force-static'

// Mirrors the former static robots.txt, which referenced the site-root
// sitemap rather than the museum-scoped one.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${seoSiteOrigin}/sitemap.xml`,
  }
}
