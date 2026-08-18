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
      title: "Arabian Leopard (owner-supplied “1048动物” drop, 阿拉伯豹glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-arabian-leopard-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '2bfb6b79360f5e719b9ec1d36e5b21458caa0973ec1b20f013b948f7f4037fd2',
      bytes: 9990108,
    },
    license: modelLicense,
    runtime: {
      sha256: '0632e3bfe3a5e83dcc8d484475c7ab4b47bcd9ce72fcd5ae6000ea59c0f2965c',
      bytes: 6889168,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.13; height ≈ 0.954 m, length ≈ 1.8 m).',
      'Kept the idle animation clip “All Animations” (11.5s, 144 channels).',
    ],
    attribution: "Arabian Leopard 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "1048动物/阿拉伯豹glb/source/Arabian_Leopard.glb",
      'converted-1048/arabian-leopard/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
