import type { RuntimeAnimal } from './runtime-animal'

export function SceneBackground({
  animal,
  onFailure,
  onReady,
  phase,
  transitionReady,
}: {
  readonly animal: RuntimeAnimal
  readonly onFailure?: (animalId: string) => void
  readonly onReady?: (animalId: string) => void
  readonly phase: 'solo' | 'incoming' | 'outgoing'
  readonly transitionReady: boolean
}) {
  return (
    <picture
      aria-hidden="true"
      className={`scene-background scene-background--${phase}${
        transitionReady ? ' scene-background--transition-ready' : ''
      }`}
    >
      <source media="(orientation: portrait)" srcSet={animal.assets.backgroundPortrait} />
      <img
        alt=""
        decoding="async"
        fetchPriority={phase === 'solo' ? 'high' : 'auto'}
        onError={() => onFailure?.(animal.id)}
        onLoad={(event) => {
          const image = event.currentTarget
          const decoded =
            typeof image.decode === 'function'
              ? image.decode()
              : Promise.resolve()
          void decoded.then(
            () => onReady?.(animal.id),
            () => onFailure?.(animal.id),
          )
        }}
        src={animal.assets.backgroundLandscape}
      />
    </picture>
  )
}
