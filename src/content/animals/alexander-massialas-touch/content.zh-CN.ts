import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "亚历山大·马西亚拉斯（击剑得分）",
  classificationLabel: "击剑运动员（花剑）",
  visibleFeature: "看他身体前倾、手臂伸直的那一瞬间——剑尖碰到对手就能得分。",
  narration: {
    sentences: [
          "这是美国击剑运动员亚历山大·马西亚拉斯，他正在做一次漂亮的进攻得分。",
          "花剑比赛里，只有剑尖碰到对方躯干才算得分。"
    ],
    pronunciation: [
      {
        text: "亚历山大·马西亚拉斯（击剑得分）",
        reading: "yà lì shān dà · mǎ xī yà lā sī",
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
  parentClassificationNote: "亚历山大·马西亚拉斯是美国男子花剑名将：2016 年里约奥运会个人银牌、团体铜牌得主，父亲格雷格·马西亚拉斯曾是他的国家队教练。花剑是三种击剑武器之一，讲究“进攻权”规则——先发动正确进攻的一方在同时亮灯时得分。这个模型来自谷歌为搜索结果制作的运动员动作捕捉系列，捕捉的是剑尖触及对手的得分瞬间。",
  sources: [
    {
        "title": "Alexander Massialas — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/alexander-massialas",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Alexander Massialas — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alexander_Massialas",
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
