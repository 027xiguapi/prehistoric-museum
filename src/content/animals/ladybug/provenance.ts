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
      title: "Seven-spot Ladybird (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/ladybug/model.glb",
      accessedOn: '2026-08-20',
      sha256: '6cb035b965f5a570f0f6285fe6d898b79788b2340ec6080e12ac9cd9daac1942',
      bytes: 3869096,
    },
    runtime: {
      sha256: 'd2f9e3719c68dc5cbabe4a3578c474deedf876f741126d80722230bae3e8126f',
      bytes: 1608744,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×2.08, yaw 180°; height ≈ 0.008 m, length ≈ 0.017 m).',
      'Kept the idle animation clip “New animation” (12s, 167 channels).',
    ],
    attribution: "Seven-spot Ladybird 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/insects/ladybug/model.glb",
      'converted-downloads/ladybug/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
