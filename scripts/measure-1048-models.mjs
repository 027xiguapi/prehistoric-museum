// Measures the TRUE world-space bounds of every pristine 1048 model with
// three.js (GLTFLoader dequantizes KHR_mesh_quantization into node transforms,
// which plain gltf-transform walks cannot see on skinned meshes). The tiger
// pipeline used exactly this measurement strategy.
//
// Output: converted-1048/drafts-measurements.json — per slug min/max/size.
// Usage: node scripts/measure-1048-models.mjs [--only=slug1,slug2]
import { readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { chromium } from 'playwright'

const require = createRequire(import.meta.url)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const threeDir = resolve(dirname(require.resolve('three')), '..')
const convertedRoot = join(root, 'converted-1048')

const SLUGS = [
  'saber-toothed-tiger', 'red-panda', 'kitten', 'cane-corso',
  'norwegian-forest-cat', 'bull', 'persian-cat', 'pirate-shepherd-dog',
  'bear', 'fennec-fox', 'owl', 'octopus', 'sheep', 'stag-beetle', 'mouse',
  'centipede', 'crab', 'coyote', 'arabian-leopard', 'tortoise', 'salmon',
  'shark', 'duck', 'pigeon', 'sparrow', 'ox',
  'crow', 'rabbit', 'pug', 'elephant', 'goat', 'zebra', 'sphynx-cat',
  'raccoon', 'sea-turtle', 'hercules-beetle', 'lion', 'kookaburra', 'alpaca',
  'snail', 'scorpion', 'python', 'kangaroo', 'schnauzer', 'frog', 'horse',
  'alligator', 'emu', 'deer',
]

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null

const pageHtml = `<!doctype html>
<meta charset="utf-8">
<style>html,body{margin:0;height:100%;background:transparent}</style>
<script type="importmap">
{
  "imports": {
    "three": "/three.module.js",
    "three/addons/": "/addons/"
  }
}
</script>
<script type="module">
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js'

window.__module = true
const renderer = new THREE.WebGLRenderer({ antialias: false })
renderer.setSize(4, 4)
document.body.appendChild(renderer.domElement)
const scene = new THREE.Scene()

new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(
  '/model.glb',
  (gltf) => {
    try {
      const model = gltf.scene
      scene.add(model)
      model.updateMatrixWorld(true)
      const box = new THREE.Box3().setFromObject(model, true)
      // Skinned vertices can have stray far-away points (rig widgets, whisker
      // tips). Collect every skinned vertex in its current bone pose and keep
      // the 0.5–99.5 percentile per axis as the trimmed, visual bounds.
      const columns = [[], [], []]
      const vector = new THREE.Vector3()
      model.traverse((object) => {
        if (!object.isSkinnedMesh) return
        const position = object.geometry.getAttribute('position')
        for (let index = 0; index < position.count; index += 1) {
          vector.fromBufferAttribute(position, index)
          if (object.bindMode === 'detached') {
            vector.applyMatrix4(object.bindMatrix)
          } else {
            object.applyBoneTransform(index, vector)
          }
          vector.applyMatrix4(object.matrixWorld)
          columns[0].push(vector.x)
          columns[1].push(vector.y)
          columns[2].push(vector.z)
        }
      })
      const trimmed = columns.map((values) => {
        if (!values.length) return null
        values.sort((a, b) => a - b)
        const low = values[Math.floor(values.length * 0.005)]
        const high = values[Math.ceil(values.length * 0.995) - 1]
        return [low, high]
      })
      window.__bounds = {
        min: box.min.toArray().map((value) => Number(value.toPrecision(8))),
        max: box.max.toArray().map((value) => Number(value.toPrecision(8))),
        trimmed,
        skinnedVertices: columns[0].length,
      }
      window.__ready = true
    } catch (error) {
      window.__error = String(error?.stack ?? error)
    }
  },
  undefined,
  (error) => {
    window.__error = String(error)
  },
)
</script>
`

let currentModelPath = null
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext()
await context.route('**/*', async (route) => {
  const url = new URL(route.request().url())
  const respond = (body, type) => route.fulfill({ body, contentType: type })
  try {
    if (url.pathname === '/') {
      return respond(pageHtml, 'text/html; charset=utf-8')
    }
    if (url.pathname === '/model.glb') {
      return respond(await readFile(currentModelPath), 'model/gltf-binary')
    }
    if (url.pathname.startsWith('/addons/')) {
      return respond(
        await readFile(
          join(threeDir, 'examples/jsm', url.pathname.slice('/addons/'.length)),
        ),
        'text/javascript',
      )
    }
    if (url.pathname.startsWith('/three.')) {
      return respond(
        await readFile(join(threeDir, 'build', url.pathname.slice(1))),
        'text/javascript',
      )
    }
  } catch {
    // Fall through to 404.
  }
  return route.fulfill({ status: 404, body: '' })
})

const page = await context.newPage()
const measurements = []
for (const slug of SLUGS) {
  if (onlySlugs && !onlySlugs.has(slug)) {
    continue
  }
  currentModelPath = join(convertedRoot, slug, 'model.glb')
  await page.goto('https://render.test/')
  try {
    await page.waitForFunction(() => window.__ready === true, undefined, {
      timeout: 60_000,
    })
  } catch {
    const error = await page.evaluate(() => window.__error ?? 'timeout')
    measurements.push({ slug, status: `failed: ${String(error).slice(0, 200)}` })
    console.log(`✗ ${slug}: ${String(error).slice(0, 160)}`)
    continue
  }
  const bounds = await page.evaluate(() => window.__bounds)
  const pick = (axis) =>
    bounds.trimmed && bounds.trimmed[axis] ? bounds.trimmed[axis] : [bounds.min[axis], bounds.max[axis]]
  const min = [0, 1, 2].map(pick)
  const max = min.map(([, high]) => high)
  const low = min.map(([value]) => value)
  const size = [
    max[0] - low[0],
    max[1] - low[1],
    max[2] - low[2],
  ]
  measurements.push({
    slug,
    status: 'ok',
    min: bounds.min,
    max: bounds.max,
    trimmedMin: low,
    trimmedMax: max,
    skinnedVertices: bounds.skinnedVertices,
    size,
    longestAxis: ['x', 'y', 'z'][size.indexOf(Math.max(...size))],
    longest: Math.max(...size),
  })
  console.log(
    `✓ ${slug}  ${size.map((value) => value.toFixed(1)).join(' × ')}  longest=${Math.max(...size).toFixed(1)} (${['x', 'y', 'z'][size.indexOf(Math.max(...size))]})`,
  )
}

await browser.close()
await writeFile(
  join(convertedRoot, 'drafts-measurements.json'),
  JSON.stringify(measurements, null, 2),
)
console.log(`\n${measurements.filter((row) => row.status === 'ok').length}/${measurements.length} measured → converted-1048/drafts-measurements.json`)
