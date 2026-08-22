import type { AssetProvenance } from '@/src/content/types'

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
    redistributionAllowed: true,
  },
]
