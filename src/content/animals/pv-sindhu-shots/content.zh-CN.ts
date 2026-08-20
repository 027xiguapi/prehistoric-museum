import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "普·文·辛杜（击球组合）",
  classificationLabel: "羽毛球运动员",
  visibleFeature: "看她变换不同的击球手法——羽毛球有高远球、吊球、搓球等几十种打法。",
  narration: {
    sentences: [
          "这是辛杜在演示不同的羽毛球击球动作。",
          "高手打球时会不断变化节奏，让对手猜不到下一拍。"
    ],
    pronunciation: [
      {
        text: "普·文·辛杜（击球组合）",
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
  parentClassificationNote: "羽毛球的基本击球包括打到对方后场的高远球、轻吊网前的吊球、贴网而过的搓球和斜线劈杀等。辛杜的正手进攻尤其出色，她的教练是印尼名将的弟子、印度教练戈比昌德。这个模型与多拍相持、扣杀两个模型属于同一运动员的动作捕捉系列。",
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
            "同一名运动员另有多拍相持和扣杀两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
