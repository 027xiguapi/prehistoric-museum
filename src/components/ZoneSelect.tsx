'use client'

import {
  Bug,
  Flag,
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
  /** Thumbnail of the category's first animal, peeking from the region corner. */
  readonly thumbnail: string | null
}

/**
 * Walking trail looping past every region, drawn in the 100x100 map
 * coordinate space (stretched with the map canvas). It slips underneath
 * the opaque terrain blobs, so only the segments between regions show —
 * like paths connecting the lands on a real park map.
 */
function ZoneTrail() {
  return (
    <svg
      aria-hidden="true"
      className="zone-map__trail"
      focusable="false"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <path
        className="zone-map__trail-bed"
        d="M 13 93 C 9 82 8 66 12 50 C 15 36 24 20 41 16 C 56 12 72 11 85 15 C 95 19 95 34 79 48 C 68 58 64 70 60 84 C 54 92 40 82 41 70 C 42 62 42 56 43 51 C 38 70 26 86 13 93 Z"
      />
      <path
        className="zone-map__trail-dots"
        d="M 13 93 C 9 82 8 66 12 50 C 15 36 24 20 41 16 C 56 12 72 11 85 15 C 95 19 95 34 79 48 C 68 58 64 70 60 84 C 54 92 40 82 41 70 C 42 62 42 56 43 51 C 38 70 26 86 13 93 Z"
      />
    </svg>
  )
}

/**
 * Zoo-map style homepage: each category is a terrain region placed on the
 * map (ice up north, forest in the middle, grassland down south, the sea
 * along the west coast, the dinosaur valley east and the insect corner
 * north-east), with a dotted walking trail visiting them all.
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
        <ZoneTrail />
        <span aria-hidden="true" className="zone-map__entrance">
          <Flag size={17} strokeWidth={2.3} />
        </span>
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
              <span aria-hidden="true" className="zone-region__watermark">
                <Icon size="100%" strokeWidth={1.3} />
              </span>
              <span className="zone-region__sign">
                <span aria-hidden="true" className="zone-region__icon">
                  <Icon size={15} strokeWidth={2.5} />
                </span>
                <strong className="zone-region__name">
                  {zoneMessages.name}
                </strong>
                <span className="zone-region__count">
                  {messages.zoneSelect.friends(zone.count)}
                </span>
              </span>
              <span className="zone-region__tagline">
                {zoneMessages.tagline}
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
