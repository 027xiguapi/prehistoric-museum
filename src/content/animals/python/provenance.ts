import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Python (owner-supplied “1048动物” drop, 蟒蛇)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-python-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '9e2d72f1bbee28e69b544ee493cbe029c004dca5be7587d72139a5e47647d7a8',
      bytes: 5220656,
    },
    runtime: {
      sha256: '06aa2a358236412013f4a479c0528014374159ad14464936e51a75db9348df37',
      bytes: 4670204,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.06; height ≈ 0.447 m, length ≈ 3 m).',
      'Kept the idle animation clip “Animation_Armature” (16s, 132 channels).',
    ],
    redistributionAllowed: true,
  },
]
