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
      title: "Dina Asher-Smith (Stride) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/DinaAsherSmith/stride/stride.glb",
      accessedOn: '2026-08-20',
      sha256: 'fa268a44077fb9d0c1a0008439ae29cdcbbaf1246110bd5fb9c98d880c9cf5e3',
      bytes: 10931400,
    },
    license: modelLicense,
    runtime: {
      sha256: 'bfb580a950cf1659fafb5579092d48ed93831b0c2a21072e12fd7936139c0643',
      bytes: 6749572,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.37, yaw 270°; height ≈ 2.1 m, length ≈ 1.443 m).',
      'Kept the idle animation clip “All Animations” (1.6s, 415 channels).',
    ],
    attribution: "Dina Asher-Smith (Stride) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/Olympics/DinaAsherSmith/stride/stride.glb",
      'converted-downloads/dina-asher-smith-stride/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
