import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "大白鲨",
  classificationLabel: "大型鲨鱼（鼠鲨科）",
  visibleFeature: "看它嘴里一排排的三角牙，旧牙掉了后排的“备用牙”会立刻补上。",
  narration: {
    sentences: [
          "这是大白鲨，海洋里最有名的大鲨鱼。",
          "它有几百颗备用牙齿，一生要换掉成千上万颗。"
    ],
    pronunciation: [
      {
        text: "大白鲨",
        reading: "dà bái shā",
      },
    ],
  },
  facts: {
    period: "现代（大白鲨谱系延续约 1600 万年）",
    discoveryRegions: ["全球温带与热带海域"],
        size: {
      kind: 'body-length',
      minMeters: 3.5,
      maxMeters: 6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "大白鲨是海洋的顶级猎手，牙齿像锯齿牛排刀，前排掉了后排随时补位，一生换牙数以千计。它体侧的肌肉让身体保持比海水更高的体温，游得更快更有力；鼻尖的小孔能感应猎物心跳发出的微弱电场。它最爱偷袭海豹：从深处加速冲上水面，有时整个身体跃出海水。尽管名声吓人，人类并不是它的猎物，它其实需要我们的保护。",
  sources: [
    {
        "title": "Great white shark — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/great-white-shark",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Great white shark — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/great-white-shark",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长上限来自可靠的历史测量；绝大多数成鲨不足 5 米。",
            "谱系年代依据化石与分子估计，存在学术分歧。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
