import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Walker’s Cicada (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/walkers_cicada/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'e929917e8b33210920c56c59b1ef93a5335b497dcf2e9130c1c7bc3293bebdcb',
      bytes: 2783040,
    },
    runtime: {
      sha256: '14a3f310713aa15c4cfbff27ecb2bca4edd286aa75f4da06188bcaafa0965eec',
      bytes: 1821268,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.34; height ≈ 0.016 m, length ≈ 0.05 m).',
      'Kept the idle animation clip “minmin” (12.633s, 167 channels).',
    ],
    redistributionAllowed: true,
  },
]
