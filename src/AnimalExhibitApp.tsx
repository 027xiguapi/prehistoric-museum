import { MuseumExperience } from './MuseumExperience'

interface AnimalExhibitAppProps {
  readonly animalId: string
}

// Dedicated client entry for the animal detail exhibit page. Unlike the
// museum home (`App`), this component pins the experience to a single
// animal-detail page kind instead of routing through a shared page switch.
export function AnimalExhibitApp({ animalId }: AnimalExhibitAppProps) {
  return (
    <MuseumExperience
      initialAnimalId={animalId}
      initialPageKind="animal-detail"
    />
  )
}
