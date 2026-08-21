import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dragon (Mythical Creature) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/mythical/Dragon/Dragon.glb",
      accessedOn: '2026-08-20',
      sha256: '82ef4ae8bfe9741e071a543c377dcd7a4598c4a65214f70e19497741dbd426ce',
      bytes: 9202584,
    },
    runtime: {
      sha256: '01fe865994901f7e0b2395f0f69a42a69a6c86d6146a2c8643e11e2c04b84578',
      bytes: 6059332,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.54, yaw 180°; height ≈ 2.075 m, length ≈ 4.5 m).',
      'Kept the idle animation clip “All Animations” (9.2s, 216 channels).',
    ],
    redistributionAllowed: true,
  },
]
