import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "African Leopard (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/AfricanLeopard/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'f475e016d07a8164a9de8ee8de280e263b6b00841ae6dd6af18ab3dc5e92a53c',
      bytes: 2224624,
    },
    runtime: {
      sha256: '8d8ea998aae4177b15a393fc02d1b22cd37657948684103ec0e380aae7c31da8',
      bytes: 1709304,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.18; height ≈ 0.946 m, length ≈ 1.9 m).',
      'Kept the idle animation clip “All Animations” (16s, 261 channels).',
    ],
    redistributionAllowed: true,
  },
]
