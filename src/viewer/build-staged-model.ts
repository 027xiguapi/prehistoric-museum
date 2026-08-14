import {
  AnimationMixer,
  Box3,
  CanvasTexture,
  CircleGeometry,
  Color,
  DoubleSide,
  Group,
  LoopOnce,
  LoopRepeat,
  Mesh,
  MeshBasicMaterial,
  Vector3,
  type AnimationAction,
  type AnimationClip,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import { disposeObject3D } from './dispose'
import type { ModelCache } from './model-cache'
import type { ViewerModelDescriptor } from './viewer-model-descriptor'

export type ViewerFailureKind =
  | 'webgl-unavailable'
  | 'context-lost'
  | 'model-load'
  | 'animation'

export interface ViewerFailure {
  kind: ViewerFailureKind
  message: string
  cause?: unknown
}

export interface ModelLoadProgress {
  readonly fromCache: boolean
  readonly loadedBytes: number
  readonly source: ModelLoadSource
  readonly totalBytes: number | null
}

export type ModelLoadSource = 'memory-cache' | 'http-cache' | 'network'

interface ModelResponse {
  readonly response: Response
  readonly source: Exclude<ModelLoadSource, 'memory-cache'>
}

interface ModelResourceTiming {
  readonly decodedBodySize: number
  readonly encodedBodySize: number
  readonly startTime: number
  readonly transferSize: number
}

export function classifyModelResourceTiming(
  entries: readonly ModelResourceTiming[],
  requestStartedAt: number,
): Exclude<ModelLoadSource, 'memory-cache'> {
  let timing: ModelResourceTiming | undefined
  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const entry = entries[index]
    if (entry && entry.startTime >= requestStartedAt - 1) {
      timing = entry
      break
    }
  }
  return timing &&
    timing.transferSize === 0 &&
    (timing.encodedBodySize > 0 || timing.decodedBodySize > 0)
    ? 'http-cache'
    : 'network'
}

function readCompletedModelSource(
  modelUrl: string,
  requestStartedAt: number,
): Exclude<ModelLoadSource, 'memory-cache'> {
  try {
    const resolvedUrl = new URL(modelUrl, window.location.href).href
    const entries = performance
      .getEntriesByName(resolvedUrl, 'resource')
      .map((entry) => entry as PerformanceResourceTiming)
    return classifyModelResourceTiming(entries, requestStartedAt)
  } catch {
    return 'network'
  }
}

/**
 * Uses one ordinary fetch so the browser can satisfy it from its HTTP cache.
 * A cache-only probe creates a misleading failed request in DevTools on every
 * cold miss before the successful transfer begins.
 */
export async function requestModelResponse(
  modelUrl: string,
  signal?: AbortSignal,
  onSource?: (source: Exclude<ModelLoadSource, 'memory-cache'>) => void,
): Promise<ModelResponse> {
  onSource?.('network')
  const response = await fetch(modelUrl, {
    priority: 'high',
    ...(signal ? { signal } : {}),
  })
  if (!response.ok) {
    throw new Error(`模型请求失败（${response.status}）。`)
  }
  return { response, source: 'network' }
}

export async function readModelResponseBuffer(
  response: Response,
  signal?: AbortSignal,
  onProgress?: (progress: ModelLoadProgress) => void,
  source: Exclude<ModelLoadSource, 'memory-cache'> = 'network',
): Promise<ArrayBuffer> {
  const contentLength = Number(response.headers.get('content-length'))
  const totalBytes =
    Number.isSafeInteger(contentLength) && contentLength > 0
      ? contentLength
      : null

  if (!response.body || !onProgress) {
    const buffer = await response.arrayBuffer()
    signal?.throwIfAborted()
    onProgress?.({
      fromCache: source !== 'network',
      loadedBytes: buffer.byteLength,
      source,
      totalBytes: totalBytes ?? buffer.byteLength,
    })
    return buffer
  }

  const reader = response.body.getReader()
  const chunks: Uint8Array[] = []
  let loadedBytes = 0

  while (true) {
    signal?.throwIfAborted()
    const { done, value } = await reader.read()
    if (done) {
      break
    }
    chunks.push(value)
    loadedBytes += value.byteLength
    onProgress({
      fromCache: source !== 'network',
      loadedBytes,
      source,
      totalBytes,
    })
  }

  signal?.throwIfAborted()
  const combined = new Uint8Array(loadedBytes)
  let offset = 0
  for (const chunk of chunks) {
    combined.set(chunk, offset)
    offset += chunk.byteLength
  }
  if (totalBytes === null) {
    onProgress({
      fromCache: source !== 'network',
      loadedBytes,
      source,
      totalBytes: loadedBytes,
    })
  }
  return combined.buffer
}

export interface StagedViewerModel {
  readonly animalId: string
  readonly descriptor: ViewerModelDescriptor
  readonly loadSource: ModelLoadSource
  readonly group: Group
  readonly modelRoot: Group
  readonly bounds: Box3
  readonly mixer: AnimationMixer | null
  readonly action: AnimationAction | null
  disposed: boolean
}

export interface BuildStagedModelOptions {
  readonly modelCache?: ModelCache | undefined
  readonly signal?: AbortSignal | undefined
  readonly onProgress?: ((progress: ModelLoadProgress) => void) | undefined
  readonly onFailure?: ((failure: ViewerFailure) => void) | undefined
}

export function computeModelBounds(modelRoot: Group, precise = false): Box3 {
  modelRoot.updateMatrixWorld(true)
  return new Box3().setFromObject(modelRoot, precise)
}

export function computeContactShadowLayout(
  size: Vector3,
  scale: number,
  options: {
    depthOffset?: number
    depthScale?: number
    horizontalOffset?: number
    yOffset?: number
  } = {},
): { position: Vector3; scale: Vector3 } {
  return {
    position: new Vector3(
      options.horizontalOffset ?? 0,
      0.006 + (options.yOffset ?? 0),
      options.depthOffset ?? 0,
    ),
    scale: new Vector3(
      Math.max(size.x * scale, 0.1),
      options.depthScale === undefined
        ? Math.max(size.z * scale * 1.25, size.x * scale * 0.22, 0.1)
        : Math.max(size.z * options.depthScale, 0.1),
      1,
    ),
  }
}

function makeContactShadow(
  opacity: number,
  size: Vector3,
  scale: number,
  options: {
    depthOffset?: number
    depthScale?: number
    horizontalOffset?: number
    yOffset?: number
  } = {},
): Mesh {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const context = canvas.getContext('2d')

  if (context) {
    context.fillStyle = '#000'
    context.fillRect(0, 0, 128, 128)
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64)
    // Three.js reads the green channel of alphaMap, not its alpha channel.
    // A white-to-black mask therefore produces a genuinely dark, tight core
    // while keeping the edge feathered and directionless.
    gradient.addColorStop(0, '#fff')
    gradient.addColorStop(0.18, '#f2f2f2')
    gradient.addColorStop(0.46, '#9a9a9a')
    gradient.addColorStop(0.74, '#333')
    gradient.addColorStop(1, '#000')
    context.fillStyle = gradient
    context.fillRect(0, 0, 128, 128)
  }

  const alphaMap = new CanvasTexture(canvas)
  const material = new MeshBasicMaterial({
    alphaMap,
    color: new Color('#182319'),
    depthWrite: false,
    opacity,
    side: DoubleSide,
    transparent: true,
  })
  const geometry = new CircleGeometry(0.5, 48)
  const shadow = new Mesh(geometry, material)
  const layout = computeContactShadowLayout(size, scale, options)
  shadow.name = 'contact-shadow'
  shadow.rotation.x = -Math.PI / 2
  shadow.position.copy(layout.position)
  shadow.scale.copy(layout.scale)
  shadow.renderOrder = -1
  return shadow
}

function findClip(clips: AnimationClip[], name: string): AnimationClip | undefined {
  return clips.find((clip) => clip.name === name)
}

/**
 * Builds a presentation-ready model group from a descriptor: fetches the GLB
 * (HTTP-cache aware, with progress), parses it with the meshopt decoder,
 * recentres it, plants its feet on y = 0, adds a contact shadow, and prepares
 * the idle animation. This is controller-free so both the museum viewer
 * (via `ViewerController.stageModel`) and the AR session can share it.
 */
export async function buildStagedModel(
  descriptor: ViewerModelDescriptor,
  options: BuildStagedModelOptions = {},
): Promise<StagedViewerModel> {
  const { modelCache, signal, onProgress, onFailure } = options
  try {
    let loadSource: ModelLoadSource = 'memory-cache'
    let buffer = modelCache?.get(descriptor.modelUrl) ?? null
    if (buffer === null) {
      const requestStartedAt = performance.now()
      const { response, source } = await requestModelResponse(
        descriptor.modelUrl,
        signal,
        (pendingSource) => {
          onProgress?.({
            fromCache: pendingSource !== 'network',
            loadedBytes: 0,
            source: pendingSource,
            totalBytes: null,
          })
        },
      )
      buffer = await readModelResponseBuffer(
        response,
        signal,
        onProgress,
        source,
      )
      signal?.throwIfAborted()
      loadSource = readCompletedModelSource(
        descriptor.modelUrl,
        requestStartedAt,
      )
      if (loadSource === 'http-cache') {
        onProgress?.({
          fromCache: true,
          loadedBytes: buffer.byteLength,
          source: loadSource,
          totalBytes: buffer.byteLength,
        })
      }
      modelCache?.set(descriptor.modelUrl, buffer)
    } else {
      onProgress?.({
        fromCache: true,
        loadedBytes: buffer.byteLength,
        source: 'memory-cache',
        totalBytes: buffer.byteLength,
      })
    }
    signal?.throwIfAborted()
    const resourceBase = new URL('.', new URL(descriptor.modelUrl, window.location.href)).href
    // Each request gets its own loader. Rapid selections can leave an older
    // parse finishing after its AbortSignal fires; isolating loader state
    // keeps that stale work from affecting the latest requested model.
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    const gltf = await loader.parseAsync(buffer, resourceBase)
    if (signal?.aborted) {
      disposeObject3D(gltf.scene)
      signal.throwIfAborted()
    }

    const modelRoot = gltf.scene
    modelRoot.name = `${descriptor.id}-model`
    modelRoot.rotation.y = (descriptor.presentation.initialYawDegrees * Math.PI) / 180
    modelRoot.updateMatrixWorld(true)

    const preciseBounds = descriptor.presentation.preciseBounds ?? false
    let mixer: AnimationMixer | null = null
    let action: AnimationAction | null = null
    const prepareAnimation = (): void => {
      if (!descriptor.animation) {
        return
      }
      const clip = findClip(gltf.animations, descriptor.animation.clip)
      if (clip) {
        mixer = new AnimationMixer(modelRoot)
        action = mixer.clipAction(clip)
        action.setLoop(
          descriptor.animation.loop === 'once' ? LoopOnce : LoopRepeat,
          Infinity,
        )
        action.clampWhenFinished = descriptor.animation.loop === 'once'
        action.timeScale = descriptor.animation.speed
        action.play()
        mixer.setTime(0)
        modelRoot.updateMatrixWorld(true)
      } else {
        onFailure?.({
          kind: 'animation',
          message: `模型中没有找到 ${descriptor.animation.clip} 动作，已显示静态模型。`,
        })
      }
    }

    if (preciseBounds) {
      prepareAnimation()
    }

    const initialBounds = computeModelBounds(modelRoot, preciseBounds)
    const center = initialBounds.getCenter(new Vector3())
    modelRoot.position.x -= center.x
    modelRoot.position.y -= initialBounds.min.y
    modelRoot.position.z -= center.z
    modelRoot.updateMatrixWorld(true)

    const bounds = computeModelBounds(modelRoot, preciseBounds)
    const size = bounds.getSize(new Vector3())
    const group = new Group()
    group.name = `${descriptor.id}-presentation`
    group.add(modelRoot)
    if (descriptor.presentation.shadow.opacity > 0) {
      group.add(
        makeContactShadow(
          descriptor.presentation.shadow.opacity,
          size,
          descriptor.presentation.shadow.scale,
          descriptor.presentation.shadow,
        ),
      )
    }
    if (!preciseBounds) {
      prepareAnimation()
    }

    return {
      action,
      animalId: descriptor.id,
      bounds,
      descriptor,
      disposed: false,
      group,
      loadSource,
      mixer,
      modelRoot,
    }
  } catch (cause) {
    if (signal?.aborted) {
      signal.throwIfAborted()
    }
    if (cause instanceof DOMException && cause.name === 'AbortError') {
      throw cause
    }
    onFailure?.({
      kind: 'model-load',
      message: '模型没有成功来到展台。',
      cause,
    })
    throw cause
  }
}
