// Batch-generate narration audio for draft animals via the GMICloud
// request-queue TTS API (minimax-tts-speech-2.6-hd).
//
// Usage:
//   GMI_API_KEY=... node scripts/generate-narration-audio.mjs [options]
//
// Options:
//   --export               (Re)build scripts/narration-texts.json from the
//                          content.<lang>.ts files, then exit
//   --animals=<id,id,...>  Only process these animals (default: all without audio)
//   --lang=zh-CN|en|both   Which languages to generate (default: both)
//   --voice-id=<id>        Preset voice for BOTH languages (default:
//                          English_expressive_narrator)
//   --voice-id-zh=<id>     Preset voice for zh-CN only
//   --voice-id-en=<id>     Preset voice for en only
//   --dry-run              Print the plan without calling the API
//
// Narration texts are read from scripts/narration-texts.json (shape:
// { "<animalId>": { "zh-CN": ["sentence", ...], "en": [...] } }). Run --export
// to regenerate that file after editing any content.<lang>.ts. Output lands at
// src/content/animals/<id>/audio/narration.<lang>.mp3. Existing files are
// skipped so the script is safe to re-run.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const animalsDir = join(projectRoot, 'src', 'content', 'animals')
const textsFile = join(projectRoot, 'scripts', 'narration-texts.json')

const API_BASE = 'https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests'
const MODEL = 'minimax-tts-speech-2.6-hd'
const DEFAULT_VOICE_ZH = 'Chinese (Mandarin)_Cute_Spirit'
const DEFAULT_VOICE_EN = 'English_PlayfulGirl'
const LANGS = ['zh-CN', 'en']

// Reads the API key from `.env` (variable `gmi-key`) with the GMI_API_KEY
// environment variable as an override. A tiny parser keeps us free of a
// dotenv dependency.
function loadApiKey() {
  if (process.env.GMI_API_KEY) return process.env.GMI_API_KEY
  const envFile = join(projectRoot, '.env')
  if (!existsSync(envFile)) return null
  for (const line of readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*gmi-key\s*=\s*(.*?)\s*$/)
    if (match) return match[1]
  }
  return null
}

// ---------------------------------------------------------------------------
// CLI options

function parseArgs(argv) {
  const options = {
    animals: null,
    lang: 'both',
    voiceId: null,
    voiceIdZh: null,
    voiceIdEn: null,
    dryRun: false,
    export: false,
  }
  for (const arg of argv) {
    const [key, ...rest] = arg.replace(/^--/, '').split('=')
    const value = rest.join('=')
    if (key === 'animals') options.animals = value.split(',').map((s) => s.trim()).filter(Boolean)
    else if (key === 'lang') options.lang = value
    else if (key === 'voice-id') options.voiceId = value
    else if (key === 'voice-id-zh') options.voiceIdZh = value
    else if (key === 'voice-id-en') options.voiceIdEn = value
    else if (key === 'dry-run') options.dryRun = true
    else if (key === 'export') options.export = true
    else {
      console.error(`Unknown option: ${arg}`)
      process.exit(1)
    }
  }
  return options
}

const options = parseArgs(process.argv.slice(2))

const apiKey = loadApiKey()
if (!apiKey && !options.dryRun && !options.export) {
  console.error('Missing API key. Set `gmi-key` in .env or export GMI_API_KEY.')
  process.exit(1)
}

// Resolve the preset voice per language: language-specific flags win over the
// shared --voice-id, which in turn wins over the per-language default.
function voiceIdFor(lang) {
  if (lang === 'zh-CN') return options.voiceIdZh ?? options.voiceId ?? DEFAULT_VOICE_ZH
  return options.voiceIdEn ?? options.voiceId ?? DEFAULT_VOICE_EN
}

// ---------------------------------------------------------------------------
// Content extraction

function listAnimalIds() {
  if (options.animals) return options.animals
  return readdirSync(animalsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
}

// Pulls the `sentences: [...]` strings out of a content.<lang>.ts module.
// Handles unquoted (`sentences:`), single- (`'sentences':`) and double-quoted
// (`"sentences":`) keys, plus single- or double-quoted entries, with or
// without trailing commas.
function extractSentences(contentFile) {
  const source = readText(contentFile)
  const key = /sentences["']?\s*:\s*\[/.exec(source)
  if (!key) return null
  const open = source.indexOf('[', key.index)
  const close = source.indexOf(']', open)
  if (open === -1 || close === -1) return null
  const body = source.slice(open + 1, close)
  const sentences = []
  const pattern = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g
  let match
  while ((match = pattern.exec(body)) !== null) {
    if (match[1] !== undefined) {
      // Single-quoted source: unescape TS \' \" \\ sequences directly.
      sentences.push(match[1].replace(/\\(['"\\])/g, '$1'))
    } else {
      // Double-quoted source: escapes are JSON-compatible.
      sentences.push(JSON.parse(`"${match[2]}"`))
    }
  }
  return sentences.length ? sentences : null
}

function readText(file) {
  return readFileSync(file, 'utf8')
}

function targetLangs() {
  if (options.lang === 'both') return LANGS
  if (LANGS.includes(options.lang)) return [options.lang]
  console.error(`Invalid --lang value: ${options.lang}`)
  process.exit(1)
}

// ---------------------------------------------------------------------------
// API client

async function apiFetch(url, init = {}) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  })
  const text = await response.text()
  let body
  try {
    body = JSON.parse(text)
  } catch {
    body = text
  }
  return { ok: response.ok, status: response.status, body }
}

function findAudioUrl(value) {
  if (typeof value === 'string') {
    return /^https?:\/\/\S+\.(mp3|wav|m4a|ogg)(\?\S*)?$/i.test(value) ? value : null
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findAudioUrl(item)
      if (found) return found
    }
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) {
      const found = findAudioUrl(item)
      if (found) return found
    }
  }
  return null
}

function findRequestId(body) {
  if (!body || typeof body !== 'object') return null
  for (const key of ['id', 'requestId', 'request_id', 'taskId', 'task_id']) {
    const value = body[key]
    if (typeof value === 'string' && value) return value
  }
  for (const item of Object.values(body)) {
    if (item && typeof item === 'object') {
      const found = findRequestId(item)
      if (found) return found
    }
  }
  return null
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Submits one TTS request and resolves with a downloadable audio URL. The
// queue API's exact response schema is undocumented, so the flow is adaptive:
// an immediate audio URL wins; otherwise poll the request resource until a
// URL appears or the attempt budget runs out.
async function synthesize(text, lang) {
  const payload = {
    text,
    voice_id: voiceIdFor(lang),
    speed: '1',
    vol: '1',
    pitch: '0',
    emotion: 'auto',
    language_boost: 'auto',
    format: 'mp3',
    audio_sample_rate: '32000',
    bitrate: '128000',
    channel: '2',
    vm_pitch: 0,
    intensity: 0,
    timbre: 0,
    sound_effects: 'spacious_echo',
  }

  const submit = await apiFetch(API_BASE, {
    method: 'POST',
    body: JSON.stringify({ model: MODEL, payload }),
  })
  if (!submit.ok) {
    throw new Error(`submit failed (${submit.status}): ${JSON.stringify(submit.body).slice(0, 300)}`)
  }
  const direct = findAudioUrl(submit.body)
  if (direct) return direct

  const requestId = findRequestId(submit.body)
  if (!requestId) {
    throw new Error(`no audio URL or request id in response: ${JSON.stringify(submit.body).slice(0, 300)}`)
  }

  const statusUrl = `${API_BASE}/${encodeURIComponent(requestId)}`
  for (let attempt = 0; attempt < 60; attempt++) {
    await sleep(5000)
    const poll = await apiFetch(statusUrl)
    if (!poll.ok) {
      // Queued jobs may 404 briefly after submission; keep polling a few times.
      if (poll.status === 404 && attempt < 5) continue
      throw new Error(`poll failed (${poll.status}): ${JSON.stringify(poll.body).slice(0, 300)}`)
    }
    const audioUrl = findAudioUrl(poll.body)
    if (audioUrl) return audioUrl
    const failed = typeof poll.body === 'object' &&
      /fail|error|cancel/i.test(String(poll.body.status ?? poll.body.state ?? ''))
    if (failed) {
      throw new Error(`request failed: ${JSON.stringify(poll.body).slice(0, 300)}`)
    }
  }
  throw new Error('timed out waiting for the queue result')
}

async function download(url, file) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`download failed (${response.status})`)
  const buffer = Buffer.from(await response.arrayBuffer())
  if (buffer.length < 1024) throw new Error(`downloaded file suspiciously small (${buffer.length} bytes)`)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, buffer)
}

// ---------------------------------------------------------------------------
// Main

// Rebuilds scripts/narration-texts.json from the content.<lang>.ts sources.
function exportTexts() {
  const texts = {}
  for (const id of listAnimalIds()) {
    for (const lang of LANGS) {
      const contentFile = join(animalsDir, id, `content.${lang}.ts`)
      if (!existsSync(contentFile)) continue
      const sentences = extractSentences(contentFile)
      if (!sentences) continue
      texts[id] ??= {}
      texts[id][lang] = sentences
    }
  }
  writeFileSync(textsFile, `${JSON.stringify(texts, null, 2)}\n`)
  const animalCount = Object.keys(texts).length
  console.log(`Wrote ${animalCount} animals to ${textsFile}`)
}

if (options.export) {
  exportTexts()
  process.exit(0)
}

if (!existsSync(textsFile)) {
  console.error(`Missing ${textsFile}. Run: node scripts/generate-narration-audio.mjs --export`)
  process.exit(1)
}

const texts = JSON.parse(readFileSync(textsFile, 'utf8'))
const animals = listAnimalIds().filter((id) => texts[id])
const langs = targetLangs()
const jobs = []

for (const id of animals) {
  for (const lang of langs) {
    const sentences = texts[id][lang]
    const audioFile = join(animalsDir, id, 'audio', `narration.${lang}.mp3`)
    if (!sentences) {
      console.warn(`skip ${id} (${lang}): no sentences in ${textsFile}`)
      continue
    }
    if (existsSync(audioFile)) {
      console.log(`skip ${id} (${lang}): audio already exists`)
      continue
    }
    jobs.push({ id, lang, text: sentences.join(lang === 'zh-CN' ? '' : ' '), audioFile })
  }
}

console.log(`\n${jobs.length} narration file(s) to generate.\n`)

if (options.dryRun) {
  for (const job of jobs) console.log(`[dry-run] ${job.id} (${job.lang}): ${job.text}`)
  process.exit(0)
}

let succeeded = 0
let failed = 0
for (const [index, job] of jobs.entries()) {
  const label = `${job.id} (${job.lang}) [${index + 1}/${jobs.length}]`
  try {
    const audioUrl = await synthesize(job.text, job.lang)
    await download(audioUrl, job.audioFile)
    succeeded++
    console.log(`ok    ${label} -> ${job.audioFile}`)
  } catch (error) {
    failed++
    console.error(`FAIL  ${label}: ${error.message}`)
  }
}

console.log(`\nDone: ${succeeded} succeeded, ${failed} failed.`)
process.exit(failed ? 1 : 0)
