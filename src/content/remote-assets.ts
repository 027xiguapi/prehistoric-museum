// Resolves the stable, remote-servable URL for an animal's model or narration
// audio. The files are emitted into `public/animals/<id>/` by
// `scripts/generate-remote-assets.mjs` and served at `/animals/<id>/<file>`.
//
// `NEXT_PUBLIC_ASSET_ORIGIN` is inlined at build time:
// - web build: unset → same-origin relative path (`/animals/...`)
// - Capacitor build: set to the remote origin (e.g. `https://host.example`) so
//   the app downloads models/audio on demand instead of bundling them.
export function animalAssetUrl(animalId: string, fileName: string): string {
  const origin = process.env.NEXT_PUBLIC_ASSET_ORIGIN ?? ''
  return `${origin}/animals/${animalId}/${fileName}`
}
