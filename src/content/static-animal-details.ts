import { allAnimals } from '@/src/content/catalog'
import { mainCollection } from '@/src/content/collections/main'

// Draft packages get detail pages on the dev server only, so pilots like the
// tiger can be previewed at /{locale}/animal/{id}/ before promotion.
const draftPreviewIds = allAnimals
  .filter((animal) => animal.status === 'draft')
  .map((animal) => animal.id)

export const staticAnimalDetailIds = Object.freeze([
  ...mainCollection.animalIds,
  ...draftPreviewIds,
])

export type StaticAnimalDetailId = (typeof staticAnimalDetailIds)[number]
