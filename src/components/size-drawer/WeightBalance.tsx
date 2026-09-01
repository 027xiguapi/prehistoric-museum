import type { CSSProperties } from 'react'
import {
  Apple,
  Baby,
  BusFront,
  Car,
  CircleHelp,
  PersonStanding,
  type LucideIcon,
} from 'lucide-react'
import type { WeightEstimate } from '@/src/content/size-estimates'
import { useI18n } from '@/src/i18n/I18nProvider'
import {
  maxBalanceIcons,
  pickWeightComparison,
  representativeKg,
  type WeightReferenceId,
} from './comparison'

const referenceIcons: Record<WeightReferenceId, LucideIcon> = {
  apple: Apple,
  child: Baby,
  adult: PersonStanding,
  car: Car,
  bus: BusFront,
}

interface WeightBalanceProps {
  readonly animalImage: string | null
  readonly animalName: string
  readonly weightKg: WeightEstimate | null
  readonly weightText: string | null
}

/**
 * Animated balance scale: the animal drops onto the left pan, tipping the
 * beam, then familiar reference objects (apples, kids, cars, buses) drop onto
 * the right pan one by one until the beam settles level. Animals without an
 * estimate keep the beam tipped with a mystery pan. The scene is decorative;
 * the caption carries the same information as text.
 */
export function WeightBalance({
  animalImage,
  animalName,
  weightKg,
  weightText,
}: WeightBalanceProps) {
  const { locale, messages } = useI18n()
  const comparison = weightKg
    ? pickWeightComparison(representativeKg(weightKg))
    : null
  const unitLabel = comparison
    ? messages.size.weightUnits[comparison.reference]
    : null
  const ReferenceIcon = comparison
    ? referenceIcons[comparison.reference]
    : CircleHelp
  const shownCount = comparison
    ? Math.min(comparison.count, maxBalanceIcons)
    : 0
  const countText = comparison
    ? new Intl.NumberFormat(locale).format(comparison.count)
    : null

  return (
    <section
      aria-label={`${messages.size.balanceTitle} · ${animalName}`}
      className="size-scene"
    >
      <h3 className="size-scene__title">{messages.size.balanceTitle}</h3>
      <div
        aria-hidden="true"
        className="size-balance"
        data-mode={comparison ? 'balanced' : 'unknown'}
      >
        <div className="size-balance__beam">
          <div className="size-balance__end size-balance__end--left">
            <div className="size-balance__pan">
              {animalImage ? (
                <img
                  alt=""
                  className="size-balance__animal"
                  src={animalImage}
                />
              ) : null}
            </div>
          </div>
          <div className="size-balance__end size-balance__end--right">
            <div className="size-balance__pan size-balance__pan--refs">
              {comparison ? (
                <>
                  {Array.from({ length: shownCount }, (_, index) => (
                    <span
                      className="size-balance__ref"
                      key={index}
                      style={{ '--i': index } as CSSProperties}
                    >
                      <ReferenceIcon size="100%" strokeWidth={2.1} />
                    </span>
                  ))}
                  {comparison.count > shownCount ? (
                    <span
                      className="size-balance__ref size-balance__ref--count"
                      style={{ '--i': shownCount } as CSSProperties}
                    >
                      ×{countText}
                    </span>
                  ) : null}
                </>
              ) : (
                <span className="size-balance__ref size-balance__mystery">
                  <CircleHelp size="100%" strokeWidth={2.1} />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="size-balance__fulcrum" />
        <div className="size-balance__ground" />
      </div>
      <p className="size-scene__caption">
        <strong>{weightText ?? messages.size.weightUnavailable}</strong>
        {comparison && unitLabel && countText ? (
          <span> · {messages.size.balanceEquals(countText, unitLabel)}</span>
        ) : null}
      </p>
    </section>
  )
}
