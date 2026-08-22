import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "郊狼",
  classificationLabel: "犬科动物",
  visibleFeature: "看它竖起的耳朵和蓬松的尾巴，长得像一只精瘦的狼。",
  narration: {
    sentences: [
          "这是郊狼，北美洲荒野里最机灵的猎手之一。",
          "它比狼小一些，却更能适应城市和乡村的变化。"
    ],
    pronunciation: [
      {
        text: "郊狼",
        reading: "jiāo láng",
      },
    ],
  },
  facts: {
    period: "现代（犬科演化历史数百万年至今）",
    discoveryRegions: ["北美洲与中美洲"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.35,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "郊狼是北美洲的原住民犬科动物，从草原到城市公园都能安家。它们主食小型猎物和果实，也吃腐肉，是生态里的多面手。郊狼以叫声闻名，晚上此起彼伏的“歌声”其实是同伴之间的联络。在狼和美洲狮减少的地方，郊狼反而扩大了分布范围。",
  sources: [
    {
        "title": "Coyote — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/coyote-facts",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Coyote — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/coyote",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间为成年郊狼近似值，不含尾巴。",
            "食性描述为概括性介绍，不同地区差异较大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
