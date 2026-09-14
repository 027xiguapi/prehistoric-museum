import { museumMode } from '@/src/app-mode'
import { allAnimals } from '@/src/content/catalog'
import { mainCollection } from '@/src/content/collections/main'

// Draft packages get detail pages on the dev server only, so pilots like the
// tiger can be previewed at /{locale}/animal/{id}/ before promotion. This list
// also drives the sitemap and the previous/next exhibit navigation, so a
// production build must not include drafts: they would become publicly
// routable, indexable and served from unfinished exhibit screens.
//
// `museumMode` is inlined at build time, so the production branch drops the
// draft ids entirely.
const draftPreviewIds =
  museumMode === 'production'
    ? []
    : allAnimals
        .filter((animal) => animal.status === 'draft')
        .map((animal) => animal.id)

export const staticAnimalDetailIds = Object.freeze([
  ...mainCollection.animalIds,
  ...draftPreviewIds,
])

export type StaticAnimalDetailId = (typeof staticAnimalDetailIds)[number]
