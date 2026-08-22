import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鲑鱼",
  classificationLabel: "洄游性鱼类",
  visibleFeature: "看它流线型的银色身体，天生适合长距离游泳。",
  narration: {
    sentences: [
          "这是鲑鱼，一位了不起的旅行家。",
          "它在河里出生，游到大海长大，再游回出生的河流产卵。"
    ],
    pronunciation: [
      {
        text: "鲑鱼",
        reading: "guī yú",
      },
    ],
  },
  facts: {
    period: "现代（鲑科鱼类约 1 亿年前出现至今）",
    discoveryRegions: ["北大西洋","北太平洋沿岸河流"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 1.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "鲑鱼的一生是自然界最壮观的旅行之一：幼鱼顺流而下入海，几年后凭借嗅觉记住故乡河流的气味，逆流而上、甚至跃上瀑布回到出生地产卵。洄游的鲑鱼还把海洋的营养带回森林，喂养了熊、鹰和两岸的树木。",
  sources: [
    {
        "title": "Atlantic salmon — 美国国家海洋与大气局（NOAA）",
        "url": "https://www.fisheries.noaa.gov/species/atlantic-salmon",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Salmon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/salmon",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间涵盖大西洋鲑与大鳞大马哈鱼的常见个体。",
            "“凭嗅觉回乡”是主流解释，鲑鱼可能还利用磁场等线索。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
