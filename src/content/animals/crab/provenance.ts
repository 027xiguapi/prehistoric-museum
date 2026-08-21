import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Crab (owner-supplied “1048动物” drop, 螃蟹glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-crab-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '56595bc2e26b7776928d59497e3158993f0515d9b0f3aac1b566797e03e77a87',
      bytes: 3779700,
    },
    runtime: {
      sha256: '78900a63265cfaae862de5f1c724a775f0fbf169af1a0ed12e9475919089bbc2',
      bytes: 2258620,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.01, yaw 180°; height ≈ 0.119 m, length ≈ 0.217 m).',
      'Kept the idle animation clip “crab_run_anim” (0.583s, 86 channels).',
    ],
    redistributionAllowed: true,
  },
]
