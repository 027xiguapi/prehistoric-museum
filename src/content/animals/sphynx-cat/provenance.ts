import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Sphynx Cat (owner-supplied “1048动物” drop, 斯芬克斯猫)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-sphynx-cat-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '4117a5899cc0c2a57441d442f90e3490b88085082b3cacbfef89ed13165841ea',
      bytes: 8718048,
    },
    runtime: {
      sha256: 'd35b5251ff04b698a8b65a65c916c54077fd93a996ed72451a8acda86ac72604',
      bytes: 6255104,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.09; height ≈ 0.406 m, length ≈ 0.6 m).',
      'Kept the idle animation clip “Take 001_Armature” (10s, 258 channels).',
    ],
    redistributionAllowed: true,
  },
]
