import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Spinosaurus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Spinosaurus.glb",
      accessedOn: '2026-08-20',
      sha256: '70dcbc4ffdad3fdc93141fb6e7acf58abc1db3b4a4e31f003672fe88401472ff',
      bytes: 8062516,
    },
    runtime: {
      sha256: '8f794f08434b0605fcb7144831adc0b8d8742de1092300f5cd8cc0cea2ee15dc',
      bytes: 6155428,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.21; height ≈ 8.494 m, length ≈ 14 m).',
      'Kept the idle animation clip “All Animations” (10.3s, 186 channels).',
    ],
    redistributionAllowed: true,
  },
]
