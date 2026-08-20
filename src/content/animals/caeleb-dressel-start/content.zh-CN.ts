import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "凯勒布·德雷塞尔（出发跳水）",
  classificationLabel: "游泳运动员（出发跳水）",
  visibleFeature: "看他从出发台上腾空而起——顶尖选手的出发能占到整场比赛的胜负。",
  narration: {
    sentences: [
          "这是凯勒布·德雷塞尔从出发台跃入水中的瞬间。",
          "游泳比赛的出发要在哨声后极短时间内蹬台起跳，反应快零点几秒都很关键。"
    ],
    pronunciation: [
      {
        text: "凯勒布·德雷塞尔（出发跳水）",
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
  parentClassificationNote: "现代游泳出发采用“蹲踞式”起跳：运动员双手扣住出发台前沿，一腿在前一腿在后蓄力，蹬台后身体呈流线型入水，并在水下做一段海豚式打腿。规则要求出发反应时间不得短于 0.1 秒，否则按抢跳犯规处理。这个模型捕捉的是德雷塞尔腾空入水的姿态。",
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
            "同一名运动员另有蝶泳和自由泳两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
