import {
  AmbientLight,
  DirectionalLight,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  RingGeometry,
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
import type { ArState } from './ArSession'

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
const PLACEMENT_TARGET_HEIGHT_METERS = 1.4
const RETICLE_INNER_RADIUS = 0.05
const RETICLE_OUTER_RADIUS = 0.07

/**
 * Whether this browser exposes the WebXR device API at all. A cheap
 * synchronous check used to pick between the WebXR and marker-based UI;
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
 * ARCore). Hit-testing finds the floor, a reticle previews the drop point, and
 * a screen tap (`select`) anchors the animal there. The DOM overlay keeps our
 * own HUD and close button visible while the session runs.
 *
 * iOS Safari does not implement `immersive-ar`; the caller falls back to the
 * marker-based `ArSession` there.
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
  /** Anchor that receives the reticle pose on `select`; holds the model. */
  private readonly placementAnchor = new Group()
  private readonly modelScaleGroup = new Group()
  private readonly reticle = new Mesh(
    new RingGeometry(RETICLE_INNER_RADIUS, RETICLE_OUTER_RADIUS, 32),
    new MeshBasicMaterial({
      color: '#2f6b57',
      transparent: true,
      opacity: 0.9,
      side: 2,
    }),
  )
  private staged: StagedViewerModel | null = null

  private renderer: WebGLRenderer | null = null
  private session: XRSession | null = null
  private hitTestSource: XRHitTestSource | null = null
  private localReferenceSpace: XRReferenceSpace | null = null

  private state: ArState = 'requesting-camera'
  private destroyed = false
  private started = false
  private lastFrameTime = performance.now()
  private loopStartTime = 0
  private lastHitTime: number | null = null
  private descriptorToken = 0

  constructor(options: WebXrArSessionOptions) {
    this.overlayRoot = options.overlayRoot
    this.modelCache = options.modelCache
    this.onStateChange = options.onStateChange
    this.onDescriptorFailure = options.onDescriptorFailure
    this.onProgress = options.onProgress
    this.onEnded = options.onEnded

    // Lay the ring flat on the detected surface, facing up.
    this.reticle.geometry.rotateX(-Math.PI / 2)
    this.reticle.matrixAutoUpdate = false
    this.reticle.visible = false
    this.modelScaleGroup.add(new HemisphereLight('#ffffff', '#444444', 1.4))
    const keyLight = new DirectionalLight('#ffffff', 1.2)
    keyLight.position.set(0.4, 1, 0.6)
    this.modelScaleGroup.add(keyLight)
    this.modelScaleGroup.add(new AmbientLight('#ffffff', 0.4))
    this.placementAnchor.add(this.modelScaleGroup)
    this.placementAnchor.visible = false
    this.scene.add(this.placementAnchor)
    this.scene.add(this.reticle)
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
        requiredFeatures: ['hit-test'],
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
      // Keep Three.js rendering in the same reference space we request
      // hit-test poses in, so the reticle and placed model line up.
      renderer.xr.setReferenceSpaceType('local')
      this.renderer = renderer

      this.localReferenceSpace =
        (await session.requestReferenceSpace('local')) ?? null
      await renderer.xr.setSession(session)

      const viewerSpace = await session.requestReferenceSpace('viewer')
      const hitTestSource = await session.requestHitTestSource?.({
        space: viewerSpace,
      })
      this.hitTestSource = hitTestSource ?? null
      if (!this.hitTestSource) {
        // Feature granted on paper but no source handed out: hit-testing is
        // not actually usable on this device.
        this.setState('unsupported')
        return false
      }

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
   * shared `ModelCache` exactly like the marker-based session does.
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
    this.hitTestSource?.cancel()
    this.hitTestSource = null
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
    this.reticle.geometry.dispose()
    this.reticle.material.dispose()
  }

  private handleSessionEnd = (): void => {
    if (!this.destroyed) {
      this.onEnded?.()
    }
  }

  private handleSelect = (): void => {
    if (this.destroyed || !this.reticle.visible) {
      return
    }
    this.placementAnchor.matrix.copy(this.reticle.matrix)
    this.placementAnchor.matrix.decompose(
      this.placementAnchor.position,
      this.placementAnchor.quaternion,
      this.placementAnchor.scale,
    )
    this.placementAnchor.visible = true
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
    this.loopStartTime = performance.now()
    this.lastHitTime = null
    const loop = (time: number, frame?: XRFrame): void => {
      if (this.destroyed) {
        return
      }
      const deltaSeconds = Math.min(
        Math.max((time - this.lastFrameTime) / 1_000, 0),
        0.1,
      )
      this.lastFrameTime = time
      if (frame && this.hitTestSource) {
        // Prefer Three.js' live reference space so hit poses and rendering
        // share one coordinate system.
        const referenceSpace =
          renderer.xr.getReferenceSpace() ?? this.localReferenceSpace
        const results = frame.getHitTestResults(this.hitTestSource)
        const pose = referenceSpace
          ? results[0]?.getPose(referenceSpace)
          : undefined
        if (pose) {
          this.lastHitTime = time
          this.reticle.visible = true
          this.reticle.matrix.fromArray(pose.transform.matrix)
        } else {
          this.reticle.visible = false
          // Hit-testing needs the phone to move and see a trackable surface;
          // nudge the user after a while instead of spinning on "searching".
          if (
            this.state === 'scanning' &&
            this.lastHitTime === null &&
            time - this.loopStartTime > 10_000
          ) {
            this.setState('lost')
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
