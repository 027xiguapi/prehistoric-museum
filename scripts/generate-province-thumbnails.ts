import { mkdir, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

import sharp from 'sharp'

import { repositoryRoot } from './content-data'

// Homepage province-gallery thumbnails.
//
// The province maps are stored at 1080px wide (~100 KB each). A gallery tile
// renders at roughly 260px, so shipping the originals to every visitor costs
// several megabytes for no visible gain. This emits 520px-wide webp
// derivatives that the gallery references through `srcSet`: a normal tile
// loads the small file (about 2x the rendered size, for high-DPI screens) and
// the 1080px map is only fetched for very large tiles.
//
// Usage: npm run generate:province-thumbnails

const sourceRoot = resolve(repositoryRoot, 'public/img/china')
const outputRoot = resolve(sourceRoot, 'thumbs')

const THUMBNAIL_WIDTH = 520

await mkdir(outputRoot, { recursive: true })

const fileNames = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith('.webp'))
  .map((entry) => entry.name)
  .sort()

let outputBytes = 0
for (const fileName of fileNames) {
  const info = await sharp(resolve(sourceRoot, fileName))
    .resize({ width: THUMBNAIL_WIDTH, withoutEnlargement: true })
    .webp({ effort: 5, quality: 78 })
    .toFile(resolve(outputRoot, fileName))
  outputBytes += info.size
}

console.log(
  `Generated ${fileNames.length} province thumbnail(s) totalling ${Math.round(outputBytes / 1024)} KB in public/img/china/thumbs/.`,
)
