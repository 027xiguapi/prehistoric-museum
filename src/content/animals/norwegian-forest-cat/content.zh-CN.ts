import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "挪威森林猫",
  classificationLabel: "长毛家猫品种",
  visibleFeature: "找找它脖子上像“围脖”一样的长毛，那是它过冬的装备。",
  narration: {
    sentences: [
          "这是挪威森林猫，披着厚厚“外套”的北欧大猫。",
          "它耳朵里和脚趾间都长着毛，踩在雪地上也不怕冷。"
    ],
    pronunciation: [
      {
        text: "挪威森林猫",
        reading: "nuó wēi sēn lín māo",
      },
    ],
  },
  facts: {
    period: "现代（品种历史悠久）",
    discoveryRegions: ["北欧（挪威）"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "挪威森林猫在斯堪的纳维亚的森林里生活了几个世纪，传说中它还是北欧神话里女神托尔的车夫。它有一身防水的双层厚毛，春天会褪去厚外套变得清爽。它是爬树高手，也能从高处头朝下慢慢爬下来。",
  sources: [
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Domestic cat — 国家地理儿童版（Nat Geo Kids）",
        "url": "https://kids.nationalgeographic.com/animals/mammals/facts/domestic-cat",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长不含尾巴；长毛让体型看起来更大。",
            "品种起源传说与史料并存，本页采用通行介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
