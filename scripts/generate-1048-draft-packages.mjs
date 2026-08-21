// Generates the draft package files (content.zh-CN.ts, content.en.ts,
// provenance.ts, package.ts, animal.ts) for the 1048 batch, mirroring the
// hand-built tiger pilot. Content comes from 1048-draft-content*.mjs; model
// facts (hashes, byte sizes, scale, yaw, idle clip, final metre sizes) come
// from converted-1048/drafts-normalization-report.json.
//
// Usage: node scripts/generate-1048-draft-packages.mjs
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CONTENT_A } from './1048-draft-content.mjs'
import { CONTENT_B } from './1048-draft-content-b.mjs'
import { CONTENT_C } from './1048-draft-content-c.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const report = JSON.parse(
  await readFileUtf8(resolve(root, 'converted-1048/drafts-normalization-report.json')),
)
const reportBySlug = new Map(report.map((entry) => [entry.slug, entry]))

async function readFileUtf8(path) {
  const { readFile } = await import('node:fs/promises')
  return readFile(path, 'utf8')
}

// Draft previews borrow published backdrops matching each atmosphere until the
// draft scenes exist (same approach as the tiger pilot borrowing stegosaurus).
const backgroundDonorByAtmosphere = {
  forest: 'stegosaurus',
  ice: 'mammoth',
  plains: 'apatosaurus',
  underwater: 'mosasaurus',
  air: 'pteranodon',
}

const today = '2026-08-18'

const LICENSE = `import type { AssetProvenance } from '../../types'
`

function zhSizeBlock(animal) {
  if (animal.size) {
    return `    size: {
      kind: '${animal.size.kind}',
      minMeters: ${animal.size.minMeters},
      maxMeters: ${animal.size.maxMeters},
    },`
  }
  return `    size: {
      kind: 'group-range',
      minMeters: ${animal.groupRange.minMeters},
      maxMeters: ${animal.groupRange.maxMeters},
      note: ${JSON.stringify(animal.groupRangeZh)},
    },`
}

function enSizeBlock(animal) {
  if (animal.size) {
    return `    size: {
      kind: '${animal.size.kind}',
      minMeters: ${animal.size.minMeters},
      maxMeters: ${animal.size.maxMeters},
    },`
  }
  return `    size: {
      kind: 'group-range',
      minMeters: ${animal.groupRange.minMeters},
      maxMeters: ${animal.groupRange.maxMeters},
      note: ${JSON.stringify(animal.groupRangeEn)},
    },`
}

function zhContentFile(animal) {
  return `import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: ${JSON.stringify(animal.zhName)},
  classificationLabel: ${JSON.stringify(animal.zhLabel)},
  visibleFeature: ${JSON.stringify(animal.zhVisible)},
  narration: {
    sentences: ${JSON.stringify(animal.zhSentences, null, 6).replace(/\n/g, '\n    ')},
    pronunciation: [
      {
        text: ${JSON.stringify(animal.zhName)},
        reading: ${JSON.stringify(animal.zhPron)},
      },
    ],
  },
  facts: {
    period: ${JSON.stringify(animal.zhPeriod)},
    discoveryRegions: ${JSON.stringify(animal.zhRegions)},
    ${zhSizeBlock(animal)}
    diet: ${JSON.stringify(animal.diet)},
  },
  parentClassificationNote: ${JSON.stringify(animal.zhParent)},
  sources: ${JSON.stringify(
    animal.sources.map((source) => ({ ...source, accessedOn: today })),
    null,
    4,
  )},
  editorial: {
    uncertaintyNotes: ${JSON.stringify(animal.zhUncertainties, null, 6).replace(/\n/g, '\n      ')},
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '${today}',
  },
} satisfies AnimalContentZhCN
`
}

function enContentFile(animal) {
  return `import type { AnimalContentEn } from '../../types'

export const en = {
  name: ${JSON.stringify(animal.enName)},
  classificationLabel: ${JSON.stringify(animal.enLabel)},
  visibleFeature: ${JSON.stringify(animal.enVisible)},
  narration: {
    sentences: ${JSON.stringify(animal.enSentences, null, 6).replace(/\n/g, '\n    ')},
    pronunciation: [
      {
        text: ${JSON.stringify(animal.enName)},
        reading: ${JSON.stringify(animal.enPron)},
      },
    ],
  },
  facts: {
    period: ${JSON.stringify(animal.enPeriod)},
    discoveryRegions: ${JSON.stringify(animal.enRegions)},
    ${enSizeBlock(animal)}
    diet: ${JSON.stringify(animal.diet)},
  },
  parentClassificationNote: ${JSON.stringify(animal.enParent)},
  sources: ${JSON.stringify(
    animal.sources.map((source) => ({ ...source, accessedOn: today })),
    null,
    4,
  )},
  editorial: {
    uncertaintyNotes: ${JSON.stringify(animal.enUncertainties, null, 6).replace(/\n/g, '\n      ')},
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '${today}',
  },
} satisfies AnimalContentEn
`
}

function provenanceFile(animal, entry) {
  const { sourceRecord, runtime, scale, yawDegrees, finalSizeMeters, chosenClip } = entry
  const folder = dirname(sourceRecord.path.split('\\').join('/')).split('/')[1]
  const clipNote = chosenClip
    ? `Kept the idle animation clip “${chosenClip.name}” (${chosenClip.durationSeconds}s, ${chosenClip.channels} channels).`
    : 'The source model contains no animation clip; the draft renders as a static pose.'
  return `${LICENSE}
export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: ${JSON.stringify(
        `${animal.enName} (owner-supplied “1048动物” drop, ${folder})`,
      )},
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-${animal.slug}-source-attribution',
      accessedOn: '${today}',
      sha256: '${sourceRecord.sha256}',
      bytes: ${sourceRecord.bytes},
    },
    runtime: {
      sha256: '${runtime.sha256}',
      bytes: ${runtime.bytes},
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×${scale.toFixed(2)}${
        yawDegrees ? `, yaw ${yawDegrees}°` : ''
      }; height ≈ ${finalSizeMeters.heightY} m, length ≈ ${finalSizeMeters.lengthZ} m).',
      '${clipNote}',
    ],
    attribution: ${JSON.stringify(
      `${animal.enName} 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.`,
    )},
    redistributionAllowed: false,
    evidencePaths: [
      ${JSON.stringify(sourceRecord.path)},
      'converted-1048/${animal.slug}/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
`
}

function packageFile(animal, entry) {
  const { yawDegrees, finalSizeMeters, chosenClip } = entry
  const isGrounded = animal.habitat === 'land'
  const animation = chosenClip
    ? `
  animation: {
    clip: ${JSON.stringify(chosenClip.name)},
    loop: 'repeat',
    speed: 1,
  },`
    : ''
  return `import type { DraftAnimalDefinition } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

// Draft pilot package: the model, bilingual copy and rendered previews are in
// place; the final Serena narration audio, licence confirmation and owner
// review gates are still open, so the animal stays out of production lists.
export const animalDefinition: DraftAnimalDefinition = {
  id: '${animal.slug}',
  status: 'draft',
  kind: 'other-prehistoric-animal',
  habitat: '${animal.habitat}',
  atmosphere: '${animal.atmosphere}',
  content: {
    'zh-CN': zhCN,
    en,
  },
  presentation: {
    initialYawDegrees: ${yawDegrees},
    landscapeVerticalOffset: 0,
    portraitVerticalOffset: 0,
    safeAreaPadding: 0.08,${isGrounded ? `
    shadow: 'ground',
    shadowOpacity: 0.56,
    shadowScale: 0.7,` : `
    shadow: 'none',`}
  },${animation}
  narration: {
    'zh-CN': {
      status: 'pending-review',
      expectedPath: 'audio/narration.zh-CN.mp3',
      message: '等待 Qwen3-TTS Serena 中文旁白生成与人工听审。',
      gate: {
        id: 'final-narration',
        locale: 'zh-CN',
        reason: '旁白音频尚未生成。',
      },
    },
    en: {
      status: 'pending-review',
      expectedPath: 'audio/narration.en.mp3',
      message: 'Awaiting Qwen3-TTS Serena English narration and human review.',
      gate: {
        id: 'final-narration',
        locale: 'en',
        reason: 'Narration audio has not been generated yet.',
      },
    },
  },
  provenance,
  draftNotes: [
    '试点草稿：模型已按米制规范化并落地（高约 ${finalSizeMeters.heightY} 米、长约 ${finalSizeMeters.lengthZ} 米${yawDegrees ? `，初始朝向 ${yawDegrees}°` : ''}）。',
    ${
      chosenClip
        ? `'待机动画 clip 名为 “${chosenClip.name}”，在真实浏览器中验证动作幅度后再决定是否重命名或调速度。'`
        : "'源模型没有动画 clip，当前以静态姿势展示；后续再决定是否补充待机动画。'"
    },
    '源模型来自 1048动物 素材包，许可未确认，标记为不可再分发。',
    '旁白音频、缩略图/海报审校与所有者批准流程未完成。',
  ],
}
`
}

function animalFile(animal) {
  const donor = backgroundDonorByAtmosphere[animal.atmosphere]
  return `import modelUrl from './model/model.glb'
import posterPortraitUrl from './images/poster-portrait.webp'
import posterUrl from './images/poster.webp'
import thumbnailUrl from './images/thumbnail.webp'

// Draft preview only: borrow the ${donor} backdrop until a ${animal.slug}
// scene exists. Never shipped to production (drafts are excluded there).
import landscapeUrl from '../${donor}/backgrounds/landscape.webp'
import portraitUrl from '../${donor}/backgrounds/portrait.webp'

import { imageUrl } from '../../create-runtime-animal'
import { animalDefinition } from './package'
import type { DraftAnimalPackage } from '../../types'
import type { LegacyLocalReviewAnimalPackage } from '../../../review/types'

// Draft pilot package assembled as a review-style displayable so the dev
// server can preview it at /{locale}/animal/${animal.slug}/. Production builds
// filter drafts out of every catalog, so this shape never ships publicly.
export const animal: DraftAnimalPackage & LegacyLocalReviewAnimalPackage = {
  ...animalDefinition,
  content: {
    'zh-CN': animalDefinition.content['zh-CN']!,
    en: animalDefinition.content.en!,
  },
  assets: {
    model: modelUrl,
    modelBytes: ${reportBySlug.get(animal.slug).runtime.bytes},
    poster: imageUrl(posterUrl),
    posterPortrait: imageUrl(posterPortraitUrl),
    thumbnail: imageUrl(thumbnailUrl),
    backgrounds: {
      landscape: imageUrl(landscapeUrl),
      portrait: imageUrl(portraitUrl),
    },
    narration: {},
  },
  review: {
    badge: '试点草稿',
    status: 'draft-preview',
    note: '模型、双语文案与预览图已就位；旁白音频、许可确认与所有者审校未完成。',
    checks: [
      '模型已按米制规范化并落地',
      ${
        reportBySlug.get(animal.slug).chosenClip
          ? `'待机动画 clip “${reportBySlug.get(animal.slug).chosenClip.name}” 待真实浏览器验收'`
          : "'源模型无动画 clip，静态展示待所有者确认'"
      },
      '缩略图与海报已从模型渲染',
    ],
    accent: {
      strong: '${animal.accent.strong}',
      soft: '${animal.accent.soft}',
    },
  },
}
`
}

const animals = [...CONTENT_A, ...CONTENT_B, ...CONTENT_C]
let written = 0
for (const animal of animals) {
  const entry = reportBySlug.get(animal.slug)
  if (!entry || entry.status !== 'ok') {
    throw new Error(`No passing normalization entry for ${animal.slug}`)
  }
  const dir = resolve(root, 'src/content/animals', animal.slug)
  await mkdir(dir, { recursive: true })
  const files = {
    'content.zh-CN.ts': zhContentFile(animal),
    'content.en.ts': enContentFile(animal),
    'provenance.ts': provenanceFile(animal, entry),
    'package.ts': packageFile(animal, entry),
    'animal.ts': animalFile(animal),
  }
  for (const [name, body] of Object.entries(files)) {
    await writeFile(resolve(dir, name), body, 'utf8')
  }
  written += 1
  console.log(`wrote ${animal.slug} (${entry.chosenClip ? `clip ${entry.chosenClip.name}` : 'no clip'})`)
}
console.log(`\n${written} draft packages written`)
