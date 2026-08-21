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
      title: "Green Sea Turtle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/GreenSeaTurtle/model.glb",
      accessedOn: '2026-08-20',
      sha256: '1f81a948b417c17e7ce52bb07c1d7d1a843b7d327187ca741676bef6a04fcca9',
      bytes: 1605160,
    },
    runtime: {
      sha256: 'f000e3cbfef6c1f10fb78df01c9c1f0cbbf5c579c73ab6962f4783323c66c848',
      bytes: 1275468,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.27; height ≈ 0.309 m, length ≈ 1.254 m).',
      'Kept the idle animation clip “Animation” (15s, 121 channels).',
    ],
    attribution: "Green Sea Turtle 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/GreenSeaTurtle/model.glb",
      'converted-downloads/green-sea-turtle/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
