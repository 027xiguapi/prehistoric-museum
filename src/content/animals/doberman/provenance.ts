import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Doberman (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Doberman/Doberman.glb",
      accessedOn: '2026-08-20',
      sha256: '49ebbf8c01a87f7e384ae795b0b4ee9f26456ad91b7186bb5c3ce7d564978ece',
      bytes: 8361172,
    },
    runtime: {
      sha256: '5f80b31bff1837048a9d4443d1f1c0d04c49a0067cf6352aef6ca111440b991b',
      bytes: 4166580,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.19; height ≈ 1.173 m, length ≈ 1.25 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 255 channels).',
    ],
    redistributionAllowed: true,
  },
]
