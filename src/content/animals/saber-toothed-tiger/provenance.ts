import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Saber-Toothed Cat (owner-supplied “1048动物” drop, 剑齿虎glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-saber-toothed-tiger-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '188d58e8d6b04ad05cb67cde187cee11965f93c6e7e702b79b5053d406413e7f',
      bytes: 19974264,
    },
    runtime: {
      sha256: 'f29ba34caa5ce5ce6d744dd44f2cb86df797fbf90cebbc4db978d3bf595b8e5d',
      bytes: 11621468,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.79; height ≈ 0.919 m, length ≈ 1.9 m).',
      'The source model contains no animation clip; the draft renders as a static pose.',
    ],
    redistributionAllowed: true,
  },
]
