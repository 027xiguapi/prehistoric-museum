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
      title: "Rosalia Batesi Longicorn Beetle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/rosalia_batesi/model.glb",
      accessedOn: '2026-08-20',
      sha256: '7dad46f22bf2eccf70689c409cd9b492e69e7723f43bed14ea8375add88be556',
      bytes: 3334116,
    },
    license: modelLicense,
    runtime: {
      sha256: 'ff459234ff40a1a05edc8989791c94ce6b7b03df16aa212f233b3f1e269044c9',
      bytes: 1438604,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.87; height ≈ 0.011 m, length ≈ 0.039 m).',
      'Kept the idle animation clip “ruriboshi” (12.033s, 161 channels).',
    ],
    attribution: "Rosalia Batesi Longicorn Beetle 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/insects/rosalia_batesi/model.glb",
      'converted-downloads/rosalia-batesi/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
