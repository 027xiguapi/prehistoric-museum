import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Echidna (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/aussie_animals/Echidna.glb",
      accessedOn: '2026-08-20',
      sha256: '21679df08287ac76731b243d5c35c40e50da4c244074306159b7b33ae16382ff',
      bytes: 8418340,
    },
    runtime: {
      sha256: 'e5b0d174228ebbd1d30640b125ce9c9dee33e0fbe9b2d5596784d878e679622d',
      bytes: 3581184,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.45; height ≈ 0.347 m, length ≈ 0.6 m).',
      'Kept the idle animation clip “All Animations” (11.667s, 255 channels).',
    ],
    redistributionAllowed: true,
  },
]
