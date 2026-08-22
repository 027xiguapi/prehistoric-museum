import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface BackButtonProps {
  readonly href: string
  readonly label: string
  readonly className?: string
  readonly size?: number
  readonly strokeWidth?: number
}

/** Icon-only "back" link (chevron) used across the static and category pages. */
export function BackButton({
  href,
  label,
  className = '',
  size = 22,
  strokeWidth = 2.4,
}: BackButtonProps) {
  return (
    <Link aria-label={label} className={className} href={href}>
      <ChevronLeft aria-hidden="true" size={size} strokeWidth={strokeWidth} />
    </Link>
  )
}
