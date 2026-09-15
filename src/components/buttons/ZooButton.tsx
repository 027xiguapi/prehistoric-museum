import Link from 'next/link'
import { Footprints } from 'lucide-react'

interface ZooButtonProps {
  readonly href: string
  readonly label: string
  readonly className?: string
}

/**
 * Landing-page route into the walkable 3D park. Wears the same pill as the
 * other zone-select actions so the park reads as part of the museum, not as a
 * separate product.
 */
export function ZooButton({ href, label, className = '' }: ZooButtonProps) {
  return (
    <Link aria-label={label} className={className} href={href}>
      <Footprints aria-hidden="true" size={18} strokeWidth={2.2} />
      <span className="zone-select-blog-label">{label}</span>
    </Link>
  )
}
