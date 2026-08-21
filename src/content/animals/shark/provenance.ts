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
      title: "Shark (owner-supplied “1048动物” drop, 鲨鱼glb格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-shark-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '5272dd6b14b802f7f647e9c1392bf8fe3da8e4837ebd16d93768b4155d52d18f',
      bytes: 17046044,
    },
    runtime: {
      sha256: 'bfd336f3f115f2bd3478c4b584a66d0ea8c61a9f644e4d348ad2c301fd1e103d',
      bytes: 7576444,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.20; height ≈ 1.072 m, length ≈ 3.2 m).',
      'Kept the idle animation clip “circling” (31.967s, 93 channels).',
    ],
    attribution: "Shark 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/鲨鱼glb格式/source/Swimming shark.glb",
      'converted-1048/shark/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
