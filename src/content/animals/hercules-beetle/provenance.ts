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
      title: "Hercules Beetle (owner-supplied “1048动物” drop, 犀牛甲虫)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-hercules-beetle-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'abfc6cced99b55ed11474c09f1087e6311018895a61ffd9dc72df37e3ab13a91',
      bytes: 1568332,
    },
    license: modelLicense,
    runtime: {
      sha256: '934b6291f66d1305806481725d9d97c6a042d6dfa4a1e226e6cee6c32d4277fd',
      bytes: 994792,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.17; height ≈ 0.069 m, length ≈ 0.17 m).',
      'Kept the idle animation clip “hurkyury_Armature” (12s, 189 channels).',
    ],
    attribution: "Hercules Beetle 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/犀牛甲虫/source/exported.glb",
      'converted-1048/hercules-beetle/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
