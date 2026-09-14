import type { Locale } from '@/src/i18n/locale'
import { siteDocumentLabelsFor } from '@/src/i18n/site-documents'

const FOOTER_CLASS =
  'grid gap-[8px] px-[30px] pt-[6px] pb-[10px] max-[720px]:px-[20px]'
const LIST_CLASS =
  'm-0 flex list-none flex-wrap items-center gap-x-[14px] gap-y-[6px] p-0'
const LINK_CLASS =
  'text-[0.84rem] font-[700] text-[var(--leaf)] no-underline hover:underline ' +
  'focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-2'

/**
 * Site-wide trust navigation.
 *
 * The AdSense publisher requirements expect the privacy policy to be reachable
 * from the pages it applies to, and the third-party model licences require
 * their attribution to be discoverable. Neither was linked from anywhere
 * before, so this footer is the single place that keeps the policy, the
 * credits, the operator details and the terms one hop from every screen that
 * renders it.
 */
export function DocumentFooter({ locale }: { readonly locale: Locale }) {
  const labels = siteDocumentLabelsFor(locale)
  const links: readonly { readonly href: string; readonly label: string }[] = [
    { href: `/${locale}/about/`, label: labels.about },
    { href: `/${locale}/privacy/`, label: labels.privacy },
    { href: `/${locale}/terms/`, label: labels.terms },
    { href: `/${locale}/credits/`, label: labels.credits },
    { href: `/${locale}/contact/`, label: labels.contact },
    { href: `/${locale}/support/`, label: labels.support },
  ]

  return (
    <footer className={FOOTER_CLASS}>
      <h2 className="m-0 text-[0.78rem] font-[820] tracking-[0.06em] text-[#214c3c] uppercase">
        {labels.footerHeading}
      </h2>
      <ul className={LIST_CLASS}>
        {links.map((link) => (
          <li key={link.href}>
            <a className={LINK_CLASS} href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
