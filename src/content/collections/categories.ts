import { productionAnimals } from '@/src/content/catalog'
import type { PublishedAnimalPackage } from '@/src/content/types'
import {
  zoneCategoryDefinitions,
  type ZoneCategoryId,
  type ZoneCategoryDefinition,
} from '@/src/content/collections/zone-definitions'

export type { ZoneCategoryId }

export interface ZoneCategory {
  readonly id: ZoneCategoryId
  readonly animalIds: readonly string[]
  readonly defaultAnimalId: string
}

const seenZoneIds = new Set<ZoneCategoryId>()

function resolveZoneCategory(
  definition: ZoneCategoryDefinition,
): ZoneCategory {
  if (seenZoneIds.has(definition.id)) {
    throw new Error(`分类目录包含重复的分类 ID “${definition.id}”。`)
  }
  seenZoneIds.add(definition.id)

  // Keep the curated main-collection ordering inside each category.
  const animalIds = productionAnimals
    .filter((animal) => definition.matches(animal))
    .map((animal) => animal.id)
  const defaultAnimalId = animalIds[0]
  if (!defaultAnimalId) {
    throw new Error(`分类 “${definition.id}” 没有任何已发布的动物。`)
  }
  return { animalIds, defaultAnimalId, id: definition.id }
}

/** Ordered list of museum homepage categories. */
export const zoneCategories: readonly ZoneCategory[] =
  zoneCategoryDefinitions.map(resolveZoneCategory)

export const zoneCategoryById: ReadonlyMap<ZoneCategoryId, ZoneCategory> =
  new Map(zoneCategories.map((zone) => [zone.id, zone]))

export function parseZoneCategoryId(id: string | null): ZoneCategoryId | null {
  return id && zoneCategoryById.has(id as ZoneCategoryId)
    ? (id as ZoneCategoryId)
    : null
}

/** Reverse lookup: an animal may belong to several categories. */
export function zoneIdsForAnimal(animalId: string): ZoneCategoryId[] {
  return zoneCategories
    .filter((zone) => zone.animalIds.includes(animalId))
    .map((zone) => zone.id)
}

/** First category that contains the animal, used when jumping across zones. */
export function primaryZoneIdForAnimal(animalId: string): ZoneCategoryId {
  const primary = zoneIdsForAnimal(animalId)[0]
  if (!primary) {
    throw new Error(`动物 “${animalId}” 不属于任何分类。`)
  }
  return primary
}

export function zoneCategoryIdsForAnimal(
  animal: Pick<PublishedAnimalPackage, 'id' | 'kind' | 'atmosphere'>,
): ZoneCategoryId[] {
  return zoneCategoryDefinitions
    .filter((definition) => definition.matches(animal))
    .map((definition) => definition.id)
}
