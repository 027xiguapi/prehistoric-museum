import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Pteranodon (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Pteranodon.glb",
      accessedOn: '2026-08-20',
      sha256: 'f86ef61f740ce431217ac801d4a97957bbfd021169ccbf9fb6688cc2e4fb6999',
      bytes: 6288088,
    },
    runtime: {
      sha256: 'e6d100893b3ed60b123a71772184fc0b1e451d46e74ee5368c3b3e0196e64dd3',
      bytes: 4104816,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.80; height ≈ 5.116 m, length ≈ 6.656 m).',
      'Kept the idle animation clip “All Animations” (8.333s, 171 channels).',
    ],
    redistributionAllowed: true,
  },
]
