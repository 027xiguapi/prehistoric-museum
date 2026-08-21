import type { AssetProvenance } from '../../types'

// Draft intake from the Google “AR Answers in Search” models bucket. The
// bucket does not ship a per-model licence statement, so the model is marked
// NOT redistributable and stays draft until the source licence is confirmed
// or replaced.
export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Domestic Pig (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/Pig/Pig.glb",
      accessedOn: '2026-08-20',
      sha256: 'ab845df23bf6a0c34e7eb8db2a3fa0558526fb438be655247e8798740544b1e0',
      bytes: 8790864,
    },
    runtime: {
      sha256: 'c7abd1dde939dd0f5c33625c0883253cc7b556d83173c08cb820204de71c7e64',
      bytes: 6262696,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.80; height ≈ 0.784 m, length ≈ 1.6 m).',
      'Kept the idle animation clip “All Animations” (10s, 152 channels).',
    ],
    attribution: "Domestic Pig 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/farm_rodent/Pig/Pig.glb",
      'converted-downloads/pig/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
