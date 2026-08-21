import { allAnimals } from '../catalog'
import type { AnimalPackage } from '../types'
import { zoneIdsForAnimal, type ZoneCategoryId } from './zone-definitions'

/**
 * Zone placement for draft 3D animals. A draft can belong to several zones
 * (e.g. a dragonfly is both `insect` and `sky`), so `draftAnimalsByZone` lists
 * the same animal under every matching zone.
 */
export function draftZonesForAnimal(animal: {
  readonly id: string
  readonly kind: AnimalPackage['kind']
  readonly atmosphere: AnimalPackage['atmosphere']
}): ZoneCategoryId[] {
  return zoneIdsForAnimal(animal)
}

/** Draft 3D animals grouped into the zone sections they unlock. */
export const draftAnimalsByZone: ReadonlyMap<string, readonly AnimalPackage[]> =
  new Map(
    Object.entries(
      allAnimals
        .filter((animal) => animal.status === 'draft')
        .reduce<Record<string, AnimalPackage[]>>((groups, animal) => {
          for (const zoneId of draftZonesForAnimal(animal)) {
            ;(groups[zoneId] ??= []).push(animal)
          }
          return groups
        }, {}),
    ),
  )
