'use client'

import { createNavigation } from 'next-intl/navigation'

import { routing } from './routing'

/**
 * Locale-aware navigation helpers shared across components. `Link` and the
 * router helpers prefix the active locale automatically (`localePrefix:
 * 'always'` in `routing.ts`), so callers pass locale-free paths such as
 * `/category/dinosaur/`.
 */
export const {
  Link,
  redirect,
  usePathname,
  useRouter: UseI18nRouter,
  getPathname,
} = createNavigation(routing)
