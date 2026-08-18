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
      title: "Owl (owner-supplied “1048动物” drop, 猫头鹰gltf)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-owl-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'bb3782767476fc847891a082cb931a8593237a0379f1a53c148cce85e366bc70',
      bytes: 50972,
    },
    license: modelLicense,
    runtime: {
      sha256: 'b7aca19c824d9f22d0510a3b94f6673905282701a2f6022d3b267b1fab8929a5',
      bytes: 1223932,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.67; height ≈ 0.576 m, length ≈ 0.6 m).',
      'Kept the idle animation clip “fly fast lol” (2.042s, 34 channels).',
    ],
    attribution: "Owl 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/猫头鹰gltf/scene.gltf",
      'converted-1048/owl/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
