import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Grogu (The Mandalorian Character) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/mandalorian/grogu/grogu.glb",
      accessedOn: '2026-08-20',
      sha256: 'c1d90ec1fd7d3041e1457150cf0385b1501541d7dc1db7776218784be48ac4d2',
      bytes: 10496344,
    },
    runtime: {
      sha256: '9ef780c6ea98bd4fd64c69b7512c740c9f0f894d3278fe02fd55bcfa614b612c',
      bytes: 6795296,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.14; height ≈ 0.4 m, length ≈ 0.208 m).',
      'Kept the idle animation clip “Animation” (20s, 270 channels).',
    ],
    redistributionAllowed: true,
  },
]
