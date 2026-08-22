'use client'

import { App } from '../../src/App'

interface MuseumHomeProps {
  readonly defaultAnimalId: string
}

// Client entry for the museum homepage (zone-select experience).
export function MuseumHome({ defaultAnimalId }: MuseumHomeProps) {
  return (
    <App
      initialState={{
        animalId: defaultAnimalId,
        pageKind: 'zone-select',
      }}
    />
  )
}
