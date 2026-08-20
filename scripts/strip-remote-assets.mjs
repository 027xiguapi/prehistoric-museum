// Removes the exported remote assets (public/animals → out/animals) from a
// Capacitor static export so the app downloads models/audio on demand instead
// of bundling them. Run after `next build` in the mobile pipeline.
import { rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const exportedAssets = join(repositoryRoot, 'out', 'animals')

await rm(exportedAssets, { recursive: true, force: true })
console.log(`Removed ${exportedAssets}.`)
