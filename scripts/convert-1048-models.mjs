// Batch-converts the “1048动物” GLB/GLTF drops into runtime-ready,
// self-contained GLBs (Meshopt + WebP), matching the museum's model spec.
//
// Sources and outputs are staged through ASCII-only temp/output paths: Node's
// spawn of .cmd wrappers fails with EINVAL when arguments or cwd contain
// non-ASCII characters, and the source folder names are Chinese.
//
// Usage: node scripts/convert-1048-models.mjs
import { execFile } from 'node:child_process'
import { cp, mkdir, mkdtemp, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
// The CLI's bundled sharp/libvips is broken in this environment, so PNG→WebP
// is done with the working sharp from the project root instead.
const sharp = require('sharp')

const execFileAsync = promisify(execFile)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceRoot = join(root, '1048动物')
const outputRoot = join(root, 'converted-1048')
const cli = join(root, 'node_modules/.bin/gltf-transform')

// ASCII-safe slug ids for output folders (Chinese folder names → English).
const slugByFolder = {
  '剑齿虎glb': 'saber-toothed-tiger',
  '小熊猫glb': 'red-panda',
  '小猫glb': 'kitten',
  '意大利敖犬glb格式': 'cane-corso',
  '挪威森林猫glb': 'norwegian-forest-cat',
  '斗牛glb': 'bull',
  '波斯猫glb': 'persian-cat',
  '海盗牧羊犬glb': 'pirate-shepherd-dog',
  '熊gltf格式': 'bear',
  '狐狸': 'fennec-fox',
  '猫头鹰gltf': 'owl',
  '章鱼glb': 'octopus',
  '绵羊gltf': 'sheep',
  '美山锹虫glb': 'stag-beetle',
  '老虎glb格式': 'tiger',
  '老鼠gltf': 'mouse',
  '蜈蚣gltf格式': 'centipede',
  '螃蟹glb': 'crab',
  '郊狼glb': 'coyote',
  '阿拉伯豹glb': 'arabian-leopard',
  '陆龟gltf格式': 'tortoise',
  '鲑鱼gltf': 'salmon',
  '鲨鱼glb格式': 'shark',
  '鸭子glb格式': 'duck',
  '鸽子gltf格式': 'pigeon',
  '麻雀gltf': 'sparrow',
  '黄牛gltf': 'ox',
  // Blend-source batch (exported to source/exported.glb by export-1048-blends.mjs).
  '乌鸦': 'crow',
  '兔子': 'rabbit',
  '哈巴狗': 'pug',
  '大象': 'elephant',
  '山羊': 'goat',
  '斑马': 'zebra',
  '斯芬克斯猫': 'sphynx-cat',
  '浣熊': 'raccoon',
  '海龟': 'sea-turtle',
  '犀牛甲虫': 'hercules-beetle',
  '狮子': 'lion',
  '笑翠鸟': 'kookaburra',
  '羊驼': 'alpaca',
  '蜗牛': 'snail',
  '蝎子': 'scorpion',
  '蟒蛇': 'python',
  '袋鼠': 'kangaroo',
  '雪纳瑞犬': 'schnauzer',
  '青蛙': 'frog',
  '马': 'horse',
  '鳄鱼': 'alligator',
  '鸸鹋': 'emu',
  '鹿': 'deer',
}

function findModelFile(entries, dir) {
  const candidates = entries
    .filter((name) => /\.glb$/i.test(name) || /\.gltf$/i.test(name))
    .sort((a, b) => Number(/\.glb$/i.test(b)) - Number(/\.glb$/i.test(a)))
  return candidates.length > 0 ? join(dir, candidates[0]) : null
}

function readGlbParts(buffer) {
  const jsonLength = buffer.readUInt32LE(12)
  const json = JSON.parse(buffer.toString('utf8', 20, 20 + jsonLength))
  const binOffset = 20 + jsonLength + (jsonLength % 4 ? 4 - (jsonLength % 4) : 0)
  const binLength = buffer.readUInt32LE(binOffset)
  const bin = buffer.subarray(binOffset + 8, binOffset + 8 + binLength)
  return { bin, json }
}

function writeGlb(json, bin) {
  // Padding must be computed from the UTF-8 byte length, not the string
  // length: non-ASCII property names (common in these drops) make the two
  // differ and misalign every following chunk.
  const jsonText = JSON.stringify(json)
  const jsonBytes = Buffer.byteLength(jsonText, 'utf8')
  const jsonPad = (4 - (jsonBytes % 4)) % 4
  const binPad = (4 - (bin.length % 4)) % 4
  const jsonChunk = Buffer.concat([
    Buffer.from(jsonText, 'utf8'),
    Buffer.alloc(jsonPad, 0x20),
  ])
  const binChunk = Buffer.concat([bin, Buffer.alloc(binPad, 0)])
  const total = 12 + 8 + jsonChunk.length + 8 + binChunk.length
  const out = Buffer.alloc(total)
  out.write('glTF', 0, 'ascii')
  out.writeUInt32LE(2, 4)
  out.writeUInt32LE(total, 8)
  out.writeUInt32LE(jsonChunk.length, 12)
  out.write('JSON', 16, 'ascii')
  jsonChunk.copy(out, 20)
  const binHeader = 20 + jsonChunk.length
  out.writeUInt32LE(binChunk.length, binHeader)
  out.write('BIN\0', binHeader + 4, 'ascii')
  binChunk.copy(out, binHeader + 8)
  return out
}

/** Losslessly re-encodes every PNG texture in a GLB to WebP (in place). */
async function convertPngTexturesToWebp(glbPath) {
  const buffer = await (await import('node:fs/promises')).readFile(glbPath)
  const { bin, json } = readGlbParts(buffer)
  if (!json.images?.some((image) => image.mimeType === 'image/png')) {
    return 0
  }
  const newBin = [Buffer.from(bin)]
  let offset = bin.length
  for (const image of json.images) {
    if (image.mimeType !== 'image/png') {
      continue
    }
    const view = json.bufferViews[image.bufferView]
    const png = bin.subarray(view.byteOffset ?? 0, (view.byteOffset ?? 0) + view.byteLength)
    const webp = await sharp(png).webp({ lossless: true }).toBuffer()
    const padding = (4 - (offset % 4)) % 4
    if (padding) {
      newBin.push(Buffer.alloc(padding, 0))
      offset += padding
    }
    newBin.push(webp)
    image.mimeType = 'image/webp'
    image.bufferView = json.bufferViews.push({
      buffer: 0,
      byteOffset: offset,
      byteLength: webp.length,
    }) - 1
    offset += webp.length
  }
  json.buffers = [{ byteLength: offset }]
  json.extensionsUsed = [...new Set([...(json.extensionsUsed ?? []), 'EXT_texture_webp'])]
  json.extensionsRequired = [...new Set([...(json.extensionsRequired ?? []), 'EXT_texture_webp'])]
  await (await import('node:fs/promises')).writeFile(
    glbPath,
    writeGlb(json, Buffer.concat(newBin)),
  )
  return json.images.filter((image) => image.mimeType === 'image/webp').length
}

const folders = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => name in slugByFolder)

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null
const selectedFolders = onlySlugs
  ? folders.filter((name) => onlySlugs.has(slugByFolder[name]))
  : folders

const report = []
for (const folder of selectedFolders) {
  const slug = slugByFolder[folder]
  const dir = join(sourceRoot, folder)
  // The model sits in `source/`, or directly in the folder (scene.gltf drops).
  let modelDir = null
  let modelPath = null
  for (const candidate of [join(dir, 'source'), dir]) {
    try {
      modelPath = findModelFile(await readdir(candidate), candidate)
      if (modelPath) {
        modelDir = candidate
        break
      }
    } catch {
      // No such directory.
    }
  }
  if (!modelPath) {
    report.push({ folder, slug, status: 'no-model-found' })
    continue
  }

  const outDir = join(outputRoot, slug)
  const outPath = join(outDir, 'model.glb')
  const stage = await mkdtemp(join(tmpdir(), `museum-${slug}-`))
  try {
    // Stage the model plus every sibling file so external .bin/textures of
    // .gltf drops resolve next to the document.
    await cp(modelDir, stage, { recursive: true })
    const stagedModel = join(stage, modelPath.slice(modelDir.length + 1))
    await mkdir(outDir, { recursive: true })

    // Same pipeline as scripts/optimize-runtime-models.mjs: pack .gltf drops
    // into self-contained GLBs, PNG→WebP, then Meshopt compression with the
    // museum's quantization levels.
    const runCli = (...arguments_) =>
      execFileAsync('bash', [cli, ...arguments_], {
        cwd: root,
        maxBuffer: 1024 * 1024 * 64,
      })
    const webpPath = join(stage, 'textures-webp.glb')
    const optimizedPath = join(stage, 'optimized.glb')
    if (/\.gltf$/i.test(stagedModel)) {
      // `copy` to a .glb output packs external .bin/textures into the file.
      await runCli('copy', stagedModel, webpPath)
    } else {
      await cp(stagedModel, webpPath)
    }
    await convertPngTexturesToWebp(webpPath)
    await runCli(
      'meshopt',
      webpPath,
      optimizedPath,
      '--level',
      'high',
      '--quantize-position',
      '16',
      '--quantize-normal',
      '12',
      '--quantize-texcoord',
      '14',
      '--quantize-weight',
      '12',
    )
    await runCli('validate', optimizedPath)
    await cp(optimizedPath, outPath)
    const { size } = await stat(outPath)
    const sourceSize = (await stat(modelPath)).size
    report.push({
      folder,
      slug,
      status: 'ok',
      sourceMB: (sourceSize / 1048576).toFixed(1),
      outputMB: (size / 1048576).toFixed(1),
    })
  } catch (error) {
    const details = [error.stderr, error.stdout, error.message]
      .filter(Boolean)
      .join(' | ')
      .replace(/\s+/g, ' ')
      .slice(0, 300)
    report.push({ folder, slug, status: `failed: ${details}` })
  } finally {
    await rm(stage, { recursive: true, force: true })
  }
}

await writeFile(
  join(outputRoot, 'conversion-report.json'),
  JSON.stringify(report, null, 2),
)
for (const row of report) {
  console.log(
    `${row.status === 'ok' ? '✓' : '✗'} ${row.folder} → ${row.slug}` +
      (row.status === 'ok'
        ? `  ${row.sourceMB}MB → ${row.outputMB}MB`
        : `  (${row.status})`),
  )
}
console.log(
  `\n${report.filter((r) => r.status === 'ok').length}/${report.length} converted → ${outputRoot}`,
)
