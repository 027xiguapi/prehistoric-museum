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
      title: "Atlas Beetle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/atlas_beetle/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'a3d44b1c1843c065ab9f5b736a2754da4b9c04f8722ee1e43de5bb186c25cd38',
      bytes: 4167408,
    },
    runtime: {
      sha256: '8c56ce0a4785b79ca66aa6bb19ccd3154a070a29ad0297dcfec82f3d5a01c193',
      bytes: 2298656,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.10; height ≈ 0.05 m, length ≈ 0.11 m).',
      'Kept the idle animation clip “hurkyury” (12.033s, 118 channels).',
    ],
    attribution: "Atlas Beetle 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/insects/atlas_beetle/model.glb",
      'converted-downloads/atlas-beetle/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
