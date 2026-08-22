import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "海龟",
  classificationLabel: "海龟科爬行动物",
  visibleFeature: "看它像船桨一样的鳍状四肢，在水里游得又稳又快。",
  narration: {
    sentences: [
          "这是海龟，海洋里的远航旅行家。",
          "它的四肢变成了船桨的样子，游泳特别稳。"
    ],
    pronunciation: [
      {
        text: "海龟",
        reading: "hǎi guī",
      },
    ],
  },
  facts: {
    period: "现代（海龟类约 1.1 亿年前出现至今）",
    discoveryRegions: ["全球热带与温带海洋"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1.4,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "海龟一生几乎都在海里，只有雌龟上岸产卵。它们靠地磁“地图”导航，能跨越整个大洋回到出生的海滩孵蛋。幼龟的性别由沙温决定——天越热雌龟越多。海龟寿命可达几十上百年，但塑料垃圾和渔网让它们面临危险。",
  sources: [
    {
        "title": "Sea turtle — 美国国家海洋与大气局（NOAA）",
        "url": "https://www.fisheries.noaa.gov/sea-turtles",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Sea turtle — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/sea-turtle",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页涵盖绿海龟等大型海龟，体长为背甲直线长度近似区间。",
            "地磁导航机制仍在研究中。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
