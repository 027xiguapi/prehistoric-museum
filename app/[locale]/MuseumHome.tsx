'use client'

import { App } from '../../src/App'
import type { Locale } from '../../src/i18n/locale'

interface MuseumHomeProps {
  readonly defaultAnimalId: string
  readonly locale: Locale
}

// Client entry for the museum homepage (zone-select experience).
export function MuseumHome({ defaultAnimalId, locale }: MuseumHomeProps) {
  return (
    <App
      initialState={{
        animalId: defaultAnimalId,
        locale,
        pageKind: 'zone-select',
        preference: locale,
      }}
    />
  )
}
