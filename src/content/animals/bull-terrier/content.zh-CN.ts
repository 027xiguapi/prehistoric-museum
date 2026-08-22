import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "牛头梗",
  classificationLabel: "梗犬（“蛋形头”）",
  visibleFeature: "看它从侧面圆圆隆起的头顶——这是犬类中独一无二的“蛋形头”。",
  narration: {
    sentences: [
          "这是牛头梗，长着一颗蛋形脑袋的梗犬。",
          "它肌肉发达又爱玩，外号“穿着狗装的孩子”。"
    ],
    pronunciation: [
      {
        text: "牛头梗",
        reading: "niú tóu gěng",
      },
    ],
  },
  facts: {
    period: "现代（19 世纪中期在英国定型）",
    discoveryRegions: ["英国（品种定型地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.55,
      maxMeters: 0.7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "牛头梗由斗牛犬与已灭绝的英国白梗等杂交而来，最初用于斗犬；19 世纪中叶繁育者詹姆斯·欣克斯把它改造成白色的“绅士伴侣犬”，独特的蛋形头部轮廓在此过程中逐渐形成。它精力旺盛、贪玩、对家人极度忠诚，但固执又冲动，需要坚定而温和的训练和充分的运动。白色个体有较明显的先天性耳聋风险，繁育筛查很重要。",
  sources: [
    {
        "title": "Bull Terrier — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/bull-terrier/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bull Terrier — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bull_Terrier",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "“蛋形头”是逐步选育出的极端特征，20 世纪中期才完全定型。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
