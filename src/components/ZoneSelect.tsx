// Homepage zone picker: a die-cut park-map sticker where six illustrated
// habitat pieces interlock like a jigsaw into one big island. Each piece is
// an irregular clip-path polygon scaled down just enough to open winding
// gaps of map background — the "paths" between habitats — while a white
// die-cut border (stacked drop-shadow outlines on an unclipped frame, see
// `pieceFrameClass`) traces every piece. Scene art lives in /public/img/area/
// (see `zoneSceneImages`). On narrow portrait screens the island stacks into
// a vertical trail (see the `zone-stack` variant in styles.css).
import { useRouter } from 'next/navigation'

import {
  Bird,
  Bone,
  Bug,
  Compass,
  Egg,
  Fish,
  Flower2,
  Footprints,
  MapPin,
  Rabbit,
  Shell,
  Snail,
  Snowflake,
  Sun,
  TreePine,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import type { ZoneCategoryId } from '../content/collections/zone-definitions'

const zoneIcons: Readonly<Record<ZoneCategoryId, LucideIcon>> = {
  dinosaur: Bone,
  plains: Sun,
  forest: TreePine,
  ice: Snowflake,
  ocean: Waves,
  insect: Bug,
  sky: Bird,
}

// Illustrated scene per zone, served from /public/img/area/ (file names are
// Chinese, so they must be URI-encoded for the URL). Zones without a scene
// image (currently `sky`) fall back to their default animal thumbnail.
const zoneSceneImages: Readonly<Partial<Record<ZoneCategoryId, string>>> = {
  dinosaur: encodeURI('/img/area/恐龙.png'),
  ice: encodeURI('/img/area/冰川.png'),
  insect: encodeURI('/img/area/昆虫.png'),
  ocean: encodeURI('/img/area/海洋.png'),
  plains: encodeURI('/img/area/草原.png'),
  forest: encodeURI('/img/area/森林.png'),
}

export interface ZoneCardData {
  readonly id: ZoneCategoryId
  readonly count: number
  /** Fallback backdrop when a zone has no illustrated scene. */
  readonly thumbnail: string | null
}

export interface ZoneSelectProps {
  readonly zones: readonly ZoneCardData[]
}

// Critter stickers scattered around the map perimeter, like the reference
// park map. Positions sit on the frame edge so they read as "stuck on" the
// sticker sheet. (`left` is the x coordinate on the map edge; values past
// 100% / below 0% hang off the right / left side.)
const perimeterStickers: ReadonlyArray<{
  readonly icon: LucideIcon
  readonly placement: string
}> = [
  { icon: Rabbit, placement: '[--sticker-tilt:-12deg] top-[-0.5%] left-[5%] text-[#d96a8b]' },
  { icon: Flower2, placement: '[--sticker-tilt:9deg] top-[-1.5%] left-[30%] h-11 w-11 text-[#e0709b]' },
  { icon: Snowflake, placement: '[--sticker-tilt:6deg] top-[-1.5%] left-[56%] h-9 w-9 text-[#5aa9d6]' },
  { icon: Bug, placement: '[--sticker-tilt:12deg] top-[-0.5%] left-[85%] text-[#d84f3d]' },
  { icon: Snail, placement: '[--sticker-tilt:10deg] top-[30%] left-[100.5%] h-9 w-9 text-[#c98a2b]' },
  { icon: Bird, placement: '[--sticker-tilt:-8deg] top-[62%] left-[100.5%] text-[#4d8fc7]' },
  { icon: Egg, placement: '[--sticker-tilt:-10deg] top-[100.5%] left-[88%] text-[#9b7ed9]' },
  { icon: Footprints, placement: '[--sticker-tilt:8deg] top-[100.5%] left-[58%] h-9 w-9 text-[#a07840]' },
  { icon: Shell, placement: '[--sticker-tilt:-12deg] top-[100.5%] left-[26%] h-11 w-11 text-[#3f9db0]' },
  { icon: Fish, placement: '[--sticker-tilt:10deg] top-[46%] left-[-0.5%] h-11 w-11 text-[#4a90d9]' },
]

function ZoneStickers() {
  return (
    <div aria-hidden="true" className="zone-stack:hidden pointer-events-none absolute inset-0 z-[1]">
      {perimeterStickers.map(({ icon: StickerIcon, placement }, index) => (
        <span
          key={index}
          className={`absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid border-[#fffdf7] bg-[#fffaf2] shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)] rotate-[var(--sticker-tilt,0deg)] [&>svg]:h-[58%] [&>svg]:w-[58%] ${placement}`}
        >
          <StickerIcon aria-hidden="true" strokeWidth={2.1} />
        </span>
      ))}
    </div>
  )
}

function ZoneCompass() {
  return (
    <div
      aria-hidden="true"
      className="zone-stack:hidden pointer-events-none absolute top-[12px] left-[14px] z-[3] flex h-[34px] w-[34px] -rotate-8 items-center justify-center rounded-full border-[2.5px] border-solid border-[#fffdf7] bg-[#fffaf2f0] text-[#c98a2b] shadow-[0_3px_0_rgb(60_90_60/16%),0_8px_16px_rgb(30_50_30/16%)]"
    >
      <Compass aria-hidden="true" className="h-[19px] w-[19px]" strokeWidth={2.1} />
    </div>
  )
}

// Per-zone jigsaw pieces. Every piece is TWO nested boxes:
//
// - `pieceFrameClass` (outer div): the absolute bounding box that draws the
//   white die-cut border. The border MUST live on this unclipped parent:
//   CSS paints `filter` before `clip-path`, so a drop-shadow sitting on the
//   clipped element itself is sliced off at the polygon edge and never
//   renders. Here the drop-shadows trace the button's clipped silhouette
//   from the outside instead. The frame is pointer-events-none so the
//   clipped-away corners of its bounding box neither highlight the piece
//   nor swallow clicks meant for neighbours underneath — hovering the
//   button inside still propagates :hover up to the frame.
// - `regionClass` (inner button): the irregular clip-path polygon
//   (`--piece`, inherited from the frame), the terrain backdrop
//   (`zoneBackdrop`), and the ~4% shrink that opens the gaps between the
//   interlocking pieces.
//
// `zoneTerrain` holds the per-zone frame geometry and custom properties;
// the `zone-stack` order controls the mobile trail sequence.
const zoneTerrain: Readonly<Record<ZoneCategoryId, string>> = {
  ice: '[--sign-tilt:-1.6deg] [--zone-accent:#3d7ea6] [--piece:polygon(2.7%_6.9%,24.3%_0%,48.6%_10.3%,70.3%_3.4%,94.6%_0%,89.2%_34.5%,100%_65.5%,94.6%_93.1%,70.3%_89.7%,48.6%_100%,24.3%_93.1%,2.7%_96.6%,0%_82.8%,10.8%_41.4%)] top-[2%] left-[23%] h-[29%] w-[37%] zone-stack:order-1',
  insect: '[--sign-tilt:1.4deg] [--zone-accent:#a97b12] [--piece:polygon(4.9%_0%,29.3%_7.1%,53.7%_0%,78%_7.1%,95.1%_3.6%,100%_35.7%,95.1%_64.3%,100%_85.7%,90.2%_92.9%,70.7%_85.7%,46.3%_100%,24.4%_89.3%,4.9%_96.4%,9.8%_67.9%,0%_35.7%)] top-[2%] left-[56%] h-[28%] w-[41%] zone-stack:order-6',
  forest: '[--sign-tilt:-1deg] [--zone-accent:#1e7a4a] [--piece:polygon(2.6%_7%,23.7%_4.7%,47.4%_9.3%,68.4%_2.3%,92.1%_4.7%,100%_25.6%,86.8%_48.8%,97.4%_69.8%,92.1%_90.7%,71.1%_95.3%,50%_86%,26.3%_100%,5.3%_90.7%,7.9%_81.4%,0%_53.5%,7.9%_25.6%)] top-[27%] left-[23%] h-[43%] w-[38%] zone-stack:order-2',
  dinosaur: '[--sign-tilt:1.6deg] [--zone-accent:#a85f16] [--piece:polygon(4.9%_6.8%,24.4%_2.3%,46.3%_9.1%,70.7%_0%,90.2%_4.5%,100%_0%,95.1%_27.3%,100%_54.5%,95.1%_77.3%,97.6%_88.6%,75.6%_95.5%,51.2%_86.4%,26.8%_100%,4.9%_90.9%,9.8%_70.5%,0%_50%,12.2%_27.3%)] top-[26%] left-[56%] h-[44%] w-[41%] zone-stack:order-3',
  ocean: '[--sign-tilt:-1.3deg] [--zone-accent:#2073bd] [--sign-top:16%] [--sign-left:14%] [--tagline-inset:22%] [--piece:polygon(29.2%_0%,62.5%_2.2%,87.5%_1.1%,100%_11.8%,83.3%_24.7%,95.8%_37.6%,83.3%_50.5%,95.8%_63.4%,83.3%_76.3%,95.8%_87.1%,87.5%_97.8%,54.2%_100%,20.8%_96.8%,0%_82.8%,8.3%_65.6%,0%_48.4%,8.3%_31.2%,0%_16.1%)] top-[3%] left-[3%] h-[93%] w-[24%] zone-stack:order-5',
  plains: '[--sign-tilt:1.1deg] [--zone-accent:#4c8a30] [--sign-top:17%] [--sign-left:10%] [--piece:polygon(2.7%_6.3%,13.5%_18.8%,25.7%_0%,36.5%_12.5%,47.3%_6.3%,59.5%_18.8%,73%_0%,86.5%_12.5%,98.6%_3.1%,100%_31.3%,97.3%_62.5%,98.6%_87.5%,85.1%_100%,66.2%_93.8%,47.3%_100%,28.4%_90.6%,12.2%_100%,1.4%_93.8%,4.1%_62.5%,0%_31.3%)] top-[64%] left-[23%] h-[32%] w-[74%] zone-stack:order-4',
  sky: '[--sign-tilt:1deg] [--zone-accent:#3d8bd9] [--piece:polygon(3%_16%,22%_7%,40%_14%,58%_4%,78%_11%,96%_5%,100%_45%,90%_72%,97%_93%,72%_100%,46%_90%,22%_100%,4%_90%,0%_55%)] top-[0.5%] left-[35%] h-[23%] w-[33%] zone-stack:order-7',
}

// Terrain gradient per zone, painted by the clipped button so the frame's
// drop-shadow keeps tracing the polygon silhouette; shows through while the
// scene image loads.
const zoneBackdrop: Readonly<Record<ZoneCategoryId, string>> = {
  ice: 'bg-[radial-gradient(circle_at_30%_22%,rgb(255_255_255/88%),transparent_46%),radial-gradient(circle_at_74%_70%,rgb(255_255_255/34%),transparent_54%),linear-gradient(155deg,#cdeeff_0%,#7cc3e8_100%)]',
  insect: 'bg-[radial-gradient(circle_at_68%_26%,rgb(255_244_196/70%),transparent_50%),linear-gradient(155deg,#ffd873_0%,#e8a33d_100%)]',
  forest: 'bg-[radial-gradient(circle_at_32%_22%,rgb(140_230_160/38%),transparent_46%),radial-gradient(circle_at_75%_72%,rgb(10_60_35/34%),transparent_56%),linear-gradient(160deg,#43b06a_0%,#1e7a4a_100%)]',
  dinosaur: 'bg-[radial-gradient(circle_at_58%_24%,rgb(255_232_164/55%),transparent_50%),radial-gradient(circle_at_30%_80%,rgb(160_80_20/26%),transparent_55%),linear-gradient(155deg,#f5b049_0%,#d97b2b_100%)]',
  ocean: 'bg-[radial-gradient(ellipse_at_45%_14%,rgb(202_240_255/62%),transparent_54%),radial-gradient(ellipse_at_55%_92%,rgb(10_60_130/42%),transparent_58%),linear-gradient(195deg,#4fb7ec_0%,#2073bd_100%)]',
  plains: 'bg-[radial-gradient(circle_at_30%_24%,rgb(240_250_180/58%),transparent_48%),radial-gradient(circle_at_78%_80%,rgb(60_110_30/28%),transparent_52%),linear-gradient(160deg,#aadf62_0%,#5da33e_100%)]',
  sky: 'bg-[radial-gradient(circle_at_32%_24%,rgb(255_255_255/80%),transparent_50%),linear-gradient(175deg,#a9d8f8_0%,#3d8bd9_100%)]',
}

const pieceFrameClass = [
  // The white die-cut border: tight crisp white shadows form a solid edge
  // and a wider soft halo fills the gaps between interlocking pieces,
  // clearly separating every zone.
  'pointer-events-none absolute min-w-0 transition-[filter] duration-[160ms]',
  '[filter:drop-shadow(0_0_1px_#fffdf7)_drop-shadow(0_0_1px_#fffdf7)_drop-shadow(0_0_3px_#fffdf7)_drop-shadow(0_0_6px_rgb(255_253_247/85%))_drop-shadow(0_14px_28px_rgb(36_51_31/18%))]',
  'hover:z-[2] hover:[filter:drop-shadow(0_0_1px_#fffdf7)_drop-shadow(0_0_1px_#fffdf7)_drop-shadow(0_0_3px_#fffdf7)_drop-shadow(0_0_7px_rgb(255_253_247/92%))_drop-shadow(0_20px_40px_rgb(36_51_31/26%))_saturate(1.1)]',
  // zone-stack rows are plain full-width items in the trail column.
  'zone-stack:relative zone-stack:top-auto zone-stack:left-auto zone-stack:h-auto zone-stack:w-full',
].join(' ')

const regionClass = [
  // Every piece is scaled down ~4% so the map background shows through as
  // winding gaps ("paths") between the interlocking pieces.
  'group pointer-events-auto relative flex h-full w-full cursor-pointer flex-col items-start gap-1.5 p-[clamp(10px,1.3vw,16px)] text-left transition-[transform] duration-[160ms] scale-[0.96]',
  // The clip-path clips borders, box-shadows and same-element drop-shadows,
  // which is why the white die-cut border is drawn by the frame instead.
  '[-webkit-clip-path:var(--piece)] [clip-path:var(--piece)]',
  // Hover/active keep the original relative motion on top of the 0.96 shrink.
  'hover:-translate-y-1 hover:scale-[0.975] active:translate-y-px active:scale-[0.95]',
  // zone-stack rows are plain rounded cards: drop the jigsaw clip and the
  // shrink there (rows keep the original hover/active motion).
  'zone-stack:h-auto zone-stack:min-h-[92px] zone-stack:flex-row zone-stack:items-center zone-stack:rounded-[22px] zone-stack:[-webkit-clip-path:none] zone-stack:[clip-path:none] zone-stack:scale-100 zone-stack:hover:scale-[1.015] zone-stack:active:scale-[0.99]',
].join(' ')

export function ZoneSelect({ zones }: ZoneSelectProps) {
  const { locale, messages } = useI18n()
  const router = useRouter()

  const enterCategoryPage = (zoneId: ZoneCategoryId) => {
    router.push(`/${locale}/category/${zoneId}`)
  }

  return (
    <section
      aria-label={messages.zoneSelect.title}
      className="absolute inset-0 z-20 flex min-h-0 flex-col gap-[clamp(10px,2vh,22px)] overflow-y-auto bg-[radial-gradient(circle_at_12%_18%,rgb(244_184_95/30%),transparent_34%),radial-gradient(circle_at_88%_12%,rgb(125_183_218/32%),transparent_36%),radial-gradient(circle_at_82%_88%,rgb(133_190_138/30%),transparent_38%),linear-gradient(160deg,#f8f1df_0%,#eef3dc_55%,#e2ecda_100%)] px-[clamp(16px,5vw,72px)] pt-[clamp(16px,4vh,46px)] pb-[clamp(18px,4.5vh,50px)]"
    >
      <header className="zone-stack:text-center mx-auto flex w-full max-w-[1180px] flex-col items-start gap-2">
        <h1 className="museum-kicker">
          <span aria-hidden="true" className="museum-mark">
            <Waves size={16} strokeWidth={2.3} />
          </span>
          <span>{messages.museumName}</span>
        </h1>
        <p className="m-0 text-[clamp(2rem,5.2vw,3.4rem)] leading-[1.04] font-black tracking-[0.01em] text-[#2e7d4f] [text-shadow:0_3px_0_rgb(255_255_255/80%),0_10px_26px_rgb(46_125_79/28%)]">
          {messages.zoneSelect.title}
        </p>
        <p className="m-0 text-[clamp(0.95rem,1.6vw,1.12rem)] font-semibold text-[#4c6a58]">
          {messages.zoneSelect.subtitle}
        </p>
      </header>

      <div className="zone-stack:flex-none zone-stack:flex zone-stack:min-h-0 zone-stack:flex-col zone-stack:gap-2.5 zone-stack:overflow-visible zone-stack:rounded-[28px] zone-stack:p-3 relative mx-auto min-h-[clamp(380px,58vh,620px)] w-full max-w-[1180px] flex-1 rounded-[46px_54px_48px_58px/54px_46px_58px_48px] border-[clamp(7px,0.9vw,11px)] border-solid border-[#fffdf7] bg-[radial-gradient(circle_at_16%_12%,rgb(255_255_255/85%),transparent_13%),radial-gradient(circle_at_74%_8%,rgb(255_255_255/72%),transparent_11%),radial-gradient(circle_at_90%_36%,rgb(255_255_255/64%),transparent_10%),radial-gradient(circle_at_28%_46%,rgb(255_255_255/55%),transparent_12%),linear-gradient(180deg,#bfe6f8_0%,#dcf1da_56%,#cbe9c6_100%)] shadow-[inset_0_0_0_3px_rgb(53_104_89/8%),0_24px_60px_rgb(36_51_31/18%)]">
        <ZoneCompass />
        <ZoneStickers />
        {zones.map((zone) => {
          const Icon = zoneIcons[zone.id]
          const zoneMessages = messages.zones[zone.id]
          const backdrop = zoneSceneImages[zone.id] ?? zone.thumbnail
          return (
            <div key={zone.id} className={`${pieceFrameClass} ${zoneTerrain[zone.id]}`}>
              <button
                type="button"
                className={`${regionClass} ${zoneBackdrop[zone.id]}`}
                data-zone-id={zone.id}
                aria-label={messages.zoneSelect.enter(zoneMessages.name)}
                onClick={() => enterCategoryPage(zone.id)}
              >
              {backdrop ? (
                <img
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full rounded-[inherit] object-cover object-center"
                  decoding="async"
                  draggable={false}
                  loading="eager"
                  src={backdrop}
                />
              ) : null}
              {/* Bottom scrim: keeps the tagline readable over the scene. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,transparent_52%,rgb(10_30_24/42%))]"
              />
              <span className="pointer-events-none absolute top-[var(--sign-top,10%)] left-[var(--sign-left,8%)] z-[1] flex max-w-[86%] items-center gap-2 rounded-[16px_18px_15px_19px] border-[2.5px] border-solid border-[#fffdf7] bg-[#fffaf2f5] py-2 pr-3 pl-[9px] shadow-[0_4px_0_rgb(60_90_60/18%),0_10px_22px_rgb(30_50_30/24%)] rotate-[var(--sign-tilt,-1.2deg)] transition-[transform,box-shadow] duration-[220ms] group-hover:rotate-0 group-hover:scale-[1.04] zone-stack:static zone-stack:max-w-none zone-stack:shrink-0 zone-stack:rotate-0">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white shadow-[inset_0_-2px_rgb(0_0_0/18%)] bg-[var(--zone-accent)]">
                  <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="zone-stack:text-[1rem] text-[clamp(1.02rem,1.5vw,1.3rem)] font-extrabold tracking-[0.01em] whitespace-nowrap text-[#28493a]">
                  {zoneMessages.name}
                </span>
                <span className="zone-stack:px-1.5 zone-stack:text-[0.64rem] inline-flex items-center gap-1 rounded-full px-2 py-[3px] text-[0.68rem] font-extrabold tracking-[0.04em] whitespace-nowrap text-white shadow-[inset_0_-2px_rgb(0_0_0/16%)] bg-[var(--zone-accent)]">
                  <MapPin aria-hidden="true" className="h-3 w-3" strokeWidth={2.6} />
                  {messages.zoneSelect.friends(zone.count)}
                </span>
              </span>
              <span className="zone-stack:hidden relative z-[1] mt-auto mr-[2%] mb-[3%] ml-[var(--tagline-inset,12%)] max-w-[74%] font-[680] leading-[1.45] text-[clamp(0.76rem,0.92vw,0.88rem)] text-[#fffdf7f2] [text-shadow:0_1px_8px_rgb(20_40_32/55%)]">
                {zoneMessages.tagline}
              </span>
              <span className="zone-stack:flex zone-stack:px-2.5 zone-stack:text-[0.78rem] ml-auto hidden shrink-0 items-center self-center rounded-full px-[11px] py-1.5 text-[0.82rem] font-extrabold text-white shadow-[inset_0_-2px_rgb(0_0_0/18%)] bg-[var(--zone-accent)]">
                {messages.zoneSelect.enterShort}
              </span>
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
