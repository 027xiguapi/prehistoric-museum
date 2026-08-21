import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Timber Wolf (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/TimberWolf/model.glb",
      accessedOn: '2026-08-20',
      sha256: '70d11e176730afda1d176380795584f99082257ac1873a3f489c28490cc02fb1',
      bytes: 4212188,
    },
    runtime: {
      sha256: 'd20b12b37818a563000b36396bce8ffa089274723fa11e9d61e6f3a970e69283',
      bytes: 3510584,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.88; height ≈ 1.069 m, length ≈ 1.6 m).',
      'Kept the idle animation clip “Animation” (18s, 261 channels).',
    ],
    redistributionAllowed: true,
  },
]
