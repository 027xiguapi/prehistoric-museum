import { createReadStream, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { Readable } from 'node:stream'

import {
  MODEL_PREVIEW_MANIFEST_FILE,
  modelPreviewProfiles,
} from '../src/viewer/model-preview-profiles'
import type { LocalReviewAnimalId } from '../src/review/assets'

export const localReviewAssetPrefix = '/__museum-review-assets'

function repositoryFile(relativePath: string): string {
  return resolve(dirname(fileURLToPath(import.meta.url)), '..', relativePath)
}

function productionAnimalAsset(
  animalId: LocalReviewAnimalId,
  relativePath: string,
): string {
  return repositoryFile(`src/content/animals/${animalId}/${relativePath}`)
}

const ichthyosaurBackgrounds = {
  landscape: repositoryFile(
    'prototypes/background-art-directions/assets/production-ichthyosaur-landscape.png',
  ),
  portrait: repositoryFile(
    'prototypes/background-art-directions/assets/production-ichthyosaur-portrait.png',
  ),
}

interface ReviewAnimalFiles {
  readonly model: string
  readonly backgroundLandscape: string
  readonly backgroundPortrait: string
  readonly narration?: string
  readonly poster: string
  readonly thumbnail: string
}

const reviewAnimalFiles: Readonly<
  Record<LocalReviewAnimalId, ReviewAnimalFiles>
> = {
  stegosaurus: {
    model: repositoryFile(
      'src/content/animals/stegosaurus/model/model.glb',
    ),
    backgroundLandscape: repositoryFile(
      'src/content/animals/stegosaurus/backgrounds/landscape.webp',
    ),
    backgroundPortrait: repositoryFile(
      'src/content/animals/stegosaurus/backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/stegosaurus/audio-candidates/stegosaurus-serena-preview.mp3',
    ),
    poster: repositoryFile(
      'src/content/animals/stegosaurus/images/poster.webp',
    ),
    thumbnail: repositoryFile(
      'src/content/animals/stegosaurus/images/thumbnail.webp',
    ),
  },
  pachycephalosaurus: {
    model: repositoryFile(
      'assets/candidates/second-pass-sketchfab/normalized-glb/pachycephalosaurus.glb',
    ),
    backgroundLandscape: productionAnimalAsset(
      'pachycephalosaurus',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'pachycephalosaurus',
      'backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/collection-review/audio/pachycephalosaurus.mp3',
    ),
    poster: productionAnimalAsset(
      'pachycephalosaurus',
      'images/poster.webp',
    ),
    thumbnail: productionAnimalAsset(
      'pachycephalosaurus',
      'images/thumbnail.webp',
    ),
  },
  ichthyosaur: {
    model: repositoryFile(
      'assets/candidates/ichthyosaur-sketchfab-julian-2026-08-04/output/model-review.glb',
    ),
    backgroundLandscape: ichthyosaurBackgrounds.landscape,
    backgroundPortrait: ichthyosaurBackgrounds.portrait,
    narration: repositoryFile(
      '.handoff/collection-review/audio/ichthyosaur.mp3',
    ),
    poster: repositoryFile(
      'assets/candidates/ichthyosaur-sketchfab-julian-2026-08-04/output/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/ichthyosaur-sketchfab-julian-2026-08-04/output/thumbnail.webp',
    ),
  },
  pteranodon: {
    model: productionAnimalAsset('pteranodon', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'pteranodon',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'pteranodon',
      'backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/collection-review/audio/pteranodon.mp3',
    ),
    poster: productionAnimalAsset(
      'pteranodon',
      'images/poster.webp',
    ),
    thumbnail: productionAnimalAsset(
      'pteranodon',
      'images/thumbnail.webp',
    ),
  },
  'tyrannosaurus-rex': {
    model: productionAnimalAsset('tyrannosaurus-rex', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'tyrannosaurus-rex',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'tyrannosaurus-rex',
      'backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/collection-review/audio/tyrannosaurus-rex.mp3',
    ),
    poster: productionAnimalAsset(
      'tyrannosaurus-rex',
      'images/poster.webp',
    ),
    thumbnail: productionAnimalAsset(
      'tyrannosaurus-rex',
      'images/thumbnail.webp',
    ),
  },
  triceratops: {
    model: productionAnimalAsset('triceratops', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'triceratops',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'triceratops',
      'backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/collection-review/audio/triceratops.mp3',
    ),
    poster: productionAnimalAsset(
      'triceratops',
      'images/poster.webp',
    ),
    thumbnail: productionAnimalAsset(
      'triceratops',
      'images/thumbnail.webp',
    ),
  },
  apatosaurus: {
    model: repositoryFile(
      'assets/candidates/apatosaurus-sketchfab-fecabec8-2026-08/revision-v1/output/apatosaurus-review.glb',
    ),
    backgroundLandscape: productionAnimalAsset(
      'apatosaurus',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'apatosaurus',
      'backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/collection-review/audio/apatosaurus.mp3',
    ),
    poster: productionAnimalAsset(
      'apatosaurus',
      'images/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/apatosaurus-sketchfab-fecabec8-2026-08/revision-v1/output/thumbnail.webp',
    ),
  },
  gigantoraptor: {
    model: productionAnimalAsset('gigantoraptor', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'gigantoraptor',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'gigantoraptor',
      'backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/collection-review/audio/gigantoraptor.mp3',
    ),
    poster: productionAnimalAsset(
      'gigantoraptor',
      'images/poster.webp',
    ),
    thumbnail: productionAnimalAsset(
      'gigantoraptor',
      'images/thumbnail.webp',
    ),
  },
  mammoth: {
    model: productionAnimalAsset('mammoth', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'mammoth',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'mammoth',
      'backgrounds/portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/collection-review/audio/mammoth.mp3',
    ),
    poster: productionAnimalAsset(
      'mammoth',
      'images/poster.webp',
    ),
    thumbnail: productionAnimalAsset(
      'mammoth',
      'images/thumbnail.webp',
    ),
  },
  maiasaura: {
    model: productionAnimalAsset('maiasaura', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'maiasaura',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'maiasaura',
      'backgrounds/portrait.webp',
    ),
    narration: productionAnimalAsset(
      'maiasaura',
      'audio/narration.zh-CN.mp3',
    ),
    poster: productionAnimalAsset('maiasaura', 'images/poster.webp'),
    thumbnail: productionAnimalAsset('maiasaura', 'images/thumbnail.webp'),
  },
  plesiosaurus: {
    model: productionAnimalAsset('plesiosaurus', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'plesiosaurus',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'plesiosaurus',
      'backgrounds/portrait.webp',
    ),
    narration: productionAnimalAsset(
      'plesiosaurus',
      'audio/narration.zh-CN.mp3',
    ),
    poster: productionAnimalAsset('plesiosaurus', 'images/poster.webp'),
    thumbnail: productionAnimalAsset(
      'plesiosaurus',
      'images/thumbnail.webp',
    ),
  },
  megalodon: {
    model: productionAnimalAsset('megalodon', 'model/model.glb'),
    backgroundLandscape: productionAnimalAsset(
      'megalodon',
      'backgrounds/landscape.webp',
    ),
    backgroundPortrait: productionAnimalAsset(
      'megalodon',
      'backgrounds/portrait.webp',
    ),
    narration: productionAnimalAsset(
      'megalodon',
      'audio/narration.zh-CN.mp3',
    ),
    poster: productionAnimalAsset('megalodon', 'images/poster.webp'),
    thumbnail: productionAnimalAsset('megalodon', 'images/thumbnail.webp'),
  },
  sauropelta: {
    model: productionAnimalAsset('sauropelta', 'model/model.glb'),
    backgroundLandscape: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/sauropelta/output/background-landscape.webp',
    ),
    backgroundPortrait: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/sauropelta/output/background-portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/animal-onboarding-runs/2026-07-31-batch/sauropelta/narration.mp3',
    ),
    poster: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/sauropelta/output/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/sauropelta/output/thumbnail.webp',
    ),
  },
  dilophosaurus: {
    model: productionAnimalAsset('dilophosaurus', 'model/model.glb'),
    backgroundLandscape: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/dilophosaurus/output/background-landscape.webp',
    ),
    backgroundPortrait: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/dilophosaurus/output/background-portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/animal-onboarding-runs/2026-07-31-batch/dilophosaurus/narration.mp3',
    ),
    poster: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/dilophosaurus/output/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/dilophosaurus/output/thumbnail.webp',
    ),
  },
  mosasaurus: {
    model: productionAnimalAsset('mosasaurus', 'model/model.glb'),
    backgroundLandscape: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/mosasaurus/output/background-landscape.webp',
    ),
    backgroundPortrait: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/mosasaurus/output/background-portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/animal-onboarding-runs/2026-07-31-batch/mosasaurus/narration.mp3',
    ),
    poster: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/mosasaurus/output/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/mosasaurus/output/thumbnail.webp',
    ),
  },
  rhamphorhynchus: {
    model: productionAnimalAsset('rhamphorhynchus', 'model/model.glb'),
    backgroundLandscape: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/rhamphorhynchus/output/background-landscape.webp',
    ),
    backgroundPortrait: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/rhamphorhynchus/output/background-portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/animal-onboarding-runs/2026-07-31-rhamphorhynchus/narration.mp3',
    ),
    poster: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/rhamphorhynchus/output/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/animal-onboarding-2026-07-31/rhamphorhynchus/output/thumbnail.webp',
    ),
  },
  tupandactylus: {
    model: productionAnimalAsset('tupandactylus', 'model/model.glb'),
    backgroundLandscape: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/tupandactylus/output/background-landscape.webp',
    ),
    backgroundPortrait: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/tupandactylus/output/background-portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/animal-onboarding-runs/2026-08-01-tupandactylus/narration.mp3',
    ),
    poster: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/tupandactylus/output/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/tupandactylus/output/thumbnail.webp',
    ),
  },
  meganeura: {
    model: productionAnimalAsset('meganeura', 'model/model.glb'),
    backgroundLandscape: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/meganeura/output/background-landscape.webp',
    ),
    backgroundPortrait: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/meganeura/output/background-portrait.webp',
    ),
    narration: repositoryFile(
      '.handoff/animal-onboarding-runs/2026-08-01-meganeura/narration.mp3',
    ),
    poster: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/meganeura/output/poster.webp',
    ),
    thumbnail: repositoryFile(
      'assets/candidates/animal-onboarding-2026-08-01/meganeura/output/thumbnail.webp',
    ),
  },
}

const routeFilePairs = Object.entries(reviewAnimalFiles).flatMap(
  ([animalId, files]) => {
    const modelPreviewDirectory = repositoryFile(
      `assets/review-generated/model-previews/${animalId}`,
    )
    const posterPortrait = productionAnimalAsset(
      animalId as LocalReviewAnimalId,
      'images/poster-portrait.webp',
    )
    const modelPreviewFiles = [
      ...modelPreviewProfiles.map(
        ({ fileName }) =>
          [fileName, resolve(modelPreviewDirectory, fileName)] as const,
      ),
      [
        MODEL_PREVIEW_MANIFEST_FILE,
        resolve(modelPreviewDirectory, MODEL_PREVIEW_MANIFEST_FILE),
      ] as const,
    ]
    const filePairs = [
      ['model.glb', files.model],
      ['background-landscape', files.backgroundLandscape],
      ['background-portrait', files.backgroundPortrait],
      ['poster.webp', files.poster],
      ['poster-portrait.webp', posterPortrait],
      ['thumbnail.webp', files.thumbnail],
      ...modelPreviewFiles,
      ...(files.narration === undefined
        ? []
        : ([['narration.mp3', files.narration]] as const)),
    ] satisfies readonly (readonly [string, string])[]

    return filePairs.map(
      ([fileName, absolutePath]) =>
        [
          `${localReviewAssetPrefix}/${animalId}/${fileName}`,
          absolutePath,
        ] as const,
    )
  },
)

export const localReviewAssetFiles: ReadonlyMap<string, string> = new Map(
  routeFilePairs,
)

function reviewContentType(fileName: string): string {
  if (fileName.endsWith('.glb')) {
    return 'model/gltf-binary'
  }
  if (fileName.endsWith('.mp3')) {
    return 'audio/mpeg'
  }
  if (fileName.endsWith('.png')) {
    return 'image/png'
  }
  if (fileName.endsWith('.webp')) {
    return 'image/webp'
  }
  if (fileName.endsWith('.json')) {
    return 'application/json; charset=utf-8'
  }
  return 'application/octet-stream'
}

// Review URLs are stable while their local files can change. `no-cache` keeps
// the response body reusable after an ETag revalidation; `no-store` would make
// every revisit transfer the full model again over Tailscale.
const reviewAssetCacheControl = 'private, no-cache'

function reviewAssetEtag(size: number, mtimeMs: number): string {
  return `W/"${size.toString(16)}-${Math.trunc(mtimeMs).toString(16)}"`
}

function requestHasFreshReviewAsset(
  request: Request,
  etag: string,
  modifiedAt: Date,
): boolean {
  const ifNoneMatch = request.headers.get('if-none-match')
  if (ifNoneMatch !== null) {
    return ifNoneMatch
      .split(',')
      .map((candidate) => candidate.trim())
      .some((value) => value === '*' || value === etag)
  }

  const ifModifiedSince = request.headers.get('if-modified-since')
  if (ifModifiedSince === null) {
    return false
  }
  const cachedTime = Date.parse(ifModifiedSince)
  return (
    Number.isFinite(cachedTime) &&
    Math.floor(modifiedAt.getTime() / 1_000) <= Math.floor(cachedTime / 1_000)
  )
}

function reviewAssetBody(
  absolutePath: string,
  range?: { readonly start: number; readonly end: number },
): BodyInit {
  // `Readable.toWeb` returns the Node stream/web flavour; the runtime value
  // is the global web stream, so re-type it for the DOM lib `Response`.
  return Readable.toWeb(
    createReadStream(absolutePath, range),
  ) as unknown as ReadableStream<Uint8Array>
}

// Review URL segments arrive already decoded from the catch-all route param,
// so the lookup key mirrors the historic `pathname` contract of the former
// custom Node server.
export function handleLocalReviewAssetRequest(
  assetPathSegments: readonly string[],
  request: Request,
): Response {
  const headers = new Headers()
  headers.set('X-Content-Type-Options', 'nosniff')
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    headers.set('Cache-Control', 'no-store')
    headers.set('Allow', 'GET, HEAD')
    return new Response('Local review assets are read-only.', {
      status: 405,
      headers,
    })
  }
  const pathname = `${localReviewAssetPrefix}/${assetPathSegments.join('/')}`
  const absolutePath = localReviewAssetFiles.get(pathname)
  if (!absolutePath) {
    headers.set('Cache-Control', 'no-store')
    return new Response('Unknown local review asset.', {
      status: 404,
      headers,
    })
  }

  let size: number
  let modifiedAt: Date
  let modifiedAtMs: number
  try {
    const fileStat = statSync(absolutePath)
    if (!fileStat.isFile()) {
      throw new Error('Not a regular file.')
    }
    size = fileStat.size
    modifiedAt = fileStat.mtime
    modifiedAtMs = fileStat.mtimeMs
  } catch {
    headers.set('Cache-Control', 'no-store')
    return new Response(
      'Local review asset is missing. Run npm run validate:review.',
      { status: 404, headers },
    )
  }

  const etag = reviewAssetEtag(size, modifiedAtMs)
  headers.set('Cache-Control', reviewAssetCacheControl)
  headers.set('ETag', etag)
  headers.set('Last-Modified', modifiedAt.toUTCString())
  headers.set('Accept-Ranges', 'bytes')
  headers.set('Content-Type', reviewContentType(absolutePath))

  if (requestHasFreshReviewAsset(request, etag, modifiedAt)) {
    return new Response(null, { status: 304, headers })
  }

  const range = request.headers.get('range')?.match(/^bytes=(\d+)-(\d*)$/)
  if (range) {
    const start = Number(range[1])
    const requestedEnd = range[2] ? Number(range[2]) : size - 1
    const end = Math.min(requestedEnd, size - 1)
    if (
      !Number.isSafeInteger(start) ||
      !Number.isSafeInteger(end) ||
      start < 0 ||
      start > end ||
      start >= size
    ) {
      headers.set('Content-Range', `bytes */${size}`)
      return new Response(null, { status: 416, headers })
    }
    headers.set('Content-Length', String(end - start + 1))
    headers.set('Content-Range', `bytes ${start}-${end}/${size}`)
    if (request.method === 'HEAD') {
      return new Response(null, { status: 206, headers })
    }
    return new Response(reviewAssetBody(absolutePath, { start, end }), {
      status: 206,
      headers,
    })
  }

  headers.set('Content-Length', String(size))
  if (request.method === 'HEAD') {
    return new Response(null, { status: 200, headers })
  }
  return new Response(reviewAssetBody(absolutePath), {
    status: 200,
    headers,
  })
}
