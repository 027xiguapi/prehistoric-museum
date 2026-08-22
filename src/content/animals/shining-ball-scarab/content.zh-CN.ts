import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "虹彩粪金龟",
  classificationLabel: "粪金龟（彩虹光泽）",
  visibleFeature: "看它彩虹色的圆润外壳——这是一只美丽的“便便搬运工”。",
  narration: {
    sentences: [
          "这是虹彩粪金龟，把动物粪便滚成球搬走的清道夫。",
          "它处理粪便是在帮草原“打扫卫生”。"
    ],
    pronunciation: [
      {
        text: "虹彩粪金龟",
        reading: "hóng cǎi fèn jīn guī",
      },
    ],
  },
  facts: {
    period: "现代（金龟总科延续上亿年）",
    discoveryRegions: ["日本","东亚森林与草地"],
        size: {
      kind: 'body-length',
      minMeters: 0.015,
      maxMeters: 0.025,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "虹彩粪金龟（センチコガネ）外表像一颗会移动的彩虹珠子，工作却是处理动物粪便：它把粪球滚走、埋进土里当食物或育儿房。这份“脏活”对生态极其重要——粪便被迅速分解，养分回到土壤，寄生虫和苍蝇也被抑制。古埃及人崇拜的圣甲虫就是粪金龟的亲戚，把粪球比作太阳、把滚粪球的甲虫比作推动太阳的神。",
  sources: [
    {
        "title": "Phelotrupes laevistriatus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Phelotrupes_laevistriatus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "センチコガネ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/sentikogane.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为毫米级，模型会被大幅放大展示。",
            "食性以腐殖质与粪便为主，按杂食处理。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
