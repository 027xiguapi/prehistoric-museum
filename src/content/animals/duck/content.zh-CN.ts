import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鸭子",
  classificationLabel: "水鸟（雁形目）",
  visibleFeature: "看它扁平的嘴巴和防水羽毛，游泳时水珠会滚下来。",
  narration: {
    sentences: [
          "这是鸭子，最喜欢在水里玩的水鸟。",
          "它用扁扁的嘴过滤水里的食物，尾巴一翘一翘地游泳。"
    ],
    pronunciation: [
      {
        text: "鸭子",
        reading: "yā zi",
      },
    ],
  },
  facts: {
    period: "现代（绿头鸭数百万年前分化至今）",
    discoveryRegions: ["全球（驯化自绿头鸭）"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.65,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "家鸭主要驯化自绿头鸭。鸭子尾部的腺体会分泌油脂，它用嘴把油抹到羽毛上，所以游泳也不湿身。扁嘴边缘有梳齿状的栉板，能在水中滤食小虫和种子。鸭子走路摇摆，是因为腿长在身体很靠后的位置，游泳时却像装了船桨。",
  sources: [
    {
        "title": "Duck — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/duck",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Mallard — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Mallard/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为家鸭与绿头鸭常见区间。",
            "驯化史因地区和品种而异，为概括性介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
