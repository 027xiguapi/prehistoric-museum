import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

import sharp from 'sharp'

import { repositoryRoot } from './content-data'
import { staticAnimalDetailIds } from '../src/content/static-animal-details'

// Per-animal og:image cards (1200×630 webp) emitted into public/ so Next.js
// serves them at `{basePath}/{id}/social.webp`, the URL referenced by the
// detail page metadata (see src/seo/metadata.ts).

const outputRoot = resolve(repositoryRoot, 'public')

for (const animalId of staticAnimalDetailIds) {
  const targetDirectory = resolve(outputRoot, animalId)
  await mkdir(targetDirectory, { recursive: true })
  const animalDirectory = resolve(
    repositoryRoot,
    'src/content/animals',
    animalId,
  )
  const hero = await sharp(
    resolve(animalDirectory, 'backgrounds/landscape.webp'),
  )
    .resize(1200, 675, { fit: 'cover' })
    .composite([{ input: resolve(animalDirectory, 'images/poster.webp') }])
    .webp({ effort: 5, quality: 86 })
    .toBuffer()
  await sharp(hero)
    .resize(1200, 630, { fit: 'cover' })
    .webp({ effort: 5, quality: 86 })
    .toFile(resolve(targetDirectory, 'social.webp'))
}

console.log(
  `Generated animal social images for ${staticAnimalDetailIds.length} animal(s) in public/.`,
)
