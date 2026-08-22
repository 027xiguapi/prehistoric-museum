import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "羊驼",
  classificationLabel: "骆驼科家畜",
  visibleFeature: "看它毛茸茸的身体和香蕉形的脸，睫毛长长的特别可爱。",
  narration: {
    sentences: [
          "这是羊驼，安第斯山区的毛茸茸家畜。",
          "它的毛又软又暖，剪下来能织成漂亮的毛衣。"
    ],
    pronunciation: [
      {
        text: "羊驼",
        reading: "yáng tuó",
      },
    ],
  },
  facts: {
    period: "现代（约 6000 年前驯化至今）",
    discoveryRegions: ["南美洲安第斯山区"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "羊驼约六千年前从原驼驯化而来，是安第斯文明重要的驮运和产毛动物。它们不驼峰、个头小，毛有 22 种天然色。羊驼靠啐口水表达不满，也会用耳朵和尾巴的姿势交流。群居，遇到威胁时发出警报声。",
  sources: [
    {
        "title": "Alpaca — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/alpaca",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Alpaca facts — 昆士兰大学（UQ）",
        "url": "https://www.uq.edu.au/news/article/2020/05/four-facts-about-alpacas-and-why-you-need-them",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年羊驼常见区间。",
            "驯化年代为考古近似值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
