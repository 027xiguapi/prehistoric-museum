import type { AssetProvenance } from '../../types'

// Draft intake from the Google “AR Answers in Search” models bucket. The
// bucket does not ship a per-model licence statement, so the model is marked
// NOT redistributable and stays draft until the source licence is confirmed
// or replaced.
const modelLicense = {
  spdx: 'CC-BY-NC-SA-4.0',
  name: 'Temporary pilot marking — source licence not yet confirmed',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
} as const

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Japanese Rhinoceros Beetle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/rhinoceros_beetle/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'c73ce43ef82d17f3a87ef40c71b2cb0b7171af00977c0e7f75c4a45d513be95b',
      bytes: 2655556,
    },
    license: modelLicense,
    runtime: {
      sha256: '3a88c781f77f54fbb4c995f46f821e3c922b26e9d55aeb52cb4cd8fac2587da4',
      bytes: 1516908,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.25; height ≈ 0.037 m, length ≈ 0.1 m).',
      'Kept the idle animation clip “kabuto” (12s, 116 channels).',
    ],
    attribution: "Japanese Rhinoceros Beetle 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/insects/rhinoceros_beetle/model.glb",
      'converted-downloads/rhinoceros-beetle/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
