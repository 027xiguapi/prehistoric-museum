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
      title: "Shark (owner-supplied “1048动物” drop, 鲨鱼glb格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-shark-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'e9c390efa295bfdfc0d8e125f8c1f54e56396c5f294c76fd01fc5a62ad96a2ed',
      bytes: 17047028,
    },
    license: modelLicense,
    runtime: {
      sha256: 'ccd43b8657a5d2f1b7c81607513a9e274bb89a89ae280b4d373fc6ec8c9fe760',
      bytes: 7576748,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.20; height ≈ 1.072 m, length ≈ 3.2 m).',
      'Kept the idle animation clip “circling” (31.967s, 93 channels).',
    ],
    attribution: "Shark 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/鲨鱼glb格式/source/Swimming shark.glb",
      'converted-1048/shark/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
