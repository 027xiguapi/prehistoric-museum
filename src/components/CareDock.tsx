import { useState } from 'react'
import { Beef, Leaf, ShowerHead, Volleyball, X, type LucideIcon } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import type { Diet } from '../content/types'
import type { CarePlayKind } from './StagePlayEffect'

interface CareDockButtonProps {
  readonly disabled: boolean
  readonly icon: LucideIcon
  readonly label: string
  readonly onClick: () => void
}

function CareDockButton({
  disabled,
  icon: Icon,
  label,
  onClick,
}: CareDockButtonProps) {
  return (
    <button
      aria-label={label}
      className="grid h-[52px] w-[52px] cursor-pointer place-items-center
        rounded-[16px] border border-white/65 bg-[rgb(255_253_247/90%)]
        text-[#214a33] shadow-[0_8px_22px_rgb(37_56_32/14%),inset_0_1px_rgb(255_255_255/78%)]
        backdrop-blur-[12px] transition-[background-color,color,opacity,transform]
        duration-150 hover:bg-[rgb(255_255_255/96%)] hover:text-[#173b2b]
        active:translate-y-px active:scale-95
        disabled:cursor-not-allowed disabled:opacity-45
        disabled:hover:bg-[rgb(255_253_247/90%)]"
      disabled={disabled}
      onClick={onClick}
      title={label}
      type="button"
    >
      <Icon aria-hidden="true" size={22} strokeWidth={2.1} />
    </button>
  )
}

interface BowlOptionProps {
  readonly icon: LucideIcon
  readonly label: string
  readonly onPick: () => void
}

/** A bowl with food peeking out; big tap target for small hands. */
function BowlOption({ icon: Icon, label, onPick }: BowlOptionProps) {
  return (
    <button
      aria-label={label}
      className="group flex cursor-pointer flex-col items-center gap-1 border-0
        bg-transparent p-0"
      onClick={onPick}
      type="button"
    >
      <span
        className="grid h-[84px] w-[84px] place-items-center rounded-b-[42px]
          rounded-t-[18px] border-2 border-[rgb(90_60_35/35%)] bg-gradient-to-b
          from-[#f7e8c8] to-[#e3c48f] text-[#5a8a4e] shadow-[0_10px_22px_rgb(60_45_25/18%)]
          transition-transform duration-150 group-hover:-translate-y-1
          group-active:translate-y-0 group-active:scale-95"
      >
        <Icon aria-hidden="true" size={34} strokeWidth={2.2} />
      </span>
      <span className="text-sm font-bold text-[#20382f]">{label}</span>
    </button>
  )
}

interface CareDockProps {
  /** Raw diet code; decides whether feeding shows leaves or meat. */
  readonly dietCode: Diet
  readonly disabled: boolean
  /** Mirrors the overlay state: the dock stays rendered but is inert. */
  readonly overlayOpen: boolean
  /** Bath / ball interactions. */
  readonly onPlay: (kind: CarePlayKind) => void
  /** Bowl picked in the feed mini-game; the parent decides correctness. */
  readonly onFeedPick: (kind: 'meat' | 'leaf') => void
}

/**
 * Vertical interaction dock on the stage's right edge: feed, bath, and the
 * ball game. Feeding first opens a two-bowl picker so children guess what the
 * animal eats. All copy is localized via the i18n messages.
 */
export function CareDock({
  dietCode,
  disabled,
  overlayOpen,
  onPlay,
  onFeedPick,
}: CareDockProps) {
  const { messages } = useI18n()
  const [pickerOpen, setPickerOpen] = useState(false)

  const closePicker = () => {
    setPickerOpen(false)
  }

  return (
    <>
      <div
        aria-hidden={overlayOpen}
        className={`absolute top-1/2 right-[max(10px,env(safe-area-inset-right))]
          z-[6] grid -translate-y-1/2 gap-[6px] ${overlayOpen ? 'pointer-events-none' : ''}`}
        inert={overlayOpen}
      >
        <CareDockButton
          disabled={disabled}
          icon={dietCode === 'herbivore' ? Leaf : Beef}
          label={messages.care.feed}
          onClick={() => {
            if (!disabled) {
              setPickerOpen(true)
            }
          }}
        />
        <CareDockButton
          disabled={disabled}
          icon={ShowerHead}
          label={messages.care.bathe}
          onClick={() => onPlay('bath')}
        />
        <CareDockButton
          disabled={disabled}
          icon={Volleyball}
          label={messages.care.play}
          onClick={() => onPlay('ball')}
        />
      </div>
      {pickerOpen && !overlayOpen && !disabled ? (
        <div
          className="absolute bottom-[18%] left-1/2 z-[7] flex -translate-x-1/2
            flex-col items-center gap-3 rounded-3xl border border-white/70
            bg-[rgb(255_253_247/94%)] px-6 py-4 shadow-[0_16px_40px_rgb(28_46_37/22%)]
            backdrop-blur-[14px]"
          role="dialog"
          aria-label={messages.care.feed}
        >
          <button
            aria-label={messages.care.closePicker}
            className="absolute -top-3 -right-3 grid h-9 w-9 cursor-pointer
              place-items-center rounded-full border border-white/70
              bg-[rgb(255_253_247/96%)] text-[#214a33] shadow-md transition-colors
              hover:bg-white"
            onClick={closePicker}
            type="button"
          >
            <X aria-hidden="true" size={18} strokeWidth={2.4} />
          </button>
          <p className="text-base font-bold text-[#20382f]">
            {messages.care.feedPrompt}
          </p>
          <div className="flex gap-8">
            <BowlOption
              icon={Leaf}
              label={messages.care.bowlLeaf}
              onPick={() => {
                closePicker()
                onFeedPick('leaf')
              }}
            />
            <BowlOption
              icon={Beef}
              label={messages.care.bowlMeat}
              onPick={() => {
                closePicker()
                onFeedPick('meat')
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
