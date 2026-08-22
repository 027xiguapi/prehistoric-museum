import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "迪娜·阿舍-史密斯（起跑）",
  classificationLabel: "短跑运动员（起跑）",
  visibleFeature: "看她从起跑器上弹射而出——短跑的起跑要用到“各就位、预备、跑”三个口令。",
  narration: {
    sentences: [
          "这是迪娜·阿舍-史密斯从起跑器上起跑的瞬间。",
          "起跑器像两块小踏板，帮助运动员用力蹬地冲出去。"
    ],
    pronunciation: [
      {
        text: "迪娜·阿舍-史密斯（起跑）",
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
  parentClassificationNote: "短跑起跑分为“各就位”（双脚抵住起跑器）、“预备”（臀部抬起、重心前移）和鸣枪起跑三个阶段。反应时间低于 0.1 秒会被判为抢跑，因为科学研究表明人类不可能更快地对枪声做出反应。这个模型捕捉的是阿舍-史密斯蹬离起跑器的加速瞬间。",
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
            "同一名运动员另有冲刺和途中跑两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
