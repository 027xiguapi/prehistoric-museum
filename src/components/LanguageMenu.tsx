import { Check, Languages } from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react'
import { useI18n } from '@/src/i18n/I18nProvider'
import type { LocalePreference } from '@/src/i18n/locale'

const choices: readonly LocalePreference[] = ['system', 'zh-CN', 'zh-TW', 'en']

const ZH_FONT_STACK =
  '"Noto Sans SC Variable", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
const ZH_TW_FONT_STACK =
  '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Noto Sans SC Variable", system-ui, sans-serif'
const EN_FONT_STACK =
  '"Nunito Variable", "Avenir Next", Avenir, system-ui, sans-serif'
/** Compact trigger on narrow portrait screens. */
const NARROW = '[@media(max-width:1023px)and(orientation:portrait)]'
/** Compact trigger + leftward popover on short landscape screens. */
const SHORT_LANDSCAPE = '[@media(max-height:560px)and(orientation:landscape)]'

export function LanguageMenu() {
  const { locale, messages, preference, setPreference } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef(new Map<LocalePreference, HTMLButtonElement>())

  const labelFor = (choice: LocalePreference): ReactNode => {
    if (choice === 'system') {
      return <span lang={locale}>{messages.language.system}</span>
    }
    return (
      <span
        lang={choice}
        style={{
          fontFamily:
            choice === 'zh-CN'
              ? ZH_FONT_STACK
              : choice === 'zh-TW'
                ? ZH_TW_FONT_STACK
                : EN_FONT_STACK,
        }}
      >
        {choice === 'zh-CN'
          ? messages.language.chinese
          : choice === 'zh-TW'
            ? messages.language.traditionalChinese
            : messages.language.english}
      </span>
    )
  }

  const close = (restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) {
      queueMicrotask(() => triggerRef.current?.focus())
    }
  }

  const openAt = (choice: LocalePreference) => {
    setOpen(true)
    queueMicrotask(() => itemRefs.current.get(choice)?.focus())
  }

  useEffect(() => {
    if (!open) {
      return
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        close()
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open])

  const handleMenuKeyDown = (
    event: ReactKeyboardEvent<HTMLDivElement>,
  ) => {
    const currentIndex = choices.findIndex(
      (choice) => itemRefs.current.get(choice) === document.activeElement,
    )
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      close(true)
      return
    }
    if (event.key === 'Tab') {
      queueMicrotask(() => close())
      return
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      const choice = event.key === 'Home' ? choices[0] : choices.at(-1)
      if (choice) itemRefs.current.get(choice)?.focus()
      return
    }
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return
    }
    event.preventDefault()
    const offset = event.key === 'ArrowDown' ? 1 : -1
    const index =
      currentIndex < 0
        ? 0
        : (currentIndex + offset + choices.length) % choices.length
    const choice = choices[index]
    if (choice) itemRefs.current.get(choice)?.focus()
  }

  return (
    <div className="language-menu relative" ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={messages.language.buttonLabel}
        className={`inline-flex h-[52px] min-w-[52px] w-[52px] cursor-pointer
          items-center justify-center gap-[3px] rounded-[18px] border
          border-white/65 bg-[rgb(255_253_247/90%)] p-0 text-[0.72rem]
          font-[850] text-[#214a33]
          shadow-[0_8px_22px_rgb(37_56_32/14%),inset_0_1px_rgb(255_255_255/78%)]
          backdrop-blur-[12px] transition-colors
          hover:bg-[rgb(255_255_255/96%)]
          aria-expanded:bg-[rgb(255_255_255/96%)]
          ${NARROW}:h-12 ${NARROW}:min-w-12 ${NARROW}:w-12 ${NARROW}:rounded-[14px]
          ${SHORT_LANDSCAPE}:h-12 ${SHORT_LANDSCAPE}:min-w-12 ${SHORT_LANDSCAPE}:w-12 ${SHORT_LANDSCAPE}:rounded-[13px]`}
        onClick={() => {
          if (open) close()
          else openAt(preference)
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            openAt(
              event.key === 'ArrowDown' ? choices[0]! : choices.at(-1)!,
            )
          }
        }}
        ref={triggerRef}
        type="button"
      >
        <Languages aria-hidden="true" size={20} strokeWidth={2.1} />
        <span>
          {locale === 'zh-CN'
            ? messages.language.chineseShort
            : locale === 'zh-TW'
              ? messages.language.traditionalChineseShort
              : messages.language.englishShort}
        </span>
      </button>
      {open ? (
        <div
          aria-label={messages.language.menuLabel}
          className={`absolute right-0 top-[calc(100%+9px)] z-[60] grid w-max
            min-w-[190px] gap-[3px] rounded-2xl border
            border-[rgb(48_77_62/13%)] bg-[rgb(255_253_247/97%)] p-[7px]
            shadow-[0_18px_45px_rgb(28_46_37/22%)] backdrop-blur-[16px]
            ${SHORT_LANDSCAPE}:right-[calc(100%+7px)] ${SHORT_LANDSCAPE}:top-0`}
          onKeyDown={handleMenuKeyDown}
          role="menu"
        >
          {choices.map((choice) => {
            const selected = preference === choice
            return (
              <button
                aria-checked={selected}
                className={`grid min-h-12 cursor-pointer grid-cols-[18px_minmax(0,1fr)_18px]
                  items-center gap-2.5 rounded-[11px] border-0 bg-transparent px-[13px]
                  text-left font-[760] transition-colors
                  focus-visible:bg-[color-mix(in_srgb,var(--animal-accent-soft)_38%,white)]
                  hover:bg-[color-mix(in_srgb,var(--animal-accent-soft)_38%,white)]
                  ${
                    selected
                      ? 'bg-[#e3eee5] font-[850] text-[#173b2b] shadow-[inset_3px_0_0_var(--leaf)]'
                      : ''
                  }`}
                key={choice}
                onClick={() => {
                  setPreference(choice)
                  close(true)
                }}
                ref={(element) => {
                  if (element) itemRefs.current.set(choice, element)
                  else itemRefs.current.delete(choice)
                }}
                role="menuitemradio"
                tabIndex={-1}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className={`relative block h-4 w-4 rounded-full border-2 bg-[#fffdf7]
                    ${selected ? 'border-[var(--leaf)]' : 'border-[rgb(44_75_60/45%)]'}`}
                >
                  {selected ? (
                    <span className="absolute inset-[3px] rounded-full bg-[var(--leaf)]" />
                  ) : null}
                </span>
                <span>{labelFor(choice)}</span>
                <span
                  aria-hidden="true"
                  className={`grid place-items-center text-[var(--leaf)]
                    ${selected ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Check size={17} strokeWidth={3} />
                </span>
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
