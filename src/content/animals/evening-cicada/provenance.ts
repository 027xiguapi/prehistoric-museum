import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Evening Cicada (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/evening_cicada/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'ec542f7969a7d41fe33c08fb5607ce1c63afb8e6a91e066d2b08d48d1d80737c',
      bytes: 3644128,
    },
    runtime: {
      sha256: '192f4ff19dcb6b47ee3d49b3c36a8578a2afc197895fb6d921d024514fb8d742',
      bytes: 2601548,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.01; height ≈ 0.015 m, length ≈ 0.05 m).',
      'Kept the idle animation clip “minmin” (12.633s, 167 channels).',
    ],
    redistributionAllowed: true,
  },
]
