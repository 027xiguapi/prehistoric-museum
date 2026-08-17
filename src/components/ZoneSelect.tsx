'use client'

import {
  Bug,
  Leaf,
  Snowflake,
  Sun,
  TreePine,
  Waves,
  Bone,
  type LucideIcon,
} from 'lucide-react'

import type { ZoneCategoryId } from '../content/collections/categories'
import { useI18n } from '../i18n/I18nProvider'

const zoneIcons: Readonly<Record<ZoneCategoryId, LucideIcon>> = {
  dinosaur: Bone,
  plains: Sun,
  forest: TreePine,
  ice: Snowflake,
  ocean: Waves,
  insect: Bug,
}

export interface ZoneCardData {
  readonly id: ZoneCategoryId
  readonly count: number
  /** Thumbnail of the category's first animal, used as the region backdrop. */
  readonly thumbnail: string | null
}

/**
 * Zoo-map style homepage: each category is a terrain region placed on the
 * map (ice up top, forest in the middle, grassland at the bottom, plus the
 * sea, the dinosaur valley and the insect corner).
 */
export function ZoneSelect({
  onEnterZone,
  zones,
}: {
  readonly onEnterZone: (zoneId: ZoneCategoryId) => void
  readonly zones: readonly ZoneCardData[]
}) {
  const { messages } = useI18n()

  return (
    <section aria-label={messages.zoneSelect.title} className="zone-select">
      <div className="zone-select__header">
        <h1 className="museum-kicker">
          <span aria-hidden="true" className="museum-mark">
            <Leaf size={16} strokeWidth={2.3} />
          </span>
          <span>{messages.museumName}</span>
        </h1>
        <p className="zone-select__subtitle">{messages.zoneSelect.subtitle}</p>
        <h2 className="zone-select__title">{messages.zoneSelect.title}</h2>
      </div>
      <div className="zone-map" role="list">
        {zones.map((zone) => {
          const zoneMessages = messages.zones[zone.id]
          const Icon = zoneIcons[zone.id]
          return (
            <button
              aria-label={messages.zoneSelect.enter(zoneMessages.name)}
              className="zone-region"
              data-zone-id={zone.id}
              key={zone.id}
              onClick={() => onEnterZone(zone.id)}
              role="listitem"
              type="button"
            >
              {zone.thumbnail ? (
                <img
                  alt=""
                  aria-hidden="true"
                  className="zone-region__backdrop"
                  decoding="async"
                  loading="lazy"
                  src={zone.thumbnail}
                />
              ) : null}
              <span aria-hidden="true" className="zone-region__icon">
                <Icon size={26} strokeWidth={2.1} />
              </span>
              <span className="zone-region__copy">
                <strong>{zoneMessages.name}</strong>
                <span className="zone-region__tagline">
                  {zoneMessages.tagline}
                </span>
                <span className="zone-region__count">
                  {messages.zoneSelect.friends(zone.count)}
                </span>
              </span>
            </button>
          )
        })}
        <span aria-hidden="true" className="zone-map__compass">
          N
        </span>
      </div>
    </section>
  )
}
