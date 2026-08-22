import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Siberian Husky (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Siberianhusky/Siberianhusky.glb",
      accessedOn: '2026-08-20',
      sha256: '3ee5a0ec5a2a5b4b202c3d4d0fc72b6f471f0a8a9bf5c6f228f3789269edfdde',
      bytes: 8035916,
    },
    runtime: {
      sha256: '61869440da21fe1f1fd8a5ad4ee805537fef519f8f1f02e43bf7e5a976ac66e8',
      bytes: 5902144,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.00; height ≈ 0.793 m, length ≈ 1.05 m).',
      'Kept the idle animation clip “All Animations” (8.967s, 114 channels).',
    ],
    redistributionAllowed: true,
  },
]
