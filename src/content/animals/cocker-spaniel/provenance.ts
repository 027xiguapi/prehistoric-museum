import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Cocker Spaniel (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Cockerspaniel/Cockerspaniel.glb",
      accessedOn: '2026-08-20',
      sha256: '32b8992136f956c88582437044cb8ff643e4284a4131796e3a4b9a17925bad2f',
      bytes: 9825372,
    },
    runtime: {
      sha256: '33ee338e9fe72aa5cb05a8555aa261d447342a5d839f2911934b463906869a7e',
      bytes: 6663044,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.06; height ≈ 0.56 m, length ≈ 0.85 m).',
      'Kept the idle animation clip “All Animations” (10s, 201 channels).',
    ],
    redistributionAllowed: true,
  },
]
