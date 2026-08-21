// One-off repair: rewrite the deprecated KHR_materials_pbrSpecularGlossiness
// material on an already-normalized runtime GLB into the standard metal-rough
// workflow three.js implements. Mirrors the in-pipeline conversion added to
// scripts/prepare-1048-drafts.mjs; used to fix an existing runtime GLB without
// re-running the full normalization (which needs @gltf-transform/functions and
// its broken sharp ESM build on Windows).
//
// Usage: node scripts/repair-spec-gloss-runtime.mjs <runtime.glb>
import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer'

const [path] = process.argv.slice(2)
if (!path) {
  throw new Error('Usage: node scripts/repair-spec-gloss-runtime.mjs <runtime.glb>')
}

const KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS =
  'KHR_materials_pbrSpecularGlossiness'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  })

const document = await io.read(path)
let converted = 0
for (const material of document.getRoot().listMaterials()) {
  const specGloss = material.getExtension(KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS)
  if (!specGloss) {
    continue
  }
  const diffuseTexture = specGloss.getDiffuseTexture()
  const diffuseFactor = specGloss.getDiffuseFactor()
  const glossiness = specGloss.getGlossinessFactor()
  if (diffuseTexture && !material.getBaseColorTexture()) {
    material.setBaseColorTexture(diffuseTexture)
  }
  material.setBaseColorFactor(diffuseFactor)
  material.setRoughnessFactor(1 - glossiness)
  material.setMetallicFactor(0)
  material.setExtension(KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, null)
  converted += 1
}
if (converted > 0) {
  document.disposeExtension(KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS)
}
await io.write(path, document)
console.log(
  converted > 0
    ? `Converted ${converted} spec-gloss material(s) to metal-rough: ${path}`
    : `No spec-gloss materials found: ${path}`,
)
