import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "梅根·拉皮诺埃（带球过人）",
  classificationLabel: "足球运动员",
  visibleFeature: "看她脚下的足球——带球过人的秘诀是让球一直贴着脚边滚动。",
  narration: {
    sentences: [
          "这是美国女足名将梅根·拉皮诺埃在带球过人。",
          "她曾两次捧起女足世界杯冠军奖杯。"
    ],
    pronunciation: [
      {
        text: "梅根·拉皮诺埃（带球过人）",
        reading: "méi gēn · lā pí nuò āi",
      },
    ],
  },
  facts: {
    period: "现代（约 2020 年发布的动作捕捉模型）",
    discoveryRegions: ["美国"],
        size: {
      kind: 'body-length',
      minMeters: 1.65,
      maxMeters: 1.75,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "梅根·拉皮诺埃是美国女子足球的标志性人物：2015 年和 2019 年女足世界杯冠军、2012 年奥运会金牌得主，2019 年还获得女子金球奖。她以精准的传中和任意球闻名，标志性的紫色短发和进球后张开双臂的庆祝动作广为人知。这个模型捕捉的是她控球推进的带球动作。",
  sources: [
    {
        "title": "Megan Rapinoe — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/megan-rapinoe",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Megan Rapinoe — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Megan_Rapinoe",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。",
            "身高为公开资料的约数；动作捕捉的具体采集时间未公开。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
