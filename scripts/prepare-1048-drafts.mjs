// Batch-prepares the 26 remaining “1048动物” models (tiger is already done)
// into tiger-style draft runtime GLBs:
//   1. probe idle animation clips + true decoded world bounds,
//   2. wrap the scene in a normalization node: unit-scale in metres (matched
//      to each species' expected longest body dimension), grounded at y = 0,
//      centred on x/z, and optionally yaw-rotated so the head faces +Z,
//   3. resample CUBICSPLINE rotation tracks to LINEAR (viewer compatibility),
//   4. squeeze textures for models over the 12 MiB target (tortoise/octopus)
//      until they are under target, hard-failing above the 20 MiB ceiling.
//
// Outputs per slug:
//   src/content/animals/<slug>/model/model.glb      (runtime)
//   converted-1048/<slug>/model-normalized.glb      (evidence copy)
//   converted-1048/drafts-normalization-report.json (probe + transform facts)
//
// Pass 1 (all yaw 0) + orientation contact sheets decided the per-species
// baked yaw below; pass 2 re-runs from the always pristine
// converted-1048/<slug>/model.glb input, scaling/grounding from the true
// three.js bounds in converted-1048/drafts-measurements.json.
//
// Usage: node scripts/prepare-1048-drafts.mjs [--only=slug1,slug2]
import { createHash } from 'node:crypto'
import { copyFile, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer'
import sharp from 'sharp'

import { resampleCubicRotationTracks } from './resample-cubic-rotation-tracks.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const convertedRoot = join(root, 'converted-1048')
const animalsRoot = join(root, 'src/content/animals')
const TARGET_BYTES = 12 * 1024 * 1024 // src/model-policy.ts MODEL_GLB_TARGET
const HARD_CEILING_BYTES = 20 * 1024 * 1024

// Per-species preparation facts. `expectedLongestMeters` is the approximate
// nose-to-tail / wing / arm-span size of a real animal and drives the metre
// scale (matched against the measured longest trimmed axis); `yawDegrees`
// (from the orientation contact sheets) is the baked rotation that brings
// the head to face +Z.
const SPECIES = [
  { slug: 'saber-toothed-tiger', sourceFolder: '剑齿虎glb', sourceFile: 'source/Tiger cat.glb', expectedLongestMeters: 1.9, yawDegrees: 0 },
  { slug: 'red-panda', sourceFolder: '小熊猫glb', sourceFile: 'source/RedPanda.glb', expectedLongestMeters: 1.05, yawDegrees: 0 },
  { slug: 'kitten', sourceFolder: '小猫glb', sourceFile: 'source/Kitten.glb', expectedLongestMeters: 0.4, yawDegrees: 0 },
  { slug: 'cane-corso', sourceFolder: '意大利敖犬glb格式', sourceFile: 'source/Canecorso.glb', expectedLongestMeters: 1.1, yawDegrees: 0 },
  { slug: 'norwegian-forest-cat', sourceFolder: '挪威森林猫glb', sourceFile: 'source/Norwegianforest.glb', expectedLongestMeters: 0.95, yawDegrees: 0 },
  { slug: 'bull', sourceFolder: '斗牛glb', sourceFile: 'source/burmese bull.glb', expectedLongestMeters: 3.4, yawDegrees: 0 },
  { slug: 'persian-cat', sourceFolder: '波斯猫glb', sourceFile: 'source/Persian.glb', expectedLongestMeters: 0.75, yawDegrees: 0 },
  { slug: 'pirate-shepherd-dog', sourceFolder: '海盗牧羊犬glb', sourceFile: 'source/PirateDog.glb', expectedLongestMeters: 1.2, yawDegrees: 0 },
  { slug: 'bear', sourceFolder: '熊gltf格式', sourceFile: 'scene.gltf', expectedLongestMeters: 2.0, yawDegrees: 0 },
  { slug: 'fennec-fox', sourceFolder: '狐狸', sourceFile: 'source/Fennecfox.glb', expectedLongestMeters: 0.65, yawDegrees: 0 },
  { slug: 'owl', sourceFolder: '猫头鹰gltf', sourceFile: 'scene.gltf', expectedLongestMeters: 0.6, yawDegrees: 0 },
  { slug: 'octopus', sourceFolder: '章鱼glb', sourceFile: 'source/octo.glb', expectedLongestMeters: 1.0, yawDegrees: -90 },
  { slug: 'sheep', sourceFolder: '绵羊gltf', sourceFile: 'scene.gltf', expectedLongestMeters: 1.3, yawDegrees: 0 },
  { slug: 'stag-beetle', sourceFolder: '美山锹虫glb', sourceFile: 'source/model (4).glb', expectedLongestMeters: 0.075, yawDegrees: 0 },
  { slug: 'mouse', sourceFolder: '老鼠gltf', sourceFile: 'scene.gltf', expectedLongestMeters: 0.45, yawDegrees: 0 },
  { slug: 'centipede', sourceFolder: '蜈蚣gltf格式', sourceFile: 'scene.gltf', expectedLongestMeters: 0.25, yawDegrees: 135 },
  { slug: 'crab', sourceFolder: '螃蟹glb', sourceFile: 'source/crap.glb', expectedLongestMeters: 0.3, yawDegrees: 180 },
  { slug: 'coyote', sourceFolder: '郊狼glb', sourceFile: 'source/Coyote.glb', expectedLongestMeters: 1.25, yawDegrees: 0 },
  { slug: 'arabian-leopard', sourceFolder: '阿拉伯豹glb', sourceFile: 'source/Arabian_Leopard.glb', expectedLongestMeters: 1.8, yawDegrees: 0 },
  { slug: 'tortoise', sourceFolder: '陆龟gltf格式', sourceFile: 'source/Tortoise.gltf', expectedLongestMeters: 1.5, yawDegrees: 0 },
  { slug: 'salmon', sourceFolder: '鲑鱼gltf', sourceFile: 'scene.gltf', expectedLongestMeters: 0.85, yawDegrees: 45 },
  { slug: 'shark', sourceFolder: '鲨鱼glb格式', sourceFile: 'source/Swimming shark.glb', expectedLongestMeters: 3.2, yawDegrees: 0 },
  { slug: 'duck', sourceFolder: '鸭子glb格式', sourceFile: 'source/Duck.glb', expectedLongestMeters: 0.65, yawDegrees: 0 },
  { slug: 'pigeon', sourceFolder: '鸽子gltf格式', sourceFile: 'scene.gltf', expectedLongestMeters: 0.75, yawDegrees: 0 },
  { slug: 'sparrow', sourceFolder: '麻雀gltf', sourceFile: 'scene.gltf', expectedLongestMeters: 0.24, yawDegrees: 0 },
  { slug: 'ox', sourceFolder: '黄牛gltf', sourceFile: 'scene.gltf', expectedLongestMeters: 2.5, yawDegrees: 0 },
  // Blend-source batch. Yaw stays 0 in pass 1; orientation contact sheets
  // will decide any per-species baked yaw in a pass-2 rerun.
  { slug: 'crow', sourceFolder: '乌鸦', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.5, yawDegrees: 0 },
  { slug: 'rabbit', sourceFolder: '兔子', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.45, yawDegrees: 0 },
  { slug: 'pug', sourceFolder: '哈巴狗', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.55, yawDegrees: 0 },
  { slug: 'elephant', sourceFolder: '大象', sourceFile: 'source/exported.glb', expectedLongestMeters: 6.5, yawDegrees: 0 },
  { slug: 'goat', sourceFolder: '山羊', sourceFile: 'source/exported.glb', expectedLongestMeters: 1.2, yawDegrees: 0 },
  { slug: 'zebra', sourceFolder: '斑马', sourceFile: 'source/exported.glb', expectedLongestMeters: 2.5, yawDegrees: 0 },
  { slug: 'sphynx-cat', sourceFolder: '斯芬克斯猫', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.6, yawDegrees: 0 },
  { slug: 'raccoon', sourceFolder: '浣熊', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.75, yawDegrees: 0 },
  { slug: 'sea-turtle', sourceFolder: '海龟', sourceFile: 'source/exported.glb', expectedLongestMeters: 1.0, yawDegrees: 0 },
  { slug: 'hercules-beetle', sourceFolder: '犀牛甲虫', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.17, yawDegrees: 0 },
  { slug: 'lion', sourceFolder: '狮子', sourceFile: 'source/exported.glb', expectedLongestMeters: 2.5, yawDegrees: 0 },
  { slug: 'kookaburra', sourceFolder: '笑翠鸟', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.45, yawDegrees: 0 },
  { slug: 'alpaca', sourceFolder: '羊驼', sourceFile: 'source/exported.glb', expectedLongestMeters: 1.6, yawDegrees: 0 },
  { slug: 'snail', sourceFolder: '蜗牛', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.08, yawDegrees: 0 },
  { slug: 'scorpion', sourceFolder: '蝎子', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.12, yawDegrees: 0 },
  { slug: 'python', sourceFolder: '蟒蛇', sourceFile: 'source/exported.glb', expectedLongestMeters: 3.0, yawDegrees: 0 },
  { slug: 'kangaroo', sourceFolder: '袋鼠', sourceFile: 'source/exported.glb', expectedLongestMeters: 1.7, yawDegrees: 0 },
  { slug: 'schnauzer', sourceFolder: '雪纳瑞犬', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.95, yawDegrees: 0 },
  { slug: 'frog', sourceFolder: '青蛙', sourceFile: 'source/exported.glb', expectedLongestMeters: 0.1, yawDegrees: 0 },
  { slug: 'horse', sourceFolder: '马', sourceFile: 'source/exported.glb', expectedLongestMeters: 2.4, yawDegrees: 0 },
  { slug: 'alligator', sourceFolder: '鳄鱼', sourceFile: 'source/exported.glb', expectedLongestMeters: 3.5, yawDegrees: 0 },
  { slug: 'emu', sourceFolder: '鸸鹋', sourceFile: 'source/exported.glb', expectedLongestMeters: 1.7, yawDegrees: 0 },
  { slug: 'deer', sourceFolder: '鹿', sourceFile: 'source/exported.glb', expectedLongestMeters: 1.9, yawDegrees: 0 },
]

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  })

// Pass 2 consumes the TRUE world bounds measured by
// scripts/measure-1048-models.mjs with three.js (skinned meshes defeat plain
// gltf-transform walks: KHR_mesh_quantization stores bind-space integers).
// The trimmed (0.5–99.5 percentile) box excludes rig-widget/whisker strays.
const measurementRows = JSON.parse(
  await readFile(join(convertedRoot, 'drafts-measurements.json'), 'utf8'),
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
for (const species of SPECIES) {
  if (onlySlugs && !onlySlugs.has(species.slug)) {
    continue
  }
  const warnings = []
  const inputPath = (await stat(join(convertedRoot, species.slug, 'model-cleaned.glb')).then(() => true).catch(() => false))
    ? join(convertedRoot, species.slug, 'model-cleaned.glb')
    : join(convertedRoot, species.slug, 'model.glb')
  if (inputPath.endsWith('model-cleaned.glb')) {
    warnings.push('input model-cleaned.glb (stray rig-widget vertices surgically removed)')
  }
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
        'missing three.js measurement — run scripts/measure-1048-models.mjs first',
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
    const halfYaw = (species.yawDegrees * Math.PI) / 180 / 2
    wrapper.setRotation([0, Math.sin(halfYaw), 0, Math.cos(halfYaw)])

    // Rotation about Y by θ (three.js convention, +X→+Z at θ = −90):
    //   x' = x·cosθ + z·sinθ, z' = −x·sinθ + z·cosθ
    const yawRadians = (species.yawDegrees * Math.PI) / 180
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

    const sourcePath = join(root, '1048动物', species.sourceFolder, species.sourceFile)
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
        path: `1048动物/${species.sourceFolder}/${species.sourceFile}`,
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
      yawDegrees: species.yawDegrees,
      expectedLongestMeters: species.expectedLongestMeters,
      measured: {
        source:
          'converted-1048/drafts-measurements.json (three.js, trimmed 0.5–99.5%)',
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

const reportPath = join(convertedRoot, 'drafts-normalization-report.json')
const previousRows = await readFile(reportPath, 'utf8')
  .then((text) => JSON.parse(text))
  .catch(() => [])
const merged = new Map(
  (Array.isArray(previousRows) ? previousRows : []).map((row) => [row.slug, row]),
)
for (const row of report) {
  merged.set(row.slug, row)
}
const orderedReport = SPECIES.map((species) => merged.get(species.slug)).filter(
  (row) => row !== undefined,
)
await writeFile(reportPath, JSON.stringify(orderedReport, null, 2))
const okCount = orderedReport.filter((row) => row.status === 'ok').length
console.log(`\n${okCount}/${orderedReport.length} prepared → report at converted-1048/drafts-normalization-report.json`)
if (okCount !== orderedReport.length) {
  process.exitCode = 1
}
