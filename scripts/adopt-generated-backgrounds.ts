// Rewrites each draft animal's `animal.ts` so it stops borrowing a published
// donor backdrop and imports its own generated scene from
// `./backgrounds/{landscape,portrait}.webp` instead. Safe to re-run at any
// time: animals whose own backgrounds have not been generated yet keep the
// borrowed imports, so this pairs naturally with
// scripts/generate-animal-backgrounds.ts while a batch is still running.
//
// Usage:
//   node --import tsx scripts/adopt-generated-backgrounds.ts [--dry-run]
import { existsSync, readFileSync } from 'node:fs'
import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import { animalsRoot } from './content-data'

const COMMENT_START_PATTERN = /^\/\/\s*Draft preview only:\s*borrow the\b/
const BORROWED_IMPORT_PATTERN =
  /^import (?:landscapeUrl|portraitUrl) from '\.\.\/[^']+'$/m
const BORROWED_LANDSCAPE_PATTERN =
  /^import landscapeUrl from '\.\.\/[^']+'$/
const BORROWED_PORTRAIT_PATTERN = /^import portraitUrl from '\.\.\/[^']+'$/

const OWN_COMMENT = [
  "// Draft preview only: the animal's own generated scene backdrop (prompt",
  '// and generation record live in backgrounds/background-generation.txt).',
  '// Never shipped to production (drafts are excluded there).',
]

function rewriteAnimalFile(content: string): string | null {
  const lines = content.split(/\r?\n/)
  const endOfLine = content.includes('\r\n') ? '\r\n' : '\n'

  let commentStart = -1
  for (let index = 0; index < lines.length; index += 1) {
    if (COMMENT_START_PATTERN.test(lines[index] ?? '')) {
      commentStart = index
      break
    }
  }
  if (commentStart === -1) {
    return null
  }

  let changed = false

  // The borrow note is a contiguous // block; replace it as a whole so both
  // the generated two-line and the hand-built one-line variants are covered.
  let commentEnd = commentStart + 1
  while (
    commentEnd < lines.length &&
    (lines[commentEnd] ?? '').startsWith('//')
  ) {
    commentEnd += 1
  }
  lines.splice(commentStart, commentEnd - commentStart, ...OWN_COMMENT)

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? ''
    if (BORROWED_LANDSCAPE_PATTERN.test(line)) {
      lines[index] =
        "import landscapeUrl from './backgrounds/landscape.webp'"
      changed = true
    } else if (BORROWED_PORTRAIT_PATTERN.test(line)) {
      lines[index] =
        "import portraitUrl from './backgrounds/portrait.webp'"
      changed = true
    }
  }

  if (!changed) {
    return null
  }
  return lines.join(endOfLine)
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes('--dry-run')

  const entries = await readdir(animalsRoot, { withFileTypes: true })
  const directoryNames = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()

  let switched = 0
  let stillBorrowing = 0

  for (const directoryName of directoryNames) {
    const animalFile = join(animalsRoot, directoryName, 'animal.ts')
    if (!existsSync(animalFile)) {
      continue
    }
    const hasOwnScene =
      existsSync(join(animalsRoot, directoryName, 'backgrounds', 'landscape.webp')) &&
      existsSync(join(animalsRoot, directoryName, 'backgrounds', 'portrait.webp'))

    const content = readFileSync(animalFile, 'utf8')
    if (!BORROWED_IMPORT_PATTERN.test(content)) {
      continue
    }
    if (!hasOwnScene) {
      stillBorrowing += 1
      continue
    }

    const rewrittenContent = rewriteAnimalFile(content)
    if (rewrittenContent === null) {
      stillBorrowing += 1
      continue
    }
    if (!dryRun) {
      await writeFile(animalFile, rewrittenContent, 'utf8')
    }
    switched += 1
    console.log(
      `${dryRun ? '[dry-run] ' : ''}切换 ${directoryName} 使用自有背景（不再借用 donor 背景）`,
    )
  }

  console.log(
    `\n完成：切换 ${switched} 个，仍在借用背景 ${stillBorrowing} 个（自有背景尚未生成）。`,
  )
  if (dryRun) {
    console.log('（dry-run 模式，未写入任何文件）')
  }
}

await main()
