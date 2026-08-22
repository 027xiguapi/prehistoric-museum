import {
  AmbientLight,
  DirectionalLight,
  Group,
  HemisphereLight,
  Matrix4,
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
} from '@/src/viewer/build-staged-model'
import { disposeObject3D } from '@/src/viewer/dispose'
import type { ModelCache } from '@/src/viewer/model-cache'
import type { ViewerModelDescriptor } from '@/src/viewer/viewer-model-descriptor'
import type { ArState } from '@/src/ar/CameraArSession'

export interface WebXrArSessionOptions {
  readonly overlayRoot: HTMLElement
  readonly modelCache?: ModelCache | undefined
  readonly onStateChange: ((state: ArState) => void) | undefined
  readonly onDescriptorFailure?:
    | ((failure: ViewerFailure) => void)
    | undefined
  readonly onProgress?: ((progress: ModelLoadProgress) => void) | undefined
  readonly onEnded?: (() => void) | undefined
}

/**
 * Target rendered height of the placed model, in real-world metres. The museum
 * models are authored at wildly different native scales, so we normalise them
 * to a child-friendly "standing next to you" size instead of true life size.
 */
const PLACEMENT_TARGET_HEIGHT_METERS = 1.15
/** How far in front of the user the animal is placed on tap, in metres. */
const PLACEMENT_DISTANCE_METERS = 2.4
/**
 * Height of the animal's feet below the tracked head pose. The `local`
 * reference space starts at head height, so ~1.2 m down approximates standing
 * on the floor without any ground detection.
 */
const PLACEMENT_FLOOR_DROP_METERS = 1.2

/**
 * Whether this browser exposes the WebXR device API at all. A cheap
 * synchronous check used to pick between the WebXR and camera-composite UI;
 * `immersive-ar` support is verified asynchronously when the session starts.
 */
export function isWebXrArAvailable(): boolean {
  return typeof navigator !== 'undefined' && navigator.xr !== undefined
}

export async function isWebXrArSupported(): Promise<boolean> {
  if (!isWebXrArAvailable()) {
    return false
  }
  try {
    return await navigator.xr?.isSessionSupported('immersive-ar') ?? false
  } catch {
    return false
  }
}

/**
 * Markerless AR session on top of WebXR `immersive-ar` (Android Chrome +
 * ARCore). No ground detection: a screen tap (`select`) places the animal at
 * a fixed distance in front of the user, which works in every environment.
 * The DOM overlay keeps our own HUD and close button visible while the
 * session runs.
 *
 * iOS Safari does not implement `immersive-ar`; the caller falls back to the
 * camera-composite `CameraArSession` there.
 */
export class WebXrArSession {
  private readonly overlayRoot: HTMLElement
  private readonly modelCache?: ModelCache | undefined
  private readonly onStateChange?: ((state: ArState) => void) | undefined
  private readonly onDescriptorFailure?:
    | ((failure: ViewerFailure) => void)
    | undefined
  private readonly onProgress?: ((progress: ModelLoadProgress) => void) | undefined
  private readonly onEnded?: (() => void) | undefined

  private readonly scene = new Scene()
  private readonly camera = new PerspectiveCamera()
  /** Holds the model where the user tapped; repositioned on every `select`. */
  private readonly placementAnchor = new Group()
  private readonly modelScaleGroup = new Group()
  private staged: StagedViewerModel | null = null

  private renderer: WebGLRenderer | null = null
  private session: XRSession | null = null
  private viewerSpace: XRReferenceSpace | null = null
  private localReferenceSpace: XRReferenceSpace | null = null
  /** Latest tracked viewer (head) pose, in the render reference space. */
  private readonly viewerPoseMatrix = new Matrix4()
  private hasViewerPose = false

  private state: ArState = 'requesting-camera'
  private destroyed = false
  private started = false
  private lastFrameTime = performance.now()
  private descriptorToken = 0

  constructor(options: WebXrArSessionOptions) {
    this.overlayRoot = options.overlayRoot
    this.modelCache = options.modelCache
    this.onStateChange = options.onStateChange
    this.onDescriptorFailure = options.onDescriptorFailure
    this.onProgress = options.onProgress
    this.onEnded = options.onEnded

    this.modelScaleGroup.add(new HemisphereLight('#ffffff', '#444444', 1.4))
    const keyLight = new DirectionalLight('#ffffff', 1.2)
    keyLight.position.set(0.4, 1, 0.6)
    this.modelScaleGroup.add(keyLight)
    this.modelScaleGroup.add(new AmbientLight('#ffffff', 0.4))
    this.placementAnchor.add(this.modelScaleGroup)
    this.placementAnchor.visible = false
    this.scene.add(this.placementAnchor)
  }

  async start(): Promise<boolean> {
    if (this.started || this.destroyed) {
      return false
    }
    this.started = true

    const supported = await isWebXrArSupported().catch(() => false)
    if (!supported || !navigator.xr) {
      this.setState('unsupported')
      return false
    }

    try {
      this.setState('requesting-camera')
      const session = await navigator.xr.requestSession('immersive-ar', {
        // No hit-test requirement: the animal is placed at a fixed distance
        // in front of the camera on tap, which works on every device and in
        // every environment (dark rooms, plain floors).
        requiredFeatures: [],
        optionalFeatures: ['dom-overlay', 'local-floor'],
        domOverlay: { root: this.overlayRoot },
      })
      if (this.destroyed) {
        void session.end().catch(() => {
          /* already tearing down */
        })
        return false
      }
      this.session = session
      session.addEventListener('end', this.handleSessionEnd)
      session.addEventListener('select', this.handleSelect)

      const renderer = new WebGLRenderer({ alpha: true, antialias: true })
      renderer.outputColorSpace = SRGBColorSpace
      renderer.setClearColor(0x000000, 0)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.xr.enabled = true
      renderer.xr.setReferenceSpaceType('local')
      this.renderer = renderer

      this.localReferenceSpace =
        (await session.requestReferenceSpace('local')) ?? null
      await renderer.xr.setSession(session)
      // Tracked viewer pose (updated each frame) used to compute the tap
      // placement point in front of the user.
      this.viewerSpace = await session.requestReferenceSpace('viewer')

      this.setState('scanning')
      this.startLoop()
      return true
    } catch (error) {
      console.error('WebXR AR session failed to start.', error)
      this.setState('error')
      return false
    }
  }

  /**
   * Build (or swap) the staged model for the given descriptor, reusing the
   * shared `ModelCache` exactly like the camera session does.
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
    // Fit the (already centred, feet-on-y=0) model to the placement height.
    const height = Math.max(staged.bounds.getSize(new Vector3()).y, 0.001)
    this.modelScaleGroup.scale.setScalar(
      PLACEMENT_TARGET_HEIGHT_METERS / height,
    )
    this.modelScaleGroup.add(staged.group)
  }

  dispose(): void {
    if (this.destroyed) {
      return
    }
    this.destroyed = true
    const renderer = this.renderer
    if (renderer) {
      renderer.setAnimationLoop(null)
      renderer.dispose()
      renderer.forceContextLoss()
      this.renderer = null
    }
    this.viewerSpace = null
    this.localReferenceSpace = null
    const session = this.session
    this.session = null
    if (session) {
      session.removeEventListener('end', this.handleSessionEnd)
      session.removeEventListener('select', this.handleSelect)
      void session.end().catch(() => {
        /* session already ended */
      })
    }
    if (this.staged) {
      disposeObject3D(this.staged.group)
      this.staged = null
    }
  }

  private handleSessionEnd = (): void => {
    if (!this.destroyed) {
      this.onEnded?.()
    }
  }

  /** Places (or re-places) the animal in front of the user. */
  private handleSelect = (): void => {
    if (this.destroyed || !this.hasViewerPose) {
      return
    }
    this.placeInFront()
  }

  /** Anchors the animal a fixed distance ahead of the current view. */
  private placeInFront(): void {
    const anchor = this.placementAnchor
    // Camera position + forward direction from the tracked viewer pose.
    const position = new Vector3()
    const quaternion = new Quaternion()
    const scale = new Vector3(1, 1, 1)
    this.viewerPoseMatrix.decompose(position, quaternion, scale)
    const forward = new Vector3(0, 0, -1).applyQuaternion(quaternion)
    forward.y = 0
    if (forward.lengthSq() < 1e-6) {
      forward.set(0, 0, -1)
    }
    forward.normalize()
    anchor.position.copy(position).addScaledVector(
      forward,
      PLACEMENT_DISTANCE_METERS,
    )
    anchor.position.y = position.y - PLACEMENT_FLOOR_DROP_METERS
    // Stand the animal upright and have it face the user.
    anchor.quaternion.identity()
    anchor.lookAt(position.x, anchor.position.y, position.z)
    anchor.scale.setScalar(1)
    anchor.visible = true
    this.setState('tracking')
  }

  private setState(next: ArState): void {
    if (this.state === next) {
      return
    }
    this.state = next
    this.onStateChange?.(next)
  }

  private startLoop(): void {
    const renderer = this.renderer
    if (!renderer) {
      return
    }
    const loop = (time: number, frame?: XRFrame): void => {
      if (this.destroyed) {
        return
      }
      const deltaSeconds = Math.min(
        Math.max((time - this.lastFrameTime) / 1_000, 0),
        0.1,
      )
      this.lastFrameTime = time
      if (frame && this.viewerSpace) {
        // Prefer Three.js' live reference space so the tracked pose and
        // rendering share one coordinate system.
        const referenceSpace =
          renderer.xr.getReferenceSpace() ?? this.localReferenceSpace
        const pose = referenceSpace
          ? frame.getPose(this.viewerSpace, referenceSpace)
          : undefined
        if (pose) {
          this.viewerPoseMatrix.fromArray(pose.transform.matrix)
          if (!this.hasViewerPose) {
            // Appear immediately — no waiting for a tap. Tapping later
            // re-places the animal in front of wherever the user looks.
            this.hasViewerPose = true
            this.placeInFront()
          }
        }
      }
      if (this.staged?.mixer && this.placementAnchor.visible) {
        this.staged.mixer.update(deltaSeconds)
      }
      renderer.render(this.scene, this.camera)
    }
    renderer.setAnimationLoop(loop)
  }
}
