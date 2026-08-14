// Compile-time switch for the local review catalog.
//
// `$museum-review-catalog` is a webpack alias: review builds point it
// at the real review catalog, every other build points it at the empty stub,
// so private review material is excluded from production bundles entirely.
export { localReviewAnimals } from '$museum-review-catalog'
