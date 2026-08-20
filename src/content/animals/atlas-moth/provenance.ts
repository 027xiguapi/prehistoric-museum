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
      title: "Atlas Moth (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/atlas_moth/model.glb",
      accessedOn: '2026-08-20',
      sha256: '710b12f399e08fb6c9ad7484627e3f0dd788a78c9b4ac0af3b158551836efe38',
      bytes: 3920852,
    },
    license: modelLicense,
    runtime: {
      sha256: 'e7b0aef4d4ad9a76cbeae657a838ca3817d9e34a68d9a102f8e6b53c4a91d646',
      bytes: 2131088,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.13; height ≈ 0.035 m, length ≈ 0.128 m).',
      'Kept the idle animation clip “yonaguni” (10s, 202 channels).',
    ],
    attribution: "Atlas Moth 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/insects/atlas_moth/model.glb",
      'converted-downloads/atlas-moth/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
