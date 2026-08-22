import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dina Asher-Smith (Sprint) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/DinaAsherSmith/sprint/sprint.glb",
      accessedOn: '2026-08-20',
      sha256: '5eca6db02db032c5afd67178d19cb1cb3820da76f45d1149fa22209d4b9d65e5',
      bytes: 11492240,
    },
    runtime: {
      sha256: '2f93e2b467107655819548ea16ee6f3ff389a099447bb9e9036d99a4ec19b9ca',
      bytes: 6810280,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.30, yaw 270°; height ≈ 2 m, length ≈ 1.375 m).',
      'Kept the idle animation clip “All Animations” (1.2s, 421 channels).',
    ],
    redistributionAllowed: true,
  },
]
