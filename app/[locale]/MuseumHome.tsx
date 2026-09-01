'use client'

import { useEffect, useMemo } from 'react'
import { SettingsButton } from '@/src/components/buttons/SettingsButton'
import { LanguageMenu } from '@/src/components/LanguageMenu'
import { ZoneSelect, type ZoneCardData } from '@/src/components/ZoneSelect'
import { draftAnimalsByZone } from '@/src/content/collections/draft-zones'
import { zoneCategories } from '@/src/content/collections/categories'
import { useI18n } from '@/src/i18n/I18nProvider'
import { updateLocalizedMetadata } from '@/src/i18n/metadata'
import {
  localReviewMode,
  previewableAnimalPackages,
  toRuntimeAnimal,
} from '@/src/museum/runtime-animal'
import { localReviewAnimals } from '@/src/review/active-catalog'

// Client entry for the museum home page: the zone-selection map, the
// settings/language actions, and localized metadata. The exhibit stage
// lives in AnimalExhibit.
export function MuseumHome() {
  const { locale, messages } = useI18n()
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

  useEffect(() => {
    updateLocalizedMetadata({
      locale,
      documentTitle: messages.documentTitle,
      museumTitle: messages.museumName,
      creatorBrand: messages.creatorBrand,
      description: messages.seo.description(animals.length),
      socialImageAlt: messages.seo.socialImageAlt,
    })
  }, [animals.length, locale, messages])

  return (
    <main className="museum-experience" data-page-kind="zone-select">
      <ZoneSelect zones={zoneCards} />
      <div className="zone-select-actions">
        <SettingsButton
          className="zone-select-settings"
          href={`/${locale}/config/`}
          label={messages.config.title}
        />
        <LanguageMenu />
      </div>
    </main>
  )
}
