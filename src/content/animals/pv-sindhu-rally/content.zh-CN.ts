import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "普·文·辛杜（多拍相持）",
  classificationLabel: "羽毛球运动员",
  visibleFeature: "看她前后左右快速移动接球——羽毛球是世界上最快的球拍运动。",
  narration: {
    sentences: [
          "这是印度羽毛球名将辛杜在进行多拍来回。",
          "羽毛球的球速可以超过每小时 400 公里，比高铁还快！"
    ],
    pronunciation: [
      {
        text: "普·文·辛杜（多拍相持）",
        reading: "pǔ · wén · xīn dù",
      },
    ],
  },
  facts: {
    period: "现代（约 2020 年发布的动作捕捉模型）",
    discoveryRegions: ["印度"],
        size: {
      kind: 'body-length',
      minMeters: 1.75,
      maxMeters: 1.83,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "普萨拉·文卡塔·辛杜是印度最伟大的羽毛球运动员之一：2016 年里约奥运会银牌、2020 年东京奥运会铜牌得主，2019 年世锦赛冠军，也是印度第一位羽毛球世界冠军。她身高臂长，扣杀威力惊人。羽毛球用的“球”是插在软木托上的 16 根鹅毛，因为空气阻力大，飞行轨迹与网球完全不同。这个模型捕捉的是她前后移动接球的多拍相持。",
  sources: [
    {
        "title": "P V Sindhu — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/pv-sindhu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "P. V. Sindhu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/P._V._Sindhu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。",
            "同一名运动员另有击球和扣杀两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
