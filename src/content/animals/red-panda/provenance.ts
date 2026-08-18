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
      title: "Red Panda (owner-supplied “1048动物” drop, 小熊猫glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-red-panda-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '570cf63a6a5c42b5dea7e87a0b6342db435394b093cea42b45e98da319b46acf',
      bytes: 7654168,
    },
    license: modelLicense,
    runtime: {
      sha256: 'fde771ad0116db225df555d2eef73235982c566ab0c05a375be9c68067b9bf13',
      bytes: 4760464,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.28; height ≈ 0.379 m, length ≈ 1.05 m).',
      'Kept the idle animation clip “Take 001” (10s, 357 channels).',
    ],
    attribution: "Red Panda 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/小熊猫glb/source/RedPanda.glb",
      'converted-1048/red-panda/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
