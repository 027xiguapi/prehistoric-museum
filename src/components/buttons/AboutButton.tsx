import Link from 'next/link'
import { Info } from 'lucide-react'

interface AboutButtonProps {
  readonly href: string
  readonly label: string
  readonly className?: string
}

/**
 * Compact "about" pill linking to the trust documents (about, privacy,
 * credits, terms, contact).
 *
 * The museum screens are `height: 100dvh` with `overflow: hidden`, so a page
 * footer cannot be rendered inside them without being clipped away. This pill
 * is the landing page's route into the trust documents; every document page
 * then carries the full footer.
 */
export function AboutButton({ href, label, className = '' }: AboutButtonProps) {
  return (
    <Link aria-label={label} className={className} href={href}>
      <Info aria-hidden="true" size={18} strokeWidth={2.2} />
      <span className="zone-select-blog-label">{label}</span>
    </Link>
  )
}
