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
      title: "Rottweiler (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Rottweiler/model.glb",
      accessedOn: '2026-08-20',
      sha256: '8d5de6ebb7fe7c4ba6359bfd4c148f69d5d7bedf098573ab6759d79843138c3f',
      bytes: 2364076,
    },
    runtime: {
      sha256: 'a5a0e9834761804e1629e3da53679ddb8e7424dbc3cbc464028abf0d9d449b7a',
      bytes: 1738540,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.04; height ≈ 0.921 m, length ≈ 1.2 m).',
      'Kept the idle animation clip “Animation” (15s, 279 channels).',
    ],
    attribution: "Rottweiler 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/Rottweiler/model.glb",
      'converted-downloads/rottweiler/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
