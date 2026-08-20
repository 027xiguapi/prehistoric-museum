// Emits each animal's model and narration audio into `public/animals/<id>/`
// so the web server (and, via `NEXT_PUBLIC_ASSET_ORIGIN`, the Capacitor app)
// can serve them at stable URLs instead of bundling them into JS chunks.
// `public/animals/` is gitignored and regenerated on every web build.
//
// Usage: node scripts/generate-remote-assets.mjs
import { cp, mkdir, readdir, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const animalsRoot = join(repositoryRoot, 'src/content/animals')
const outputRoot = join(repositoryRoot, 'public/animals')

const animalIds = (await readdir(animalsRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()

await rm(outputRoot, { recursive: true, force: true })

const filesByAnimal = [
  ['model/model.glb', 'model.glb'],
  ['audio/narration.zh-CN.mp3', 'narration.zh-CN.mp3'],
  ['audio/narration.en.mp3', 'narration.en.mp3'],
]

let copied = 0
for (const animalId of animalIds) {
  const sourceDir = join(animalsRoot, animalId)
  const targetDir = join(outputRoot, animalId)
  for (const [source, target] of filesByAnimal) {
    try {
      await cp(join(sourceDir, source), join(targetDir, target), {
        force: true,
      })
      copied += 1
    } catch (error) {
      if (error && typeof error === 'object' && error.code === 'ENOENT') {
        // Drafts may not have narration audio yet.
        continue
      }
      throw error
    }
  }
  // Ensure the folder exists even when every file was skipped.
  await mkdir(targetDir, { recursive: true })
}

console.log(`Copied ${copied} remote asset(s) into ${outputRoot}.`)
