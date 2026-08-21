import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dina Asher-Smith (Stride) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/DinaAsherSmith/stride/stride.glb",
      accessedOn: '2026-08-20',
      sha256: 'fa268a44077fb9d0c1a0008439ae29cdcbbaf1246110bd5fb9c98d880c9cf5e3',
      bytes: 10931400,
    },
    runtime: {
      sha256: 'bfb580a950cf1659fafb5579092d48ed93831b0c2a21072e12fd7936139c0643',
      bytes: 6749572,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.37, yaw 270°; height ≈ 2.1 m, length ≈ 1.443 m).',
      'Kept the idle animation clip “All Animations” (1.6s, 415 channels).',
    ],
    redistributionAllowed: true,
  },
]
