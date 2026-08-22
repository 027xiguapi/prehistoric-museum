import Link from 'next/link'
import { Settings } from 'lucide-react'

interface SettingsButtonProps {
  readonly href: string
  readonly label: string
  readonly className?: string
  readonly size?: number
  readonly strokeWidth?: number
}

/** Icon-only "settings" link (gear) opening the settings page. */
export function SettingsButton({
  href,
  label,
  className = '',
  size = 20,
  strokeWidth = 2.1,
}: SettingsButtonProps) {
  return (
    <Link aria-label={label} className={className} href={href}>
      <Settings aria-hidden="true" size={size} strokeWidth={strokeWidth} />
    </Link>
  )
}
