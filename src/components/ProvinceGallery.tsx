import {
  chinaProvinces,
  provinceGalleryCopyFor,
  provinceImageUrl,
} from '@/src/i18n/provinces'
import type { Locale } from '@/src/i18n/locale'

// Sticker-sheet vocabulary shared with the category browser and the document
// pages: warm paper fill, white die-cut rim, chunky offset shadow.
const SECTION_CLASS =
  'mx-auto grid w-[min(1080px,calc(100%-28px))] content-start gap-[14px] pb-[max(28px,env(safe-area-inset-bottom))]'
const HERO_CLASS =
  'relative flex flex-col items-center gap-[10px] rounded-[34px_40px_32px_42px/40px_32px_42px_34px] ' +
  'border-[3px] border-[#fffdf7] bg-[rgb(255_250_242/92%)] px-[30px] pt-[20px] pb-[22px] text-center ' +
  'shadow-[0_6px_0_rgb(60_90_60/10%),0_22px_48px_rgb(30_50_30/16%)]'
const GRID_CLASS =
  'grid grid-cols-4 gap-[12px] max-[720px]:grid-cols-2 max-[720px]:gap-[10px]'
const TILE_CLASS =
  'group relative grid overflow-hidden rounded-[22px] border-[3px] border-[#fffdf7] bg-[#fffaf2] ' +
  'shadow-[0_4px_0_rgb(60_90_60/10%),0_14px_30px_rgb(30_50_30/10%)]'

/**
 * Homepage gallery of China's province-level maps.
 *
 * Display-only: these maps are not tied to any exhibit, so a tile is a plain
 * list item rather than a link, and there is no empty state to handle. Every
 * image is lazy-loaded, and `srcSet` keeps a normal tile on the 520px
 * derivative — the 1080px source is only fetched for very large tiles, so the
 * gallery does not put the full 3.6 MB of maps on the critical path.
 */
export function ProvinceGallery({ locale }: { readonly locale: Locale }) {
  const copy = provinceGalleryCopyFor(locale)

  return (
    <section aria-labelledby="province-gallery-heading" className={SECTION_CLASS}>
      <header className={HERO_CLASS}>
        <p className="m-0 inline-flex items-center rounded-full border-2 border-[#fffdf7] bg-[var(--leaf)] px-[13px] py-[5px] text-[0.76rem] font-[820] tracking-[0.08em] text-[#fffdf7] shadow-[inset_0_-2px_rgb(0_0_0/16%),0_2px_0_rgb(60_90_60/18%)]">
          {copy.countLabel}
        </p>
        <h2
          className="m-0 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-normal leading-[1.1] text-[#2e7d4f] [text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]"
          id="province-gallery-heading"
        >
          {copy.title}
        </h2>
        <p className="m-0 max-w-[62ch] text-[0.9rem] leading-[1.6] text-[var(--ink-muted)]">
          {copy.subtitle}
        </p>
      </header>

      <ul className={`${GRID_CLASS} m-0 list-none p-0`}>
        {chinaProvinces.map((province) => (
          <li className={TILE_CLASS} key={province.file}>
            <img
              alt=""
              aria-hidden="true"
              className="block aspect-square h-auto w-full object-cover"
              decoding="async"
              height={1050}
              loading="lazy"
              sizes="(max-width: 719px) 46vw, 261px"
              src={provinceImageUrl(province.file, 'thumb')}
              srcSet={`${provinceImageUrl(province.file, 'thumb')} 520w, ${provinceImageUrl(province.file, 'full')} 1080w`}
              width={1080}
            />
            <span className="border-t-2 border-[#fffdf7] bg-[#fffaf2] px-[8px] py-[7px] text-center text-[0.84rem] font-[780] leading-[1.3] text-[var(--ink)]">
              {province.names[locale]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
