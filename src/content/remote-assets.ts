// Resolves the stable, locally-served URL for an animal's model or narration
// audio. The files are emitted into `public/animals/<id>/` by
// `scripts/generate-remote-assets.mjs` and bundled into every build at
// `/animals/<id>/<file>`.
//
// `NEXT_PUBLIC_ASSET_ORIGIN` is inlined at build time and defaults to empty,
// so all builds (web and Capacitor static export) resolve the assets to
// same-origin relative paths and ship the models locally instead of pulling
// them from a remote origin.
export function animalAssetUrl(animalId: string, fileName: string): string {
  const origin = process.env.NEXT_PUBLIC_ASSET_ORIGIN ?? ''
  return `${origin}/animals/${animalId}/${fileName}`
}
