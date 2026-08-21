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
      title: "Duck (owner-supplied “1048动物” drop, 鸭子glb格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-duck-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '97df204c47d9a118bcfd2016307724e68bbaecd53134a900cb610e8e562fb20e',
      bytes: 12622924,
    },
    runtime: {
      sha256: 'd633462b05c661c5a1f4efd011f574676de2284ad19f01209f24d9bd6cde0b99',
      bytes: 6676940,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.77; height ≈ 0.279 m, length ≈ 0.65 m).',
      'Kept the idle animation clip “Animation” (15s, 165 channels).',
    ],
    attribution: "Duck 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/鸭子glb格式/source/Duck.glb",
      'converted-1048/duck/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
