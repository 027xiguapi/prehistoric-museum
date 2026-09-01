import type { CSSProperties } from 'react'
import { PersonStanding } from 'lucide-react'
import { useI18n } from '@/src/i18n/I18nProvider'
import { adultHeightMeters } from './comparison'
import { useCountUp } from './use-count-up'

interface HeightCompareProps {
  readonly animalImage: string | null
  readonly animalName: string
  readonly sizeLabel: string
  readonly sizeMeters: {
    readonly kind: 'body-length' | 'shoulder-height' | 'wingspan' | 'group-range'
    readonly minMeters: number
    readonly maxMeters: number
  } | null
  readonly sizeText: string
}

/**
 * Animated measuring scene: a grown-up figure and the animal grow from the
 * ground line next to a metre ruler, then a dashed marker sweeps up to the
 * animal's top while the metre value counts up. Decorative; the caption
 * repeats the numbers as text.
 */
export function HeightCompare({
  animalImage,
  animalName,
  sizeLabel,
  sizeMeters,
  sizeText,
}: HeightCompareProps) {
  const { locale, messages } = useI18n()
  const animalMeters = sizeMeters?.maxMeters ?? null
  const scaleMax = Math.max(animalMeters ?? 0, adultHeightMeters) * 1.12
  const animalPct =
    animalMeters === null ? 0 : (animalMeters / scaleMax) * 100
  const adultPct = (adultHeightMeters / scaleMax) * 100
  const markerMeters = useCountUp(animalMeters ?? 0, 900, 750)
  const numberFormat = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 1,
  })
  const times =
    animalMeters === null ? null : animalMeters / adultHeightMeters
  const tickStep = scaleMax > 12 ? 5 : 1
  const ticks: number[] = []
  for (let metres = tickStep; metres <= scaleMax; metres += tickStep) {
    ticks.push(metres)
  }

  return (
    <section
      aria-label={`${messages.size.heightTitle} · ${animalName}`}
      className="size-scene"
    >
      <h3 className="size-scene__title">{messages.size.heightTitle}</h3>
      {animalMeters !== null ? (
        <div aria-hidden="true" className="height-compare">
          <div className="height-compare__zone">
            <div className="height-compare__ruler">
              <span aria-hidden="true" className="height-compare__spine" />
              {ticks.map((metres, index) => (
                <span
                  className="height-compare__tick"
                  key={metres}
                  style={
                    {
                      bottom: `${(metres / scaleMax) * 100}%`,
                      '--tick': index,
                    } as CSSProperties
                  }
                >
                  <em>{numberFormat.format(metres)}</em>
                </span>
              ))}
            </div>
            <div
              className="height-compare__grow height-compare__grow--adult"
              style={{ height: `${adultPct}%` }}
            >
              <PersonStanding size="100%" strokeWidth={1.6} />
            </div>
            <div
              className="height-compare__grow height-compare__grow--animal"
              style={{ height: `${animalPct}%` }}
            >
              {animalImage ? <img alt="" src={animalImage} /> : null}
            </div>
            <div
              className="height-compare__marker"
              style={{ bottom: `${animalPct}%` }}
            >
              <span className="height-compare__value">
                {numberFormat.format(markerMeters)} m
              </span>
            </div>
          </div>
          <div className="height-compare__ground" />
          <span className="height-compare__tag height-compare__tag--adult">
            {messages.size.adult}
          </span>
          <span className="height-compare__tag height-compare__tag--animal">
            {animalName}
          </span>
        </div>
      ) : null}
      <p className="size-scene__caption">
        <strong>
          {sizeLabel} · {sizeText}
        </strong>
        {times !== null ? (
          <span>
            {' '}
            · {messages.size.heightCompare(
              numberFormat.format(times),
              messages.size.adult,
            )}
          </span>
        ) : null}
      </p>
    </section>
  )
}
