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
      title: "Pomeranian (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Pomeranian/model.glb",
      accessedOn: '2026-08-20',
      sha256: '24d50cbc2407123f4571265855c44790e02c2fa77d4344ae6b5318e3494c99a4',
      bytes: 2218344,
    },
    runtime: {
      sha256: '080eb39e4f8844d48a0c2433ffd7a712896719085fcd62a8b441d893e2c3c1ec',
      bytes: 1630904,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.58; height ≈ 0.461 m, length ≈ 0.55 m).',
      'Kept the idle animation clip “Animation” (15s, 267 channels).',
    ],
    attribution: "Pomeranian 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/Pomeranian/model.glb",
      'converted-downloads/pomeranian/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
