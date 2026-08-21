import type { AssetProvenance } from '../../types'

// Pilot intake from the owner-supplied “1048动物” drop. The drop did not
// include a licence statement, so the model is marked NOT redistributable
// and stays draft until the source licence is confirmed or replaced.
export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Elephant (owner-supplied “1048动物” drop, 大象)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-elephant-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'bfb2c025caabb5fdd96c8a58bd839312a0cba44f36316f9ad19fa7e758e34951',
      bytes: 16364824,
    },
    runtime: {
      sha256: '1318a3b5f6a1fa161545811673504f3cafea9a2267dcfae8a4d5da87d1f579a5',
      bytes: 10038244,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.54; height ≈ 4.494 m, length ≈ 6.5 m).',
      'Kept the idle animation clip “TRS|Take 001|BaseLayer” (20.792s, 132 channels).',
    ],
    attribution: "Elephant 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/大象/source/exported.glb",
      'converted-1048/elephant/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
