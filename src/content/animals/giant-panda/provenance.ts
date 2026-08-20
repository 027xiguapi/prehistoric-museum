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
      title: "Giant Panda (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/GiantPanda/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'd0c9f2ed876a1d90a6d02a7d61ec0cc9bd84d3162d8ea7358c9893bb08344082',
      bytes: 2370892,
    },
    license: modelLicense,
    runtime: {
      sha256: '4f8d53c7c4714bec00b316ea33eb5b8272890a4d9f410a5ce1b3486c17e37741',
      bytes: 1148472,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.39; height ≈ 1.9 m, length ≈ 1.396 m).',
      'Kept the idle animation clip “Animation” (21s, 327 channels).',
    ],
    attribution: "Giant Panda 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/GiantPanda/model.glb",
      'converted-downloads/giant-panda/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
