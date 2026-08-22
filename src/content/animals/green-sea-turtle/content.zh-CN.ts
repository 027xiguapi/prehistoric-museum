import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "绿海龟",
  classificationLabel: "大型海龟（海龟科）",
  visibleFeature: "看看它像盾牌一样的前鳍，划水时就像鸟儿扇动翅膀。",
  narration: {
    sentences: [
          "这是绿海龟，能横穿整个大洋的远航家。",
          "它用前鳍像翅膀一样划水，累了就在海草床上吃素。"
    ],
    pronunciation: [
      {
        text: "绿海龟",
        reading: "lǜ hǎi guī",
      },
    ],
  },
  facts: {
    period: "现代（海龟家族延续上亿年）",
    discoveryRegions: ["全球热带与亚热带海域"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1.2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "绿海龟的名字来自它体内绿色的脂肪——成年龟几乎是“素食主义者”，专吃海草和海藻，像海底的割草机，让海草床保持健康。它们认路本领惊人：在茫茫大洋里游几十年，仍能回到出生的那片沙滩产蛋。孵出的性别由沙子的温度决定，天越热“女孩”越多，所以气候变暖也牵动着海龟家族的未来。",
  sources: [
    {
        "title": "Green sea turtle — 美国国家海洋和大气管理局（NOAA）",
        "url": "https://www.fisheries.noaa.gov/species/green-turtle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Green turtle — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/green-turtle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长指背甲长度；幼龟会吃水母等小动物，成年后才转为吃素。",
            "本条目与既有“海龟”草稿为不同物种/不同模型，正式收录前将复核定名。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
