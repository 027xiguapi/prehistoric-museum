// Batch-downloads the GLB models listed in `model_list.md`.
//
// The list file contains one URL per line. Each URL is mirrored locally under
// an output directory (default `model-downloads/`), preserving the remote
// path after the shared `/static/` prefix so categories stay grouped and
// same-named files never collide:
//
//   https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Bengal/Bengal.glb
//     -> model-downloads/cats/Bengal/Bengal.glb
//
// Usage:
//   node scripts/download-models.mjs [listFile] [outputDir]
//
// Downloads are idempotent: an existing non-empty file is skipped, so a
// stopped run can be resumed without re-fetching. A small worker pool keeps
// the requests polite, and each file is retried a few times with backoff.
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const listFile = resolve(process.argv[2] ?? join(projectRoot, 'model_list.md'))
const outputRoot = resolve(
  process.argv[3] ?? join(projectRoot, 'model-downloads'),
)

// Everything after this shared prefix is mirrored into the output directory.
const REMOTE_PREFIX = '/ar-answers-in-search-models/static/'

const CONCURRENCY = 4
const MAX_RETRIES = 3
const GLB_MAGIC = 'glTF'

async function fileExists(path) {
  try {
    const info = await stat(path)
    return info.isFile() && info.size > 0
  } catch {
    return false
  }
}

function localPathFor(url) {
  const pathname = new URL(url).pathname
  const at = pathname.indexOf(REMOTE_PREFIX)
  const relative = at === -1 ? pathname : pathname.slice(at + REMOTE_PREFIX.length)
  // Strip any leading slashes so the result stays inside the output dir.
  return join(outputRoot, relative.replace(/^\/+/, ''))
}

async function downloadOne(url) {
  const target = localPathFor(url)
  if (await fileExists(target)) {
    return { url, target, status: 'skipped' }
  }
  await mkdir(dirname(target), { recursive: true })

  let lastError
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const buffer = Buffer.from(await response.arrayBuffer())
      if (buffer.length === 0) {
        throw new Error('empty response body')
      }
      // The head of a binary glTF starts with the ASCII magic "glTF".
      const magic = buffer.subarray(0, 4).toString('ascii')
      if (magic !== GLB_MAGIC) {
        throw new Error(`not a binary glTF (magic "${magic}")`)
      }
      await writeFile(target, buffer)
      return { url, target, status: 'downloaded', bytes: buffer.length }
    } catch (error) {
      lastError = error
      if (attempt < MAX_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 500))
      }
    }
  }
  return { url, target, status: 'failed', error: String(lastError?.message ?? lastError) }
}

async function main() {
  const source = await readFile(listFile, 'utf8')
  const urls = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('http'))

  if (!urls.length) {
    console.error(`No http(s) URLs found in ${listFile}.`)
    process.exit(1)
  }

  console.log(`Downloading ${urls.length} model(s) -> ${outputRoot}\n`)

  const queue = [...urls]
  let completed = 0
  const counts = { downloaded: 0, skipped: 0, failed: 0 }

  async function worker() {
    while (queue.length) {
      const url = queue.shift()
      const result = await downloadOne(url)
      completed += 1
      counts[result.status] += 1
      const label = `[${completed}/${urls.length}]`
      if (result.status === 'downloaded') {
        console.log(`${label} ok    ${result.target} (${formatBytes(result.bytes)})`)
      } else if (result.status === 'skipped') {
        console.log(`${label} skip  ${result.target}`)
      } else {
        console.error(`${label} FAIL  ${url}: ${result.error}`)
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, urls.length) }, worker))

  console.log(
    `\nDone: ${counts.downloaded} downloaded, ${counts.skipped} skipped, ${counts.failed} failed.`,
  )
  process.exit(counts.failed ? 1 : 0)
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MiB`
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
