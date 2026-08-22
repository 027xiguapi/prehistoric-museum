import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "凯勒布·德雷塞尔（蝶泳）",
  classificationLabel: "游泳运动员（蝶泳）",
  visibleFeature: "看他的双臂同时出水向前扑——蝶泳是四种泳姿里最费力的一种。",
  narration: {
    sentences: [
          "这是美国游泳名将凯勒布·德雷塞尔，他正在游蝶泳。",
          "蝶泳的双臂要同时划水，像海豚一样上下起伏。"
    ],
    pronunciation: [
      {
        text: "凯勒布·德雷塞尔（蝶泳）",
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
  parentClassificationNote: "凯勒布·德雷塞尔是美国短距离自由泳和蝶泳名将，在东京 2020 奥运会上独得五枚金牌，并保持着男子 100 米蝶泳世界纪录（49 秒 45）。蝶泳于 20 世纪 30 年代从蛙泳中分化出来，要求双臂同时移臂、双腿做海豚式打水，对肩背力量要求极高。这个模型捕捉的是他蝶泳途中的一次完整划臂周期。",
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
            "同一名运动员另有自由泳和出发跳水两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
