import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "短毛猫",
  classificationLabel: "家猫（短毛类型）",
  visibleFeature: "看它一身紧致的短毛和一对亮晶晶的眼睛，像随时准备起跳的小猎手。",
  narration: {
    sentences: [
          "这是短毛猫，不是某一个品种，而是千千万万只“混血”家猫的统称。",
          "短毛好打理，跳跃和捕鼠的本领也一点不含糊。"
    ],
    pronunciation: [
      {
        text: "短毛猫",
        reading: "duǎn máo māo",
      },
    ],
  },
  facts: {
    period: "现代（家猫驯化约一万年）",
    discoveryRegions: ["世界各地家庭"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "家猫的祖先是非洲野猫，大约一万年前在近东的农田边和人类结缘——谷仓里的老鼠是最好的“介绍信”。短毛是猫的“原始款”，长毛是后来才出现的突变。猫的胡须是精密的“触角”，能判断缝隙能不能钻过去；它的耳朵还能转到将近 180 度，听见人耳完全听不到的细小声音。",
  sources: [
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Domestic short-haired cat — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Domestic_short-haired_cat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长含尾；不同个体之间体型差异很大。",
            "“短毛猫”指毛长类型而非品种，本模型的花色只是其中一种。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
