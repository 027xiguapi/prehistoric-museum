import { useI18n } from '@/src/i18n/I18nProvider'
import type { ParentFacts } from '@/src/components/ParentDrawer'
import { SizeDrawerShell } from '@/src/components/size-drawer/SizeDrawerShell'
import { WeightBalance } from '@/src/components/size-drawer/WeightBalance'

interface AnimalWeightDrawerProps {
  readonly animalImage: string | null
  readonly animalName: string
  readonly facts: ParentFacts
  readonly onClose: () => void
  readonly open: boolean
  readonly returnFocusTo: React.RefObject<HTMLElement | null>
}

/** Weight-only dialog: animated balance scale against familiar references. */
export function AnimalWeightDrawer({
  animalImage,
  animalName,
  facts,
  onClose,
  open,
  returnFocusTo,
}: AnimalWeightDrawerProps) {
  const { messages } = useI18n()

  return (
    <SizeDrawerShell
      closeLabel={messages.size.weightClose}
      onClose={onClose}
      open={open}
      returnFocusTo={returnFocusTo}
      title={messages.size.weightDialogTitle}
    >
      <WeightBalance
        animalImage={animalImage}
        animalName={animalName}
        weightKg={facts.weightKg ?? null}
        weightText={facts.weight ?? null}
      />
    </SizeDrawerShell>
  )
}
