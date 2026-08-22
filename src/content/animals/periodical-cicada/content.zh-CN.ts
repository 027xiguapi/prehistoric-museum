import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "十七年蝉",
  classificationLabel: "周期蝉（北美）",
  visibleFeature: "看它红色的眼睛——它们在地下等了十七年才见到阳光。",
  narration: {
    sentences: [
          "这是十七年蝉，在地下生活十七年才羽化的“时间胶囊”昆虫。",
          "同一批蝉会约好一样在同一年倾巢而出，多达数十亿只。"
    ],
    pronunciation: [
      {
        text: "十七年蝉",
        reading: "shí qī nián chán",
      },
    ],
  },
  facts: {
    period: "现代（周期蝉属延续数百万年）",
    discoveryRegions: ["北美洲东部"],
        size: {
      kind: 'body-length',
      minMeters: 0.025,
      maxMeters: 0.035,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "周期蝉是自然界的数学谜题：它们在地下吸食树根汁液十三年或十七年，然后数十亿只同时钻出地面羽化。为什么是 13 和 17？因为它们都是质数——任何天敌的生命周期都难以与它们同步。这种“饱和策略”让捕食者吃撑了也吃不完，幸存的蝉得以繁殖。不同年份羽化的种群被编号为不同的“窝”（brood）。它们寿命短暂而喧闹，是北美东部的自然奇观。",
  sources: [
    {
        "title": "Periodical cicadas — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Periodical_cicadas",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Magicicada — 大英百科全书（Britannica）相关条目",
        "url": "https://www.britannica.com/animal/cicada",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含翅膀。",
            "质数周期躲避天敌是最流行的解释，但并非唯一假说。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
