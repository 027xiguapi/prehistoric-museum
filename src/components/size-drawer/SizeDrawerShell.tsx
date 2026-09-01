import { createPortal } from 'react-dom'
import { useEffect, useId, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { useI18n } from '@/src/i18n/I18nProvider'
import { IconButton } from '@/src/components/IconButton'
import { LanguageMenu } from '@/src/components/LanguageMenu'

interface SizeDrawerShellProps {
  readonly children: ReactNode
  readonly closeLabel: string
  readonly onClose: () => void
  readonly open: boolean
  readonly returnFocusTo: React.RefObject<HTMLElement | null>
  readonly title: string
}

const focusableSelector = [
  'button:not([disabled])',
  'a[href]',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

/**
 * Shared bottom-sheet dialog for the size comparisons: portal, focus trap,
 * return-focus, and header chrome. The height and weight drawers each supply
 * their own scene as `children`.
 */
export function SizeDrawerShell({
  children,
  closeLabel,
  onClose,
  open,
  returnFocusTo,
  title,
}: SizeDrawerShellProps) {
  const { messages } = useI18n()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) {
      return
    }

    const returnTarget = returnFocusTo.current
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !drawerRef.current) {
        return
      }
      const controls = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      )
      const first = controls[0]
      const last = controls.at(-1)
      if (!first || !last) {
        return
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      returnTarget?.focus()
    }
  }, [open, returnFocusTo])

  if (!open) {
    return null
  }

  return createPortal(
    <div className="drawer-layer">
      <div
        aria-hidden="true"
        className="drawer-backdrop"
        onMouseDown={(event) => {
          if (event.currentTarget === event.target) {
            onClose()
          }
        }}
      />
      <section
        aria-labelledby={titleId}
        aria-modal="true"
        className="animal-size-drawer"
        ref={drawerRef}
        role="dialog"
      >
        <div className="drawer-handle" aria-hidden="true" />
        <header className="drawer-header">
          <div>
            <p className="drawer-eyebrow">{messages.size.eyebrow}</p>
            <h2 id={titleId}>{title}</h2>
          </div>
          <div className="drawer-header__actions">
            <LanguageMenu />
            <IconButton
              hideTooltipOnFocus
              icon={X}
              label={closeLabel}
              onClick={onClose}
              ref={closeButtonRef}
            />
          </div>
        </header>
        <div className="drawer-scroll">{children}</div>
      </section>
    </div>,
    document.body,
  )
}
