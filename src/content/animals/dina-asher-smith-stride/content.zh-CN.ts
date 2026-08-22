import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "迪娜·阿舍-史密斯（途中跑）",
  classificationLabel: "短跑运动员（途中跑）",
  visibleFeature: "看她高高抬起的膝盖和用力摆动的双臂——跑步可不只是腿在动。",
  narration: {
    sentences: [
          "这是迪娜·阿舍-史密斯途中跑的一步，膝盖抬得很高。",
          "短跑时双臂用力前后摆动，能帮助腿跑得更快。"
    ],
    pronunciation: [
      {
        text: "迪娜·阿舍-史密斯（途中跑）",
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
  parentClassificationNote: "途中跑阶段，短跑运动员的步幅可以超过两米，脚每次触地只有约十分之一秒。为了跑得更快，运动员要保持高重心、膝盖高抬、前脚掌落地，双臂成直角大幅摆动。这个模型定格了阿舍-史密斯途中跑的一个完整步态周期。",
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
            "同一名运动员另有起跑和冲刺两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
