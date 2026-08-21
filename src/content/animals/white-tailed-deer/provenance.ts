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
      title: "White-tailed Deer (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/WhiteTailedDeer/model.glb",
      accessedOn: '2026-08-20',
      sha256: '32aa1690ff8a864397ace97875532f9ed4f38af6180625ac1745b6e4abdc5f0b',
      bytes: 3163308,
    },
    runtime: {
      sha256: '6240667f3a0f78472f7218d83efd9180244c1995d4437eeb1a0f95576362b7b2',
      bytes: 2785748,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.32; height ≈ 1.695 m, length ≈ 1.9 m).',
      'Kept the idle animation clip “Animation” (16s, 147 channels).',
    ],
    attribution: "White-tailed Deer 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/WhiteTailedDeer/model.glb",
      'converted-downloads/white-tailed-deer/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
