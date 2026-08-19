/* global window, document */
// Renders 4-view orientation contact sheets (yaw 0/90/180/270, pitch 10) for
// every 1048 draft model, so the per-animal baked yaw (head → +Z) and pitch
// (righting Z-up-authored models) can be decided by inspection. Tiger is
// included as a control: it is known to face +Z at yaw 0.
//
// Output: converted-1048/<slug>/orientation.png (4 panels side by side).
// Usage: node scripts/render-1048-contact-sheets.mjs [--only=slug1,slug2]
import { readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { chromium } from 'playwright'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const threeDir = resolve(dirname(require.resolve('three')), '..')
const animalsRoot = join(root, 'src/content/animals')
const outputRoot = join(root, 'converted-1048')

const SLUGS = [
  'tiger', // control: known to face +Z at yaw 0
  'saber-toothed-tiger',
  'red-panda',
  'kitten',
  'cane-corso',
  'norwegian-forest-cat',
  'bull',
  'persian-cat',
  'pirate-shepherd-dog',
  'bear',
  'fennec-fox',
  'owl',
  'octopus',
  'sheep',
  'stag-beetle',
  'mouse',
  'centipede',
  'crab',
  'coyote',
  'arabian-leopard',
  'tortoise',
  'salmon',
  'shark',
  'duck',
  'pigeon',
  'sparrow',
  'ox',
]

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null
const yawsFlag = process.argv.find((argument) => argument.startsWith('--yaws='))
const outFlag = process.argv.find((argument) => argument.startsWith('--out='))

const PANEL = 280
const YAWS = yawsFlag
  ? yawsFlag.slice(7).split(',').map(Number)
  : [0, 90, 180, 270]
const OUT_NAME = outFlag ? outFlag.slice(6) : 'orientation'

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

window.__module=true
const params=new URLSearchParams(location.search)
const width = Number(params.get('w'))
const height = Number(params.get('h'))
const yaw = Number(params.get('yaw') ?? 0)
const pitch = Number(params.get('pitch') ?? 10)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })
renderer.setSize(width, height)
renderer.setPixelRatio(1)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const key = new THREE.DirectionalLight(0xffffff, 2.6)
key.position.set(2.5, 4, 3)
scene.add(key)
const fill = new THREE.DirectionalLight(0xdfeaff, 1.1)
fill.position.set(-3, 1.5, -2)
scene.add(fill)
scene.add(new THREE.AmbientLight(0xffffff, 1.1))

new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(
  '/model.glb',
  (gltf) => {
    try {
      const model = gltf.scene
      scene.add(model)
      model.traverse((object) => {
        if (object.isMesh) {
          object.material.side = THREE.DoubleSide
          object.frustumCulled = false
        }
      })
      model.updateMatrixWorld(true)
      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())
      const radius = Math.max(size.x, size.y, size.z)

      const camera = new THREE.PerspectiveCamera(30, width / height, radius / 100, radius * 20)
      const distance = radius * 1.6
      const yawRad = THREE.MathUtils.degToRad(yaw)
      const pitchRad = THREE.MathUtils.degToRad(pitch)
      camera.position.set(
        center.x + distance * Math.cos(pitchRad) * Math.sin(yawRad),
        center.y + distance * Math.sin(pitchRad) + size.y * 0.05,
        center.z + distance * Math.cos(pitchRad) * Math.cos(yawRad),
      )
      camera.lookAt(center)
      renderer.render(scene, camera)
      window.__renderFrame = () => renderer.render(scene, camera)
      window.__renderFrame()
      window.__bounds = { size: [size.x, size.y, size.z], min: [box.min.x, box.min.y, box.min.z], max: [box.max.x, box.max.y, box.max.z] }
      window.__glError = renderer.getContext().getError()
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
page.on('pageerror', (error) => console.log('[pageerror]', error.message))

for (const slug of SLUGS) {
  if (onlySlugs && !onlySlugs.has(slug)) {
    continue
  }
  currentModelPath = join(animalsRoot, slug, 'model', 'model.glb')
  const panels = []
  for (const yaw of YAWS) {
    await page.goto(
      `https://render.test/?w=${PANEL}&h=${PANEL}&yaw=${yaw}&pitch=10`,
    )
    try {
      await page.waitForFunction(() => window.__ready === true, undefined, {
        timeout: 60_000,
      })
    } catch {
      const diagnostics = await page.evaluate(() => ({
        ready: window.__ready ?? false,
        error: window.__error ?? null,
      }))
      throw new Error(`Render never became ready for ${slug}@${yaw}: ${JSON.stringify(diagnostics)}`)
    }
    const png = Buffer.from(
      (await page.evaluate(() => {
        window.__renderFrame?.()
        return document.querySelector('canvas')?.toDataURL('image/png')
      }))?.replace(/^data:image\/png;base64,/, '') ?? '',
      'base64',
    )
    panels.push(png)
  }
  const sheet = await sharp({
    create: {
      width: PANEL * YAWS.length,
      height: PANEL,
      channels: 4,
      background: { r: 34, g: 42, b: 52, alpha: 1 },
    },
  })
    .composite(panels.map((body, index) => ({
      input: body,
      left: index * PANEL,
      top: 0,
    })))
    .png()
    .toBuffer()
  const outPath = slug === 'tiger'
    ? join(outputRoot, `tiger-${OUT_NAME}-control.png`)
    : join(outputRoot, slug, `${OUT_NAME}.png`)
  await writeFile(outPath, sheet)
  console.log(`✓ ${slug} → ${outPath}`)
}

await browser.close()
console.log('done')