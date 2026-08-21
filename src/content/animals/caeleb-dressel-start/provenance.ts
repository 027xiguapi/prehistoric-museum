import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Caeleb Dressel (Dive Start) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/CaelebDressel/start/start.glb",
      accessedOn: '2026-08-20',
      sha256: '94e4147370c81036e365d28d2497da6455acc03f0dfd21dd108c7b0f0813e990',
      bytes: 10459724,
    },
    runtime: {
      sha256: '044e9513a04f0723ede23b38f0b68f7ac5b9b6f9d4423f8dfe53a713e9390bc4',
      bytes: 6449468,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.06, yaw 270°; height ≈ 2 m, length ≈ 0.733 m).',
      'Kept the idle animation clip “All Animations” (12.633s, 432 channels).',
    ],
    redistributionAllowed: true,
  },
]
