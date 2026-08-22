import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "黄蜻",
  classificationLabel: "蜻蜓（迁徙能手）",
  visibleFeature: "看它四片平展的透明翅膀——蜻蜓是世界上飞得最好的昆虫之一。",
  narration: {
    sentences: [
          "这是黄蜻，全世界分布最广的蜻蜓。",
          "它能乘着季风跨海迁徙，一代接力飞几千公里。"
    ],
    pronunciation: [
      {
        text: "黄蜻",
        reading: "huáng qīng",
      },
    ],
  },
  facts: {
    period: "现代（蜻蜓目延续三亿多年）",
    discoveryRegions: ["全世界的温暖地区"],
        size: {
      kind: 'wingspan',
      minMeters: 0.08,
      maxMeters: 0.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "黄蜻（Pantala flavescens）可能是地球上迁徙距离最长的昆虫之一：研究发现它的种群跨越印度洋在非洲与印度之间季节性往返。蜻蜓的飞行肌直接驱动四片翅膀，能悬停、倒飞、急转弯，捕食成功率高达九成以上。它的稚虫（水虿）生活在水里，用可弹出的“面罩”下唇捕捉猎物，也是凶猛的水中小猎手。",
  sources: [
    {
        "title": "Pantala flavescens — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pantala_flavescens",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Wandering glider — 大英百科全书（Britannica）相关条目",
        "url": "https://www.britannica.com/animal/dragonfly",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "模型按常见“蜻蜓”通称处理，此条目以黄蜻为参照种。",
            "迁徙路线的细节仍在追踪研究中。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
