import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "大象",
  classificationLabel: "长鼻目动物",
  visibleFeature: "看它长长的鼻子，既是鼻子又是手，末端还有两片“嘴唇”。",
  narration: {
    sentences: [
          "这是大象，陆地上最大的动物。",
          "它的长鼻子能卷起整棵树枝，也会轻轻地捡起一颗花生。"
    ],
    pronunciation: [
      {
        text: "大象",
        reading: "dà xiàng",
      },
    ],
  },
  facts: {
    period: "现代（长鼻目约 5500 万年前出现至今）",
    discoveryRegions: ["非洲撒哈拉以南","南亚与东南亚"],
        size: {
      kind: 'body-length',
      minMeters: 5.5,
      maxMeters: 7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "大象的鼻子由上万块肌肉组成，既能拔树也能捡起硬币；鼻尖的“手指”敏感到能分辨硬币的正反面。大象用次声波在几公里外“聊天”，还能通过脚掌感知地面的震动。象群由年长的雌象带领，成员彼此照应数十年，是自然界最紧密的家庭之一。",
  sources: [
    {
        "title": "Elephant — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/elephant",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Elephant — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/elephant",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页不区分非洲象与亚洲象，体长为大型雄性近似区间。",
            "认知与通讯研究仍在持续更新，作概括介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
