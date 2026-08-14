import {
  ACESFilmicToneMapping,
  DirectionalLight,
  Group,
  HemisphereLight,
  MathUtils,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  computeCameraFit,
  computeCompositionFieldOfView,
  computeCompositionViewOffset,
} from './camera-fit'
import { disposeObject3D } from './dispose'
import type { ModelCache } from './model-cache'
import { createModelPreviewPresentationSignature } from './model-preview-contract'
import {
  MODEL_PREVIEW_CAMERA_FIELD_OF_VIEW_DEGREES,
  MODEL_PREVIEW_MAX_PIXEL_RATIO,
  modelScaleForViewport,
} from './model-preview-profiles'
import type { ViewerModelDescriptor } from './viewer-model-descriptor'
import {
  buildStagedModel,
  type ModelLoadProgress,
  type StagedViewerModel,
  type ViewerFailure,
} from './build-staged-model'

export type { ViewerModelDescriptor } from './viewer-model-descriptor'
export {
  buildStagedModel,
  classifyModelResourceTiming,
  computeContactShadowLayout,
  computeModelBounds,
  readModelResponseBuffer,
  requestModelResponse,
} from './build-staged-model'
export type {
  ModelLoadProgress,
  ModelLoadSource,
  StagedViewerModel,
  ViewerFailure,
  ViewerFailureKind,
} from './build-staged-model'

export interface ViewerControllerOptions {
  compositionFrame?: HTMLElement
  modelCache?: ModelCache
  onFailure?: (failure: ViewerFailure) => void
  onModelReady?: (animalId: string) => void
}

interface ModelTransition {
  cameraSwitched: boolean
  readonly duration: number
  readonly incoming: StagedViewerModel
  readonly outgoing: StagedViewerModel
  readonly startedAt: number
}

export interface CameraRelativeLightingPose {
  readonly fillPosition: Vector3
  readonly keyPosition: Vector3
  readonly rightDirection: Vector3
  readonly targetPosition: Vector3
  readonly upDirection: Vector3
  readonly viewDirection: Vector3
}

export interface ViewerZoomProfile {
  readonly minDistanceFactor: number
  readonly zoomSpeed: number
}

const WORLD_UP = new Vector3(0, 1, 0)
const VERTICAL_VIEW_REFERENCE = new Vector3(0, 0, 1)
const MIN_LIGHT_DISTANCE = 0.001
const DEFAULT_TONE_MAPPING_EXPOSURE = 1.08
const CAMERA_KEY_INTENSITY = 2.15
const CAMERA_FILL_INTENSITY = 0.72
const MODEL_TRANSITION_CAMERA_SWITCH = 0.42
const INITIAL_STILL_CROSSFADE_MS = 420

export function viewerZoomProfileForPointer(
  coarsePointer: boolean,
): ViewerZoomProfile {
  return coarsePointer
    ? { minDistanceFactor: 0.6, zoomSpeed: 1.2 }
    : { minDistanceFactor: 0.68, zoomSpeed: 1 }
}

export interface ModelTransitionFrame {
  /**
   * Opacity of the composited WebGL canvas. It reaches zero exactly while the
   * shared camera is refitted, so the scene background stays untouched and a
   * large difference in animal size never appears as a one-frame jump.
   */
  readonly modelOpacity: number
  readonly phase: 'outgoing' | 'incoming'
}

function smoothStep(progress: number): number {
  return progress * progress * (3 - 2 * progress)
}

/**
 * Fades the already-composited WebGL canvas before fitting the shared camera
 * to the new model, then fades it back in. Individual GLTF materials remain
 * fully opaque and the exhibit background never receives a rectangular veil.
 */
export function computeModelTransitionFrame(
  progress: number,
): ModelTransitionFrame {
  const clampedProgress = Math.min(Math.max(progress, 0), 1)
  if (clampedProgress < MODEL_TRANSITION_CAMERA_SWITCH) {
    return {
      modelOpacity:
        1 -
        smoothStep(clampedProgress / MODEL_TRANSITION_CAMERA_SWITCH),
      phase: 'outgoing',
    }
  }

  return {
    modelOpacity: smoothStep(
      (clampedProgress - MODEL_TRANSITION_CAMERA_SWITCH) /
        (1 - MODEL_TRANSITION_CAMERA_SWITCH),
    ),
    phase: 'incoming',
  }
}

export function createCameraRelativeLightingPose(): CameraRelativeLightingPose {
  return {
    fillPosition: new Vector3(),
    keyPosition: new Vector3(),
    rightDirection: new Vector3(),
    targetPosition: new Vector3(),
    upDirection: new Vector3(),
    viewDirection: new Vector3(),
  }
}

/**
 * Keeps two asymmetric directional lights on the camera-facing hemisphere.
 * The key stays higher and to camera-left while the weaker fill comes from
 * camera-right, preserving surface shape instead of producing flat frontal
 * illumination.
 */
export function updateCameraRelativeLightingPose(
  pose: CameraRelativeLightingPose,
  cameraPosition: Vector3,
  targetPosition: Vector3,
): void {
  pose.targetPosition.copy(targetPosition)
  pose.viewDirection.copy(cameraPosition).sub(targetPosition)
  const distance = Math.max(
    pose.viewDirection.length(),
    MIN_LIGHT_DISTANCE,
  )
  if (pose.viewDirection.lengthSq() < MIN_LIGHT_DISTANCE ** 2) {
    pose.viewDirection.set(0, 0, 1)
  } else {
    pose.viewDirection.normalize()
  }

  const upReference =
    Math.abs(pose.viewDirection.y) > 0.985
      ? VERTICAL_VIEW_REFERENCE
      : WORLD_UP
  pose.rightDirection
    .crossVectors(upReference, pose.viewDirection)
    .normalize()
  pose.upDirection
    .crossVectors(pose.viewDirection, pose.rightDirection)
    .normalize()

  pose.keyPosition
    .copy(targetPosition)
    .addScaledVector(pose.viewDirection, distance)
    .addScaledVector(pose.rightDirection, -distance * 0.46)
    .addScaledVector(pose.upDirection, distance * 0.58)
  pose.fillPosition
    .copy(targetPosition)
    .addScaledVector(pose.viewDirection, distance * 0.82)
    .addScaledVector(pose.rightDirection, distance * 0.58)
    .addScaledVector(pose.upDirection, distance * 0.12)
}

export function resetStagedModelPose(
  staged: Pick<
    StagedViewerModel,
    'action' | 'descriptor' | 'mixer' | 'modelRoot'
  >,
): void {
  staged.action?.reset().play()
  staged.mixer?.setTime(0)
  staged.modelRoot.rotation.y = MathUtils.degToRad(
    staged.descriptor.presentation.initialYawDegrees,
  )
  staged.modelRoot.updateMatrixWorld(true)
}

export class ViewerUnavailableError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options)
    this.name = 'ViewerUnavailableError'
  }
}

export class ViewerController {
  private readonly camera = new PerspectiveCamera(
    MODEL_PREVIEW_CAMERA_FIELD_OF_VIEW_DEGREES,
    1,
    0.01,
    100,
  )
  private readonly scene = new Scene()
  private readonly renderer: WebGLRenderer
  private readonly controls: OrbitControls
  private readonly cameraKeyLight = new DirectionalLight(
    '#fff0ce',
    CAMERA_KEY_INTENSITY,
  )
  private readonly cameraFillLight = new DirectionalLight(
    '#e4f1ff',
    CAMERA_FILL_INTENSITY,
  )
  private readonly sceneAccentLight = new DirectionalLight('#ffd6a0', 0.55)
  private readonly cameraLightTarget = new Group()
  private readonly cameraLightingPose = createCameraRelativeLightingPose()
  private readonly resizeObserver: ResizeObserver
  private readonly coarsePointerQuery = window.matchMedia('(pointer: coarse)')
  private readonly reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  private readonly handleReducedMotionChange = () => {
    const wasReduced = this.reducedMotion
    this.reducedMotion = this.reducedMotionQuery.matches
    if (wasReduced && !this.reducedMotion) {
      this.resumeRotationAt = 0
    }
    this.updateAutoRotation(performance.now())
  }
  private readonly handleContextLost = (event: Event) => {
    event.preventDefault()
    this.options.onFailure?.({
      kind: 'context-lost',
      message: 'WebGL 绘图环境暂时不可用。',
    })
    this.renderer.domElement.setAttribute('aria-hidden', 'true')
    this.stopLoop()
  }
  private readonly handleControlStart = () => {
    this.resumeRotationAt = Number.POSITIVE_INFINITY
    this.controls.autoRotate = false
  }
  private readonly handleControlEnd = () => {
    this.resumeRotationAt = performance.now() + 4_000
  }

  private current: StagedViewerModel | null = null
  private destroyed = false
  private reducedMotion = this.reducedMotionQuery.matches
  private resumeRotationAt = 0
  private initialPoseHoldUntil = 0
  private reviewAnimationTime: number | null = null
  private lastFrameTime = performance.now()
  private transition: ModelTransition | null = null
  private compositionFitFrame: number | null = null
  private firstFrameConfirmationFrame: number | null = null

  constructor(
    private readonly container: HTMLElement,
    private readonly options: ViewerControllerOptions = {},
  ) {
    try {
      this.renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
    } catch (cause) {
      const failure = {
        kind: 'webgl-unavailable' as const,
        message: '这个浏览器现在不能显示 3D 模型。',
        cause,
      }
      options.onFailure?.(failure)
      throw new ViewerUnavailableError(failure.message, { cause })
    }

    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = ACESFilmicToneMapping
    this.renderer.toneMappingExposure = DEFAULT_TONE_MAPPING_EXPOSURE
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setClearAlpha(0)
    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, MODEL_PREVIEW_MAX_PIXEL_RATIO),
    )
    this.renderer.domElement.className = 'viewer-canvas'
    this.renderer.domElement.setAttribute('role', 'img')
    this.renderer.domElement.setAttribute('aria-hidden', 'true')
    this.renderer.domElement.setAttribute('aria-label', '三维动物模型，可拖动旋转并缩放')
    this.renderer.domElement.addEventListener('webglcontextlost', this.handleContextLost)
    this.container.append(this.renderer.domElement)

    this.scene.add(new HemisphereLight('#fff8df', '#71805e', 1.3))
    this.cameraLightTarget.name = 'camera-light-target'
    this.cameraKeyLight.name = 'camera-relative-key'
    this.cameraFillLight.name = 'camera-relative-fill'
    this.sceneAccentLight.name = 'scene-accent'
    this.cameraKeyLight.target = this.cameraLightTarget
    this.cameraFillLight.target = this.cameraLightTarget
    this.sceneAccentLight.target = this.cameraLightTarget
    this.sceneAccentLight.position.set(-5, 7, -4)
    this.scene.add(
      this.cameraLightTarget,
      this.cameraKeyLight,
      this.cameraFillLight,
      this.sceneAccentLight,
    )

    this.camera.position.set(0, 1, 4)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.06
    this.controls.enablePan = false
    this.controls.autoRotateSpeed = 0.52
    this.controls.addEventListener('start', this.handleControlStart)
    this.controls.addEventListener('end', this.handleControlEnd)
    this.updateCameraLighting()

    this.reducedMotionQuery.addEventListener('change', this.handleReducedMotionChange)
    this.resizeObserver = new ResizeObserver(() => {
      this.resize()
    })
    this.resizeObserver.observe(this.container)
    if (
      this.options.compositionFrame &&
      this.options.compositionFrame !== this.container
    ) {
      this.resizeObserver.observe(this.options.compositionFrame)
    }
    this.resize()
    this.startLoop()
  }

  async stageModel(
    descriptor: ViewerModelDescriptor,
    signal?: AbortSignal,
    onProgress?: (progress: ModelLoadProgress) => void,
  ): Promise<StagedViewerModel> {
    return buildStagedModel(descriptor, {
      modelCache: this.options.modelCache,
      signal,
      onProgress,
      onFailure: this.options.onFailure,
    })
  }

  commitModel(staged: StagedViewerModel): void {
    if (this.destroyed || staged.disposed) {
      this.disposeStagedModel(staged)
      return
    }

    // A new choice can arrive while the former choice is still fading out.
    // Do not complete that older transition here: doing so fits its hidden
    // incoming model and makes the still-visible outgoing animal jump in size.
    // Instead, retain whichever model is actually visible as the next
    // transition's outgoing model.
    this.cancelTransitionForReplacement()
    const previous = this.current
    this.scene.add(staged.group)
    this.current = staged
    this.renderer.domElement.setAttribute(
      'aria-label',
      staged.descriptor.accessibilityLabel ??
        `${staged.descriptor.label}三维模型，可拖动旋转并缩放`,
    )
    this.renderer.domElement.setAttribute('aria-hidden', 'false')
    this.renderer.domElement.dataset.modelLoadSource = staged.loadSource
    if (previous && staged.loadSource === 'network') {
      this.initialPoseHoldUntil = 0
      staged.group.visible = false
      this.transition = {
        cameraSwitched: false,
        duration: this.reducedMotion ? 80 : 560,
        incoming: staged,
        outgoing: previous,
        startedAt: performance.now(),
      }
      this.setTransitionOpacity(1)
      this.renderer.domElement.dataset.transitioning = 'true'
      this.renderer.domElement.dataset.transitionPhase = 'outgoing'
    } else if (previous) {
      this.initialPoseHoldUntil = 0
      this.applyPresentationSettings(staged)
      this.reset()
      this.disposeStagedModel(previous)
      this.clearTransitionOpacity()
      this.renderer.domElement.dataset.transitioning = 'false'
      this.renderer.domElement.dataset.transitionPhase = 'idle'
      this.updateCameraLighting()
      this.renderer.render(this.scene, this.camera)
    } else {
      this.applyPresentationSettings(staged)
      this.reset()
      this.initialPoseHoldUntil =
        performance.now() + INITIAL_STILL_CROSSFADE_MS
      this.controls.autoRotate = false
      this.renderer.domElement.dataset.autoRotate = 'false'
      this.updateCameraLighting()
      this.renderer.render(this.scene, this.camera)
      this.confirmInitialFrame(staged.animalId)
      this.renderer.domElement.dataset.transitioning = 'false'
      this.renderer.domElement.dataset.transitionPhase = 'idle'
    }
  }

  disposeStagedModel(staged: StagedViewerModel): void {
    if (staged.disposed) {
      return
    }
    staged.action?.stop()
    if (staged.mixer) {
      staged.mixer.stopAllAction()
      staged.mixer.uncacheRoot(staged.modelRoot)
    }
    disposeObject3D(staged.group, this.renderer)
    staged.disposed = true
    if (this.current === staged) {
      this.current = null
    }
  }

  setAccessibilityLabel(label: string): void {
    this.renderer.domElement.setAttribute('aria-label', label)
  }

  reset(): void {
    if (this.transition && !this.transition.cameraSwitched) {
      return
    }
    const current = this.current
    if (!current) {
      return
    }
    resetStagedModelPose(current)
    this.fitCurrentModel()
    this.resumeRotationAt = this.reducedMotion ? Number.POSITIVE_INFINITY : 0
    this.updateAutoRotation(performance.now())
  }

  /**
   * Freezes the active clip at an exact time for deterministic local-review
   * and end-to-end screenshots. Passing null resumes normal playback.
   * ViewerStage only exposes this hook in Vite's `review`, `model-still`, and
   * `e2e` modes.
   */
  setReviewAnimationTime(timeSeconds: number | null): boolean {
    if (
      import.meta.env.MODE !== 'review' &&
      import.meta.env.MODE !== 'model-still' &&
      import.meta.env.MODE !== 'e2e'
    ) {
      return false
    }
    const current = this.current
    if (!current) {
      return false
    }
    if (timeSeconds === null) {
      this.reviewAnimationTime = null
      delete this.renderer.domElement.dataset.reviewAnimationTime
      if (current.mixer && current.action) {
        current.mixer.timeScale = 1
        current.action.paused = false
      }
      this.resumeRotationAt = this.reducedMotion
        ? Number.POSITIVE_INFINITY
        : 0
      this.updateAutoRotation(performance.now())
      this.renderer.domElement.dataset.animationPaused = 'false'
      return true
    }
    if (!Number.isFinite(timeSeconds) || timeSeconds < 0) {
      return false
    }
    this.reviewAnimationTime = timeSeconds
    this.renderer.domElement.dataset.reviewAnimationTime = String(timeSeconds)
    this.resumeRotationAt = Number.POSITIVE_INFINITY
    this.controls.autoRotate = false
    this.renderer.domElement.dataset.autoRotate = 'false'
    resetStagedModelPose(current)
    this.fitCurrentModel()
    if (current.mixer && current.action) {
      current.mixer.timeScale = 1
      current.action.paused = false
      current.action.reset().play()
      current.mixer.setTime(timeSeconds)
      current.action.paused = true
      current.mixer.timeScale = 0
    }
    current.modelRoot.updateMatrixWorld(true)
    this.renderer.domElement.dataset.animationPaused = 'true'
    return true
  }

  setFocusMode(focused: boolean): void {
    if (focused) {
      this.reset()
    } else {
      this.fitCurrentModel()
    }
    if (this.compositionFitFrame !== null) {
      window.cancelAnimationFrame(this.compositionFitFrame)
    }
    this.compositionFitFrame = window.requestAnimationFrame(() => {
      this.compositionFitFrame = null
      this.fitCurrentModel()
    })
  }

  resize(): void {
    if (this.destroyed) {
      return
    }
    const width = Math.max(this.container.clientWidth, 1)
    const height = Math.max(this.container.clientHeight, 1)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.fitCurrentModel()
  }

  destroy(): void {
    if (this.destroyed) {
      return
    }
    this.destroyed = true
    this.stopLoop()
    if (this.compositionFitFrame !== null) {
      window.cancelAnimationFrame(this.compositionFitFrame)
      this.compositionFitFrame = null
    }
    if (this.firstFrameConfirmationFrame !== null) {
      window.cancelAnimationFrame(this.firstFrameConfirmationFrame)
      this.firstFrameConfirmationFrame = null
    }
    this.resizeObserver.disconnect()
    this.reducedMotionQuery.removeEventListener('change', this.handleReducedMotionChange)
    this.controls.removeEventListener('start', this.handleControlStart)
    this.controls.removeEventListener('end', this.handleControlEnd)
    this.controls.dispose()
    this.renderer.domElement.removeEventListener('webglcontextlost', this.handleContextLost)
    const outgoing = this.transition?.outgoing ?? null
    this.transition = null
    this.clearTransitionOpacity()
    if (outgoing && outgoing !== this.current) {
      this.disposeStagedModel(outgoing)
    }
    if (this.current) {
      this.disposeStagedModel(this.current)
    }
    this.renderer.dispose()
    this.renderer.forceContextLoss()
    this.renderer.domElement.remove()
  }

  private fitCurrentModel(): void {
    // The outgoing camera pose is intentionally frozen until the transition
    // veil covers it. React layout updates and ResizeObserver notifications can
    // otherwise refit the outgoing animal against incoming content and cause a
    // momentary zoom immediately before it disappears.
    if (this.transition && !this.transition.cameraSwitched) {
      return
    }
    const current = this.current
    if (!current) {
      return
    }
    const previousAutoRotate = this.controls.autoRotate
    const previousDamping = this.controls.enableDamping
    this.controls.autoRotate = false
    this.controls.enableDamping = false
    // Apply and clear any pending drag/damping delta before assigning the
    // deterministic fitted pose.
    this.controls.update()
    const containerWidth = Math.max(this.container.clientWidth, 1)
    const containerHeight = Math.max(this.container.clientHeight, 1)
    const containerBounds = this.container.getBoundingClientRect()
    const frameBounds = this.options.compositionFrame?.getBoundingClientRect()
    const compositionLeft = frameBounds
      ? MathUtils.clamp(
          frameBounds.left - containerBounds.left,
          0,
          containerWidth - 1,
        )
      : 0
    const compositionTop = frameBounds
      ? MathUtils.clamp(
          frameBounds.top - containerBounds.top,
          0,
          containerHeight - 1,
        )
      : 0
    const compositionRight = frameBounds
      ? MathUtils.clamp(
          frameBounds.right - containerBounds.left,
          compositionLeft + 1,
          containerWidth,
        )
      : containerWidth
    const compositionBottom = frameBounds
      ? MathUtils.clamp(
          frameBounds.bottom - containerBounds.top,
          compositionTop + 1,
          containerHeight,
        )
      : containerHeight
    const compositionWidth = compositionRight - compositionLeft
    const compositionHeight = compositionBottom - compositionTop
    this.renderer.domElement.dataset.compositionLeft = String(
      Math.round(compositionLeft),
    )
    this.renderer.domElement.dataset.compositionTop = String(
      Math.round(compositionTop),
    )
    this.renderer.domElement.dataset.compositionWidth = String(
      Math.round(compositionWidth),
    )
    this.renderer.domElement.dataset.compositionHeight = String(
      Math.round(compositionHeight),
    )
    const isPortrait = compositionHeight > compositionWidth
    const configuredPadding = isPortrait
      ? current.descriptor.presentation.safeAreaPadding.portrait
      : current.descriptor.presentation.safeAreaPadding.landscape
    const configuredHorizontalOffset = isPortrait
      ? (current.descriptor.presentation.horizontalOffset?.portrait ?? 0)
      : (current.descriptor.presentation.horizontalOffset?.landscape ?? 0)
    const configuredVerticalOffset = isPortrait
      ? (current.descriptor.presentation.verticalOffset?.portrait ?? 0)
      : (current.descriptor.presentation.verticalOffset?.landscape ?? 0)
    const modelScale = modelScaleForViewport(
      containerWidth,
      containerHeight,
    )
    const zoomProfile = viewerZoomProfileForPointer(
      this.coarsePointerQuery.matches,
    )
    const compositionFieldOfView = computeCompositionFieldOfView(
      this.camera.fov,
      containerHeight,
      compositionHeight,
    )
    const fit = computeCameraFit({
      aspect: compositionWidth / compositionHeight,
      bounds: current.bounds,
      fieldOfViewDegrees: compositionFieldOfView,
      modelScale,
      paddingFraction: configuredPadding,
    })
    this.camera.near = fit.near
    this.camera.far = fit.far
    this.camera.position.copy(fit.position)
    const viewOffset = computeCompositionViewOffset({
      compositionHeight,
      compositionLeft,
      compositionTop,
      compositionWidth,
      horizontalOffsetFraction: configuredHorizontalOffset,
      verticalOffsetFraction: configuredVerticalOffset,
      viewportHeight: containerHeight,
      viewportWidth: containerWidth,
    })
    this.renderer.domElement.dataset.compositionHorizontalOffset =
      String(configuredHorizontalOffset)
    this.renderer.domElement.dataset.compositionVerticalOffset =
      String(configuredVerticalOffset)
    this.renderer.domElement.dataset.modelScale = String(modelScale)
    this.renderer.domElement.dataset.minDistanceFactor = String(
      zoomProfile.minDistanceFactor,
    )
    this.renderer.domElement.dataset.zoomSpeed = String(zoomProfile.zoomSpeed)
    this.renderer.domElement.dataset.previewPresentationSignature =
      createModelPreviewPresentationSignature(current.descriptor)
    this.camera.setViewOffset(
      containerWidth,
      containerHeight,
      viewOffset.x,
      viewOffset.y,
      containerWidth,
      containerHeight,
    )
    this.camera.updateProjectionMatrix()
    this.controls.target.copy(fit.target)
    this.controls.zoomSpeed = zoomProfile.zoomSpeed
    this.controls.minDistance = fit.distance * zoomProfile.minDistanceFactor
    this.controls.maxDistance = fit.distance * 2.25
    this.controls.update()
    this.controls.enableDamping = previousDamping
    this.controls.autoRotate = previousAutoRotate
  }

  private confirmInitialFrame(animalId: string): void {
    if (this.firstFrameConfirmationFrame !== null) {
      window.cancelAnimationFrame(this.firstFrameConfirmationFrame)
    }
    this.firstFrameConfirmationFrame = window.requestAnimationFrame(() => {
      this.firstFrameConfirmationFrame = window.requestAnimationFrame(() => {
        this.firstFrameConfirmationFrame = null
        if (!this.destroyed && this.current?.animalId === animalId) {
          this.renderer.domElement.dataset.firstFrameRendered = 'true'
          this.options.onModelReady?.(animalId)
        }
      })
    })
  }

  private applyPresentationSettings(staged: StagedViewerModel): void {
    if (import.meta.env.MODE === 'review') {
      this.renderer.domElement.dataset.activeAnimalId = staged.animalId
      this.renderer.domElement.dataset.initialYawDegrees = String(
        staged.descriptor.presentation.initialYawDegrees,
      )
    }
    const cameraLightScale =
      staged.descriptor.presentation.cameraLightScale ?? 1
    this.cameraKeyLight.intensity =
      CAMERA_KEY_INTENSITY * cameraLightScale
    this.cameraFillLight.intensity =
      CAMERA_FILL_INTENSITY * cameraLightScale
    this.renderer.toneMappingExposure =
      staged.descriptor.presentation.toneMappingExposure ??
      DEFAULT_TONE_MAPPING_EXPOSURE
  }

  private updateAutoRotation(now: number): void {
    this.controls.autoRotate = !this.reducedMotion && now >= this.resumeRotationAt
    this.renderer.domElement.dataset.autoRotate = String(this.controls.autoRotate)
  }

  private updateCameraLighting(): void {
    updateCameraRelativeLightingPose(
      this.cameraLightingPose,
      this.camera.position,
      this.controls.target,
    )
    this.cameraLightTarget.position.copy(
      this.cameraLightingPose.targetPosition,
    )
    this.cameraKeyLight.position.copy(this.cameraLightingPose.keyPosition)
    this.cameraFillLight.position.copy(this.cameraLightingPose.fillPosition)
  }

  private finishTransition(): void {
    const transition = this.transition
    if (!transition) {
      this.renderer.domElement.dataset.transitioning = 'false'
      this.renderer.domElement.dataset.transitionPhase = 'idle'
      return
    }
    this.switchTransitionCamera(transition)
    this.transition = null
    this.disposeStagedModel(transition.outgoing)
    this.clearTransitionOpacity()
    this.renderer.domElement.dataset.transitioning = 'false'
    this.renderer.domElement.dataset.transitionPhase = 'idle'
  }

  private cancelTransitionForReplacement(): void {
    const transition = this.transition
    if (!transition) {
      return
    }

    this.transition = null
    if (transition.cameraSwitched) {
      // The incoming model is already the only visible one and remains the
      // current presentation. The old outgoing scene can disappear directly.
      this.disposeStagedModel(transition.outgoing)
    } else {
      // The old outgoing model is still visible. Keep it and its current
      // camera fit; discard the invisible incoming staging scene.
      this.disposeStagedModel(transition.incoming)
      transition.outgoing.group.visible = true
      this.current = transition.outgoing
    }
    this.clearTransitionOpacity()
    this.renderer.domElement.dataset.transitioning = 'false'
    this.renderer.domElement.dataset.transitionPhase = 'idle'
  }

  private switchTransitionCamera(transition: ModelTransition): void {
    if (transition.cameraSwitched) {
      return
    }
    transition.outgoing.group.visible = false
    transition.incoming.group.visible = true
    transition.cameraSwitched = true
    this.applyPresentationSettings(transition.incoming)
    this.reset()
    this.renderer.domElement.dataset.transitionPhase = 'incoming'
  }

  private updateTransition(now: number): void {
    const transition = this.transition
    if (!transition) {
      return
    }
    const linearProgress = Math.min(
      Math.max((now - transition.startedAt) / transition.duration, 0),
      1,
    )
    const frame = computeModelTransitionFrame(linearProgress)
    if (frame.phase === 'incoming') {
      this.switchTransitionCamera(transition)
    }
    this.setTransitionOpacity(frame.modelOpacity)
    if (linearProgress >= 1) {
      this.finishTransition()
    }
  }

  private setTransitionOpacity(opacity: number): void {
    this.container.style.setProperty(
      '--model-transition-opacity',
      String(Math.min(Math.max(opacity, 0), 1)),
    )
  }

  private clearTransitionOpacity(): void {
    this.container.style.removeProperty('--model-transition-opacity')
  }

  private startLoop(): void {
    this.renderer.setAnimationLoop((time) => {
      const deltaSeconds = Math.min(Math.max((time - this.lastFrameTime) / 1_000, 0), 0.1)
      this.lastFrameTime = time
      if (import.meta.env.MODE === 'review') {
        const requestedReviewTime = Number(
          this.renderer.domElement.dataset.reviewAnimationTime,
        )
        this.reviewAnimationTime = Number.isFinite(requestedReviewTime)
          ? requestedReviewTime
          : null
      }
      const holdingInitialPose = time < this.initialPoseHoldUntil
      if (holdingInitialPose) {
        this.controls.autoRotate = false
        this.renderer.domElement.dataset.autoRotate = 'false'
      } else {
        this.updateAutoRotation(time)
      }
      if (this.current?.mixer && this.current.action) {
        if (this.reviewAnimationTime === null) {
          if (!holdingInitialPose) {
            this.current.mixer.update(deltaSeconds)
          }
        } else {
          this.current.mixer.timeScale = 1
          this.current.action.paused = false
          this.current.mixer.setTime(this.reviewAnimationTime)
          this.current.action.paused = true
          this.current.mixer.timeScale = 0
        }
      }
      this.transition?.outgoing.mixer?.update(deltaSeconds)
      if (import.meta.env.MODE === 'review') {
        const action = this.current?.action
        this.renderer.domElement.dataset.animationTime = action
          ? action.time.toFixed(4)
          : ''
        this.renderer.domElement.dataset.animationPaused = String(
          (action?.paused ?? false) || this.current?.mixer?.timeScale === 0,
        )
        this.renderer.domElement.dataset.animationTimeScale = action
          ? (
              action.getEffectiveTimeScale() *
              (this.current?.mixer?.timeScale ?? 1)
            ).toFixed(4)
          : ''
        let maximumMorphWeight = 0
        const morphTargetWeights: string[] = []
        this.current?.modelRoot.traverse((object) => {
          const influences = (
            object as typeof object & {
              readonly morphTargetInfluences?: readonly number[]
            }
          ).morphTargetInfluences
          if (influences) {
            maximumMorphWeight = Math.max(
              maximumMorphWeight,
              ...influences.map((weight) => Math.abs(weight)),
            )
            morphTargetWeights.push(
              `${object.name}:${influences
                .map((weight) => weight.toFixed(4))
                .join(',')}`,
            )
          }
        })
        this.renderer.domElement.dataset.maximumMorphWeight =
          maximumMorphWeight.toFixed(4)
        this.renderer.domElement.dataset.morphTargetWeights =
          morphTargetWeights.join(';')
      }
      this.updateTransition(time)
      this.controls.update()
      this.updateCameraLighting()
      this.renderer.render(this.scene, this.camera)
    })
  }

  private stopLoop(): void {
    this.renderer.setAnimationLoop(null)
  }
}
