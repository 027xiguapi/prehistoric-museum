import { ChevronDown, ChevronUp } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

interface StoryPanelToggleProps {
  readonly collapsed: boolean
  /** Mirrors the overlay state so the collapsed pill stays inert. */
  readonly overlayOpen: boolean
  readonly onCollapse: () => void
  readonly onExpand: () => void
}

/**
 * Expand/hide switch for the story panel. When the panel is open this is the
 * small round collapse button pinned to the panel's top-right corner; when
 * collapsed it becomes the "show introduction" pill left in the panel's grid
 * slot so the layout keeps its shape and the button stays clickable above
 * the 3D stage.
 */
export function StoryPanelToggle({
  collapsed,
  overlayOpen,
  onCollapse,
  onExpand,
}: StoryPanelToggleProps) {
  const { messages } = useI18n()

  if (collapsed) {
    return (
      <section
        aria-hidden={overlayOpen}
        className="relative z-10 [grid-area:story] flex w-full max-w-[430px]
          flex-col items-start px-[clamp(22px,2.6vw,34px)]"
        inert={overlayOpen}
      >
        <button
          aria-expanded={false}
          aria-label={messages.storyExpand}
          className="flex h-12 cursor-pointer items-center gap-2 self-start
            rounded-full border border-white/65 bg-[rgb(255_253_247/92%)]
            px-5 text-sm font-bold text-[#214a33]
            shadow-[0_8px_22px_rgb(37_56_32/14%)] backdrop-blur-[12px]
            transition-transform duration-150 hover:-translate-y-0.5
            active:translate-y-0 active:scale-95"
          onClick={onExpand}
          type="button"
        >
          <ChevronDown aria-hidden="true" size={18} strokeWidth={2.4} />
          <span>{messages.storyExpand}</span>
        </button>
      </section>
    )
  }

  return (
    <button
      aria-expanded
      aria-label={messages.storyCollapse}
      className="absolute top-0 right-0 grid h-9 w-9 cursor-pointer place-items-center
        rounded-full border border-white/70 bg-[rgb(255_253_247/92%)] text-[#214a33]
        shadow-[0_6px_16px_rgb(37_56_32/16%)] backdrop-blur-[10px]
        transition-transform duration-150 hover:-translate-y-0.5
        active:translate-y-0 active:scale-90"
      onClick={onCollapse}
      type="button"
    >
      <ChevronUp aria-hidden="true" size={18} strokeWidth={2.4} />
    </button>
  )
}
