import Link from 'next/link'
import { BookOpen } from 'lucide-react'

interface BlogButtonProps {
  readonly href: string
  readonly label: string
  readonly className?: string
}

/** Compact "blog" pill linking to the animal science articles index. */
export function BlogButton({
  href,
  label,
  className = '',
}: BlogButtonProps) {
  return (
    <Link aria-label={label} className={className} href={href}>
      <BookOpen aria-hidden="true" size={18} strokeWidth={2.2} />
      <span className="zone-select-blog-label">{label}</span>
    </Link>
  )
}
