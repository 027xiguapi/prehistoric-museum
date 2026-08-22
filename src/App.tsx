import { MuseumExperience, type InitialAppState } from './MuseumExperience'

export function App({
  initialState,
}: {
  readonly initialState?: InitialAppState
} = {}) {
  return (
    <MuseumExperience
      {...(initialState ? { initialAnimalId: initialState.animalId } : {})}
      {...(initialState ? { initialPageKind: initialState.pageKind } : {})}
      rootFallback={initialState?.rootFallback ?? false}
    />
  )
}
