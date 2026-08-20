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
      title: "Grasshopper (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/grasshopper/model.glb",
      accessedOn: '2026-08-20',
      sha256: '901fdeae4345bc39a1a19efe42185211a489fba35128a114482d2131396443a0',
      bytes: 3688932,
    },
    license: modelLicense,
    runtime: {
      sha256: '4b0cfd6d157036de8cc6207055033d59a62faee1a4fe3dfb7542ba607c76c279',
      bytes: 1657380,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.17, yaw 180°; height ≈ 0.036 m, length ≈ 0.09 m).',
      'Kept the idle animation clip “tonosama” (14s, 181 channels).',
    ],
    attribution: "Grasshopper 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/insects/grasshopper/model.glb",
      'converted-downloads/grasshopper/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
