'use client'

import {
  useCallback,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  AnimalCollectionSheet,
  type CollectionAnimal,
} from '@/src/components/AnimalCollectionSheet'
import { ArViewer } from '@/src/components/ArViewer'
import { BackButton } from '@/src/components/buttons/BackButton'
import { SettingsButton } from '@/src/components/buttons/SettingsButton'
import { LanguageMenu } from '@/src/components/LanguageMenu'
import { ParentDrawer } from '@/src/components/ParentDrawer'
import { SceneAtmosphere } from '@/src/components/SceneAtmosphere'
import type { CarePlayKind } from '@/src/components/StagePlayEffect'
import { ZoneSelect, type ZoneCardData } from '@/src/components/ZoneSelect'
import { animalSeoDescription } from '@/src/content/animal-seo'
import { draftAnimalsByZone } from '@/src/content/collections/draft-zones'
import {
  zoneCategories,
  zoneCategoryById,
  zoneCategoryIdsForAnimal,
  zoneIdsForAnimal,
  type ZoneCategoryId,
} from '@/src/content/collections/categories'
import { useI18n } from '@/src/i18n/I18nProvider'
import { updateLocalizedMetadata } from '@/src/i18n/metadata'
import { formatModelSize } from '@/src/model-policy'
import { AnimalNavigation } from '@/src/museum/AnimalNavigation'
import { LeftToolbar } from '@/src/museum/LeftToolbar'
import { ModelDataNoticeAside } from '@/src/museum/ModelDataNoticeAside'
import {
  museumExhibitHref,
  type AppPageKind,
} from '@/src/museum/routing'
import {
  defaultPackage,
  localReviewMode,
  previewableAnimalPackages,
  publishedMainAnimals,
  readInitialAnimal,
  toRuntimeAnimal,
  type LoadedRuntimeAnimal,
  type RuntimeAnimal,
} from '@/src/museum/runtime-animal'
import { SceneBackground } from '@/src/museum/SceneBackground'
import { StagePanel } from '@/src/museum/StagePanel'
import type {
  ModelLoadingProgress,
  ViewerFailureKind,
} from '@/src/museum/types'
import { useAnimalLoadCoordinator } from '@/src/museum/use-animal-load-coordinator'
import { useModelDataNotice } from '@/src/museum/use-model-data-notice'
import { useNarration } from '@/src/museum/use-narration'
import { localReviewAnimals } from '@/src/review/active-catalog'
import type {
  AnimalLoadCoordinator,
  AnimalLoadSnapshot,
  IdlePreloadCoordinator,
} from '@/src/state'
import type {
  ViewerController,
  ViewerFailure,
} from '@/src/viewer/ViewerController'
import { ModelCache } from '@/src/viewer/model-cache'
import { selectModelPreviewProfile } from '@/src/viewer/model-preview-profiles'
import { modelPreviewFor } from '@/src/viewer/responsive-model-stills'

interface AnimalExhibitProps {
  readonly animalId: string
}

const initialLoadSnapshot: AnimalLoadSnapshot = {
  readyAnimalId: null,
  requestedAnimalId: defaultPackage.id,
  requestToken: 0,
  phase: 'loading',
  showDelayedLabel: false,
  failure: null,
}

// Client entry for the animal detail exhibit page.
export function AnimalExhibit({ animalId }: AnimalExhibitProps) {
  const { locale, messages } = useI18n()
  const productionAnimals = useMemo(
    () => publishedMainAnimals.map((animal) => toRuntimeAnimal(animal, locale)),
    [locale],
  )
  const defaultAnimal =
    productionAnimals[0] ?? toRuntimeAnimal(defaultPackage, locale)
  const animals = useMemo(
    () =>
      localReviewMode
        ? localReviewAnimals.map((animal) => toRuntimeAnimal(animal, locale))
        : previewableAnimalPackages.map((animal) =>
            toRuntimeAnimal(animal, locale),
          ),
    [locale],
  )
  const animalIndex = useMemo(
    () => new Map(animals.map((animal) => [animal.id, animal])),
    [animals],
  )
  const zoneCards = useMemo<ZoneCardData[]>(
    () =>
      zoneCategories
        // The sky zone is hidden from the homepage map for now; its animals
        // stay reachable via the category page, which keeps the full list.
        .filter((zone) => zone.id !== 'sky')
        .map((zone) => ({
          // Draft pilots (dev/review builds only) unlock extra animals per zone.
          count:
            zone.animalIds.length +
            (draftAnimalsByZone.get(zone.id)?.length ?? 0),
          id: zone.id,
          thumbnail: animalIndex.get(zone.defaultAnimalId)?.assets.thumbnail ?? null,
        })),
    [animalIndex],
  )
  const initialAnimal = useMemo(
    () =>
      (animalId
        ? animals.find((animal) => animal.id === animalId)
        : undefined) ?? readInitialAnimal(animals, defaultAnimal),
    [animals, defaultAnimal, animalId],
  )
  const modelCache = useMemo(() => new ModelCache(), [])
  const [idlePreloadTargets] = useState(() =>
      animals.map((animal) => ({
        id: animal.id,
        imageUrls: () => {
          const portrait = window.matchMedia('(orientation: portrait)').matches
          const previewProfile = selectModelPreviewProfile(
            (media) => window.matchMedia(media).matches,
          )
          const preview = modelPreviewFor(
            animal.id,
            previewProfile.fileName,
          )
          return [
            portrait
              ? animal.assets.backgroundPortrait
              : animal.assets.backgroundLandscape,
            preview ??
              (previewProfile.height > previewProfile.width
                ? animal.assets.posterPortrait
                : animal.assets.poster),
          ]
        },
        modelUrl: animal.assets.model,
      })),
  )

  const viewerControllerRef = useRef<ViewerController | null>(null)
  const coordinatorRef = useRef<AnimalLoadCoordinator<LoadedRuntimeAnimal> | null>(null)
  const idlePreloadCoordinatorRef = useRef<IdlePreloadCoordinator | null>(null)
  const activeAnimalRef = useRef(initialAnimal)
  const animalIndexRef = useRef(animalIndex)
  const messagesRef = useRef(messages)
  const liveMessageLocaleRef = useRef(locale)
  const pageKindRef = useRef<AppPageKind>('animal-detail')
  const detailAnimalIdRef = useRef<string | null>(initialAnimal.id)
  useLayoutEffect(() => {
    animalIndexRef.current = animalIndex
  }, [animalIndex])
  useLayoutEffect(() => {
    messagesRef.current = messages
  }, [messages])
  const backgroundTimerRef = useRef<number | null>(null)
  const visibleBackgroundRef = useRef(initialAnimal)
  const preloadedImagesRef = useRef(new Map<string, HTMLImageElement>())
  const focusPointerRef = useRef<{
    readonly pointerId: number
    readonly startedAt: number
    readonly x: number
    readonly y: number
  } | null>(null)
  const viewerRequiresRemountRef = useRef(false)
  const drawerTriggerRef = useRef<HTMLButtonElement>(null)
  const collectionTriggerRef = useRef<HTMLElement>(null)
  const focusTriggerRef = useRef<HTMLButtonElement>(null)
  const focusExitRef = useRef<HTMLButtonElement>(null)
  const [viewerController, setViewerController] = useState<ViewerController | null>(null)
  const [viewerRetryKey, setViewerRetryKey] = useState(0)
  const [activeAnimalId, setActiveAnimalId] = useState(initialAnimal.id)
  const [pageKind, setPageKind] = useState<AppPageKind>('animal-detail')
  const [activeZoneId, setActiveZoneId] = useState<ZoneCategoryId | null>(null)
  useLayoutEffect(() => {
    pageKindRef.current = pageKind
  }, [pageKind])
  const [outgoingAnimal, setOutgoingAnimal] = useState<RuntimeAnimal | null>(null)
  const [backgroundTransitionReady, setBackgroundTransitionReady] =
    useState(false)
  const [loadSnapshot, setLoadSnapshot] = useState<AnimalLoadSnapshot>(() => ({
    ...initialLoadSnapshot,
    requestedAnimalId: initialAnimal.id,
  }))
  const [modelReady, setModelReady] = useState(false)
  const [carePlay, setCarePlay] = useState<CarePlayKind | null>(null)
  const careCelebrateTimer = useRef<number | null>(null)
  const [modelLoadingProgress, setModelLoadingProgress] =
    useState<ModelLoadingProgress | null>(null)
  const [viewerFailure, setViewerFailure] =
    useState<ViewerFailureKind | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [collectionOpen, setCollectionOpen] = useState(false)
  const [storyOpen, setStoryOpen] = useState(true)
  const [focusMode, setFocusMode] = useState(false)
  const [arMode, setArMode] = useState(false)
  const [liveMessage, setLiveMessage] = useState(
    messages.loading.initialExhibit(initialAnimal.name),
  )
  const activeAnimal = animalIndex.get(activeAnimalId) ?? initialAnimal
  const backCategoryId = useMemo(
    () => zoneCategoryIdsForAnimal(activeAnimal)[0] ?? null,
    [activeAnimal],
  )

  const { narration, narrationSnapshot } = useNarration({
    activeAnimalId: activeAnimal.id,
    coordinatorRef,
    loadPhase: loadSnapshot.phase,
    modelReady,
    narrationSource: activeAnimal.assets.narration,
    readyAnimalId: loadSnapshot.readyAnimalId,
  })
  const {
    clearLargeModelNotice,
    clearLargeModelNoticeForToken,
    dismissModelDataNotice,
    modelDataNotice,
    scheduleLargeModelNotice,
  } = useModelDataNotice(coordinatorRef)

  useEffect(() => {
    activeAnimalRef.current = activeAnimal
  }, [activeAnimal])
  const overlayOpen = drawerOpen || collectionOpen || arMode
  // Review packages and e2e fixtures live outside the curated zones, so the
  // zone filter only applies to the production catalog.
  const zoneAppliesToNavigation = !localReviewMode
  const navigationAnimals = useMemo(() => {
    if (!zoneAppliesToNavigation || !activeZoneId) {
      return animals
    }
    const zoneAnimalIds = new Set(
      zoneCategoryById.get(activeZoneId)?.animalIds ?? [],
    )
    const filtered = animals.filter((animal) => zoneAnimalIds.has(animal.id))
    return filtered.length > 0 ? filtered : animals
  }, [activeZoneId, animals, zoneAppliesToNavigation])
  const collectionAnimals = useMemo<CollectionAnimal[]>(
    () =>
      animals.map((animal) => ({
        classification: animal.classification,
        id: animal.id,
        name: animal.name,
        thumbnail: animal.assets.thumbnail,
      })),
    [animals],
  )

  useEffect(() => {
    const animalDetail =
      pageKind === 'animal-detail'
        ? {
            description: animalSeoDescription(activeAnimal.narrationScript),
            id: activeAnimal.id,
            name: activeAnimal.name,
          }
        : undefined
    updateLocalizedMetadata({
      locale,
      documentTitle: animalDetail
        ? `${activeAnimal.name} | ${messages.museumName}`
        : messages.documentTitle,
      museumTitle: messages.museumName,
      creatorBrand: messages.creatorBrand,
      description: messages.seo.description(animals.length),
      socialImageAlt: messages.seo.socialImageAlt,
      ...(animalDetail ? { animalDetail } : {}),
    })
  }, [activeAnimal.id, activeAnimal.name, activeAnimal.narrationScript, animals.length, locale, messages, pageKind])

  useEffect(() => {
    viewerController?.setAccessibilityLabel(
      activeAnimal.viewer.accessibilityLabel ??
        messages.viewer.modelLabel(activeAnimal.name),
    )
  }, [activeAnimal.name, activeAnimal.viewer.accessibilityLabel, messages, viewerController])

  useEffect(() => {
    const preloadedImages = preloadedImagesRef.current
    return () => {
      if (backgroundTimerRef.current !== null) {
        window.clearTimeout(backgroundTimerRef.current)
      }
      for (const image of preloadedImages.values()) {
        image.src = ''
      }
      preloadedImages.clear()
    }
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        idlePreloadCoordinatorRef.current?.cancelAll()
        return
      }

      const loadCoordinator = coordinatorRef.current
      const idlePreloadCoordinator = idlePreloadCoordinatorRef.current
      const snapshot = loadCoordinator?.getSnapshot()
      if (
        idlePreloadCoordinator &&
        snapshot?.phase === 'idle' &&
        snapshot.readyAnimalId
      ) {
        idlePreloadCoordinator.scheduleAfterCommit(snapshot.readyAnimalId)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const handleViewerFailure = useCallback((failure: ViewerFailure) => {
    if (failure.kind === 'animation') {
      console.warn(failure.message)
      return
    }
    if (failure.kind === 'model-load') {
      console.error(failure.message, failure.cause)
      return
    }
    setModelReady(false)
    setModelLoadingProgress(null)
    clearLargeModelNotice()
    setViewerFailure(failure.kind)
    viewerRequiresRemountRef.current =
      failure.kind === 'webgl-unavailable' || failure.kind === 'context-lost'
    const fatalViewerFailure =
      failure.kind === 'webgl-unavailable' || failure.kind === 'context-lost'
    if (failure.kind === 'context-lost') {
      coordinatorRef.current?.destroy()
      coordinatorRef.current = null
      idlePreloadCoordinatorRef.current?.destroy()
      idlePreloadCoordinatorRef.current = null
    }
    if (fatalViewerFailure) {
      setLoadSnapshot((snapshot) => ({
        ...snapshot,
        readyAnimalId: snapshot.readyAnimalId ?? activeAnimalRef.current.id,
        requestedAnimalId: activeAnimalRef.current.id,
        phase: 'idle',
        showDelayedLabel: false,
        failure: null,
      }))
    }
    setLiveMessage(
      messagesRef.current.viewerFallbackAnnouncement(
        activeAnimalRef.current.name,
      ),
    )
  }, [clearLargeModelNotice])

  const handleControllerReady = useCallback((controller: ViewerController | null) => {
    viewerControllerRef.current = controller
    setViewerController(controller)
    if (controller) {
      viewerRequiresRemountRef.current = false
      setViewerFailure(null)
    }
  }, [])

  const handleFirstFrameRendered = useCallback((animalId: string) => {
    if (animalId !== activeAnimalRef.current.id) {
      return
    }
    setModelReady(true)
  }, [])

  const handleBackgroundReady = useCallback((animalId: string) => {
    if (animalId !== activeAnimalRef.current.id) {
      return
    }
    setBackgroundTransitionReady(true)
    if (backgroundTimerRef.current !== null) {
      window.clearTimeout(backgroundTimerRef.current)
    }
    backgroundTimerRef.current = window.setTimeout(
      () => {
        backgroundTimerRef.current = null
        if (animalId !== activeAnimalRef.current.id) {
          return
        }
        visibleBackgroundRef.current = activeAnimalRef.current
        setOutgoingAnimal(null)
        setBackgroundTransitionReady(false)
      },
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 80 : 520,
    )
  }, [])

  const handleBackgroundFailure = useCallback((animalId: string) => {
    if (animalId !== activeAnimalRef.current.id) {
      return
    }
    if (backgroundTimerRef.current !== null) {
      window.clearTimeout(backgroundTimerRef.current)
      backgroundTimerRef.current = null
    }
    setBackgroundTransitionReady(false)
    setLiveMessage(
      messagesRef.current.loading.backgroundPending(
        activeAnimalRef.current.name,
      ),
    )
  }, [])

  useAnimalLoadCoordinator({
    activeAnimalRef,
    animalIndexRef,
    backgroundTimerRef,
    clearLargeModelNotice,
    clearLargeModelNoticeForToken,
    coordinatorRef,
    idlePreloadCoordinatorRef,
    idlePreloadTargets,
    locale,
    messagesRef,
    modelCache,
    narration,
    preloadedImagesRef,
    scheduleLargeModelNotice,
    setActiveAnimalId,
    setBackgroundTransitionReady,
    setLiveMessage,
    setLoadSnapshot,
    setModelLoadingProgress,
    setOutgoingAnimal,
    setViewerFailure,
    viewerController,
    visibleBackgroundRef,
  })

  const exitFocusMode = useCallback(() => {
    focusPointerRef.current = null
    viewerControllerRef.current?.setFocusMode(false)
    setFocusMode(false)
    setLiveMessage(messagesRef.current.focusExited)
    window.setTimeout(() => focusTriggerRef.current?.focus(), 0)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return
      }
      if (focusMode) {
        event.preventDefault()
        exitFocusMode()
      } else if (collectionOpen) {
        event.preventDefault()
        setCollectionOpen(false)
      } else if (drawerOpen) {
        event.preventDefault()
        setDrawerOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [collectionOpen, drawerOpen, exitFocusMode, focusMode])

  useEffect(() => {
    if (focusMode) {
      focusExitRef.current?.focus()
    }
  }, [focusMode])

  const leaveAnimalDetailRoute = useCallback(() => {
    if (pageKindRef.current !== 'animal-detail') {
      return
    }
    pageKindRef.current = 'museum'
    detailAnimalIdRef.current = null
    window.history.replaceState(
      window.history.state,
      '',
      museumExhibitHref(),
    )
    setPageKind('museum')
  }, [])

  /** Keeps the rail in sync when a collection pick jumps across zones. */
  const switchZoneForAnimal = (animalId: string) => {
    if (!zoneAppliesToNavigation) {
      return
    }
    const zoneIds = zoneIdsForAnimal(animalId)
    setActiveZoneId(zoneIds[0] ?? null)
  }

  const requestAnimal = (animalId: string) => {
    const coordinator = coordinatorRef.current
    if (!coordinator) {
      return
    }
    const snapshot = coordinator.getSnapshot()
    if (
      (snapshot.phase === 'idle' && snapshot.readyAnimalId === animalId) ||
      (snapshot.phase === 'loading' &&
        snapshot.requestedAnimalId === animalId)
    ) {
      return
    }
    if (
      pageKindRef.current === 'animal-detail' &&
      animalId !== detailAnimalIdRef.current
    ) {
      leaveAnimalDetailRoute()
    }
    idlePreloadCoordinatorRef.current?.cancelAll()
    clearLargeModelNotice()
    setLiveMessage(messages.loading.preparingExhibit)
    void coordinator.request(animalId)
  }

  const retryAnimal = () => {
    idlePreloadCoordinatorRef.current?.cancelAll()
    clearLargeModelNotice()
    setLiveMessage(messages.loading.retryingExhibit)
    const coordinator = coordinatorRef.current
    if (viewerRequiresRemountRef.current) {
      viewerRequiresRemountRef.current = false
      coordinator?.destroy()
      coordinatorRef.current = null
      setViewerFailure(null)
      setModelReady(false)
      setViewerRetryKey((retryKey) => retryKey + 1)
    } else if (coordinator?.getSnapshot().phase === 'failed') {
      setViewerFailure(null)
      void coordinator.retry()
    } else if (coordinator) {
      setViewerFailure(null)
      void coordinator.reload(activeAnimal.id)
    } else {
      setViewerRetryKey((retryKey) => retryKey + 1)
    }
  }

  const requestAdjacentAnimal = (offset: -1 | 1) => {
    const snapshot = coordinatorRef.current?.getSnapshot()
    const anchorAnimalId =
      snapshot?.requestedAnimalId ??
      snapshot?.readyAnimalId ??
      activeAnimalRef.current.id
    const anchorIndex = Math.max(
      navigationAnimals.findIndex((animal) => animal.id === anchorAnimalId),
      0,
    )
    const target =
      navigationAnimals[
        (anchorIndex + offset + navigationAnimals.length) % navigationAnimals.length
      ]
    if (target) {
      requestAnimal(target.id)
    }
  }
  const initialModelFailure =
    !modelReady && loadSnapshot.phase === 'failed'
      ? messages.loading.failed
      : viewerFailure === 'context-lost'
        ? messages.viewer.contextLost
        : viewerFailure === 'webgl-unavailable'
          ? messages.viewer.webglUnavailable
          : null
  const modelDataNoticeMessage =
    modelDataNotice?.kind === 'first-entry'
      ? messages.dataNotice.wifi
      : modelDataNotice?.kind === 'large-model'
        ? messages.dataNotice.largeModel(
            animalIndex.get(modelDataNotice.animalId)?.name ??
              messages.loading.unknownAnimal,
            formatModelSize(modelDataNotice.modelBytes),
          )
        : null

  useEffect(() => {
    if (liveMessageLocaleRef.current === locale) {
      return
    }
    liveMessageLocaleRef.current = locale
    setLiveMessage(
      viewerFailure
        ? messages.viewerFallbackAnnouncement(activeAnimal.name)
        : '',
    )
  }, [activeAnimal.name, locale, messages, viewerFailure])

  const enterFocusMode = () => {
    if (!modelReady) {
      return
    }
    viewerControllerRef.current?.setFocusMode(true)
    setFocusMode(true)
    setLiveMessage(messages.focusEntered)
  }

  /** Runs a bath/ball interaction: particle burst, live message, happy hop. */
  const playCare = (kind: CarePlayKind) => {
    if (!modelReady) {
      return
    }
    setCarePlay(kind)
    const name = activeAnimal.name
    setLiveMessage(
      kind === 'bath'
        ? messages.care.bathed(name)
        : kind === 'meat'
          ? messages.care.fedMeat(name)
          : kind === 'leaf'
            ? messages.care.fedLeaves(name)
            : messages.care.played(name),
    )
    if (careCelebrateTimer.current !== null) {
      window.clearTimeout(careCelebrateTimer.current)
    }
    // Celebrate when the effect "reaches" the animal: food lands, bubbles
    // pop, the ball gets kicked back.
    careCelebrateTimer.current = window.setTimeout(() => {
      careCelebrateTimer.current = null
      viewerControllerRef.current?.celebrate()
    }, kind === 'bath' ? 1_100 : 1_700)
  }

  /** Standalone walk reaction from the dock. */
  const handleCareWalk = () => {
    if (!modelReady) {
      return
    }
    setLiveMessage(messages.care.walked(activeAnimal.name))
    viewerControllerRef.current?.walk()
  }

  /** Standalone head-shake reaction from the dock. */
  const handleCareShake = () => {
    if (!modelReady) {
      return
    }
    setLiveMessage(messages.care.shook(activeAnimal.name))
    viewerControllerRef.current?.shakeHead()
  }

  /**
   * Feed mini-game resolution: a correct bowl makes the animal walk over and
   * eat; a wrong one gets a head shake and nothing to eat.
   */
  const handleFeedPick = (kind: 'meat' | 'leaf') => {
    if (!modelReady) {
      return
    }
    const diet = activeAnimal.dietCode
    const correct =
      diet === 'herbivore'
        ? kind === 'leaf'
        : diet === 'carnivore'
          ? kind === 'meat'
          : true // omnivores and unknown diets take either bowl
    const name = activeAnimal.name
    if (!correct) {
      setLiveMessage(messages.care.refused(name))
      viewerControllerRef.current?.shakeHead()
      return
    }
    setCarePlay(kind)
    setLiveMessage(
      kind === 'meat' ? messages.care.fedMeat(name) : messages.care.fedLeaves(name),
    )
    // Food rains down while the animal walks in; its eating phase is part of
    // the walk animation.
    viewerControllerRef.current?.walkAndEat()
  }

  const handleFocusPointerDown = (
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    if (
      !focusMode ||
      !event.isPrimary ||
      (event.target instanceof Element &&
        event.target.closest('button, a') !== null)
    ) {
      focusPointerRef.current = null
      return
    }
    focusPointerRef.current = {
      pointerId: event.pointerId,
      startedAt: performance.now(),
      x: event.clientX,
      y: event.clientY,
    }
  }

  const handleFocusPointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const start = focusPointerRef.current
    focusPointerRef.current = null
    if (
      !focusMode ||
      !start ||
      start.pointerId !== event.pointerId ||
      performance.now() - start.startedAt > 500
    ) {
      return
    }
    const distance = Math.hypot(
      event.clientX - start.x,
      event.clientY - start.y,
    )
    if (distance <= 10) {
      exitFocusMode()
    }
  }

  const handleFocusPointerCancel = () => {
    focusPointerRef.current = null
  }

  const handleNarrationToggle = async () => {
    const result = await narration.toggle()
    if (result.status === 'playing') {
      setLiveMessage(messages.narration.playing(activeAnimalRef.current.name))
    } else if (result.status === 'paused') {
      setLiveMessage(messages.narration.paused(activeAnimalRef.current.name))
    }
  }

  const handleOpenDrawer = () => {
    setCollectionOpen(false)
    setDrawerOpen(true)
  }

  const handleOpenCollection = () => {
    setDrawerOpen(false)
    setCollectionOpen(true)
  }

  const handleToggleStory = () => {
    setStoryOpen((open) => !open)
  }

  const handleResetView = () => {
    viewerControllerRef.current?.reset()
    setLiveMessage(messages.resetDone)
  }

  const hasOutgoingBackground =
    outgoingAnimal !== null && outgoingAnimal.id !== activeAnimal.id
  const initialLoading =
    !modelReady &&
    loadSnapshot.readyAnimalId === null &&
    loadSnapshot.phase === 'loading'
  const currentModelLoadingProgress =
    modelLoadingProgress?.requestToken === loadSnapshot.requestToken
      ? modelLoadingProgress
      : null
  const loadingPhase =
    currentModelLoadingProgress?.phase ??
    (loadSnapshot.phase === 'loading' ? 'checking-cache' : null)
  const loadingPercent =
    currentModelLoadingProgress?.phase === 'downloading'
      ? currentModelLoadingProgress.percent
      : null
  const interfaceStyle = {
    '--animal-accent': activeAnimal.accent,
    '--animal-accent-soft': activeAnimal.accentSoft,
  } as CSSProperties

  return (
    <main
      className={`museum-experience ${focusMode ? 'museum-experience--focus' : ''}`}
      data-atmosphere={activeAnimal.atmosphere}
      data-habitat={activeAnimal.habitat}
      data-locale={locale}
      data-page-kind={pageKind}
      data-ready-animal-id={loadSnapshot.readyAnimalId ?? ''}
      data-review-mode={localReviewMode || undefined}
      data-request-token={loadSnapshot.requestToken}
      data-requested-animal-id={loadSnapshot.requestedAnimalId ?? ''}
      id="museum-experience"
      style={interfaceStyle}
    >
      {pageKind === 'zone-select' ? (
        <>
          <ZoneSelect zones={zoneCards} />
          <div className="zone-select-actions">
            <SettingsButton
              className="zone-select-settings"
              href={`/${locale}/config/`}
              label={messages.config.title}
            />
            <LanguageMenu />
          </div>
        </>
      ) : (
      <>
      {hasOutgoingBackground ? (
        <SceneBackground
          animal={outgoingAnimal}
          key={outgoingAnimal.id}
          phase="outgoing"
          transitionReady={backgroundTransitionReady}
        />
      ) : null}
      <SceneBackground
        animal={activeAnimal}
        key={activeAnimal.id}
        onFailure={handleBackgroundFailure}
        onReady={handleBackgroundReady}
        phase={hasOutgoingBackground ? 'incoming' : 'solo'}
        transitionReady={backgroundTransitionReady}
      />
      <SceneAtmosphere
        diffuseForestLight={activeAnimal.id === 'tyrannosaurus-rex'}
        key={`atmosphere-${activeAnimal.id}`}
        kind={activeAnimal.atmosphere}
      />
      {!focusMode && backCategoryId ? (
        <div aria-hidden={overlayOpen} inert={overlayOpen}>
          <BackButton
            className="animal-back-button"
            href={`/${locale}/category/${backCategoryId}/`}
            label={messages.collection.back}
          />
        </div>
      ) : null}
      {!focusMode ? (
        <LeftToolbar
          activeAnimal={activeAnimal}
          collectionTriggerRef={collectionTriggerRef}
          drawerTriggerRef={drawerTriggerRef}
          narrationSnapshot={narrationSnapshot}
          onNarrationToggle={handleNarrationToggle}
          onOpenCollection={handleOpenCollection}
          onOpenDrawer={handleOpenDrawer}
          onResetView={handleResetView}
          onToggleStory={handleToggleStory}
          overlayOpen={overlayOpen}
          pageKind={pageKind}
          storyOpen={storyOpen}
        />
      ) : null}

      <StagePanel
        activeAnimal={activeAnimal}
        carePlay={carePlay}
        failureMessage={initialModelFailure}
        focusExitRef={focusExitRef}
        focusMode={focusMode}
        focusTriggerRef={focusTriggerRef}
        initialLoading={initialLoading}
        loadingPercent={loadingPercent}
        loadingPhase={loadingPhase}
        modelCache={modelCache}
        modelReady={modelReady}
        onCarePlayDone={() => setCarePlay(null)}
        onCareShake={handleCareShake}
        onCareWalk={handleCareWalk}
        onControllerReady={handleControllerReady}
        onEnterFocusMode={enterFocusMode}
        onExitFocusMode={exitFocusMode}
        onFeedPick={handleFeedPick}
        onFirstFrameRendered={handleFirstFrameRendered}
        onFocusPointerCancel={handleFocusPointerCancel}
        onFocusPointerDown={handleFocusPointerDown}
        onFocusPointerUp={handleFocusPointerUp}
        onOpenAr={() => setArMode(true)}
        onPlay={playCare}
        onResetView={handleResetView}
        onRetry={retryAnimal}
        onViewerFailure={handleViewerFailure}
        overlayOpen={overlayOpen}
        viewerRetryKey={viewerRetryKey}
      />

      {!focusMode ? (
        <AnimalNavigation
          activeAnimalId={activeAnimal.id}
          initialLoading={initialLoading}
          loadingPercent={loadingPercent}
          loadingPhase={loadingPhase}
          loadSnapshot={loadSnapshot}
          navigationAnimals={navigationAnimals}
          onRequestAnimal={requestAnimal}
          onRetryAnimal={retryAnimal}
          onStepAnimal={requestAdjacentAnimal}
          overlayOpen={overlayOpen}
          pageKind={pageKind}
          rootFallback={false}
        />
      ) : null}

      {modelDataNotice && !focusMode && !overlayOpen ? (
        <ModelDataNoticeAside
          message={modelDataNoticeMessage}
          notice={modelDataNotice}
          onDismiss={dismissModelDataNotice}
        />
      ) : null}

      <ParentDrawer
        facts={activeAnimal.facts}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen && !focusMode}
        returnFocusTo={drawerTriggerRef}
        showReviewDetails={localReviewMode}
      />
      <AnimalCollectionSheet
        animals={collectionAnimals}
        currentAnimalId={loadSnapshot.readyAnimalId ?? activeAnimal.id}
        loadingAnimalId={
          loadSnapshot.phase === 'loading'
            ? loadSnapshot.requestedAnimalId
            : null
        }
        loadingPhase={loadingPhase}
        loadingPercent={loadingPercent}
        onClose={() => setCollectionOpen(false)}
        onSelect={(animalId) => {
          setCollectionOpen(false)
          switchZoneForAnimal(animalId)
          if (animalId !== (loadSnapshot.readyAnimalId ?? activeAnimal.id)) {
            requestAnimal(animalId)
          }
        }}
        open={collectionOpen && !focusMode}
        returnFocusTo={collectionTriggerRef}
      />
      {arMode ? (
        <ArViewer
          animalName={activeAnimal.name}
          descriptor={activeAnimal.viewer}
          modelCache={modelCache}
          onClose={() => setArMode(false)}
        />
      ) : null}
      </>
      )}
      <p aria-atomic="true" aria-live="polite" className="sr-only" role="status">
        {pageKind === 'zone-select' ? '' : liveMessage}
      </p>
    </main>
  )
}
