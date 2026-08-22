'use client'

import { AnimalExhibitApp } from '../../../../src/AnimalExhibitApp'

interface AnimalExhibitProps {
  readonly animalId: string
}

// Client entry for the animal detail exhibit page.
export function AnimalExhibit({ animalId }: AnimalExhibitProps) {
  return <AnimalExhibitApp animalId={animalId} />
}
