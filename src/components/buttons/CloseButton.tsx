import Link from 'next/link'
import { X } from 'lucide-react'
import type { MouseEventHandler } from 'react'

interface CloseButtonProps {
  readonly label: string
  readonly href?: string
  readonly onClick?: MouseEventHandler<HTMLButtonElement>
  readonly className?: string
  readonly size?: number
  readonly strokeWidth?: number
  readonly type?: 'button' | 'submit' | 'reset'
}

/**
 * Icon-only close button (X). Renders a link when `href` is given (navigating
 * back home) or a plain button when `onClick` is given (dismissing an overlay).
 */
export function CloseButton({
  label,
  href,
  onClick,
  className = '',
  size = 20,
  strokeWidth = 2.4,
  type = 'button',
}: CloseButtonProps) {
  const icon = <X aria-hidden="true" size={size} strokeWidth={strokeWidth} />

  if (href !== undefined) {
    return (
      <Link aria-label={label} className={className} href={href}>
        {icon}
      </Link>
    )
  }

  return (
    <button aria-label={label} className={className} onClick={onClick} type={type}>
      {icon}
    </button>
  )
}
