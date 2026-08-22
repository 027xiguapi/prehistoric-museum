import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Bull Terrier (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/BullTerrier/BullTerrier.glb",
      accessedOn: '2026-08-20',
      sha256: '1c062731907d18782ba202a5d1663cd4f1c16a3e49450970287869fafd3e0e7a',
      bytes: 5808240,
    },
    runtime: {
      sha256: 'a235ba51dfa3f59161b65f6f77a37da131a07107023044c97f8da5a8b5dbcfed',
      bytes: 3559240,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.08; height ≈ 0.712 m, length ≈ 0.85 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 234 channels).',
    ],
    redistributionAllowed: true,
  },
]
