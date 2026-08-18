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
      title: 'Tiger (owner-supplied “1048动物” drop, 老虎glb格式)',
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-tiger-source-attribution',
      accessedOn: '2026-08-18',
      sha256:
        '617104e0890bdbcd2c62e36663343fdc6db105d10e1815233201ea4bc1ae7989',
      bytes: 9_598_664,
    },
    license: modelLicense,
    runtime: {
      sha256:
        '0da39acc80129e5b3666975a7e567e5ef90d254b14a09b21dd294a79b994f19a',
      bytes: 4_115_972,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded PNG textures to lossless WebP and declared EXT_texture_webp.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (height ≈ 1.09 m, length ≈ 2.0 m).',
      'Kept the single idle animation clip (renamed by the exporter as “Animation”).',
    ],
    attribution: 'Tiger 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.',
    redistributionAllowed: false,
    evidencePaths: [
      '1048动物/老虎glb格式/source/Tiger.glb',
      'converted-1048/tiger/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/normalize-tiger.mjs',
    ],
  },
]
