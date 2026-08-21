import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Swallowtail Butterfly (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/swallowtail_butterfly/model.glb",
      accessedOn: '2026-08-20',
      sha256: '1d5dccfbaea1f882fc7335cc180bf821bf5f594b486026ea04acf21060582227',
      bytes: 1691512,
    },
    runtime: {
      sha256: 'c1a7a5789103f019e287df428588f3f6ff92dce2d3c6d6055a6903568cb4152c',
      bytes: 842136,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.07; height ≈ 0.031 m, length ≈ 0.087 m).',
      'Kept the idle animation clip “namiage” (12s, 176 channels).',
    ],
    redistributionAllowed: true,
  },
]
