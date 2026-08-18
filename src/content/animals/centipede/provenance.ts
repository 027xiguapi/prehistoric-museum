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
      title: "Centipede (owner-supplied “1048动物” drop, 蜈蚣gltf格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-centipede-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '22709f4ba369feac4b50f9425ae7874cb8b0e428811df85cbc8e5bea6ffdba04',
      bytes: 292705,
    },
    license: modelLicense,
    runtime: {
      sha256: '4f572e3b61e4381c76a027d91c88be82bc9a9922da4927c93c9aedd258d49df2',
      bytes: 5430728,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.37, yaw 135°; height ≈ 0.023 m, length ≈ 0.297 m).',
      'Kept the idle animation clip “nyi-Test” (11.417s, 285 channels).',
    ],
    attribution: "Centipede 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/蜈蚣gltf格式/scene.gltf",
      'converted-1048/centipede/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
