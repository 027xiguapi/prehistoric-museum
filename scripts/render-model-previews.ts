/// <reference lib="dom" />

import { spawn, type ChildProcess } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { createServer as createNetServer } from 'node:net'
import { resolve } from 'node:path'

import { chromium } from 'playwright'
import sharp from 'sharp'

import {
  MODEL_PREVIEW_CONTRACT_VERSION,
  MODEL_PREVIEW_MANIFEST_FILE,
  modelPreviewProfiles,
  type ModelPreviewManifest,
  type ModelPreviewProfileKey,
} from '../src/viewer/model-preview-profiles'
import {
  fileFingerprint,
  modelPreviewOutputDirectory,
  modelPreviewSourceModel,
  parseModelPreviewTarget,
  repositoryRoot,
  requestedAnimalIds,
  resolveRequestedAnimalIds,
  sha256,
} from './model-preview-assets'
import {
  installLocalReviewAssetRoute,
  removeLocalReviewAssetRoute,
} from './review-dev-route'

const arguments_ = process.argv.slice(2)
const target = parseModelPreviewTarget(arguments_)
const animalIds = await resolveRequestedAnimalIds(
  target,
  requestedAnimalIds(arguments_),
)

let serverProcess: ChildProcess | undefined
const browser = await chromium.launch({ headless: true })

async function reserveFreePort(): Promise<number> {
  return new Promise((resolvePromise, rejectPromise) => {
    const probe = createNetServer()
    probe.once('error', rejectPromise)
    probe.listen(0, '127.0.0.1', () => {
      const address = probe.address()
      probe.close(() => {
        if (typeof address === 'object' && address !== null) {
          resolvePromise(address.port)
        } else {
          rejectPromise(new Error('Could not reserve a free preview port.'))
        }
      })
    })
  })
}

async function waitForServerReady(origin: string): Promise<void> {
  const deadline = Date.now() + 120_000
  for (;;) {
    try {
      const response = await fetch(origin, { redirect: 'follow' })
      await response.body?.cancel()
      if (response.status > 0) {
        return
      }
    } catch {
      // Server is not accepting connections yet.
    }
    if (Date.now() > deadline) {
      throw new Error('Museum server did not become ready in time.')
    }
    await new Promise((resolveSleep) => setTimeout(resolveSleep, 500))
  }
}

try {
  const port = await reserveFreePort()
  // Review-target renders load candidate media through the review asset
  // route, which only exists while a review dev server runs.
  if (target === 'review') {
    await installLocalReviewAssetRoute()
  }
  serverProcess = spawn(
    process.execPath,
    [
      resolve(repositoryRoot, 'node_modules/next/dist/bin/next'),
      'dev',
      '--hostname',
      '127.0.0.1',
      '--port',
      String(port),
    ],
    {
      cwd: repositoryRoot,
      env: {
        ...process.env,
        NEXT_PUBLIC_MUSEUM_MODE: target === 'review' ? 'review' : 'model-still',
        MUSEUM_BASE_PATH: '',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  )
  serverProcess.stdout?.pipe(process.stdout)
  serverProcess.stderr?.pipe(process.stderr)
  const origin = `http://127.0.0.1:${port}`
  await waitForServerReady(origin)

  const context = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: {
      width: modelPreviewProfiles[0].referenceWidth,
      height: modelPreviewProfiles[0].referenceHeight,
    },
  })
  const page = await context.newPage()

  for (const animalId of animalIds) {
    const firstProfile = modelPreviewProfiles[0]
    await page.setViewportSize({
      width: firstProfile.referenceWidth,
      height: firstProfile.referenceHeight,
    })
    await page.goto(`${origin}?animal=${encodeURIComponent(animalId)}`, {
      waitUntil: 'domcontentloaded',
    })
    await page.waitForFunction(
      (expectedId) =>
        document
          .querySelector('#museum-experience')
          ?.getAttribute('data-ready-animal-id') === expectedId,
      animalId,
      { timeout: 60_000 },
    )
    await page.addStyleTag({
      content: `
        html,
        body,
        #root,
        .museum-experience,
        .stage-panel,
        .viewer-stage,
        .model-viewport,
        .viewer-host {
          background: transparent !important;
        }
        .museum-experience > :not(.stage-panel),
        .stage-panel > :not(.viewer-stage) {
          visibility: hidden !important;
        }
        .model-composition-frame > * {
          visibility: hidden !important;
        }
        .viewer-host::after {
          opacity: 0 !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
      `,
    })

    const outputDirectory = modelPreviewOutputDirectory(target, animalId)
    await mkdir(outputDirectory, { recursive: true })
    const profileEntries: Array<
      readonly [ModelPreviewProfileKey, ModelPreviewManifest['profiles'][ModelPreviewProfileKey]]
    > = []
    let presentationSignature: string | undefined

    for (const profile of modelPreviewProfiles) {
      await page.setViewportSize({
        width: profile.referenceWidth,
        height: profile.referenceHeight,
      })
      const viewport = page.locator('.model-viewport')
      const compositionFrame = page.locator('.model-composition-frame')
      await viewport.waitFor({ state: 'visible' })
      await compositionFrame.waitFor({ state: 'visible' })
      await page.waitForFunction(
        (expectedProfile) =>
          document
            .querySelector('.model-viewport')
            ?.getAttribute('data-preview-profile') === expectedProfile,
        profile.key,
      )
      const frozen = await page
        .locator('.viewer-canvas')
        .evaluate(
          (canvas: HTMLCanvasElement & {
            __museumReviewSetAnimationTime?: (time: number | null) => boolean
          }) => canvas.__museumReviewSetAnimationTime?.(0) ?? false,
        )
      if (!frozen) {
        throw new Error(
          `${animalId}: deterministic first-frame hook is unavailable.`,
        )
      }
      await page.waitForFunction(() => {
        const canvas = document.querySelector<HTMLCanvasElement>('.viewer-canvas')
        const compositionFrame = document.querySelector<HTMLElement>(
          '.model-composition-frame',
        )
        return Boolean(
          canvas &&
            compositionFrame &&
            Number(canvas.dataset.compositionWidth) ===
              Math.round(compositionFrame.clientWidth) &&
            Number(canvas.dataset.compositionHeight) ===
              Math.round(compositionFrame.clientHeight),
        )
      })
      await page.evaluate(
        () =>
          new Promise<void>((resolveFrame) => {
            requestAnimationFrame(() => requestAnimationFrame(() => resolveFrame()))
          }),
      )

      const signature = await page
        .locator('.viewer-canvas')
        .getAttribute('data-preview-presentation-signature')
      if (!signature) {
        throw new Error(`${animalId}: renderer did not expose a signature.`)
      }
      if (presentationSignature && presentationSignature !== signature) {
        throw new Error(`${animalId}: presentation changed between profiles.`)
      }
      presentationSignature = signature

      const rawScreenshot = await compositionFrame.screenshot({
        animations: 'disabled',
        omitBackground: true,
        type: 'png',
      })
      const encoded = await sharp(rawScreenshot)
        .resize(profile.width, profile.height, { fit: 'fill' })
        .webp({ effort: 6, lossless: true })
        .toBuffer()
      const outputPath = resolve(outputDirectory, profile.fileName)
      await writeFile(outputPath, encoded)
      profileEntries.push([
        profile.key,
        {
          bytes: encoded.byteLength,
          fileName: profile.fileName,
          height: profile.height,
          sha256: sha256(encoded),
          width: profile.width,
        },
      ])
    }

    if (!presentationSignature) {
      throw new Error(`${animalId}: no previews were generated.`)
    }
    const manifest: ModelPreviewManifest = {
      animalId,
      contractVersion: MODEL_PREVIEW_CONTRACT_VERSION,
      generatedAt: new Date().toISOString(),
      presentationSignature,
      profiles: Object.fromEntries(profileEntries) as ModelPreviewManifest['profiles'],
      sourceModel: await fileFingerprint(
        modelPreviewSourceModel(target, animalId),
      ),
      target,
    }
    await writeFile(
      resolve(outputDirectory, MODEL_PREVIEW_MANIFEST_FILE),
      `${JSON.stringify(manifest, null, 2)}\n`,
      'utf8',
    )
    console.log(
      `Generated ${modelPreviewProfiles.length} ${target} previews: ${animalId}`,
    )
  }

  await context.close()
} finally {
  await browser.close()
  serverProcess?.kill()
  if (target === 'review') {
    await removeLocalReviewAssetRoute()
  }
}
