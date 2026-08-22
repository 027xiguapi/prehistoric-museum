import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Macaw (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Macaw/model.glb",
      accessedOn: '2026-08-20',
      sha256: '21b149f84062598882f69c131eb594a9f2c019626e9bb8ca63af426041ddf4bc',
      bytes: 4681004,
    },
    runtime: {
      sha256: 'b18624266929ee813f6b95e0dd83118f2834a8295d1342e97a80827f3d4c6235',
      bytes: 1111632,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.70; height ≈ 0.9 m, length ≈ 0.156 m).',
      'Kept the idle animation clip “All Animations” (51.233s, 342 channels).',
    ],
    redistributionAllowed: true,
  },
]
