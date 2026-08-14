import {
  AmbientLight,
  DirectionalLight,
  Group,
  HemisphereLight,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three'
import {
  buildStagedModel,
  type ModelLoadProgress,
  type StagedViewerModel,
  type ViewerFailure,
} from '../viewer/build-staged-model'
import { disposeObject3D } from '../viewer/dispose'
import type { ModelCache } from '../viewer/model-cache'
import type { ViewerModelDescriptor } from '../viewer/viewer-model-descriptor'
import type { ArtoolkitPlugin } from '@ar-js-org/arjs-plugin-artoolkit'

export type ArState =
  | 'unsupported'
  | 'requesting-camera'
  | 'camera-denied'
  | 'scanning'
  | 'tracking'
  | 'lost'
  | 'error'

export interface ArMarkerEvent {
  readonly id: number
  readonly poseMatrix: Float32Array
  readonly confidence?: number
  readonly corners?: readonly unknown[]
}

export interface ArSessionOptions {
  readonly container: HTMLElement
  readonly modelCache?: ModelCache | undefined
  readonly markerPatternUrl?: string | undefined
  readonly cameraParametersUrl?: string | undefined
  readonly onStateChange: ((state: ArState) => void) | undefined
  readonly onDescriptorFailure?:
    | ((failure: ViewerFailure) => void)
    | undefined
  readonly onProgress?: ((progress: ModelLoadProgress) => void) | undefined
}

const DEFAULT_MARKER_PATTERN = './ar/hiro.patt'
const DEFAULT_CAMERA_PARAMETERS = './ar/camera_para.dat'
/**
 * Target rendered height of the model on the marker, in ARToolKit world units.
 * Real Hiro markers are ~80 mm; this yields a small "tabletop toy" scale.
 */
const TABLETOP_TARGET_HEIGHT = 0.12
/**
 * Approximate camera field of view in degrees. ARToolKit computes an exact
 * projection from `camera_para.dat`; this plugin does not expose it, so we
 * approximate and tune on-device (R5 — see verification notes).
 */
const APPROXIMATE_FIELD_OF_VIEW_DEGREES = 52
/** Camera near/far planes in ARToolKit world units. */
const CAMERA_NEAR = 0.01
const CAMERA_FAR = 100
/**
 * How often we capture a frame and hand it to the detection worker. Detection
 * is expensive; rendering still runs every animation frame for smooth motion.
 */
const FRAME_CAPTURE_INTERVAL_MS = 120

type EventHandler = (payload: unknown) => void

interface EventBus {
  readonly on: (event: string, handler: EventHandler) => void
  readonly emit: (event: string, payload: unknown) => void
}

function createEventBus(): EventBus {
  const handlers = new Map<string, Set<EventHandler>>()
  return {
    on(event, handler) {
      let listeners = handlers.get(event)
      if (!listeners) {
        listeners = new Set()
        handlers.set(event, listeners)
      }
      listeners.add(handler)
    },
    emit(event, payload) {
      const listeners = handlers.get(event)
      if (!listeners) {
        return
      }
      for (const handler of listeners) {
        try {
          handler(payload)
        } catch (error) {
          console.error('AR event handler failed.', error)
        }
      }
    },
  }
}

/**
 * Gate AR behind every capability it needs, *before* requesting the camera,
 * so unsupported devices never see a permission prompt.
 */
export function isArSupported(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  if (!window.isSecureContext) {
    return false
  }
  if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
    return false
  }
  if (typeof window.WebGLRenderingContext === 'undefined') {
    return false
  }
  if (typeof window.ImageBitmap === 'undefined') {
    return false
  }
  if (typeof window.WebAssembly === 'undefined') {
    return false
  }
  return true
}

/**
 * Marker-based AR session on top of `@ar-js-org/arjs-plugin-artoolkit`.
 *
 * The plugin only does marker detection (in a Web Worker, via WASM); it emits
 * `ar:markerFound` / `ar:markerUpdated` / `ar:markerLost` events carrying a
 * column-major 16-element `poseMatrix`. We own a *dedicated* lightweight
 * Three.js renderer/scene/camera (separate from `ViewerController`), reuse
 * `buildStagedModel` to build the same animated, shadowed model the museum
 * viewer uses, and anchor it to the detected marker pose.
 *
 * Verification still required on a real device / after a production build:
 *  - R1: pose-matrix → Three.js alignment (coordinate convention).
 *  - R5: camera projection (plugin does not expose ARToolKit's calibrated
 *    projection; we approximate the FOV and tune on-device).
 *  - R6: the plugin's Web Worker asset is correctly emitted by the bundler.
 */
export class ArSession {
  private readonly container: HTMLElement
  private readonly markerPatternUrl: string
  private readonly cameraParametersUrl: string
  private readonly modelCache?: ModelCache | undefined
  private readonly onStateChange?: ((state: ArState) => void) | undefined
  private readonly onDescriptorFailure?:
    | ((failure: ViewerFailure) => void)
    | undefined
  private readonly onProgress?: ((progress: ModelLoadProgress) => void) | undefined

  private video: HTMLVideoElement | null = null
  private stream: MediaStream | null = null
  private renderer: WebGLRenderer | null = null
  private readonly scene = new Scene()
  private readonly camera = new PerspectiveCamera(
    APPROXIMATE_FIELD_OF_VIEW_DEGREES,
    1,
    CAMERA_NEAR,
    CAMERA_FAR,
  )
  /** Receives the marker pose each frame (matrixAutoUpdate = false). */
  private readonly markerAnchor = new Group()
  /** Applies the tabletop toy scale independently of the marker pose. */
  private readonly modelScaleGroup = new Group()
  private staged: StagedViewerModel | null = null

  private plugin: ArtoolkitPlugin | null = null
  private readonly eventBus = createEventBus()

  private state: ArState = 'requesting-camera'
  private destroyed = false
  private started = false
  private rafId: number | null = null
  private lastFrameTime = performance.now()
  private lastCaptureTime = 0
  private frameId = 0
  private descriptorToken = 0
  private resizeObserver: ResizeObserver | null = null

  constructor(options: ArSessionOptions) {
    this.container = options.container
    this.markerPatternUrl = options.markerPatternUrl ?? DEFAULT_MARKER_PATTERN
    this.cameraParametersUrl =
      options.cameraParametersUrl ?? DEFAULT_CAMERA_PARAMETERS
    this.modelCache = options.modelCache
    this.onStateChange = options.onStateChange
    this.onDescriptorFailure = options.onDescriptorFailure
    this.onProgress = options.onProgress

    this.markerAnchor.matrixAutoUpdate = false
    this.markerAnchor.visible = false
    this.modelScaleGroup.add(new HemisphereLight('#ffffff', '#444444', 1.4))
    const keyLight = new DirectionalLight('#ffffff', 1.2)
    keyLight.position.set(0.4, 1, 0.6)
    this.modelScaleGroup.add(keyLight)
    this.modelScaleGroup.add(new AmbientLight('#ffffff', 0.4))
    this.markerAnchor.add(this.modelScaleGroup)
    this.scene.add(this.markerAnchor)
  }

  async start(): Promise<void> {
    if (this.started || this.destroyed) {
      return
    }
    this.started = true

    if (!isArSupported()) {
      this.setState('unsupported')
      return
    }

    try {
      this.setState('requesting-camera')
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false,
      })
    } catch (error) {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        this.setState('camera-denied')
      } else {
        // NotFoundError / OverconstrainedError / anything else: this device
        // cannot provide a usable camera right now.
        this.setState('unsupported')
      }
      return
    }

    try {
      this.setupVideo()
      this.setupRenderer()
      await this.setupPlugin()
      this.setState('scanning')
      this.startLoop()
    } catch (error) {
      console.error('AR session failed to start.', error)
      this.setState('error')
    }
  }

  /**
   * Build (or swap) the staged model for the given descriptor, reusing the
   * shared `ModelCache` so an animal already viewed in the museum loads
   * instantly from memory. Resolves once the model is anchored and ready.
   */
  async setDescriptor(descriptor: ViewerModelDescriptor): Promise<void> {
    const token = ++this.descriptorToken
    const staged = await buildStagedModel(descriptor, {
      modelCache: this.modelCache,
      onProgress: this.onProgress,
      onFailure: this.onDescriptorFailure,
    })
    if (this.destroyed || token !== this.descriptorToken) {
      disposeObject3D(staged.group)
      return
    }
    this.attachStaged(staged)
  }

  dispose(): void {
    if (this.destroyed) {
      return
    }
    this.destroyed = true
    this.stopLoop()
    this.teardownPlugin()
    if (this.stream) {
      for (const track of this.stream.getTracks()) {
        track.stop()
      }
      this.stream = null
    }
    if (this.staged) {
      disposeObject3D(this.staged.group)
      this.staged = null
    }
    if (this.renderer) {
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      this.renderer.domElement.remove()
      this.renderer = null
    }
    if (this.video) {
      this.video.srcObject = null
      this.video.remove()
      this.video = null
    }
  }

  private setState(next: ArState): void {
    if (this.state === next) {
      return
    }
    this.state = next
    this.onStateChange?.(next)
  }

  private setupVideo(): void {
    const video = document.createElement('video')
    video.autoplay = true
    video.muted = true
    video.playsInline = true
    video.className = 'ar-camera-video'
    video.setAttribute('aria-hidden', 'true')
    video.srcObject = this.stream
    this.video = video
    this.container.append(video)
  }

  private setupRenderer(): void {
    const renderer = new WebGLRenderer({ alpha: true, antialias: true })
    renderer.outputColorSpace = SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    renderer.setClearAlpha(0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.className = 'ar-overlay-canvas'
    renderer.domElement.setAttribute('aria-hidden', 'true')
    this.renderer = renderer
    this.container.append(renderer.domElement)
    this.resize()
    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(this.container)
  }

  private resize(): void {
    if (!this.renderer || !this.video) {
      return
    }
    const width = Math.max(this.container.clientWidth, 1)
    const height = Math.max(this.container.clientHeight, 1)
    this.renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  private async setupPlugin(): Promise<void> {
    const { ArtoolkitPlugin } = await import('@ar-js-org/arjs-plugin-artoolkit')
    const plugin = new ArtoolkitPlugin({
      worker: true,
      cameraParametersUrl: this.cameraParametersUrl,
      minConfidence: 0.6,
    })
    this.plugin = plugin
    await plugin.init({ eventBus: this.eventBus })
    this.eventBus.on('ar:markerFound', (payload) => this.onMarkerEvent(payload))
    this.eventBus.on('ar:markerUpdated', (payload) => this.onMarkerEvent(payload))
    this.eventBus.on('ar:markerLost', () => this.onMarkerLost())
    await plugin.enable()
    await plugin.loadMarker(this.markerPatternUrl, 1)
  }

  private teardownPlugin(): void {
    if (this.plugin) {
      void this.plugin.dispose().catch(() => {
        /* plugin already torn down */
      })
      this.plugin = null
    }
  }

  private onMarkerEvent(payload: unknown): void {
    const event = payload as Partial<ArMarkerEvent> | undefined
    const poseMatrix = event?.poseMatrix
    if (!poseMatrix || poseMatrix.length !== 16) {
      return
    }
    // ARToolKit emits a column-major model-view matrix in the same memory
    // layout Three.js' Matrix4 uses, so a direct fromArray is the starting
    // point. If on-device the model is mirrored or floating, swap to the
    // plugin's `convertModelViewToThreeMatrix` or transpose here (R1).
    this.markerAnchor.matrix.fromArray(poseMatrix)
    this.markerAnchor.visible = true
    this.setState('tracking')
  }

  private onMarkerLost(): void {
    this.markerAnchor.visible = false
    this.setState('lost')
  }

  private attachStaged(staged: StagedViewerModel): void {
    if (this.staged) {
      this.modelScaleGroup.remove(this.staged.group)
      disposeObject3D(this.staged.group)
    }
    this.staged = staged
    // Fit the (already centred, feet-on-y=0) model to the tabletop height.
    const height = Math.max(staged.bounds.getSize(new Vector3()).y, 0.001)
    const scaleFactor = TABLETOP_TARGET_HEIGHT / height
    this.modelScaleGroup.scale.setScalar(scaleFactor)
    this.modelScaleGroup.add(staged.group)
  }

  private startLoop(): void {
    const renderer = this.renderer
    if (!renderer) {
      return
    }
    const loop = (time: number): void => {
      if (this.destroyed) {
        return
      }
      const deltaSeconds = Math.min(Math.max((time - this.lastFrameTime) / 1_000, 0), 0.1)
      this.lastFrameTime = time
      this.captureFrameIfDue(time)
      if (this.state === 'tracking' && this.staged?.mixer) {
        this.staged.mixer.update(deltaSeconds)
      }
      renderer.render(this.scene, this.camera)
      this.rafId = window.requestAnimationFrame(loop)
    }
    this.rafId = window.requestAnimationFrame(loop)
  }

  private captureFrameIfDue(time: number): void {
    const video = this.video
    if (!video || video.readyState < 2 || typeof createImageBitmap !== 'function') {
      return
    }
    if (time - this.lastCaptureTime < FRAME_CAPTURE_INTERVAL_MS) {
      return
    }
    this.lastCaptureTime = time
    const currentFrameId = ++this.frameId
    createImageBitmap(video)
      .then((bitmap) => {
        if (this.destroyed || this.frameId !== currentFrameId) {
          bitmap.close?.()
          return
        }
        // The plugin transfers the ImageBitmap to its worker (zero-copy),
        // neutering it on this thread; we must not reuse it afterwards.
        this.eventBus.emit('engine:update', {
          id: currentFrameId,
          timestamp: time,
          imageBitmap: bitmap,
          width: bitmap.width,
          height: bitmap.height,
        })
      })
      .catch(() => {
        /* transient frame capture failure; retry next interval */
      })
  }

  private stopLoop(): void {
    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
  }
}
