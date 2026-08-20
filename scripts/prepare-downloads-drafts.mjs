// Batch-prepares the converted model-downloads models into tiger-style draft
// runtime GLBs, mirroring scripts/prepare-1048-drafts.mjs:
//   1. probe idle animation clips + true decoded world bounds,
//   2. wrap the scene in a normalization node: unit-scale in metres (matched
//      to each species' expected longest body dimension), grounded at y = 0,
//      centred on x/z, and optionally yaw-rotated so the head faces +Z,
//   3. resample CUBICSPLINE rotation tracks to LINEAR (viewer compatibility),
//   4. squeeze textures for models over the 12 MiB target until they are
//      under target, hard-failing above the 20 MiB ceiling.
//
// Outputs per slug:
//   src/content/animals/<slug>/model/model.glb        (runtime)
//   converted-downloads/<slug>/model-normalized.glb   (evidence copy)
//   converted-downloads/downloads-normalization-report.json (facts)
//
// Pass 1 runs every model at yaw 0 (the manifest entries carry no
// `yawDegrees` yet); orientation contact sheets then decide the per-species
// baked yaw, recorded as `yawDegrees` on the manifest entry, and pass 2
// re-runs from the always pristine converted-downloads/<slug>/model.glb
// input.
//
// Usage: node scripts/prepare-downloads-drafts.mjs [--only=slug1,slug2]
import { createHash } from 'node:crypto'
import { copyFile, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer'
import sharp from 'sharp'

import { activeDownloads } from './downloads-manifest.mjs'
import { resampleCubicRotationTracks } from './resample-cubic-rotation-tracks.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const convertedRoot = join(root, 'converted-downloads')
const downloadsRoot = join(root, 'model-downloads')
const animalsRoot = join(root, 'src/content/animals')
const TARGET_BYTES = 12 * 1024 * 1024 // src/model-policy.ts MODEL_GLB_TARGET
const HARD_CEILING_BYTES = 20 * 1024 * 1024

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  })

// Consumes the TRUE world bounds measured by
// scripts/measure-downloads-models.mjs with three.js (skinned meshes defeat
// plain gltf-transform walks: KHR_mesh_quantization stores bind-space
// integers). The trimmed (0.5–99.5 percentile) box excludes rig-widget
// strays.
const measurementRows = JSON.parse(
  await readFile(join(convertedRoot, 'downloads-measurements.json'), 'utf8'),
)
const measurementBySlug = new Map(
  measurementRows
    .filter((row) => row.status === 'ok')
    .map((row) => [row.slug, row]),
)

function roundValues(values) {
  return values.map((value) => Number(value.toFixed(4)))
}

function listAnimations(document) {
  return document.getRoot().listAnimations().map((animation) => {
    let durationSeconds = 0
    let cubicRotationTracks = 0
    for (const channel of animation.listChannels()) {
      const sampler = channel.getSampler()
      const times = sampler.getInput()?.getArray()
      if (times?.length) {
        durationSeconds = Math.max(durationSeconds, times[times.length - 1])
      }
      if (
        channel.getTargetPath() === 'rotation' &&
        sampler.getInterpolation() === 'CUBICSPLINE'
      ) {
        cubicRotationTracks += 1
      }
    }
    return {
      name: animation.getName() || '(unnamed)',
      channels: animation.listChannels().length,
      durationSeconds: Number(durationSeconds.toFixed(3)),
      cubicRotationTracks,
    }
  })
}

async function sha256Of(path) {
  return createHash('sha256').update(await readFile(path)).digest('hex')
}

/** Texture squeeze passes (colour / normal-aware), applied over threshold. */
const SQUEEZE_PASSES = [
  { maxTextureEdge: 2048, quality: 82, normalQuality: 92 },
  { maxTextureEdge: 1024, quality: 72, normalQuality: 82 },
]

async function squeezeTextures(document, pass, warnings) {
  const normalTextureSet = new Set()
  for (const material of document.getRoot().listMaterials()) {
    const normalTexture = material.getNormalTexture()
    if (normalTexture) {
      normalTextureSet.add(normalTexture)
    }
  }
  let replaced = 0
  for (const texture of document.getRoot().listTextures()) {
    const bytes = texture.getImage()
    if (!bytes) {
      continue
    }
    const isNormal = normalTextureSet.has(texture)
    let pipeline = sharp(Buffer.from(bytes), { limitInputPixels: false })
    const metadata = await pipeline.metadata()
    if (
      metadata.width > pass.maxTextureEdge ||
      metadata.height > pass.maxTextureEdge
    ) {
      pipeline = pipeline.resize({
        width: pass.maxTextureEdge,
        height: pass.maxTextureEdge,
        fit: 'inside',
        withoutEnlargement: true,
      })
    }
    const encoded = await pipeline
      .webp({ quality: isNormal ? pass.normalQuality : pass.quality })
      .toBuffer()
    if (encoded.length >= bytes.byteLength && !isNormal) {
      // Colour texture did not shrink; keep the original bytes.
      continue
    }
    texture.setImage(new Uint8Array(encoded))
    texture.setMimeType('image/webp')
    replaced += 1
  }
  warnings.push(
    `texture squeeze (edge<=${pass.maxTextureEdge}, q=${pass.quality}/n${pass.normalQuality}) rewrote ${replaced} texture(s)`,
  )
  return replaced
}

function textureBytes(document) {
  let total = 0
  for (const texture of document.getRoot().listTextures()) {
    total += texture.getImage()?.byteLength ?? 0
  }
  return total
}

const report = []
for (const species of activeDownloads()) {
  if (onlySlugs && !onlySlugs.has(species.slug)) {
    continue
  }
  const warnings = []
  const yawDegrees = species.yawDegrees ?? 0
  const inputPath = join(convertedRoot, species.slug, 'model.glb')
  const runtimePath = join(animalsRoot, species.slug, 'model', 'model.glb')
  const evidencePath = join(convertedRoot, species.slug, 'model-normalized.glb')
  try {
    let document = await io.read(inputPath)

    // 1. Resample CUBICSPLINE rotation tracks before any measurement.
    const cubicTracks = listAnimations(document).reduce(
      (sum, animation) => sum + animation.cubicRotationTracks,
      0,
    )
    if (cubicTracks > 0) {
      const resampledPath = join(convertedRoot, species.slug, 'model-resampled.glb')
      const resampled = await resampleCubicRotationTracks(
        inputPath,
        resampledPath,
      )
      warnings.push(`resampled ${resampled} CUBICSPLINE rotation track(s) to LINEAR`)
      document = await io.read(resampledPath)
      await rm(resampledPath, { force: true })
    }

    const animations = listAnimations(document)

    // 2. True measured bounds → metre scale for this species.
    const measurement = measurementBySlug.get(species.slug)
    if (!measurement) {
      throw new Error(
        'missing three.js measurement — run scripts/measure-downloads-models.mjs first',
      )
    }
    const measuredMin = measurement.trimmedMin ?? measurement.min
    const measuredMax = measurement.trimmedMax ?? measurement.max
    const measuredExtent = [0, 1, 2].map((axis) => measuredMax[axis] - measuredMin[axis])
    const measuredLongest = Math.max(...measuredExtent)
    if (!(measuredLongest > 0)) {
      throw new Error(`empty measured bounds: ${JSON.stringify(measurement)}`)
    }
    const scale = species.expectedLongestMeters / measuredLongest

    // 3. Wrap the scene: uniform scale + yaw (head → +Z), then ground/centre
    //    using the yaw-rotated scaled measured box (exact by construction).
    const scene = document.getRoot().listScenes()[0]
    const wrapperName = `MuseumNormalization_${species.slug}`
    for (const existing of scene.listChildren()) {
      if (existing.getName() === wrapperName) {
        throw new Error(`wrapper already present — input not pristine: ${inputPath}`)
      }
    }
    const wrapper = document.createNode(wrapperName)
    scene.addChild(wrapper)
    for (const child of [...scene.listChildren()]) {
      if (child !== wrapper) {
        wrapper.addChild(child)
      }
    }
    wrapper.setScale([scale, scale, scale])
    const halfYaw = (yawDegrees * Math.PI) / 180 / 2
    wrapper.setRotation([0, Math.sin(halfYaw), 0, Math.cos(halfYaw)])

    // Rotation about Y by θ (three.js convention, +X→+Z at θ = −90):
    //   x' = x·cosθ + z·sinθ, z' = −x·sinθ + z·cosθ
    const yawRadians = (yawDegrees * Math.PI) / 180
    const cosYaw = Math.cos(yawRadians)
    const sinYaw = Math.sin(yawRadians)
    const rotated = {
      min: [Infinity, Infinity, Infinity],
      max: [-Infinity, -Infinity, -Infinity],
    }
    for (let corner = 0; corner < 8; corner += 1) {
      const x = (corner & 1 ? measuredMax[0] : measuredMin[0]) * scale
      const y = (corner & 2 ? measuredMax[1] : measuredMin[1]) * scale
      const z = (corner & 4 ? measuredMax[2] : measuredMin[2]) * scale
      const points = [
        x * cosYaw + z * sinYaw,
        y,
        -x * sinYaw + z * cosYaw,
      ]
      for (let axis = 0; axis < 3; axis += 1) {
        rotated.min[axis] = Math.min(rotated.min[axis], points[axis])
        rotated.max[axis] = Math.max(rotated.max[axis], points[axis])
      }
    }
    wrapper.setTranslation([
      -(rotated.min[0] + rotated.max[0]) / 2,
      -rotated.min[1],
      -(rotated.min[2] + rotated.max[2]) / 2,
    ])
    const finalExtent = [
      rotated.max[0] - rotated.min[0],
      rotated.max[1] - rotated.min[1],
      rotated.max[2] - rotated.min[2],
    ]

    // 4. Write, then squeeze textures while over target.
    await mkdir(dirname(runtimePath), { recursive: true })
    const attempts = []
    let passIndex = 0
    for (;;) {
      await io.write(runtimePath, document)
      const { size } = await stat(runtimePath)
      attempts.push(size)
      if (size <= TARGET_BYTES || passIndex >= SQUEEZE_PASSES.length) {
        break
      }
      await squeezeTextures(document, SQUEEZE_PASSES[passIndex], warnings)
      passIndex += 1
    }
    const outputBytes = attempts[attempts.length - 1]
    if (outputBytes > HARD_CEILING_BYTES) {
      throw new Error(
        `output ${outputBytes} bytes exceeds the ${HARD_CEILING_BYTES} hard ceiling after ${passIndex} squeeze pass(es)`,
      )
    }
    await copyFile(runtimePath, evidencePath)

    const sourcePath = join(downloadsRoot, species.source)
    const [sourceSha256, sourceStat, runtimeSha256] = await Promise.all([
      sha256Of(sourcePath),
      stat(sourcePath),
      sha256Of(runtimePath),
    ])

    const chosenClip =
      animations.length === 0
        ? null
        : [...animations].sort((a, b) => b.durationSeconds - a.durationSeconds)[0]

    report.push({
      slug: species.slug,
      status: 'ok',
      inputMB: Number(((await stat(inputPath)).size / 1048576).toFixed(2)),
      sourceRecord: {
        path: `model-downloads/${species.source}`,
        sha256: sourceSha256,
        bytes: sourceStat.size,
      },
      runtime: {
        path: `src/content/animals/${species.slug}/model/model.glb`,
        sha256: runtimeSha256,
        bytes: outputBytes,
        writeAttemptsBytes: attempts,
      },
      scale,
      yawDegrees,
      expectedLongestMeters: species.expectedLongestMeters,
      measured: {
        source:
          'converted-downloads/downloads-measurements.json (three.js, trimmed 0.5–99.5%)',
        min: roundValues(measuredMin),
        max: roundValues(measuredMax),
        longest: Number(measuredLongest.toPrecision(6)),
      },
      finalSizeMeters: {
        widthX: Number(finalExtent[0].toFixed(3)),
        heightY: Number(finalExtent[1].toFixed(3)),
        lengthZ: Number(finalExtent[2].toFixed(3)),
      },
      animations,
      chosenClip,
      cubicRotationTracksTotal: cubicTracks,
      textureBytesBeforeSqueeze: textureBytes(document),
      warnings,
    })
    console.log(
      `✓ ${species.slug}  scale=${scale.toPrecision(4)}  ` +
        `${finalExtent[0].toFixed(2)}×${finalExtent[1].toFixed(2)}×${finalExtent[2].toFixed(2)}m  ` +
        `clip=${chosenClip ? `${chosenClip.name}(${chosenClip.durationSeconds}s)` : 'none'}  ` +
        `${(outputBytes / 1048576).toFixed(2)}MiB` +
        (warnings.length ? `  [${warnings.join('; ')}]` : ''),
    )
  } catch (error) {
    report.push({
      slug: species.slug,
      status: `failed: ${String(error?.stack ?? error).slice(0, 400)}`,
    })
    console.log(`✗ ${species.slug}: ${String(error?.message ?? error).slice(0, 200)}`)
  }
}

const reportPath = join(convertedRoot, 'downloads-normalization-report.json')
const previousRows = await readFile(reportPath, 'utf8')
  .then((text) => JSON.parse(text))
  .catch(() => [])
const merged = new Map(
  (Array.isArray(previousRows) ? previousRows : []).map((row) => [row.slug, row]),
)
for (const row of report) {
  merged.set(row.slug, row)
}
const order = new Map(activeDownloads().map((entry, index) => [entry.slug, index]))
const orderedReport = [...merged.values()].sort(
  (a, b) => (order.get(a.slug) ?? 9999) - (order.get(b.slug) ?? 9999),
)
await writeFile(reportPath, JSON.stringify(orderedReport, null, 2))
const okCount = orderedReport.filter((row) => row.status === 'ok').length
console.log(`\n${okCount}/${orderedReport.length} prepared → report at converted-downloads/downloads-normalization-report.json`)
if (okCount !== orderedReport.length) {
  process.exitCode = 1
}
