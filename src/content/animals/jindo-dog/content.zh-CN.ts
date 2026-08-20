import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "珍岛犬",
  classificationLabel: "韩国本土犬种",
  visibleFeature: "看它竖起的耳朵和镰刀形的尾巴——珍岛犬以对主人的忠诚闻名。",
  narration: {
    sentences: [
          "这是珍岛犬，来自韩国珍岛的猎犬。",
          "它一生只认一个主人，是韩国“忠诚”的代名词。"
    ],
    pronunciation: [
      {
        text: "珍岛犬",
        reading: "zhēn dǎo quǎn",
      },
    ],
  },
  facts: {
    period: "现代（岛屿血统有数百年以上历史，1962 年被列为韩国天然纪念物）",
    discoveryRegions: ["韩国珍岛（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.75,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "珍岛犬在韩国西南端的珍岛上相对隔离地繁育了数百年，用于协助猎鹿和兔子。岛屿环境塑造了它极强的归巢本能：韩国流传着许多珍岛犬跋涉数百公里回到原主人家中的真实记录。它爱干净得像猫，会自己梳理，几乎不在家里乱排泄；对家人温顺，对陌生人和陌生犬保持警惕，需要耐心的社会化训练。",
  sources: [
    {
        "title": "Korean Jindo — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Korean_Jindo",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Korean Jindo Dog — 美国养犬俱乐部基金会（AKC FSS）",
        "url": "https://www.akc.org/dog-breeds/korean-jindo-dog/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "“只认一个主人”是品种传统说法，个体差异很大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
