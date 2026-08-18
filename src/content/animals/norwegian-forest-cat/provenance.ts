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
      title: "Norwegian Forest Cat (owner-supplied “1048动物” drop, 挪威森林猫glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-norwegian-forest-cat-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '6b027c8d85a79d6c2a06e24939e0faec13b0aee67c84207249018197e4a756f1',
      bytes: 9968108,
    },
    license: modelLicense,
    runtime: {
      sha256: '1cd6955918ceff7cc4f475859ab8d5dd40d0cbc9061905a8fec0c47fc36eb0eb',
      bytes: 6995360,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.66; height ≈ 0.515 m, length ≈ 0.95 m).',
      'Kept the idle animation clip “All Animations” (10s, 159 channels).',
    ],
    attribution: "Norwegian Forest Cat 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/挪威森林猫glb/source/Norwegianforest.glb",
      'converted-1048/norwegian-forest-cat/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
