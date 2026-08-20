import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "美国比特斗牛梗",
  classificationLabel: "斗牛犬类（争议犬种）",
  visibleFeature: "看它结实的肌肉和宽大的头部——力量和温柔可以共存于同一只狗身上。",
  narration: {
    sentences: [
          "这是美国比特斗牛梗，充满争议的强壮犬种。",
          "它对家人的感情深厚，但需要非常负责任的主人。"
    ],
    pronunciation: [
      {
        text: "美国比特斗牛梗",
        reading: "bǐ tè quǎn",
      },
    ],
  },
  facts: {
    period: "现代（19 世纪由英爱传入美国后定型）",
    discoveryRegions: ["美国（品种定型地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.65,
      maxMeters: 0.85,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "比特斗牛梗的祖先是 19 世纪英国斗牛犬与梗犬的混血，传入美国后被培育得更高大。它曾被称为“保姆犬”，因为对家庭特别是孩子表现出极强的耐心；但因斗犬历史和强壮体格，它在许多国家受到饲养限制。需要特别说明：没有可靠的品种咬合力统计数据支持“比特犬咬合力锁死”的传言，那是都市传说。这个品种的经历恰好说明：主人的训练和社会的管理，比犬种标签更重要。",
  sources: [
    {
        "title": "American Pit Bull Terrier — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/American_Pit_Bull_Terrier",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pit bull — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pit-bull-terrier",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "该犬种在多地属于限养或禁养犬种；收录与展示前应评估地域合规问题。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
