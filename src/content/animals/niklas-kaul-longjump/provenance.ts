import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Niklas Kaul (Long Jump) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/NiklasKaul/longjump/longjump.glb",
      accessedOn: '2026-08-20',
      sha256: 'f01ee37c62b23ed54c184bcba7399951b9d37e4f24e15ca7e43819758a29c001',
      bytes: 10026108,
    },
    runtime: {
      sha256: '5ef42725068bded217363b9526b1459aeb98a443d6cc2cd516ae8a2787090aec',
      bytes: 6628360,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.40, yaw 270°; height ≈ 2.4 m, length ≈ 1.73 m).',
      'Kept the idle animation clip “All Animations” (5.7s, 429 channels).',
    ],
    redistributionAllowed: true,
  },
]
