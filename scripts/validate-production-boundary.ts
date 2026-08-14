import { access, readdir, readFile } from 'node:fs/promises'
import { extname, join, relative, sep } from 'node:path'

import { mainCollection } from '../src/content/collections/main'
import { supportedLocales } from '../src/i18n/locale'
import { localReviewAssetPrefix } from './review-assets'
import { unprefixedRouteMarker } from './review-server-security'

// Next.js production boundary: instead of scanning a static `dist`, this
// validator scans the `.next` build output. Client chunks and SSR bundles
// must not contain any local-review material marker, media assets must match
// the reviewed catalogue exactly, and (unless this was an e2e build) no
// source maps may ship.

const repositoryRoot = process.cwd()
const nextRoot = join(repositoryRoot, '.next')
const isE2eBuild = process.env.NEXT_PUBLIC_MUSEUM_MODE === 'e2e'
const forbiddenMarkers = [
  'local-review',
  unprefixedRouteMarker(localReviewAssetPrefix),
  '.handoff/collection-review',
  'assets/candidates',
  'parasaurolophus',
  '副栉龙',
] as const

async function collectFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const absolutePath = join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(absolutePath)))
    } else if (entry.isFile()) {
      files.push(absolutePath)
    }
  }

  return files
}

const findings: string[] = []
const toPosix = (value: string): string => value.split(sep).join('/')

const staticFiles = await collectFiles(join(nextRoot, 'static'))
const serverFiles = await collectFiles(join(nextRoot, 'server'))
const scannedFiles = [...staticFiles, ...serverFiles]

for (const absolutePath of scannedFiles) {
  const nextPath = toPosix(relative(nextRoot, absolutePath))
  // Server source maps embed original sources (comments included) for stack
  // traces; they are neither executed nor browser-shipped, so marker scanning
  // only covers executed code.
  if (nextPath.startsWith('server/') && nextPath.endsWith('.map')) {
    continue
  }
  // `[root-of-the-server]` chunks are Next.js's own vendored runtime. Its
  // file-tracing ignore list happens to contain `assets/candidates`, which
  // would otherwise false-positive as project review material.
  if (nextPath.startsWith('server/chunks/[root-of-the-server]')) {
    continue
  }
  const source = await readFile(absolutePath)
  for (const marker of forbiddenMarkers) {
    if (nextPath.includes(marker) || source.includes(Buffer.from(marker))) {
      findings.push(`${nextPath}: ${marker}`)
    }
  }
}

const mediaFiles = staticFiles.filter((file) =>
  toPosix(relative(nextRoot, file)).startsWith('static/media/'),
)
const glbFiles = mediaFiles.filter((file) => extname(file) === '.glb')
const mp3Files = mediaFiles.filter((file) => extname(file) === '.mp3')
// Turbopack always emits server-side source maps for stack traces; they are
// not shipped to browsers, so only browser-facing `static/` maps count.
const sourceMaps = staticFiles.filter((file) => extname(file) === '.map')
const expectedAnimalAssetCount = mainCollection.animalIds.length
const expectedNarrationAssetCount =
  expectedAnimalAssetCount * supportedLocales.length

const detailHtmlPattern = /^(?:zh-CN|en)\/[^/]+(?:\/index)?\.html$/
const serverAppFiles = serverFiles
  .map((file) => toPosix(relative(join(nextRoot, 'server', 'app'), file)))
  .filter((file) => !file.startsWith('..'))
const actualDetailPaths = serverAppFiles
  .filter((filePath) => detailHtmlPattern.test(filePath))
  .map((filePath) => filePath.replace(/\/index\.html$/, '.html'))
const expectedDetailPaths = supportedLocales.flatMap((locale) =>
  mainCollection.animalIds.map(
    (animalId) => `${locale}/${animalId}.html`,
  ),
)

for (const detailPath of expectedDetailPaths) {
  if (!actualDetailPaths.includes(detailPath)) {
    findings.push(`missing prerendered animal detail: ${detailPath}`)
  }
}
for (const detailPath of actualDetailPaths) {
  if (!expectedDetailPaths.includes(detailPath)) {
    findings.push(`unexpected prerendered animal detail: ${detailPath}`)
  }
}
for (const animalId of mainCollection.animalIds) {
  const socialImagePath = join(repositoryRoot, 'public', animalId, 'social.webp')
  try {
    await access(socialImagePath)
  } catch {
    findings.push(`missing animal social image: ${animalId}/social.webp`)
  }
}
if (glbFiles.length !== expectedAnimalAssetCount) {
  findings.push(
    `expected exactly ${expectedAnimalAssetCount} production GLBs; found ${glbFiles.length}`,
  )
}
if (mp3Files.length !== expectedNarrationAssetCount) {
  findings.push(
    `expected exactly ${expectedNarrationAssetCount} reviewed locale MP3s; found ${mp3Files.length}`,
  )
}
if (!isE2eBuild && sourceMaps.length !== 0) {
  findings.push(`expected 0 production source maps; found ${sourceMaps.length}`)
}

if (findings.length > 0) {
  console.error(
    'Production build contains local-review animal or asset material:',
  )
  for (const finding of findings) {
    console.error(`- ${finding}`)
  }
  process.exitCode = 1
} else {
  console.log(
    `Production boundary: ${scannedFiles.length} artifact(s) scanned, ${actualDetailPaths.length} prerendered animal details, ${glbFiles.length} GLBs, ${mp3Files.length} MP3s, ${sourceMaps.length} source map(s), 0 private review marker(s).`,
  )
}
