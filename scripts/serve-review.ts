// Local review entry point: installs the temporary review asset route, then
// runs plain `next dev` (the removed museum-server.ts wrapped Next with its
// own HTTP layer; the asset route and the proxy guard cover that now).

import { spawn } from 'node:child_process'
import { resolve } from 'node:path'

import {
  installLocalReviewAssetRoute,
  removeLocalReviewAssetRoute,
  repositoryRoot,
} from './review-dev-route'

if (process.env.NEXT_PUBLIC_MUSEUM_MODE !== 'review') {
  console.error(
    'scripts/serve-review.ts requires NEXT_PUBLIC_MUSEUM_MODE=review.',
  )
  process.exit(1)
}

await installLocalReviewAssetRoute()

let routeRemoved = false
async function removeReviewRoute(): Promise<void> {
  if (routeRemoved) {
    return
  }
  routeRemoved = true
  try {
    await removeLocalReviewAssetRoute()
  } catch (error) {
    console.error('Failed to remove the review asset route:', error)
  }
}

async function shutdown(exitCode: number): Promise<never> {
  await removeReviewRoute()
  process.exit(exitCode)
}

// Matches the former custom server defaults for review runs.
function option(name: string, fallback: string): string {
  const arguments_ = process.argv.slice(2)
  const index = arguments_.indexOf(name)
  return index === -1 ? fallback : (arguments_[index + 1] ?? fallback)
}

const port = option('--port', '5173')
const host = option('--host', '127.0.0.1')

const devServer = spawn(
  process.execPath,
  [
    resolve(repositoryRoot, 'node_modules/next/dist/bin/next'),
    'dev',
    '--hostname',
    host,
    '--port',
    port,
  ],
  { cwd: repositoryRoot, stdio: 'inherit' },
)

process.on('SIGINT', () => {
  devServer.kill('SIGINT')
})
process.on('SIGTERM', () => {
  devServer.kill('SIGTERM')
})
devServer.on('error', (error) => {
  console.error('Failed to start next dev:', error)
  void shutdown(1)
})
devServer.on('exit', (code, signal) => {
  void shutdown(code ?? (signal ? 1 : 0))
})
