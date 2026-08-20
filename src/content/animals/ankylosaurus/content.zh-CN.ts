import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "甲龙",
  classificationLabel: "甲龙类恐龙（尾锤）",
  visibleFeature: "看它尾巴末端的大骨锤——挥动起来足以砸断袭击者的骨头。",
  narration: {
    sentences: [
          "这是甲龙，全身披着骨甲、尾巴末端长着大锤子的恐龙。",
          "它用尾锤保护自己，连霸王龙也不敢轻易招惹。"
    ],
    pronunciation: [
      {
        text: "甲龙",
        reading: "jiǎ lóng",
      },
    ],
  },
  facts: {
    period: "晚白垩世（约 6800 万–6600 万年前）",
    discoveryRegions: ["北美洲西部（美国、加拿大）"],
        size: {
      kind: 'body-length',
      minMeters: 6,
      maxMeters: 8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "甲龙是甲龙类中最大、最晚出现的成员，与霸王龙生活在同一时代的北美洲。它的背部和头部覆盖着紧密排列的骨质甲板，甲板里还嵌着尖刺，腹部是唯一的软肋，所以它遇到袭击时会趴低身体。尾锤由几块愈合的大骨瘤构成，计算机模拟显示全力挥击可以造成粉碎性骨折。它用喙状嘴切断低矮植物，肠道庞大，一天要吃掉大量蕨类和灌木叶。",
  sources: [
    {
        "title": "Ankylosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Ankylosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ankylosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ankylosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长估计来自不完整骨架，范围较宽。",
            "尾锤能造成何种程度的伤害依据的是力学模拟，而非直接观察。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
