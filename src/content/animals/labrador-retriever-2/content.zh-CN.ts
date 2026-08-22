import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "拉布拉多寻回犬（模型二）",
  classificationLabel: "寻回犬（最受欢迎的家庭犬）",
  visibleFeature: "看它水獭一样的粗尾巴——那是游泳时的“船舵”。",
  narration: {
    sentences: [
          "这是拉布拉多寻回犬，连续多年蝉联全球最受欢迎犬种。",
          "它的祖先在纽芬兰帮渔民捡回渔网和鱼。"
    ],
    pronunciation: [
      {
        text: "拉布拉多寻回犬（模型二）",
        reading: "lā bù lā duō xún huí quǎn",
      },
    ],
  },
  facts: {
    period: "现代（19 世纪在英国定型，祖先来自纽芬兰）",
    discoveryRegions: ["英国（品种定型地）","加拿大纽芬兰（祖先来源地）"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "拉布拉多的祖先并非来自拉布拉多半岛，而是纽芬兰岛上的“小水犬”，协助渔民收网、捡回落水的鱼。19 世纪初被带到英国后定型为寻回猎犬。它的被毛短而致密、有防水油脂层，脚蹼状的脚趾和舵形尾巴都是游泳装备。性格贪吃、亲人、爱玩，是最常见的导盲犬与缉毒犬之一；肥胖是这个品种最大的健康敌人。",
  sources: [
    {
        "title": "Labrador Retriever — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/labrador-retriever/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Labrador Retriever — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Labrador_Retriever",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本批次中有两个不同的拉布拉多模型，此为模型二；发布前需决定去留或合并。",
            "体长区间不含尾巴。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
