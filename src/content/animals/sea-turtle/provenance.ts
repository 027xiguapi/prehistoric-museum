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
      title: "Sea Turtle (owner-supplied “1048动物” drop, 海龟)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-sea-turtle-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'cbf52efee4b5276f867866c975b69d3c2b040187e9f0c00a9b908d5b74aac1b1',
      bytes: 1665268,
    },
    license: modelLicense,
    runtime: {
      sha256: 'c9827e0a225aa81cb465e821d5a7400fe4535c15123a19a7caa76258ff72d98f',
      bytes: 1252560,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 0.238 m, length ≈ 0.964 m).',
      'Kept the idle animation clip “Animation_Armature” (15s, 123 channels).',
    ],
    attribution: "Sea Turtle 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/海龟/source/exported.glb",
      'converted-1048/sea-turtle/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
