import type { AtmosphereKind } from '@/src/content/types'
import { AirAtmosphere } from '@/src/components/AirAtmosphere'
import { ForestAtmosphere } from '@/src/components/ForestAtmosphere'
import { IceAtmosphere } from '@/src/components/IceAtmosphere'
import { PlainsAtmosphere } from '@/src/components/PlainsAtmosphere'
import { UnderwaterAtmosphere } from '@/src/components/UnderwaterAtmosphere'

export function SceneAtmosphere({
  diffuseForestLight = false,
  kind,
}: {
  readonly diffuseForestLight?: boolean
  readonly kind: AtmosphereKind
}) {
  switch (kind) {
    case 'air':
      return <AirAtmosphere />
    case 'forest':
      return <ForestAtmosphere diffuseLight={diffuseForestLight} />
    case 'ice':
      return <IceAtmosphere />
    case 'plains':
      return <PlainsAtmosphere />
    case 'underwater':
      return <UnderwaterAtmosphere />
  }
}
