import { useI18n } from '@/src/i18n/I18nProvider'
import type { ParentFacts } from '@/src/components/ParentDrawer'
import { HeightCompare } from '@/src/components/size-drawer/HeightCompare'
import { SizeDrawerShell } from '@/src/components/size-drawer/SizeDrawerShell'

interface AnimalHeightDrawerProps {
  readonly animalImage: string | null
  readonly animalName: string
  readonly facts: ParentFacts
  readonly onClose: () => void
  readonly open: boolean
  readonly returnFocusTo: React.RefObject<HTMLElement | null>
}

/** Height-only dialog: ruler, growing figure vs animal, sweeping marker. */
export function AnimalHeightDrawer({
  animalImage,
  animalName,
  facts,
  onClose,
  open,
  returnFocusTo,
}: AnimalHeightDrawerProps) {
  const { messages } = useI18n()

  return (
    <SizeDrawerShell
      closeLabel={messages.size.heightClose}
      onClose={onClose}
      open={open}
      returnFocusTo={returnFocusTo}
      title={messages.size.heightDialogTitle}
    >
      <HeightCompare
        animalImage={animalImage}
        animalName={animalName}
        sizeLabel={facts.sizeLabel}
        sizeMeters={facts.sizeMeters ?? null}
        sizeText={facts.size}
      />
    </SizeDrawerShell>
  )
}
