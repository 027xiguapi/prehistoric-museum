import type { Metadata } from 'next'

import type { InitialAppState } from '../../src/app-bootstrap'
import { mainAnimals } from '../../src/content/catalog'
import { MuseumClient } from '../../src/MuseumClient'
import {
  museumPageMetadata,
  museumRootQueryRedirectSource,
} from '../../src/seo/museum-page-metadata'

export function generateMetadata(): Metadata {
  return museumPageMetadata('zh-CN')
}

export default function MuseumEntryPage() {
  const defaultAnimalId = mainAnimals[0]?.id
  if (!defaultAnimalId) {
    throw new Error('主展览集合中没有可展示的动物。')
  }

  const initialState: InitialAppState = {
    animalId: defaultAnimalId,
    locale: 'zh-CN',
    pageKind: 'museum',
    preference: 'zh-CN',
    rootFallback: true,
  }

  return (
    <>
      <script
        data-museum-query-redirect=""
        dangerouslySetInnerHTML={{
          __html: museumRootQueryRedirectSource(),
        }}
      />
      <MuseumClient initialState={initialState} />
    </>
  )
}
