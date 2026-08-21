import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Plains Zebra (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/african_endangered/Zebra/Zebra.glb",
      accessedOn: '2026-08-20',
      sha256: '8af41ba655e4edec241d94e00d3421ef552f0745d980bb184742e7baffeac9e7',
      bytes: 10500756,
    },
    runtime: {
      sha256: '1451e2315944818a643f13ef56b31a082d526bfb60996a8a3b7ab08e8461e271',
      bytes: 5124320,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.12; height ≈ 2.338 m, length ≈ 2.5 m).',
      'Kept the idle animation clip “All Animations” (10s, 378 channels).',
    ],
    redistributionAllowed: true,
  },
]
