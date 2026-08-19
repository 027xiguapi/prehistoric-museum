'use client'

import { App } from '../../../../src/App'
import type { Locale } from '../../../../src/i18n/locale'

interface AnimalExhibitProps {
  readonly animalId: string
  readonly locale: Locale
}

// Client entry for the animal detail exhibit page.
export function AnimalExhibit({ animalId, locale }: AnimalExhibitProps) {
  return (
    <App
      initialState={{
        animalId,
        locale,
        pageKind: 'animal-detail',
        preference: locale,
      }}
    />
  )
}
