import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Ball Python (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/BallPython/model.glb",
      accessedOn: '2026-08-20',
      sha256: '030ca6a8e5760bd4a806038a1016863aea628f23d2df688579d72c9cbc40f431',
      bytes: 4972224,
    },
    runtime: {
      sha256: '20c21fbfb36374fc26e95ef051cd9bfc8aee69a91176d98c51cc4c6639e7aa02',
      bytes: 4708696,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.15, yaw 180°; height ≈ 0.223 m, length ≈ 1.5 m).',
      'Kept the idle animation clip “Animation” (16s, 129 channels).',
    ],
    redistributionAllowed: true,
  },
]
