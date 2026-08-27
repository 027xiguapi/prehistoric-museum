// Animal modules statically import .webp assets, which only webpack/Next.js
// can bundle. Standalone Node scripts that walk the catalogue (e.g. the SEO
// social card generator) short-circuit those imports with empty URL strings
// instead of failing on ERR_UNKNOWN_FILE_EXTENSION.
const assetExtension =
  /\.(webp|png|jpe?g|gif|avif|svg|glb|gltf|bin|mp3|wav|ogg|m4a|mp4|webm|woff2?|ttf|otf)$/i

export async function load(url, context, nextLoad) {
  if (assetExtension.test(url)) {
    return { format: 'module', shortCircuit: true, source: "export default ''" }
  }
  return nextLoad(url, context)
}
