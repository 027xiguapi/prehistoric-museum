import { museumMode } from '../app-mode'
import { allAnimals } from './catalog'
import { mainCollection } from './collections/main'

// Draft packages get detail pages on the dev server only, so pilots like the
// tiger can be previewed at /{locale}/animal/{id}/ before promotion.
const draftPreviewIds =
  museumMode === 'development'
    ? allAnimals
        .filter((animal) => animal.status === 'draft')
        .map((animal) => animal.id)
    : []

export const staticAnimalDetailIds = Object.freeze([
  ...mainCollection.animalIds,
  ...draftPreviewIds,
])

export type StaticAnimalDetailId = (typeof staticAnimalDetailIds)[number]
