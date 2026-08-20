// Batch-converts the `model-downloads` GLB drops (Google AR Answers in Search
// models, see scripts/downloads-manifest.mjs) into runtime-ready,
// self-contained GLBs (Meshopt + WebP), matching the museum's model spec —
// the same pipeline as scripts/convert-1048-models.mjs.
//
// Usage: node scripts/convert-model-downloads.mjs [--only=slug1,slug2]
import { execFile } from 'node:child_process'
import { cp, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import { createRequire } from 'node:module'

import { DOWNLOADS, activeDownloads } from './downloads-manifest.mjs'

const require = createRequire(import.meta.url)
// The CLI's bundled sharp/libvips is broken in this environment, so PNG→WebP
// is done with the working sharp from the project root instead.
const sharp = require('sharp')

const execFileAsync = promisify(execFile)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceRoot = join(root, 'model-downloads')
const outputRoot = join(root, 'converted-downloads')
// Invoke the CLI through node directly: this Windows environment has no usable
// bash (the system `bash` is WSL without an installed distro), so the
// node_modules/.bin sh shim used by the 1048 batch is not an option here.
const cli = join(root, 'node_modules/@gltf-transform/cli/bin/cli.js')

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
  // length: non-ASCII property names make the two differ and misalign every
  // following chunk.
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

function sniffImageMime(bytes) {
  if (
    bytes.length >= 4 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return 'image/png'
  }
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return 'image/jpeg'
  }
  if (
    bytes.length >= 12 &&
    bytes.toString('ascii', 0, 4) === 'RIFF' &&
    bytes.toString('ascii', 8, 12) === 'WEBP'
  ) {
    return 'image/webp'
  }
  return null
}

/** Locates a dense FLOAT accessor inside the GLB BIN chunk (or null). */
function floatAccessorView(json, bin, accessorIndex) {
  const accessor = json.accessors?.[accessorIndex]
  if (
    !accessor ||
    accessor.sparse ||
    accessor.componentType !== 5126 ||
    accessor.bufferView === undefined
  ) {
    return null
  }
  const view = json.bufferViews[accessor.bufferView]
  if (!view || view.buffer !== 0) {
    return null
  }
  const componentCount = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 }[accessor.type]
  if (!componentCount) {
    return null
  }
  return {
    accessor,
    base: (view.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
    stride: view.byteStride ?? componentCount * 4,
    componentCount,
  }
}

/** Refreshes accessor.min/max after in-place value edits. */
function recomputeMinMax(bin, view) {
  const { accessor, base, stride, componentCount } = view
  if (!accessor.min && !accessor.max) {
    return
  }
  const min = Array.from({ length: componentCount }, () => Infinity)
  const max = Array.from({ length: componentCount }, () => -Infinity)
  for (let vertex = 0; vertex < accessor.count; vertex += 1) {
    for (let component = 0; component < componentCount; component += 1) {
      const value = bin.readFloatLE(base + vertex * stride + component * 4)
      if (value < min[component]) min[component] = value
      if (value > max[component]) max[component] = value
    }
  }
  accessor.min = min
  accessor.max = max
}

/**
 * Deterministic repairs for the defects these Google-bucket exports carry
 * (observed on the 9 models that failed validation): mis-declared image
 * mimes, non-normalized skin weights, inverse-bind-matrix [3][3] float
 * rounding, skin.skeleton not pointing at a joints' common root, and
 * zero/non-unit normals. Every edit is minimal, counted and returned as
 * human-readable notes; anything else is left for the validator to reject.
 */
async function repairSourceGlb(glbPath) {
  const { bin, json } = readGlbParts(await readFile(glbPath))
  const repairs = []

  // 1. Declared image mimeType vs the actual magic bytes (e.g. PNG bytes
  //    declared as image/jpeg). Correcting the declaration lets the WebP
  //    pass see the real PNGs and clears IMAGE_MIME_TYPE_INVALID.
  let mimeFixes = 0
  for (const image of json.images ?? []) {
    if (image.bufferView === undefined) {
      continue
    }
    const view = json.bufferViews[image.bufferView]
    const bytes = bin.subarray(view.byteOffset ?? 0, (view.byteOffset ?? 0) + view.byteLength)
    const sniffed = sniffImageMime(bytes)
    if (sniffed && sniffed !== image.mimeType) {
      image.mimeType = sniffed
      mimeFixes += 1
    }
  }
  if (mimeFixes) {
    repairs.push(`corrected ${mimeFixes} mis-declared image mimeType(s)`)
  }

  // 2. Skin weights whose per-vertex sum deviates from 1 (export rounding).
  let weightFixes = 0
  const weightAccessors = new Set()
  for (const mesh of json.meshes ?? []) {
    for (const primitive of mesh.primitives ?? []) {
      const accessorIndex = primitive.attributes?.WEIGHTS_0
      if (accessorIndex === undefined || weightAccessors.has(accessorIndex)) {
        continue
      }
      weightAccessors.add(accessorIndex)
      const view = floatAccessorView(json, bin, accessorIndex)
      if (!view || view.componentCount !== 4) {
        continue
      }
      let touched = false
      for (let vertex = 0; vertex < view.accessor.count; vertex += 1) {
        const offset = view.base + vertex * view.stride
        const sum =
          bin.readFloatLE(offset) +
          bin.readFloatLE(offset + 4) +
          bin.readFloatLE(offset + 8) +
          bin.readFloatLE(offset + 12)
        if (sum > 0 && Math.abs(sum - 1) > 1e-6) {
          for (let component = 0; component < 4; component += 1) {
            bin.writeFloatLE(
              bin.readFloatLE(offset + component * 4) / sum,
              offset + component * 4,
            )
          }
          weightFixes += 1
          touched = true
        }
      }
      if (touched) {
        recomputeMinMax(bin, view)
      }
    }
  }
  if (weightFixes) {
    repairs.push(`normalized ${weightFixes} non-unit skin weight vertex sum(s)`)
  }

  // 3. Inverse bind matrices whose [3][3] element is 0.99999994 instead of
  //    exactly 1 (float32 rounding at export).
  let ibmFixes = 0
  for (const skin of json.skins ?? []) {
    if (skin.inverseBindMatrices === undefined) {
      continue
    }
    const view = floatAccessorView(json, bin, skin.inverseBindMatrices)
    if (!view || view.componentCount !== 16) {
      continue
    }
    let touched = false
    for (let matrix = 0; matrix < view.accessor.count; matrix += 1) {
      const offset = view.base + matrix * view.stride + 15 * 4
      const value = bin.readFloatLE(offset)
      if (value !== 1 && Math.abs(value - 1) < 1e-5) {
        bin.writeFloatLE(1, offset)
        ibmFixes += 1
        touched = true
      }
    }
    if (touched) {
      recomputeMinMax(bin, view)
    }
  }
  if (ibmFixes) {
    repairs.push(`set ${ibmFixes} inverse-bind-matrix [3][3] element(s) to exactly 1`)
  }

  // 4. skin.skeleton that is not a common root of the joints — repoint it
  //    to the deepest node that is an ancestor-or-self of every joint.
  let skeletonFixes = 0
  if (json.skins?.length) {
    const parentOf = new Map()
    for (const [index, node] of (json.nodes ?? []).entries()) {
      for (const child of node.children ?? []) {
        parentOf.set(child, index)
      }
    }
    const ancestorsOrSelf = (nodeIndex) => {
      const chain = []
      const guard = new Set()
      let current = nodeIndex
      while (current !== undefined && !guard.has(current)) {
        guard.add(current)
        chain.push(current)
        current = parentOf.get(current)
      }
      return chain
    }
    for (const skin of json.skins) {
      if (!skin.joints?.length) {
        continue
      }
      let candidates = new Set(ancestorsOrSelf(skin.joints[0]))
      for (const joint of skin.joints.slice(1)) {
        if (!candidates.size) {
          break
        }
        const jointChain = new Set(ancestorsOrSelf(joint))
        candidates = new Set([...candidates].filter((node) => jointChain.has(node)))
      }
      const commonRoot = ancestorsOrSelf(skin.joints[0]).find((node) => candidates.has(node))
      if (commonRoot !== undefined && skin.skeleton !== commonRoot) {
        skin.skeleton = commonRoot
        skeletonFixes += 1
      }
    }
  }
  if (skeletonFixes) {
    repairs.push(`repointed ${skeletonFixes} skin.skeleton to the joints' common root`)
  }

  // 5. Zero-length or clearly non-unit FLOAT normals.
  let normalFixes = 0
  const normalAccessors = new Set()
  for (const mesh of json.meshes ?? []) {
    for (const primitive of mesh.primitives ?? []) {
      const accessorIndex = primitive.attributes?.NORMAL
      if (accessorIndex === undefined || normalAccessors.has(accessorIndex)) {
        continue
      }
      normalAccessors.add(accessorIndex)
      const view = floatAccessorView(json, bin, accessorIndex)
      if (!view || view.componentCount !== 3) {
        continue
      }
      let touched = false
      for (let vertex = 0; vertex < view.accessor.count; vertex += 1) {
        const offset = view.base + vertex * view.stride
        const x = bin.readFloatLE(offset)
        const y = bin.readFloatLE(offset + 4)
        const z = bin.readFloatLE(offset + 8)
        const length = Math.hypot(x, y, z)
        if (length === 0) {
          bin.writeFloatLE(0, offset)
          bin.writeFloatLE(0, offset + 4)
          bin.writeFloatLE(1, offset + 8)
          normalFixes += 1
          touched = true
        } else if (Math.abs(length - 1) > 1e-4) {
          bin.writeFloatLE(x / length, offset)
          bin.writeFloatLE(y / length, offset + 4)
          bin.writeFloatLE(z / length, offset + 8)
          normalFixes += 1
          touched = true
        }
      }
      if (touched) {
        recomputeMinMax(bin, view)
      }
    }
  }
  if (normalFixes) {
    repairs.push(`repaired ${normalFixes} zero/non-unit normal vector(s)`)
  }

  if (repairs.length) {
    await writeFile(glbPath, writeGlb(json, bin))
  }
  return repairs
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

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null

const report = []
for (const entry of DOWNLOADS) {
  if (onlySlugs && !onlySlugs.has(entry.slug)) {
    continue
  }
  if (entry.skip) {
    report.push({ slug: entry.slug, source: entry.source, status: `skipped: ${entry.skip}` })
    console.log(`- ${entry.slug}  skipped (${entry.skip})`)
    continue
  }

  const sourcePath = join(sourceRoot, entry.source)
  const outDir = join(outputRoot, entry.slug)
  const outPath = join(outDir, 'model.glb')
  const stage = await mkdtemp(join(tmpdir(), `museum-dl-${entry.slug}-`))
  try {
    // Stage the model so intermediate files never touch the source tree.
    // The source entry is a single GLB file, not a folder like the 1048 batch.
    const stagedModel = join(stage, 'source.glb')
    await cp(sourcePath, stagedModel)
    await mkdir(outDir, { recursive: true })

    const repairs = await repairSourceGlb(stagedModel)

    // Same pipeline as scripts/convert-1048-models.mjs: PNG→WebP, then
    // Meshopt compression with the museum's quantization levels.
    const runCli = (...arguments_) =>
      execFileAsync(process.execPath, [cli, ...arguments_], {
        cwd: root,
        maxBuffer: 1024 * 1024 * 64,
      })
    const webpPath = join(stage, 'textures-webp.glb')
    const optimizedPath = join(stage, 'optimized.glb')
    await cp(stagedModel, webpPath)
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
    const sourceSize = (await stat(sourcePath)).size
    report.push({
      slug: entry.slug,
      source: entry.source,
      status: 'ok',
      sourceMB: (sourceSize / 1048576).toFixed(1),
      outputMB: (size / 1048576).toFixed(1),
      ...(repairs.length ? { repairs } : {}),
    })
    console.log(
      `✓ ${entry.slug}  ${(sourceSize / 1048576).toFixed(1)}MB → ${(size / 1048576).toFixed(1)}MB` +
        (repairs.length ? `  [${repairs.join('; ')}]` : ''),
    )
  } catch (error) {
    const details = [error.stderr, error.stdout, error.message]
      .filter(Boolean)
      .join(' | ')
      .replace(/\s+/g, ' ')
      .slice(0, 300)
    report.push({ slug: entry.slug, source: entry.source, status: `failed: ${details}` })
    console.log(`✗ ${entry.slug}: ${details.slice(0, 160)}`)
  } finally {
    await rm(stage, { recursive: true, force: true })
  }
}

// Incremental runs (--only=…) merge into any existing report so the file
// always reflects the whole manifest.
const reportPath = join(outputRoot, 'downloads-conversion-report.json')
const previousRows = await readFile(reportPath, 'utf8')
  .then((text) => JSON.parse(text))
  .catch(() => [])
const merged = new Map(
  (Array.isArray(previousRows) ? previousRows : []).map((row) => [row.slug, row]),
)
for (const row of report) {
  merged.set(row.slug, row)
}
const order = new Map(DOWNLOADS.map((entry, index) => [entry.slug, index]))
const orderedReport = [...merged.values()].sort(
  (a, b) => (order.get(a.slug) ?? 9999) - (order.get(b.slug) ?? 9999),
)
await mkdir(outputRoot, { recursive: true })
await writeFile(reportPath, JSON.stringify(orderedReport, null, 2))
const okCount = orderedReport.filter((row) => row.status === 'ok').length
const skippedCount = orderedReport.filter((row) => row.status.startsWith('skipped')).length
console.log(
  `\n${okCount} converted, ${skippedCount} skipped, ` +
    `${orderedReport.length - okCount - skippedCount} failed → ${outputRoot}`,
)
if (okCount + skippedCount !== orderedReport.length) {
  process.exitCode = 1
}
