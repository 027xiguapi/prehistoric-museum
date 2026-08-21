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
      title: "Harbour Porpoise (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Nordic/Porpoise/porpoise.glb",
      accessedOn: '2026-08-20',
      sha256: '3d2d6d73de384775705d8f10382b55091a60ff9bfd79ed88cb31210bb8a223d8',
      bytes: 14180596,
    },
    runtime: {
      sha256: '60e75fa4a833148351f545f9c424145ac4af8b6e6171ff0ebd4149c7e594ec73',
      bytes: 10609012,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.27; height ≈ 0.501 m, length ≈ 1.8 m).',
      'Kept the idle animation clip “Swimming_Loop” (5s, 20 channels).',
    ],
    attribution: "Harbour Porpoise 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/Nordic/Porpoise/porpoise.glb",
      'converted-downloads/porpoise/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
