import type { PublishedAnimalPackage } from '../types'

/** Stable identifier used in URLs (`?category=<id>`) and i18n lookups. */
export type ZoneCategoryId =
  | 'dinosaur'
  | 'plains'
  | 'forest'
  | 'ice'
  | 'ocean'
  | 'insect'

export interface ZoneCategoryDefinition {
  readonly id: ZoneCategoryId
  readonly matches: (animal: {
    readonly id: string
    readonly kind: PublishedAnimalPackage['kind']
    readonly atmosphere: PublishedAnimalPackage['atmosphere']
  }) => boolean
}

/**
 * Explicit membership for groups that cannot be derived from `kind` /
 * `atmosphere` yet. Future insects join the museum by adding their ids here.
 */
export const insectAnimalIds: readonly string[] = ['meganeura']

/** Ordered museum homepage category definitions. */
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
]
