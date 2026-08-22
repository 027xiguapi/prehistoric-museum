import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "螃蟹",
  classificationLabel: "甲壳动物（短尾下目）",
  visibleFeature: "看它横着走路的样子——八条腿加上两只大钳子。",
  narration: {
    sentences: [
          "这是螃蟹，穿着硬硬“盔甲”的甲壳动物。",
          "它走路横着走，两只大钳子用来找吃的和保卫自己。"
    ],
    pronunciation: [
      {
        text: "螃蟹",
        reading: "páng xiè",
      },
    ],
  },
  facts: {
    period: "现代（约 2 亿年前出现至今）",
    discoveryRegions: ["全球海洋与海岸"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.25,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "螃蟹的外骨骼像盔甲一样保护身体，但因为盔甲不会长大，它必须定期蜕壳换新装。大多数螃蟹横着走，因为它们的腿关节适合左右摆动。螃蟹几乎什么都吃——藻类、贝壳、碎屑，是海岸边的“清道夫”。最大的螃蟹是日本蜘蛛蟹，螯足展开可达 3 米多。",
  sources: [
    {
        "title": "Crab — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/crab",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Japanese spider crab — 英国自然历史博物馆（NHM）",
        "url": "https://www.nhm.ac.uk/discover/news/2017/may/facts-japanese-spider-crab.html",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为常见蟹类的近似区间，不含螯足。",
            "“横着走”适用于多数蟹类，泳蟹等少数类群可以前后移动。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
