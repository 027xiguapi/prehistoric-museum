// Cross-platform environment variable helper for npm scripts.
//
// Usage: node scripts/set-env.mjs KEY=value [KEY2=value2 ...] command [args...]
//
// Windows shells do not support inline `KEY=value command` assignment, so all
// mode/base-path driven scripts route through this helper instead.

import { spawnSync } from 'node:child_process'

const argv = process.argv.slice(2)
const env = { ...process.env }

let index = 0
while (index < argv.length) {
  const token = argv[index] ?? ''
  const separatorIndex = token.indexOf('=')
  if (separatorIndex <= 0) {
    break
  }
  env[token.slice(0, separatorIndex)] = token.slice(separatorIndex + 1)
  index += 1
}

const [command, ...commandArguments] = argv.slice(index)
if (!command) {
  console.error('set-env.mjs: 缺少要执行的命令。')
  process.exit(1)
}

const result = spawnSync(command, commandArguments, {
  env,
  stdio: 'inherit',
  shell: process.platform === 'win32',
})

process.exit(result.status ?? 1)
