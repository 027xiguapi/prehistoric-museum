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
      title: "Lion (owner-supplied “1048动物” drop, 狮子)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-lion-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'b62cca16d17e8fb7864a4e585fec34b051f41292fd2f44551b52eedb18432add',
      bytes: 2844308,
    },
    license: modelLicense,
    runtime: {
      sha256: '5fa145814b6ff869e910239344f26ec81221bb992d820b145752fe4c70959b15',
      bytes: 1325312,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 1.669 m, length ≈ 2.5 m).',
      'Kept the idle animation clip “Animation_Armature” (15s, 315 channels).',
    ],
    attribution: "Lion 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/狮子/source/exported.glb",
      'converted-1048/lion/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
