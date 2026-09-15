import type { Locale } from '@/src/i18n/locale'

/**
 * The 34 provincial-level divisions of China shown in the homepage gallery.
 *
 * `file` is the basename of the asset under `public/img/china/`; the images
 * carry Chinese file names, so every URL built from them is percent-encoded.
 * The list is ordered by the conventional regional grouping (North, North-East,
 * East, Central, South, South-West, North-West, then the two SARs and Taiwan)
 * rather than by file name, so the gallery reads as a map legend instead of an
 * alphabetical dump.
 *
 * Every locale carries a real name. The site previously shipped Japanese and
 * Traditional Chinese routes whose body copy fell back to English source text;
 * a name table is small enough that there is no reason to repeat that.
 */
export interface ChinaProvince {
  /** Basename under `public/img/china/`, without the `.webp` extension. */
  readonly file: string
  readonly names: Readonly<Record<Locale, string>>
}

export interface ProvinceGalleryCopy {
  readonly title: string
  readonly subtitle: string
  readonly countLabel: string
}

function province(
  file: string,
  zhCN: string,
  zhTW: string,
  ja: string,
  en: string,
): ChinaProvince {
  return { file, names: { 'zh-CN': zhCN, 'zh-TW': zhTW, ja, en } }
}

export const chinaProvinces: readonly ChinaProvince[] = [
  // 华北
  province('北京', '北京', '北京', '北京', 'Beijing'),
  province('天津', '天津', '天津', '天津', 'Tianjin'),
  province('河北', '河北', '河北', '河北', 'Hebei'),
  province('山西', '山西', '山西', '山西', 'Shanxi'),
  province('内蒙古', '内蒙古', '內蒙古', '内モンゴル', 'Inner Mongolia'),
  // 东北
  province('辽宁', '辽宁', '遼寧', '遼寧', 'Liaoning'),
  province('吉林', '吉林', '吉林', '吉林', 'Jilin'),
  province('黑龙江', '黑龙江', '黑龍江', '黒竜江', 'Heilongjiang'),
  // 华东
  province('上海', '上海', '上海', '上海', 'Shanghai'),
  province('江苏', '江苏', '江蘇', '江蘇', 'Jiangsu'),
  province('浙江', '浙江', '浙江', '浙江', 'Zhejiang'),
  province('安徽', '安徽', '安徽', '安徽', 'Anhui'),
  province('福建', '福建', '福建', '福建', 'Fujian'),
  province('江西', '江西', '江西', '江西', 'Jiangxi'),
  province('山东', '山东', '山東', '山東', 'Shandong'),
  // 华中
  province('河南', '河南', '河南', '河南', 'Henan'),
  province('湖北', '湖北', '湖北', '湖北', 'Hubei'),
  province('湖南', '湖南', '湖南', '湖南', 'Hunan'),
  // 华南
  province('广东', '广东', '廣東', '広東', 'Guangdong'),
  province('广西', '广西', '廣西', '広西', 'Guangxi'),
  province('海南', '海南', '海南', '海南', 'Hainan'),
  // 西南
  province('重庆', '重庆', '重慶', '重慶', 'Chongqing'),
  province('四川', '四川', '四川', '四川', 'Sichuan'),
  province('贵州', '贵州', '貴州', '貴州', 'Guizhou'),
  province('云南', '云南', '雲南', '雲南', 'Yunnan'),
  province('西藏', '西藏', '西藏', 'チベット', 'Tibet'),
  // 西北
  province('陕西', '陕西', '陝西', '陝西', 'Shaanxi'),
  province('甘肃', '甘肃', '甘肅', '甘粛', 'Gansu'),
  province('青海', '青海', '青海', '青海', 'Qinghai'),
  province('宁夏', '宁夏', '寧夏', '寧夏', 'Ningxia'),
  province('新疆', '新疆', '新疆', '新疆', 'Xinjiang'),
  // 港澳台
  province('香港', '香港', '香港', '香港', 'Hong Kong'),
  province('澳门', '澳门', '澳門', 'マカオ', 'Macau'),
  province('台湾', '台湾', '台灣', '台湾', 'Taiwan'),
]

/**
 * Percent-encoded URL for a province image. `thumb` requests the 520px
 * derivative emitted by `npm run generate:province-thumbnails`; `full` is the
 * 1080px map. The gallery references both through `srcSet`.
 */
export function provinceImageUrl(
  file: string,
  variant: 'full' | 'thumb',
): string {
  return variant === 'thumb'
    ? encodeURI(`/img/china/thumbs/${file}.webp`)
    : encodeURI(`/img/china/${file}.webp`)
}

const copyByLocale: Readonly<Record<Locale, ProvinceGalleryCopy>> = {
  'zh-CN': {
    title: '中国省区图鉴',
    subtitle: '三十四个省级行政区的手绘地图，按华北、东北、华东、华中、华南、西南、西北的顺序排列。',
    countLabel: '34 个省级行政区',
  },
  'zh-TW': {
    title: '中國省區圖鑑',
    subtitle: '三十四個省級行政區的手繪地圖，依華北、東北、華東、華中、華南、西南、西北的順序排列。',
    countLabel: '34 個省級行政區',
  },
  ja: {
    title: '中国の省と自治区',
    subtitle:
      '34 の省級行政区の手描き地図を、華北・東北・華東・華中・華南・西南・西北の順に並べています。',
    countLabel: '34 の省級行政区',
  },
  en: {
    title: "China's provinces and regions",
    subtitle:
      'Hand-drawn maps of the 34 provincial-level divisions, ordered north, north-east, east, central, south, south-west, north-west.',
    countLabel: '34 provincial-level divisions',
  },
}

export function provinceGalleryCopyFor(locale: Locale): ProvinceGalleryCopy {
  return copyByLocale[locale]
}
