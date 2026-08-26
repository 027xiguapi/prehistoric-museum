import { buildLocaleUrl, localeFromPath, type Locale } from '@/src/i18n/locale'

export interface LocalizedMetadata {
  readonly locale: Locale
  readonly documentTitle: string
  readonly museumTitle: string
  readonly creatorBrand: string
  readonly description: string
  readonly socialImageAlt: string
  readonly animalDetail?: {
    readonly description: string
    readonly id: string
    readonly name: string
  }
}

function ensureMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
): void {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }
  element.content = content
}

type MetadataVariant = Locale | 'x-default'

function museumRootUrl(): URL {
  const candidates = [
    document.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][hreflang="x-default"]',
    )?.href,
    document.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][hreflang="zh-CN"]',
    )?.href,
    document.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][hreflang="zh-TW"]',
    )?.href,
    document.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][hreflang="en"]',
    )?.href,
    window.location.href,
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href,
  ]

  for (const candidate of candidates) {
    if (!candidate) {
      continue
    }
    const url = new URL(candidate, window.location.origin)
    const localizedSuffix = url.pathname.match(
      /^(.*\/)(?:zh-CN|zh-TW|en)(?:\/animals\/[a-z0-9]+(?:-[a-z0-9]+)*)?\/?$/,
    )
    if (localizedSuffix?.[1]) {
      url.pathname = localizedSuffix[1]
      url.search = ''
      url.hash = ''
      return url
    }

    if (
      document.querySelector<HTMLLinkElement>(
        'link[rel="alternate"][hreflang="x-default"]',
      )?.href === candidate
    ) {
      url.pathname = url.pathname.endsWith('/')
        ? url.pathname
        : `${url.pathname}/`
      url.search = ''
      url.hash = ''
      return url
    }
  }

  const fallback = new URL(window.location.href)
  fallback.pathname = buildLocaleUrl(fallback.href, 'system').split(/[?#]/u)[0] ?? '/'
  fallback.search = ''
  fallback.hash = ''
  return fallback
}

function localizedCanonical(
  root: URL,
  variant: MetadataVariant,
  animalId?: string,
): string {
  if (variant === 'x-default') {
    return root.href
  }
  return new URL(
    animalId ? `${variant}/${animalId}/` : `${variant}/`,
    root,
  ).href
}

function ensureCanonical(href: string): void {
  let canonical = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.append(canonical)
  }
  canonical.href = href
}

function ensureAlternate(variant: MetadataVariant, href: string): void {
  let alternate = document.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${variant}"]`,
  )
  if (!alternate) {
    alternate = document.createElement('link')
    alternate.rel = 'alternate'
    alternate.hreflang = variant
    document.head.append(alternate)
  }
  alternate.href = href
}

function updateAnimalStructuredData({
  animalDetail,
  canonical,
  description,
  image,
  locale,
  museumCanonical,
  museumTitle,
}: {
  readonly animalDetail: NonNullable<LocalizedMetadata['animalDetail']> | undefined
  readonly canonical: string
  readonly description: string
  readonly image: string
  readonly locale: Locale
  readonly museumCanonical: string
  readonly museumTitle: string
}): void {
  let script = document.querySelector<HTMLScriptElement>(
    'script#animal-structured-data[type="application/ld+json"]',
  )
  if (!animalDetail) {
    // The prerendered script node belongs to React's tree: imperatively
    // removing it crashes the next React commit with a NotFoundError
    // (removeChild on a missing node). Blank the stale JSON-LD instead and
    // let React drop the node itself when the detail page unmounts.
    if (script) {
      script.textContent = ''
    }
    return
  }
  if (!script) {
    script = document.createElement('script')
    script.id = 'animal-structured-data'
    script.type = 'application/ld+json'
    document.head.append(script)
  }
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: museumTitle,
          item: museumCanonical,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: animalDetail.name,
          item: canonical,
        },
      ],
    },
    description,
    image,
    inLanguage: locale,
    name: animalDetail.name,
    url: canonical,
  })
}

export function updateLocalizedMetadata({
  locale,
  documentTitle,
  museumTitle,
  creatorBrand,
  description,
  socialImageAlt,
  animalDetail,
}: LocalizedMetadata): void {
  const variant = localeFromPath(window.location.pathname) ?? locale
  const root = museumRootUrl()
  const detailId = animalDetail?.id
  const canonical = localizedCanonical(root, variant, detailId)
  const localizedDescription = animalDetail?.description ?? description
  const ogLocale =
    locale === 'zh-TW'
      ? 'zh_TW'
      : locale === 'zh-CN'
        ? 'zh_CN'
        : 'en_GB'
  const alternateLocale = locale === 'en' ? 'zh_CN' : 'en_GB'
  const socialImage = animalDetail
    ? new URL(`${animalDetail.id}/social.webp`, root).href
    : new URL(`social/museum.${variant}.png`, root).href
  const metadataTitle = animalDetail ? documentTitle : museumTitle
  const imageAlt = animalDetail?.name ?? socialImageAlt

  document.title = documentTitle
  ensureCanonical(canonical)
  ensureAlternate(
    'zh-CN',
    localizedCanonical(root, 'zh-CN', detailId),
  )
  ensureAlternate(
    'zh-TW',
    localizedCanonical(root, 'zh-TW', detailId),
  )
  ensureAlternate('en', localizedCanonical(root, 'en', detailId))
  // Animal detail pages omit the x-default alternate. It is already absent
  // from their prerendered head, and React's head diffing removes it during
  // client-side navigations — never remove React-owned nodes imperatively,
  // the next React commit would crash with NotFoundError (removeChild).
  if (!animalDetail) {
    ensureAlternate('x-default', localizedCanonical(root, 'x-default'))
  }
  ensureMeta('name', 'description', localizedDescription)
  ensureMeta('property', 'og:type', animalDetail ? 'article' : 'website')
  ensureMeta('property', 'og:site_name', creatorBrand)
  ensureMeta('property', 'og:locale', ogLocale)
  ensureMeta('property', 'og:locale:alternate', alternateLocale)
  ensureMeta('property', 'og:title', metadataTitle)
  ensureMeta('property', 'og:description', localizedDescription)
  ensureMeta('property', 'og:url', canonical)
  ensureMeta('property', 'og:image', socialImage)
  ensureMeta('property', 'og:image:type', animalDetail ? 'image/webp' : 'image/png')
  ensureMeta('property', 'og:image:width', '1200')
  ensureMeta('property', 'og:image:height', '630')
  ensureMeta('property', 'og:image:alt', imageAlt)
  ensureMeta('name', 'twitter:card', 'summary_large_image')
  ensureMeta('name', 'twitter:title', metadataTitle)
  ensureMeta('name', 'twitter:description', localizedDescription)
  ensureMeta('name', 'twitter:image', socialImage)
  ensureMeta('name', 'twitter:image:alt', imageAlt)
  updateAnimalStructuredData({
    animalDetail,
    canonical,
    description: localizedDescription,
    image: socialImage,
    locale,
    museumCanonical: localizedCanonical(root, variant),
    museumTitle,
  })
}
