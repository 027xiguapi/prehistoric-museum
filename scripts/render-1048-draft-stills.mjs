/* global window, document */
// Renders thumbnail/poster/poster-portrait stills for every 1048 draft from
// its normalized runtime GLB (tiger pipeline conventions: thumbnail 320×320
// yaw 35 pitch 10, poster 1200×675 yaw 25 pitch 8, poster-portrait 390×844
// yaw 30 pitch 6; sharp webp q88; live-canvas toDataURL re-render).
//
// `frameScale` tightens the camera for models whose raw bounds are inflated by
// a few extreme wing vertices (pigeon, sparrow).
//
// Output: src/content/animals/<slug>/images/{thumbnail,poster,poster-portrait}.webp
// Usage: node scripts/render-1048-draft-stills.mjs [--only=slug1,slug2]
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const threeDir = resolve(dirname(require.resolve('three')), '..')
const animalsRoot = join(root, 'src/content/animals')

const SLUGS = {
  'saber-toothed-tiger': 1,
  'red-panda': 1,
  kitten: 1,
  'cane-corso': 1,
  'norwegian-forest-cat': 1,
  bull: 1,
  'persian-cat': 1,
  'pirate-shepherd-dog': 1,
  bear: 1,
  'fennec-fox': 1,
  owl: 1,
  octopus: 1,
  sheep: 1,
  'stag-beetle': 1,
  mouse: 1,
  centipede: 1,
  crab: 1,
  coyote: 1,
  'arabian-leopard': 1,
  tortoise: 1,
  salmon: 1,
  shark: 1,
  duck: 1,
  pigeon: 0.72,
  sparrow: 0.75,
  ox: 1,
  crow: 1,
  rabbit: 1,
  pug: 1,
  elephant: 1,
  goat: 1,
  zebra: 1,
  'sphynx-cat': 1,
  raccoon: 1,
  'sea-turtle': 1,
  'hercules-beetle': 1,
  lion: 1,
  kookaburra: 1,
  alpaca: 1,
  snail: 1,
  scorpion: 1,
  python: 1,
  kangaroo: 1,
  schnauzer: 1,
  frog: 1,
  horse: 1,
  alligator: 1,
  emu: 1,
  deer: 1,
  whale: 1,
  jellyfish: 1,
  seahorse: 1,
  eagle: 1,
  butterfly: 1,
}

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

window.__module=true
const params=new URLSearchParams(location.search)
const width = Number(params.get('w'))
const height = Number(params.get('h'))
const yaw = Number(params.get('yaw') ?? 25)
const pitch = Number(params.get('pitch') ?? 8)
const frameScale = Number(params.get('frame') ?? 1)

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
      const radius = Math.max(size.x, size.y, size.z) * frameScale

      const camera = new THREE.PerspectiveCamera(32, width / height, radius / 100, radius * 20)
      const distance = radius * 1.55
      const yawRad = THREE.MathUtils.degToRad(yaw)
      const pitchRad = THREE.MathUtils.degToRad(pitch)
      camera.position.set(
        center.x + distance * Math.cos(pitchRad) * Math.sin(yawRad),
        center.y + distance * Math.sin(pitchRad) + size.y * 0.05,
        center.z + distance * Math.cos(pitchRad) * Math.cos(yawRad),
      )
      camera.lookAt(center)
      window.__renderFrame = () => renderer.render(scene, camera)
      window.__renderFrame()
      window.__bounds = { size: [size.x, size.y, size.z] }
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

const shots = [
  { name: 'thumbnail.webp', w: 320, h: 320, yaw: 35, pitch: 10 },
  { name: 'poster.webp', w: 1200, h: 675, yaw: 25, pitch: 8 },
  { name: 'poster-portrait.webp', w: 390, h: 844, yaw: 30, pitch: 6 },
]

for (const [slug, frameScale] of Object.entries(SLUGS)) {
  if (onlySlugs && !onlySlugs.has(slug)) {
    continue
  }
  currentModelPath = join(animalsRoot, slug, 'model', 'model.glb')
  const outDir = join(animalsRoot, slug, 'images')
  await mkdir(outDir, { recursive: true })
  for (const shot of shots) {
    await page.goto(
      `https://render.test/?w=${shot.w}&h=${shot.h}&yaw=${shot.yaw}&pitch=${shot.pitch}&frame=${frameScale}`,
    )
    try {
      await page.waitForFunction(() => window.__ready === true, undefined, {
        timeout: 60_000,
      })
    } catch {
      const error = await page.evaluate(() => window.__error ?? 'timeout')
      console.log(`✗ ${slug}/${shot.name}: ${String(error).slice(0, 160)}`)
      process.exitCode = 1
      continue
    }
    // Re-render and pull the frame from the live canvas — screenshots taken
    // after WebGL buffer swaps can come back empty.
    const png = Buffer.from(
      (await page.evaluate(() => {
        window.__renderFrame?.()
        return document.querySelector('canvas')?.toDataURL('image/png')
      }))?.replace(/^data:image\/png;base64,/, '') ?? '',
      'base64',
    )
    const webp = await sharp(png).webp({ quality: 88 }).toBuffer()
    await writeFile(join(outDir, shot.name), webp)
  }
  console.log(`✓ ${slug} → 3 stills in ${outDir}`)
}

await browser.close()
console.log('done')