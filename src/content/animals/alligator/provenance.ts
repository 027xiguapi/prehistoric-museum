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
      title: "Alligator (owner-supplied “1048动物” drop, 鳄鱼)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-alligator-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '2f048b452e98e3025cb37b338a8a2b668972f43baa2592d501e99df8c6de6362',
      bytes: 13719636,
    },
    license: modelLicense,
    runtime: {
      sha256: 'e9c891d01a316265171793291e3c8233e1b6152e41552044c40a2cfc85fc8cae',
      bytes: 7675400,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 0.476 m, length ≈ 3.5 m).',
      'Kept the idle animation clip “Animation_GLTF_created_0” (47.375s, 396 channels).',
    ],
    attribution: "Alligator 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/鳄鱼/source/exported.glb",
      'converted-1048/alligator/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
