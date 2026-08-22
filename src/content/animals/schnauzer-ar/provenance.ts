import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Schnauzer (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Schnauzer/Schnauzer.glb",
      accessedOn: '2026-08-20',
      sha256: 'd1e93e9f8a3d4251d2cd9ac05ae0db0000031018cdd9caae32412f1ae57bf00b',
      bytes: 6320604,
    },
    runtime: {
      sha256: '83a986e65e0d6665a8bad6fc0d45eed378e05990420fbfe207accf7268053e87',
      bytes: 4178700,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.96; height ≈ 0.945 m, length ≈ 0.95 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 273 channels).',
    ],
    redistributionAllowed: true,
  },
]
