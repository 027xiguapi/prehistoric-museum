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
      title: "Great White Shark (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/GreatWhiteShark/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'afd43db36baf1f8c355f6fbc872afb993ca3e7893ac2442614fbb024f71daa4f',
      bytes: 1030996,
    },
    license: modelLicense,
    runtime: {
      sha256: 'dd7e019d34ce510bbf816dc5eca7c0802a9b3d808d99ee9695eb1556acc52634',
      bytes: 464980,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.96; height ≈ 1.353 m, length ≈ 4.5 m).',
      'Kept the idle animation clip “Animation” (30.667s, 109 channels).',
    ],
    attribution: "Great White Shark 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/GreatWhiteShark/model.glb",
      'converted-downloads/great-white-shark/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
