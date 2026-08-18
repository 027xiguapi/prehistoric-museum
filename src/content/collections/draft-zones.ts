import { allAnimals } from '../catalog'
import type { AnimalPackage } from '../types'

/**
 * Zone placement for draft 3D animals (the 1048 batch). Drafts are only
 * discovered in development/review builds, so these lists collapse to empty
 * in production until the animals are promoted.
 */
export type DraftZoneId =
  | 'plains'
  | 'forest'
  | 'ice'
  | 'ocean'
  | 'insect'
  | 'sky'

const draftZoneByAtmosphere: Readonly<Record<string, DraftZoneId>> = {
  plains: 'plains',
  forest: 'forest',
  ice: 'ice',
  underwater: 'ocean',
  air: 'sky',
}

/** Draft insects and other bug-like critters join the insect zone. */
const draftInsectAnimalIds: ReadonlySet<string> = new Set([
  'stag-beetle',
  'hercules-beetle',
  'scorpion',
])

export function draftZoneForAnimal(animal: {
  readonly id: string
  readonly atmosphere: AnimalPackage['atmosphere']
}): DraftZoneId | null {
  if (draftInsectAnimalIds.has(animal.id)) {
    return 'insect'
  }
  return draftZoneByAtmosphere[animal.atmosphere] ?? null
}

/** Draft 3D animals grouped into the zone sections they unlock. */
export const draftAnimalsByZone: ReadonlyMap<string, readonly AnimalPackage[]> =
  new Map(
    Object.entries(
      allAnimals
        .filter((animal) => animal.status === 'draft')
        .reduce<Record<DraftZoneId, AnimalPackage[]>>((groups, animal) => {
          const zoneId = draftZoneForAnimal(animal)
          if (zoneId) {
            ;(groups[zoneId] ??= []).push(animal)
          }
          return groups
        }, {} as Record<DraftZoneId, AnimalPackage[]>),
    ),
  )
