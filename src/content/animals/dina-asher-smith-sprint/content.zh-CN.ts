import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "迪娜·阿舍-史密斯（短跑冲刺）",
  classificationLabel: "短跑运动员",
  visibleFeature: "看她大步流星地向前冲——她是英国历史上跑得最快的女运动员。",
  narration: {
    sentences: [
          "这是英国短跑运动员迪娜·阿舍-史密斯在全力冲刺。",
          "短跑运动员冲线时的速度可以超过每小时 40 公里。"
    ],
    pronunciation: [
      {
        text: "迪娜·阿舍-史密斯（短跑冲刺）",
        reading: "dí nà · ā shě-shǐ mì sī",
      },
    ],
  },
  facts: {
    period: "现代（约 2020 年发布的动作捕捉模型）",
    discoveryRegions: ["英国"],
        size: {
      kind: 'body-length',
      minMeters: 1.6,
      maxMeters: 1.7,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "迪娜·阿舍-史密斯是 2019 年世锦赛女子 200 米冠军、100 米亚军，保持着 100 米 10.83 秒的英国国家纪录，被称为“英国最快的女人”。她大学主修历史，还热心为女性运动员权益发声。这个模型捕捉的是她最高速度阶段的跑姿，同一系列还有起跑和途中跑两个模型。",
  sources: [
    {
        "title": "Dina Asher-Smith — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/dina-asher-smith",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dina Asher-Smith — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dina_Asher-Smith",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。",
            "同一名运动员另有起跑和途中跑两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
