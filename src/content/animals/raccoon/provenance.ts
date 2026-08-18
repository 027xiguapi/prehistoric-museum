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
      title: "Raccoon (owner-supplied “1048动物” drop, 浣熊)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-raccoon-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'c5250c0043e688a575c809d8c59bc53aa10b9bc5517bf7a7af32f10a5cadaf8b',
      bytes: 3440176,
    },
    license: modelLicense,
    runtime: {
      sha256: 'b2448cd5834279346f308ddca4df888a52accbc915f3d5cdfd6d44232f7c7315',
      bytes: 1288596,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 0.507 m, length ≈ 0.75 m).',
      'Kept the idle animation clip “Animation_Armature.001” (15s, 297 channels).',
    ],
    attribution: "Raccoon 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/浣熊/source/exported.glb",
      'converted-1048/raccoon/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
