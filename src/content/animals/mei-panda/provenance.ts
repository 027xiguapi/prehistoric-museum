import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Mei (Red Panda Form) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/TurningRed/meiPanda.glb",
      accessedOn: '2026-08-20',
      sha256: '84590fd01e2d5403e49717b2ce55a70e4c1f21ecec383e35933fe48338c75974',
      bytes: 8079396,
    },
    runtime: {
      sha256: 'b97461d8850035f22b409946165e30aa8a48eac8ad8d3d73decf7993e7a4cbf9',
      bytes: 3437536,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.50; height ≈ 1.1 m, length ≈ 0.623 m).',
      'Kept the idle animation clip “All Animations” (4.367s, 600 channels).',
    ],
    redistributionAllowed: true,
  },
]
