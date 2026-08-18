import type { AssetProvenance } from '../../types'

// Pilot intake from the owner-supplied “1048动物” drop. The drop did not
// include a licence statement, so the model is marked NOT redistributable
// and stays draft until the source licence is confirmed or replaced.
const modelLicense = {
  spdx: 'CC-BY-NC-SA-4.0',
  name: 'Temporary pilot marking — source licence not yet confirmed',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
} as const

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Octopus (owner-supplied “1048动物” drop, 章鱼glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-octopus-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '02f76428260ae53369cdb9102f3c518c4bce829004f5f775b8845a836e814610',
      bytes: 22234608,
    },
    license: modelLicense,
    runtime: {
      sha256: '83676eef32e3ef5a644b4d359c6d2da9c9727507bd0a1470762db0cf7d4c440c',
      bytes: 1558692,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.25, yaw -90°; height ≈ 0.67 m, length ≈ 0.274 m).',
      'Kept the idle animation clip “Bone001|Unreal Take|Base Layer Retarget” (3.7s, 303 channels).',
    ],
    attribution: "Octopus 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/章鱼glb/source/octo.glb",
      'converted-1048/octopus/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
