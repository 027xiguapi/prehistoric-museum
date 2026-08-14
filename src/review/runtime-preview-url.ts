// Review-mode URL builder for model preview stills. Only reachable when the
// compile-time `$museum-review-runtime` alias points at this module (review
// dev builds); every other build aliases it to the empty stub so the private
// review asset route never enters a production bundle.

export function reviewModelPreviewUrl(
  animalId: string,
  fileName: string,
): string {
  return `/__museum-review-assets/${animalId}/${fileName}`
}
