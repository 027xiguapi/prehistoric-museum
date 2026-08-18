// Headlessly exports every .blend in the 1048动物 drop to a GLB sitting
// next to the source file, so the existing conversion pipeline
// (convert-1048-models.mjs) picks the models up like the GLB/GLTF drops.
//
// Stages through ASCII-safe temp paths: spawning blender.exe with non-ASCII
// arguments can fail the same way the .cmd EINVAL issue did for the earlier
// batch scripts.
//
// Usage: node scripts/export-1048-blends.mjs
import { execFile } from 'node:child_process'
import { copyFile, mkdtemp, readdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceRoot = join(root, '1048动物')
const blender =
  process.env.BLENDER_EXE ??
  'D:/Program Files/Blender Foundation/Blender 5.2/blender.exe'

const EXPORT_SCRIPT = `
import bpy, sys
argv = sys.argv[sys.argv.index('--') + 1:]
out = argv[0]
bpy.ops.export_scene.gltf(
    filepath=out,
    export_format='GLB',
    export_animations=True,
    export_apply=False,
    export_yup=True,
    use_selection=False,
)
print('EXPORTED', out)
`

async function* walkBlendFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      yield* walkBlendFiles(join(dir, entry.name))
    } else if (/\.blend$/i.test(entry.name)) {
      yield join(dir, entry.name)
    }
  }
}

const results = []
for await (const blendPath of walkBlendFiles(sourceRoot)) {
  const rel = blendPath.slice(sourceRoot.length + 1)
  const stage = await mkdtemp(join(tmpdir(), 'blend-export-'))
  try {
    // ASCII-safe staging of the source file and the export script.
    const stagedBlend = join(stage, 'model.blend')
    await copyFile(blendPath, stagedBlend)
    const scriptPath = join(stage, 'export-glb.py')
    await writeFile(scriptPath, EXPORT_SCRIPT, 'utf8')
    const stagedOut = join(stage, 'model.glb')
    const { stdout } = await execFileAsync(
      blender,
      ['-b', stagedBlend, '--python', scriptPath, '--', stagedOut],
      { maxBuffer: 1024 * 1024 * 32 },
    )
    const confirmed = /EXPORTED/.test(stdout)
    if (!confirmed) {
      throw new Error(`no EXPORTED marker in blender stdout`)
    }
    const dest = join(dirname(blendPath), 'exported.glb')
    await copyFile(stagedOut, dest)
    results.push({ rel, status: 'ok' })
    console.log(`✓ ${rel} → exported.glb`)
  } catch (error) {
    const details = [error.stderr, error.stdout, error.message]
      .filter(Boolean)
      .join(' | ')
      .replace(/\s+/g, ' ')
      .slice(0, 200)
    results.push({ rel, status: `failed: ${details}` })
    console.log(`✗ ${rel}  (${details})`)
  } finally {
    await rm(stage, { recursive: true, force: true })
  }
}

console.log(
  `\n${results.filter((r) => r.status === 'ok').length}/${results.length} exported`,
)
if (results.some((r) => r.status !== 'ok')) {
  process.exitCode = 1
}
