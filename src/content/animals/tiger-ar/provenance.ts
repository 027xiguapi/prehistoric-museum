import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Tiger (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Tiger/model.glb",
      accessedOn: '2026-08-20',
      sha256: '6d3e3c62dd144b8a99bbd42ccdae1f29c445eea5d9c4ca25556590f08e62d305',
      bytes: 6825428,
    },
    runtime: {
      sha256: '59aa4cac46d59d11db3ab450199c242d9a497cdb992dabcf555387c7010922d9',
      bytes: 3265620,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.57; height ≈ 1.763 m, length ≈ 3 m).',
      'Kept the idle animation clip “Animation” (39.067s, 357 channels).',
    ],
    redistributionAllowed: true,
  },
]
