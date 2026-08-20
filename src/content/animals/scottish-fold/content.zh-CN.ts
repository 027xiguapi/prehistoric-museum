import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "苏格兰折耳猫",
  classificationLabel: "家猫品种（折耳）",
  visibleFeature: "看它向前折叠的耳朵——这个可爱特征其实来自一种软骨基因突变。",
  narration: {
    sentences: [
          "这是苏格兰折耳猫，耳朵像小帽子一样折在头上。",
          "它喜欢像人一样端坐着，被叫做“佛陀坐姿”。"
    ],
    pronunciation: [
      {
        text: "苏格兰折耳猫",
        reading: "sū gé lán zhé ěr māo",
      },
    ],
  },
  facts: {
    period: "现代（品种源自 1961 年苏格兰的一只农场猫）",
    discoveryRegions: ["苏格兰（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "1961 年，苏格兰一只名叫苏西的白色农场猫被发现天生折耳，这个品种由此开始。折耳来自影响软骨的显性基因突变（TRPV4 相关），所有折耳猫出生时耳朵是直的，约三周后才折下。需要特别注意：这个基因也会影响全身软骨，可能导致疼痛的关节病（骨软骨发育不良），因此负责任的繁育者只让折耳猫与立耳猫配对，而一些国家已禁止繁育折耳猫。",
  sources: [
    {
        "title": "Scottish Fold — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Scottish_Fold",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Scottish Fold — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/scottish-fold/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "折耳基因的健康风险存在程度差异；发布前建议补充动物福利视角的说明。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
