import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "长戟大兜虫（AR 版）",
  classificationLabel: "最大的兜虫之一（美洲）",
  visibleFeature: "看它的超长双角——连角算在内，它是最长的甲虫之一。",
  narration: {
    sentences: [
          "这是长戟大兜虫，以希腊神话的大力神赫拉克勒斯命名。",
          "雄虫的角能占到体长的三分之二。"
    ],
    pronunciation: [
      {
        text: "长戟大兜虫（AR 版）",
        reading: "cháng jǐ dà dōu chóng",
      },
    ],
  },
  facts: {
    period: "现代（金龟总科延续上亿年）",
    discoveryRegions: ["中美洲与南美洲北部的热带雨林"],
        size: {
      kind: 'body-length',
      minMeters: 0.07,
      maxMeters: 0.17,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "长戟大兜虫（Dynastes hercules）是最长的甲虫之一，最大雄虫连角可达 17 厘米。两根角一长一短像钳子：胸角极长，头角向下弯曲，决斗时夹住对手高举重摔。幼虫在腐木里生活一到两年，化蛹前体重可达一百克以上。成虫吸食树汁和水果，能活三到六个月。传说它能搬动体重 850 倍的重物——那是夸大其词，但兜虫确实是昆虫界的大力士。",
  sources: [
    {
        "title": "Hercules beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hercules_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Hercules beetle — 大英百科全书（Britannica）相关条目",
        "url": "https://www.britannica.com/animal/rhinoceros-beetle-insect",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间含角；雌虫无角且明显更小。",
            "“850 倍体重”的说法流传广泛但缺乏严谨测量支持。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
