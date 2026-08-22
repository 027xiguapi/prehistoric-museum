import type { AnimalKind, AtmosphereKind } from '@/src/content/types'

/** Stable identifier used in URLs (`?category=<id>`) and i18n lookups. */
export type ZoneCategoryId =
  | 'dinosaur'
  | 'plains'
  | 'forest'
  | 'ice'
  | 'ocean'
  | 'insect'
  | 'sky'

export interface ZoneCategoryDefinition {
  readonly id: ZoneCategoryId
  readonly matches: (animal: {
    readonly id: string
    readonly kind: AnimalKind
    readonly atmosphere: AtmosphereKind
  }) => boolean
}

/**
 * Explicit membership for animals that cannot be derived from `kind` /
 * `atmosphere` alone (every insect and insect-adjacent bug in the museum).
 */
export const insectAnimalIds: readonly string[] = [
  // Flying insects — also land in `sky` through their `air` atmosphere.
  'meganeura',
  'dragonfly',
  'swallowtail-butterfly',
  'morpho-butterfly',
  'atlas-moth',
  'firefly',
  'hornet',
  // Beetles.
  'atlas-beetle',
  'giant-stag-beetle',
  'hercules-beetle',
  'hercules-beetle-ar',
  'jewel-beetle',
  'rhinoceros-beetle',
  'rosalia-batesi',
  'shining-ball-scarab',
  'stag-beetle',
  'stag-beetle-2',
  // Cicadas.
  'brown-cicada',
  'evening-cicada',
  'periodical-cicada',
  'robust-cicada',
  'walkers-cicada',
  // Other bugs.
  'bumblebee',
  'centipede',
  'grasshopper',
  'ladybug',
  'mantis',
  'scorpion',
]

/**
 * Ordered museum category definitions. A single animal may match several
 * categories (e.g. a dragonfly matches both `insect` and `sky`), so the same
 * exhibit can appear in more than one zone.
 */
export const zoneCategoryDefinitions: readonly ZoneCategoryDefinition[] = [
  {
    id: 'dinosaur',
    matches: (animal) =>
      animal.kind === 'dinosaur' || animal.kind === 'pterosaur',
  },
  {
    id: 'plains',
    matches: (animal) => animal.atmosphere === 'plains',
  },
  {
    id: 'forest',
    matches: (animal) => animal.atmosphere === 'forest',
  },
  {
    id: 'ice',
    matches: (animal) => animal.atmosphere === 'ice',
  },
  {
    id: 'ocean',
    matches: (animal) => animal.atmosphere === 'underwater',
  },
  {
    id: 'insect',
    matches: (animal) => insectAnimalIds.includes(animal.id),
  },
  {
    id: 'sky',
    matches: (animal) => animal.atmosphere === 'air',
  },
]

/** Every zone an animal belongs to, in homepage-category order. */
export function zoneIdsForAnimal(animal: {
  readonly id: string
  readonly kind: AnimalKind
  readonly atmosphere: AtmosphereKind
}): ZoneCategoryId[] {
  return zoneCategoryDefinitions
    .filter((definition) => definition.matches(animal))
    .map((definition) => definition.id)
}
