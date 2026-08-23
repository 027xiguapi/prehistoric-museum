// Copies the Capacitor-style static export (`out/`) into the HarmonyOS entry
// module's rawfile tree so ArkWeb can serve the whole site locally (see
// harmony/entry/src/main/ets/pages/Index.ets — the Web component maps
// https://wonzoo.local/* to rawfile/web/*). Run after `npm run build:mobile`.
import { cp, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const exportDir = join(repositoryRoot, 'out')
const rawfileWeb = join(repositoryRoot, 'harmony', 'entry', 'src', 'main', 'resources', 'rawfile')

if (!existsSync(exportDir)) {
  console.error('sync-harmony-assets.mjs: out/ 不存在，先运行 npm run build:mobile。')
  process.exit(1)
}

await rm(rawfileWeb, { recursive: true, force: true })
await cp(exportDir, rawfileWeb, { recursive: true })
console.log(`Copied static export into ${rawfileWeb}.`)
