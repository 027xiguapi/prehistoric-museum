import { museumMode } from '@/src/app-mode'
import { allAnimals } from '@/src/content/catalog'
import type { AnimalPackage } from '@/src/content/types'
import { zoneIdsForAnimal, type ZoneCategoryId } from '@/src/content/collections/zone-definitions'

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

function buildDraftAnimalsByZone(): ReadonlyMap<
  string,
  readonly AnimalPackage[]
> {
  return new Map(
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
}

/**
 * Draft 3D animals grouped into the zone sections they unlock.
 *
 * Draft exhibits are unfinished, so a production build exposes no draft zone
 * entries: the homepage zone counts, the category pages and the exhibit guide
 * all read from this map, and none of them should advertise or link to an
 * exhibit that a visitor cannot open. `museumMode` is inlined at build time,
 * so the production branch resolves to an empty map.
 */
export const draftAnimalsByZone: ReadonlyMap<string, readonly AnimalPackage[]> =
  museumMode === 'production'
    ? new Map<string, readonly AnimalPackage[]>()
    : buildDraftAnimalsByZone()
