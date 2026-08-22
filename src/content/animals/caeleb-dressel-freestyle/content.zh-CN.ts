import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "凯勒布·德雷塞尔（自由泳）",
  classificationLabel: "游泳运动员（自由泳）",
  visibleFeature: "看他的双臂轮流划水、双腿快速打水——自由泳其实指的是速度最快的爬泳。",
  narration: {
    sentences: [
          "这是凯勒布·德雷塞尔在游自由泳，双臂像风车一样交替划水。",
          "自由泳比赛中大家都选最快的爬泳，所以它成了“自由泳”的代名词。"
    ],
    pronunciation: [
      {
        text: "凯勒布·德雷塞尔（自由泳）",
        reading: "kǎi lè bù · dé léi sài ěr",
      },
    ],
  },
  facts: {
    period: "现代（约 2020 年发布的动作捕捉模型）",
    discoveryRegions: ["美国"],
        size: {
      kind: 'body-length',
      minMeters: 1.85,
      maxMeters: 1.95,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "爬泳是四种竞技泳姿中最快的：双臂交替划水，双腿上下打腿，头侧向转动呼吸。德雷塞尔在 50 米和 100 米自由泳上都是世界顶尖水平，东京奥运会上包揽这两个项目的金牌。这个模型与蝶泳、出发跳水两个模型属于同一运动员的动作捕捉系列。",
  sources: [
    {
        "title": "Caeleb Dressel — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/caeleb-dressel",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Caeleb Dressel — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Caeleb_Dressel",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。",
            "同一名运动员另有蝶泳和出发跳水两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
