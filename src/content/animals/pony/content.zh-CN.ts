import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "矮种马",
  classificationLabel: "小型马（矮种马）",
  visibleFeature: "看看它又密又长的鬃毛和尾巴，像披了一件厚斗篷。",
  narration: {
    sentences: [
          "这是矮种马，不是小马驹，而是一辈子都长不高的马品种。",
          "它虽然个子小，力气却大得能驮起大人。"
    ],
    pronunciation: [
      {
        text: "矮种马",
        reading: "ǎi zhǒng mǎ",
      },
    ],
  },
  facts: {
    period: "现代（驯化历史数千年）",
    discoveryRegions: ["英国设得兰群岛","世界各地牧场"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.7,
      maxMeters: 1.45,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "矮种马的经典标准是肩高不超过 1.47 米，比这高的才算“大马”。设得兰矮种马出生在风大草少的海岛，练出了双层保暖毛、宽蹄子和“吃得少干得多”的本领，能拉动是自己体重两倍的车。历史上它们曾在矿井里拉煤；今天它们是许多孩子学骑马的第一位“马老师”。",
  sources: [
    {
        "title": "Pony — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pony",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pony — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Pony",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "“矮种马”包含许多品种，本模型接近设特兰类型；肩高以传统 1.47 米分界为上限。",
            "不同品种体重差异很大，约从 100 公斤到 400 公斤不等。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
