import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Alexander Massialas (Fencing Touch) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/AlexanderMassialas/touch/touch.glb",
      accessedOn: '2026-08-20',
      sha256: '81d0c7159102fddf430b3aab92bc071f5295a12bb9f7133248a3950f7ab5f377',
      bytes: 13345524,
    },
    runtime: {
      sha256: '6d01e23c69424afacb49c3d282eababe134b97f7ecf53f986610705bce2b5ba6',
      bytes: 6023220,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.74; height ≈ 1.321 m, length ≈ 2.127 m).',
      'Kept the idle animation clip “All Animations” (13.933s, 648 channels).',
    ],
    redistributionAllowed: true,
  },
]
