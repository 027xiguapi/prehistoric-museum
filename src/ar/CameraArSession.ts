import {
  AmbientLight,
  DirectionalLight,
  Euler,
  Group,
  HemisphereLight,
  PerspectiveCamera,
  Quaternion,
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

export type ArState =
  | 'unsupported'
  | 'requesting-camera'
  | 'camera-denied'
  | 'scanning'
  | 'tracking'
  | 'lost'
  | 'error'

export interface CameraArSessionOptions {
  readonly container: HTMLElement
  readonly modelCache?: ModelCache | undefined
  readonly onStateChange: ((state: ArState) => void) | undefined
  readonly onDescriptorFailure?:
    | ((failure: ViewerFailure) => void)
    | undefined
  readonly onProgress?: ((progress: ModelLoadProgress) => void) | undefined
}

/** Distance between the viewer and the animal, in metres. */
const MODEL_DISTANCE = 3.2
const CAMERA_FIELD_OF_VIEW_DEGREES = 62

/** Convert alpha/beta/gamma (degrees) into a usable camera orientation. */
function orientationToQuaternion(
  alpha: number,
  beta: number,
  gamma: number,
  screenAngle: number,
): Quaternion {
  const deg = Math.PI / 180
  const q = new Quaternion().setFromEuler(
    new Euler(beta * deg, alpha * deg, -gamma * deg, 'YXZ'),
  )
  // Account for the screen's own rotation relative to the world.
  const screen = new Quaternion().setFromAxisAngle(
    new Vector3(0, 0, 1),
    -screenAngle * deg,
  )
  return screen.multiply(q)
}

/**
 * "Camera AR" fallback: no WebXR, no markers, no AR.js — the camera feed is
 * simply the background and the animal is composited on top. The phone's
 * gyroscope rotates the view so the animal feels anchored in the room as you
 * look around; tapping the frame brings it back in front of you.
 *
 * Works on any browser with getUserMedia (including iOS Safari).
 */
export class CameraArSession {
  private readonly container: HTMLElement
  private readonly modelCache?: ModelCache | undefined
  private readonly onStateChange?: ((state: ArState) => void) | undefined
  private readonly onDescriptorFailure?:
    | ((failure: ViewerFailure) => void)
    | undefined
  private readonly onProgress?: ((progress: ModelLoadProgress) => void) | undefined

  private readonly scene = new Scene()
  private readonly camera = new PerspectiveCamera(
    CAMERA_FIELD_OF_VIEW_DEGREES,
    1,
    0.01,
    100,
  )
  /** Rotates with the device orientation; holds lights and the model. */
  private readonly modelAnchor = new Group()
  private readonly modelScaleGroup = new Group()
  private staged: StagedViewerModel | null = null

  private video: HTMLVideoElement | null = null
  private stream: MediaStream | null = null
  private renderer: WebGLRenderer | null = null
  private resizeObserver: ResizeObserver | null = null

  private state: ArState = 'requesting-camera'
  private destroyed = false
  private started = false
  private rafId: number | null = null
  private lastFrameTime = performance.now()
  private descriptorToken = 0
  /** Latest device orientation, if the browser provides one. */
  private deviceOrientation: {
    alpha: number
    beta: number
    gamma: number
  } | null = null
  private screenAngle = 0
  /** Yaw offset so a tap re-centres the animal in front of the user. */
  private recenterYaw = 0

  constructor(options: CameraArSessionOptions) {
    this.container = options.container
    this.modelCache = options.modelCache
    this.onStateChange = options.onStateChange
    this.onDescriptorFailure = options.onDescriptorFailure
    this.onProgress = options.onProgress

    this.modelAnchor.position.set(0, 0, -MODEL_DISTANCE)
    this.modelScaleGroup.add(new HemisphereLight('#ffffff', '#444444', 1.4))
    const keyLight = new DirectionalLight('#ffffff', 1.2)
    keyLight.position.set(0.4, 1, 0.6)
    this.modelScaleGroup.add(keyLight)
    this.modelScaleGroup.add(new AmbientLight('#ffffff', 0.4))
    this.modelAnchor.add(this.modelScaleGroup)
    this.scene.add(this.modelAnchor)
    this.camera.quaternion.identity()
  }

  async start(): Promise<void> {
    if (this.started || this.destroyed) {
      return
    }
    this.started = true

    if (
      typeof window === 'undefined' ||
      !window.isSecureContext ||
      !navigator.mediaDevices ||
      typeof navigator.mediaDevices.getUserMedia !== 'function' ||
      typeof window.WebGLRenderingContext === 'undefined'
    ) {
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
        this.setState('unsupported')
      }
      return
    }

    try {
      this.setupVideo()
      this.setupRenderer()
      this.attachOrientationListeners()
      // iOS 13+ gates DeviceOrientationEvent behind an explicit permission
      // prompt that must run inside a user gesture; the AR button click that
      // opened this view is that gesture. Failure is fine — the view just
      // stays fixed.
      const orientationCtor = window.DeviceOrientationEvent as
        | { requestPermission?: () => Promise<string> }
        | undefined
      if (typeof orientationCtor?.requestPermission === 'function') {
        void orientationCtor
          .requestPermission()
          .catch(() => {
            /* permission declined; fixed view it is */
          })
      }
      this.setState('tracking')
      this.startLoop()
    } catch (error) {
      console.error('Camera AR session failed to start.', error)
      this.setState('error')
    }
  }

  /**
   * Build (or swap) the staged model, reusing the shared `ModelCache` like
   * every other session implementation.
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
    if (this.staged) {
      this.modelScaleGroup.remove(this.staged.group)
      disposeObject3D(this.staged.group)
    }
    this.staged = staged
    // Child-sized at conversational distance: ~1.2 m tall, standing at eye
    // level so it looks present in the room.
    const height = Math.max(staged.bounds.getSize(new Vector3()).y, 0.001)
    const scale = 1.2 / height
    this.modelScaleGroup.scale.setScalar(scale)
    this.modelAnchor.position.y = 1.2 / 2
    this.modelScaleGroup.add(staged.group)
  }

  /** Re-centres the animal in front of the user (tap on the frame). */
  recenter(): void {
    if (this.deviceOrientation) {
      this.recenterYaw = this.deviceOrientation.alpha
    }
  }

  dispose(): void {
    if (this.destroyed) {
      return
    }
    this.destroyed = true
    this.stopLoop()
    this.detachOrientationListeners()
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
    if (!this.renderer) {
      return
    }
    const width = Math.max(this.container.clientWidth, 1)
    const height = Math.max(this.container.clientHeight, 1)
    this.renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  private handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    if (
      event.alpha === null ||
      event.beta === null ||
      event.gamma === null
    ) {
      return
    }
    this.deviceOrientation = {
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    }
    this.screenAngle =
      (typeof screen !== 'undefined' && screen.orientation?.angle) ||
      window.orientation ||
      0
  }

  private attachOrientationListeners(): void {
    window.addEventListener(
      'deviceorientation',
      this.handleDeviceOrientation,
      true,
    )
  }

  private detachOrientationListeners(): void {
    window.removeEventListener(
      'deviceorientation',
      this.handleDeviceOrientation,
      true,
    )
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
      const deltaSeconds = Math.min(
        Math.max((time - this.lastFrameTime) / 1_000, 0),
        0.1,
      )
      this.lastFrameTime = time
      if (this.deviceOrientation) {
        const yawOffset = this.deviceOrientation.alpha - this.recenterYaw
        this.camera.quaternion.copy(
          orientationToQuaternion(
            yawOffset,
            this.deviceOrientation.beta,
            this.deviceOrientation.gamma,
            this.screenAngle,
          ),
        )
      }
      if (this.staged?.mixer) {
        this.staged.mixer.update(deltaSeconds)
      }
      renderer.render(this.scene, this.camera)
      this.rafId = window.requestAnimationFrame(loop)
    }
    this.rafId = window.requestAnimationFrame(loop)
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
