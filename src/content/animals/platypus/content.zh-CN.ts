import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鸭嘴兽",
  classificationLabel: "会下蛋的哺乳动物",
  visibleFeature: "看它鸭子般的扁嘴和海狸似的尾巴——它爸爸的脚踝上还藏着毒刺。",
  narration: {
    sentences: [
          "这是鸭嘴兽，会下蛋的哺乳动物，长得像是把几种动物拼在了一起。",
          "它闭着眼睛和鼻子潜水，靠扁嘴感应猎物发出的微弱电流。"
    ],
    pronunciation: [
      {
        text: "鸭嘴兽",
        reading: "yā zuǐ shòu",
      },
    ],
  },
  facts: {
    period: "现代（单孔目延续上亿年）",
    discoveryRegions: ["澳大利亚东部","塔斯马尼亚"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "1799 年第一只鸭嘴兽标本运到英国时，科学家以为是谁把鸭嘴缝在了海狸身上。鸭嘴兽妈妈下蛋后把蛋抱在肚皮上孵化，幼崽舔食母亲腹部渗出的乳汁。它的“鸭嘴”其实是柔软的电感应器官，上面布满数万个电感受器，能在漆黑的水底定位虾和水生昆虫。雄性后脚踝的毒刺能让人剧痛数周。2020 年的研究还发现鸭嘴兽的皮毛在紫外线下会发出蓝绿色荧光。",
  sources: [
    {
        "title": "Platypus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/platypus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Platypus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Platypus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长含扁平尾巴；雄性明显大于雌性。",
            "生物荧光现象只有少量研究报道，其功能尚不明确。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
