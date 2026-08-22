import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "乌鸦",
  classificationLabel: "雀形目鸟类",
  visibleFeature: "看它一身乌黑的羽毛，其实阳光下会闪出紫色和绿色的光。",
  narration: {
    sentences: [
          "这是乌鸦，鸟类里出了名的“智多星”。",
          "它会用小树枝做工具取虫子，还记得住人的脸。"
    ],
    pronunciation: [
      {
        text: "乌鸦",
        reading: "wū yā",
      },
    ],
  },
  facts: {
    period: "现代（约 1700 万年前分化至今）",
    discoveryRegions: ["全球（除南极洲）"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "乌鸦（鸦科鸟类）是最聪明的鸟类之一：会藏食物并记住上千个藏点，会用石子升高瓶中水位，甚至会把自己的行为考虑进对手的计划。它们过群居生活，晚上成百上千只聚在一起过夜。黑色羽毛其实有结构色，在阳光下泛着紫绿光泽。",
  sources: [
    {
        "title": "Crow — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/crow-bird",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Corvid research — 华盛顿大学（UW）",
        "url": "https://corvidresearch.yolasite.com/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页以秃鼻乌鸦/短嘴鸦类群为代表，具体物种随地区不同。",
            "智力实验结论来自多个鸦科物种，作概括性介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
