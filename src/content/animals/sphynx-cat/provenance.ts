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
      title: "Sphynx Cat (owner-supplied “1048动物” drop, 斯芬克斯猫)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-sphynx-cat-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '4117a5899cc0c2a57441d442f90e3490b88085082b3cacbfef89ed13165841ea',
      bytes: 8718048,
    },
    license: modelLicense,
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
    attribution: "Sphynx Cat 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/斯芬克斯猫/source/exported.glb",
      'converted-1048/sphynx-cat/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
