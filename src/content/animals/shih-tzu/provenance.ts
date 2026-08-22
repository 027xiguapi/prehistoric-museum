import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Shih Tzu (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Shihtzu/Shihtzu.glb",
      accessedOn: '2026-08-20',
      sha256: '5ee6d21f16f436c5ef62db68cdd27d46488c9f6190a779e2e52c13efed16fb43',
      bytes: 10396512,
    },
    runtime: {
      sha256: '0f670964c5d287b258ba5d1f0d05dd66f3f511c2426627ff2534f1a8640b5524',
      bytes: 7734772,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.57; height ≈ 0.519 m, length ≈ 0.6 m).',
      'Kept the idle animation clip “All Animations” (9.733s, 156 channels).',
    ],
    redistributionAllowed: true,
  },
]
