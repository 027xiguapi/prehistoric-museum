import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "鲨鱼",
  classificationLabel: "软骨鱼类",
  visibleFeature: "看它流线型的身体和竖起的背鳍，游泳时悄无声息。",
  narration: {
    sentences: [
          "这是鲨鱼，海洋里最古老的猎手之一。",
          "它的骨骼是软骨，身上还覆盖着小小的“皮肤牙齿”。"
    ],
    pronunciation: [
      {
        text: "鲨鱼",
        reading: "shā yú",
      },
    ],
  },
  facts: {
    period: "现代（约 4.5 亿年前出现至今）",
    discoveryRegions: ["全球海洋"],
        size: {
      kind: 'body-length',
      minMeters: 2,
      maxMeters: 4,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "鲨鱼比恐龙还要古老，已经在海洋里游了四亿多年。它们的骨骼由轻巧的软骨构成，皮肤上覆盖着盾鳞——和牙齿同源的细小结构，摸起来像砂纸。鲨鱼还有叫“洛伦兹壶腹”的感应器官，能感知猎物发出的微弱电场。",
  sources: [
    {
        "title": "Shark — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/shark",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Shark — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/shark",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间以大型掠食性鲨（如大白鲨）为代表；鲨类整体差异极大。",
            "感官与皮肤描述为概括性科普。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
