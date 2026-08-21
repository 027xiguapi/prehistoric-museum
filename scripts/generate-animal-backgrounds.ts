// Generates the landscape (16:9) and portrait (9:16) scene backgrounds for an
// animal through an OpenAI-compatible image endpoint, then resizes them to the
// museum's canonical background sizes as WebP.
//
// Every prompt tells the image model which exhibit animal the backdrop is
// staged for (name, classification, era, native range), so the scenery can
// match that animal's real habitat and era instead of staying a generic
// atmosphere plate. The scene is still a backdrop behind the 3D model, so it
// must stay animal-free, free of text/UI/watermarks, and calm in the center
// where the model sits (see ANIMAL_AUTHORING_GUIDE.md §5). Landscape and
// portrait are generated as separate compositions, not crops of one another.
//
// Usage:
//   node --import tsx scripts/generate-animal-backgrounds.ts <slug...>
//   node --import tsx scripts/generate-animal-backgrounds.ts --all [--force]
//   node --import tsx scripts/generate-animal-backgrounds.ts --atmosphere=forest
//   node --import tsx scripts/generate-animal-backgrounds.ts --dry-run <slug...>
//
// Required credential (one of):
//   IMAGE_API_COOKIE environment variable, or
//   `IMAGE_API_COOKIE` / `pai-image-cookie` in the repository `.env` file.
//   `--dry-run` previews the per-animal prompts and needs no credential.
// Optional environment:
//   IMAGE_API_BASE    (default https://pai.zaiduyu.top/api/openai/v1)
//   IMAGE_API_MODEL   (default gpt-image-2)
import { existsSync, readFileSync } from 'node:fs'
import { mkdir, stat, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import sharp from 'sharp'

import { loadAnimalDefinitions, repositoryRoot } from './content-data'
import type {
  AnimalPackageDefinition,
  AtmosphereKind,
} from '../src/content/types'

const IMAGE_API_BASE =
  process.env.IMAGE_API_BASE ?? 'https://pai.zaiduyu.top/api/openai/v1'
const IMAGE_API_MODEL = process.env.IMAGE_API_MODEL ?? 'gpt-image-2'

// Reads the session cookie from the environment first, then from `.env`
// (`IMAGE_API_COOKIE`, the key documented in `.env.example`; the legacy
// `pai-image-cookie` spelling still works), matching the gmi-key convention in
// scripts/generate-narration-audio.mjs without pulling in a dotenv dependency.
function loadImageApiCookie(): string | null {
  if (process.env.IMAGE_API_COOKIE) {
    return process.env.IMAGE_API_COOKIE
  }
  const envFile = resolve(repositoryRoot, '.env')
  if (!existsSync(envFile)) {
    return null
  }
  for (const line of readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const match = line.match(
      /^\s*(?:IMAGE_API_COOKIE|pai-image-cookie)\s*=\s*(.*?)\s*$/,
    )
    if (match && match[1]) {
      return match[1]
    }
  }
  return null
}

const IMAGE_API_COOKIE = loadImageApiCookie()

// Canonical background sizes enforced by scripts/content-validation.ts
// (landscape 16:9, portrait 9:16).
const LANDSCAPE_SIZE = { width: 1672, height: 941 } as const
const PORTRAIT_SIZE = { width: 941, height: 1672 } as const

const PROMPT_TAIL =
  'Soft natural lighting, gentle depth of field, muted painterly natural-history museum diorama. No animals, no people, no text, no logos, no watermarks. Keep the center of the frame calm and uncluttered.'

// `{era}` in each scene template is replaced with the exhibit animal's era
// word ("prehistoric" or "natural"), so present-day animals do not get
// Mesozoic scenery that contradicts their own facts.
const ATMOSPHERE_PROMPTS: Record<
  AtmosphereKind,
  { readonly landscape: string; readonly portrait: string }
> = {
  forest: {
    landscape: `Wide 16:9 {era} forest scene: towering ferns, cycads and conifers, soft dappled sunlight through the canopy, mossy ground, faint distant mist. ${PROMPT_TAIL}`,
    portrait: `Tall 9:16 {era} forest scene: vertical trunks of ferns and cycads, soft dappled sunlight, mossy undergrowth, faint mist. ${PROMPT_TAIL}`,
  },
  ice: {
    landscape: `Wide 16:9 glacial tundra scene: pale polar sky, snow-covered ground, distant ice cliffs, soft cold light. ${PROMPT_TAIL}`,
    portrait: `Tall 9:16 glacial tundra scene: pale polar sky, snow-covered ground, one distant ice ridge, soft cold light. ${PROMPT_TAIL}`,
  },
  plains: {
    landscape: `Wide 16:9 open {era} plain scene: low ferns and grasses, scattered rocks, wide horizon, warm golden daylight. ${PROMPT_TAIL}`,
    portrait: `Tall 9:16 open {era} plain scene: low ferns and grasses, a few scattered rocks, wide sky, warm golden daylight. ${PROMPT_TAIL}`,
  },
  underwater: {
    landscape: `Wide 16:9 {era} ocean scene: blue-green water, soft shafts of light from above, drifting particles, sandy seafloor, distant kelp. ${PROMPT_TAIL}`,
    portrait: `Tall 9:16 {era} ocean scene: blue-green water, soft light shafts, drifting particles, sandy seafloor, tall kelp. ${PROMPT_TAIL}`,
  },
  air: {
    landscape: `Wide 16:9 high-altitude sky scene: soft cumulus clouds, warm aerial light, gentle haze, open sky. ${PROMPT_TAIL}`,
    portrait: `Tall 9:16 high-altitude sky scene: soft cumulus clouds rising vertically, warm aerial light, gentle haze. ${PROMPT_TAIL}`,
  },
}

const ATMOSPHERE_KINDS = new Set<string>(Object.keys(ATMOSPHERE_PROMPTS))

type EraWord = 'prehistoric' | 'natural'

// Present-day periods read "Present day …" in English copy and
// "现代/现今/当代 …" in Chinese copy; legendary animals (unicorns) count as
// natural scenery too.
const MODERN_PERIOD_PATTERN = /^(present day|legend|现代|现今|当代|传说)/i

function eraWordFor(definition: AnimalPackageDefinition): EraWord {
  if (definition.kind === 'modern-animal') {
    return 'natural'
  }
  const period =
    definition.content.en?.facts.period ??
    definition.content['zh-CN']?.facts.period
  return period && MODERN_PERIOD_PATTERN.test(period)
    ? 'natural'
    : 'prehistoric'
}

// Drafts may carry only one locale. Prompts are English, so prefer the English
// copy, fall back to Chinese, then to a title-cased slug.
function exhibitName(definition: AnimalPackageDefinition): string {
  const fromContent =
    definition.content.en?.name ?? definition.content['zh-CN']?.name
  if (fromContent) {
    return fromContent
  }
  return definition.id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

// The sentence that tells the image model which animal the backdrop is staged
// for: name, classification, era and native range, plus the instruction to
// keep the stage empty because the animal itself is a separate 3D model
// composited in front of this backdrop.
function describeExhibitAnimal(definition: AnimalPackageDefinition): string {
  const content = definition.content.en ?? definition.content['zh-CN']
  const details: string[] = []
  if (content?.classificationLabel) {
    details.push(content.classificationLabel)
  }
  if (content?.facts.period) {
    details.push(`era: ${content.facts.period}`)
  }
  if (content?.facts.discoveryRegions.length) {
    details.push(`native to ${content.facts.discoveryRegions.join('; ')}`)
  }
  const detail = details.length > 0 ? ` (${details.join('; ')})` : ''
  return (
    `This background is the empty stage backdrop behind a museum exhibit of ` +
    `${exhibitName(definition)}${detail}. Compose the scenery to suit this ` +
    `animal's real habitat and era; the animal itself is added later as a ` +
    `separate 3D model, so the scene must stay free of any creatures.`
  )
}

function buildPrompts(
  definition: AnimalPackageDefinition,
): { readonly landscape: string; readonly portrait: string } {
  const era = eraWordFor(definition)
  const exhibit = describeExhibitAnimal(definition)
  const scenes = ATMOSPHERE_PROMPTS[definition.atmosphere]
  return {
    landscape: `${exhibit} ${scenes.landscape.replaceAll('{era}', era)}`,
    portrait: `${exhibit} ${scenes.portrait.replaceAll('{era}', era)}`,
  }
}

async function generateImage(prompt: string): Promise<Buffer> {
  const base = IMAGE_API_BASE.replace(/\/$/, '')
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  if (IMAGE_API_COOKIE) {
    headers.Cookie = IMAGE_API_COOKIE
  }

  const doFetch = () =>
    fetch(`${base}/images/generations`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: IMAGE_API_MODEL,
        prompt,
        n: 1,
        quality: 'auto',
        response_format: 'b64_json',
      }),
      signal: AbortSignal.timeout(180_000),
    })

  let response: Response
  try {
    response = await doFetch()
  } catch (error) {
    // Network failure (timeout / disconnect): retry once after 3s.
    const reason = error instanceof Error ? error.message : String(error)
    console.warn(`生图请求失败，3 秒后重试: ${reason}`)
    await new Promise((resolveWait) => setTimeout(resolveWait, 3000))
    response = await doFetch()
  }

  if (!response.ok) {
    let text = await response.text()
    // Transient rate-limit / server errors: retry once after 30s so a long
    // batch keeps going instead of losing the remaining animals.
    if (response.status === 429 || response.status >= 500) {
      console.warn(
        `生图返回 ${response.status}，30 秒后重试: ${text.slice(0, 200)}`,
      )
      await new Promise((resolveWait) => setTimeout(resolveWait, 30_000))
      response = await doFetch()
      if (!response.ok) {
        text = await response.text()
      }
    }
    if (!response.ok) {
      throw new Error(`生图失败: ${response.status} ${text.slice(0, 300)}`)
    }
  }

  const payload = (await response.json()) as {
    readonly data?: ReadonlyArray<{
      readonly b64_json?: string
      readonly url?: string
    }>
  }
  const result = payload.data?.[0]
  if (result?.b64_json) {
    return Buffer.from(result.b64_json, 'base64')
  }
  if (result?.url) {
    const imageResponse = await fetch(result.url)
    if (!imageResponse.ok) {
      throw new Error(`下载生成图片失败: ${imageResponse.status}`)
    }
    return Buffer.from(await imageResponse.arrayBuffer())
  }
  throw new Error('生图接口没有返回图片数据')
}

async function encodeBackground(
  source: Buffer,
  size: { readonly width: number; readonly height: number },
): Promise<Buffer> {
  // `fit: 'cover'` enforces the exact aspect ratio without distortion, cropping
  // the overflow when the endpoint returns a square image.
  return sharp(source)
    .rotate()
    .resize(size.width, size.height, { fit: 'cover', position: 'centre' })
    .webp({ effort: 5, quality: 84 })
    .toBuffer()
}

function animalDirectory(slug: string): string {
  return resolve(repositoryRoot, 'src/content/animals', slug)
}

async function backgroundExists(slug: string, fileName: string): Promise<boolean> {
  try {
    await stat(join(animalDirectory(slug), 'backgrounds', fileName))
    return true
  } catch {
    return false
  }
}

async function writeGenerationRecord(
  definition: AnimalPackageDefinition,
  prompts: { readonly landscape: string; readonly portrait: string },
): Promise<void> {
  const directory = join(animalDirectory(definition.id), 'backgrounds')
  await mkdir(directory, { recursive: true })
  const record = [
    'Background image generation record',
    '------------------------------------',
    `animal: ${definition.id}`,
    `animalName: ${exhibitName(definition)}`,
    `atmosphere: ${definition.atmosphere}`,
    `model: ${IMAGE_API_MODEL}`,
    `endpoint: ${IMAGE_API_BASE.replace(/\/$/, '')}/images/generations`,
    `generatedAt: ${new Date().toISOString()}`,
    '',
    'Landscape prompt:',
    prompts.landscape,
    '',
    'Portrait prompt:',
    prompts.portrait,
    '',
  ].join('\n')
  await writeFile(join(directory, 'background-generation.txt'), record, 'utf8')
}

async function generateForSlug(
  definition: AnimalPackageDefinition,
  force: boolean,
  dryRun: boolean,
): Promise<void> {
  const prompts = buildPrompts(definition)

  if (dryRun) {
    console.log(
      `\n[dry-run] ${definition.id} — ${exhibitName(definition)}（atmosphere: ${definition.atmosphere}，era: ${eraWordFor(definition)}）`,
    )
    console.log(`  landscape prompt: ${prompts.landscape}`)
    console.log(`  portrait prompt:  ${prompts.portrait}`)
    return
  }

  const outputs = [
    {
      fileName: 'landscape.webp',
      prompt: prompts.landscape,
      size: LANDSCAPE_SIZE,
    },
    {
      fileName: 'portrait.webp',
      prompt: prompts.portrait,
      size: PORTRAIT_SIZE,
    },
  ] as const

  for (const output of outputs) {
    if (!force && (await backgroundExists(definition.id, output.fileName))) {
      console.log(
        `跳过 ${definition.id}/${output.fileName}（已存在，用 --force 覆盖）`,
      )
      continue
    }
    process.stdout.write(
      `生成 ${definition.id}（${exhibitName(definition)}）/${output.fileName} … `,
    )
    const source = await generateImage(output.prompt)
    const encoded = await encodeBackground(source, output.size)
    const directory = join(animalDirectory(definition.id), 'backgrounds')
    await mkdir(directory, { recursive: true })
    await writeFile(join(directory, output.fileName), encoded)
    console.log(`${encoded.byteLength} B`)
  }

  await writeGenerationRecord(definition, prompts)
  console.log(
    `✓ ${definition.id} — ${exhibitName(definition)}（atmosphere: ${definition.atmosphere}）`,
  )
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const generateAll = args.includes('--all')
  const force = args.includes('--force')
  const dryRun = args.includes('--dry-run')
  const requestedSlugs = args.filter((argument) => !argument.startsWith('--'))
  const atmosphereFlag = args.find((argument) =>
    argument.startsWith('--atmosphere=')
  )
  const atmosphereFilter = atmosphereFlag?.slice('--atmosphere='.length)
  if (atmosphereFilter && !ATMOSPHERE_KINDS.has(atmosphereFilter)) {
    throw new Error(
      `未知 atmosphere: ${atmosphereFilter}（可选值: ${[...ATMOSPHERE_KINDS].join(', ')}）`,
    )
  }

  const definitions = await loadAnimalDefinitions()
  const bySlug = new Map(
    definitions.map((entry) => [entry.definition.id, entry.definition]),
  )

  const unknownSlugs = requestedSlugs.filter((slug) => !bySlug.has(slug))
  if (unknownSlugs.length > 0) {
    throw new Error(`未知动物 slug: ${unknownSlugs.join(', ')}`)
  }

  let targets = [...bySlug.values()]
  if (atmosphereFilter) {
    targets = targets.filter(
      (definition) => definition.atmosphere === atmosphereFilter,
    )
  }
  if (requestedSlugs.length > 0) {
    targets = targets.filter((definition) => requestedSlugs.includes(definition.id))
  }

  if (requestedSlugs.length === 0 && !generateAll && !atmosphereFilter) {
    const missing = await Promise.all(
      targets.map(async (definition) => ({
        id: definition.id,
        missingLandscape: !(await backgroundExists(definition.id, 'landscape.webp')),
      })),
    )
    const missingIds = missing
      .filter((entry) => entry.missingLandscape)
      .map((entry) => entry.id)
    console.log('未指定动物，未生成任何图片。')
    console.log(
      missingIds.length > 0
        ? `缺少背景的动物: ${missingIds.join(', ')}\n用 --all 生成全部，或传入具体 slug（--dry-run 只预览提示词）。`
        : '所有动物都已有背景。',
    )
    return
  }

  if (!IMAGE_API_COOKIE && !dryRun) {
    throw new Error(
      '缺少生图 Cookie：请设置 IMAGE_API_COOKIE 环境变量，或在 .env 里加 IMAGE_API_COOKIE=…（--dry-run 可跳过）',
    )
  }

  const failures: string[] = []
  for (const definition of targets) {
    try {
      await generateForSlug(definition, force, dryRun)
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error)
      failures.push(definition.id)
      console.error(
        `✗ ${definition.id} — ${exhibitName(definition)} 失败: ${reason}`,
      )
    }
  }
  console.log(
    dryRun
      ? `\n完成：dry-run 预览了 ${targets.length} 个动物的生图提示词。`
      : `\n完成：处理了 ${targets.length} 个动物。`,
  )
  if (failures.length > 0) {
    console.log(
      `\n失败 ${failures.length} 个（已生成的文件会保留，重新运行会跳过它们）: ${failures.join(', ')}`,
    )
    process.exitCode = 1
  }
}

await main()
