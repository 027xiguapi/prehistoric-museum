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
      title: "Bull (owner-supplied “1048动物” drop, 斗牛glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-bull-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '4533ae27130048e0056c243432df9f95b143d1c3bdb9d7a16644d88df8c4d099',
      bytes: 2435644,
    },
    license: modelLicense,
    runtime: {
      sha256: 'bbb40c194a71baf9acbbda734c52fb814c40846df020f286361e962fcdc854a2',
      bytes: 1539528,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.95; height ≈ 1.775 m, length ≈ 3.4 m).',
      'Kept the idle animation clip “Action” (3.375s, 117 channels).',
    ],
    attribution: "Bull 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/斗牛glb/source/burmese bull.glb",
      'converted-1048/bull/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
