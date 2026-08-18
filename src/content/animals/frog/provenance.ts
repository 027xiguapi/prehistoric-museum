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
      title: "Frog (owner-supplied “1048动物” drop, 青蛙)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-frog-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '2c456675779967561ea5bf1df4049ad68f94d1bf2fbfa0d6ac1797b930e5aff4',
      bytes: 3159096,
    },
    license: modelLicense,
    runtime: {
      sha256: 'f5f9eee14534941da33b216fb459d4d6a7e3f674f78a4b5bfd1bd92d561aab91',
      bytes: 1902328,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.32; height ≈ 0.039 m, length ≈ 0.092 m).',
      'Kept the idle animation clip “idle_nyi” (8.083s, 159 channels).',
    ],
    attribution: "Frog 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/青蛙/source/exported.glb",
      'converted-1048/frog/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
