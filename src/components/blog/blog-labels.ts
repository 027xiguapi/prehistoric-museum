import type { Locale } from '@/src/i18n/locale'

export interface BlogLabels {
  readonly nav: string
  readonly heading: string
  readonly intro: string
  readonly backToBlog: string
  readonly backToMuseum: string
  readonly backToHome: string
  readonly viewExhibit: string
  readonly readingTime: string
  readonly updated: string
  readonly factCard: string
  readonly fieldClassification: string
  readonly fieldPeriod: string
  readonly fieldRegions: string
  readonly fieldSize: string
  readonly fieldDiet: string
  readonly sizeBodyLength: string
  readonly sizeShoulderHeight: string
  readonly sizeWingspan: string
  readonly sizeGroupRange: string
  readonly meters: string
  readonly dietHerbivore: string
  readonly dietCarnivore: string
  readonly dietOmnivore: string
  readonly dietUnknown: string
  readonly sources: string
  readonly authorTitle: string
  readonly reviewerTitle: string
  readonly reviewedOnLabel: string
  readonly publishedLabel: string
  readonly countLabel: (count: number) => string
  readonly empty: string
  readonly exhibitCta: (name: string) => string
}

const zhCN: BlogLabels = {
  nav: '动物科普',
  heading: 'WonZoo 动物科普',
  intro: '逐只认识博物馆里的史前动物。每一篇都从它们的身体、生活、发现地和化石说起，附上科学名片与权威来源，适合亲子一起读。',
  backToBlog: '返回科普列表',
  backToMuseum: '返回博物馆',
  backToHome: '返回首页',
  viewExhibit: '去看 3D 展台',
  readingTime: '阅读约',
  updated: '更新于',
  factCard: '科学名片',
  fieldClassification: '分类',
  fieldPeriod: '时代',
  fieldRegions: '化石发现地',
  fieldSize: '体型',
  fieldDiet: '食性',
  sizeBodyLength: '体长',
  sizeShoulderHeight: '肩高',
  sizeWingspan: '翼展',
  sizeGroupRange: '群体体长',
  meters: '米',
  dietHerbivore: '植食',
  dietCarnivore: '肉食',
  dietOmnivore: '杂食',
  dietUnknown: '待研究',
  sources: '科学资料来源',
  authorTitle: '作者',
  reviewerTitle: '审校',
  reviewedOnLabel: '审校日期',
  publishedLabel: '发布',
  countLabel: (count) => `已收录 ${count} 篇动物科普`,
  empty: '科普内容准备中。',
  exhibitCta: (name) => `在 3D 展台观察${name}`,
}

const zhTW: BlogLabels = {
  nav: '動物科普',
  heading: 'WonZoo 動物科普',
  intro: '逐隻認識博物館裡的史前動物。每一篇都從牠們的身體、生活、發現地和化石說起，附上科學名片與權威來源，適合親子一起讀。',
  backToBlog: '返回科普列表',
  backToMuseum: '返回博物館',
  backToHome: '返回首頁',
  viewExhibit: '去看 3D 展台',
  readingTime: '閱讀約',
  updated: '更新於',
  factCard: '科學名片',
  fieldClassification: '分類',
  fieldPeriod: '時代',
  fieldRegions: '化石發現地',
  fieldSize: '體型',
  fieldDiet: '食性',
  sizeBodyLength: '體長',
  sizeShoulderHeight: '肩高',
  sizeWingspan: '翼展',
  sizeGroupRange: '群體體長',
  meters: '公尺',
  dietHerbivore: '植食',
  dietCarnivore: '肉食',
  dietOmnivore: '雜食',
  dietUnknown: '待研究',
  sources: '科學資料來源',
  authorTitle: '作者',
  reviewerTitle: '審校',
  reviewedOnLabel: '審校日期',
  publishedLabel: '發布',
  countLabel: (count) => `已收錄 ${count} 篇動物科普`,
  empty: '科普內容準備中。',
  exhibitCta: (name) => `在 3D 展台觀察${name}`,
}

const ja: BlogLabels = {
  nav: '動物ビジュアルズ',
  heading: 'WonZoo 動物ビジュアルズ',
  intro: 'ミュージアムの先史の動物をひとりずつ紹介します。からだ・暮らし・発見地・化石の順に、科学カードと信頼できる出典を添えて、ご家庭でどうぞ。',
  backToBlog: '一覧に戻る',
  backToMuseum: 'ミュージアムへ戻る',
  backToHome: 'ホームへ戻る',
  viewExhibit: '3D ステージを見る',
  readingTime: '約',
  updated: '更新',
  factCard: 'サイエンスカード',
  fieldClassification: '分類',
  fieldPeriod: '時代',
  fieldRegions: '化石の発見地',
  fieldSize: '大きさ',
  fieldDiet: '食性',
  sizeBodyLength: '全長',
  sizeShoulderHeight: '肩高',
  sizeWingspan: '翼開長',
  sizeGroupRange: '群の全長',
  meters: 'm',
  dietHerbivore: '草食',
  dietCarnivore: '肉食',
  dietOmnivore: '雑食',
  dietUnknown: '研究中',
  sources: '科学資料の出典',
  authorTitle: '著者',
  reviewerTitle: '監修',
  reviewedOnLabel: '監修日',
  publishedLabel: '公開',
  countLabel: (count) => `${count} 件の動物ビジュアルズ`,
  empty: 'ビジュアルズを準備中です。',
  exhibitCta: (name) => `${name} を 3D ステージで観察`,
}

const en: BlogLabels = {
  nav: 'Animal Science',
  heading: 'WonZoo Animal Science',
  intro: "Meet each prehistoric animal in the museum, one at a time. Every article starts with its body, life, where it was found and its fossils, and closes with a science card and cited sources — made for reading together.",
  backToBlog: 'Back to all articles',
  backToMuseum: 'Back to the museum',
  backToHome: 'Back to home',
  viewExhibit: 'See the 3D stage',
  readingTime: 'About',
  updated: 'Updated',
  factCard: 'Science card',
  fieldClassification: 'Classification',
  fieldPeriod: 'Period',
  fieldRegions: 'Fossil sites',
  fieldSize: 'Size',
  fieldDiet: 'Diet',
  sizeBodyLength: 'Body length',
  sizeShoulderHeight: 'Shoulder height',
  sizeWingspan: 'Wingspan',
  sizeGroupRange: 'Group body length',
  meters: 'm',
  dietHerbivore: 'Plant-eating',
  dietCarnivore: 'Meat-eating',
  dietOmnivore: 'Omnivorous',
  dietUnknown: 'Not yet known',
  sources: 'Scientific sources',
  authorTitle: 'Author',
  reviewerTitle: 'Reviewed by',
  reviewedOnLabel: 'Reviewed on',
  publishedLabel: 'Published',
  countLabel: (count) => `${count} animal science articles`,
  empty: 'Articles are being prepared.',
  exhibitCta: (name) => `Observe ${name} on the 3D stage`,
}

const labels: Record<Locale, BlogLabels> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
  en,
}

export function blogLabels(locale: Locale): BlogLabels {
  return labels[locale] ?? en
}
