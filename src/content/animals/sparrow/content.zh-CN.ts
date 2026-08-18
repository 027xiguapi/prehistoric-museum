import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "麻雀",
  classificationLabel: "雀形目小鸟",
  visibleFeature: "看它圆圆的小脑袋和棕色的背，脸颊上有一块黑斑。",
  narration: {
    sentences: [
          "这是麻雀，我们身边最常见的小鸟。",
          "它胖乎乎的，喜欢成群在灌木和屋檐间蹦来蹦去。"
    ],
    pronunciation: [
      {
        text: "麻雀",
        reading: "má què",
      },
    ],
  },
  facts: {
    period: "现代（约数百万年前分化至今）",
    discoveryRegions: ["欧亚大陆","非洲","被引入美洲与澳洲"],
        size: {
      kind: 'body-length',
      minMeters: 0.14,
      maxMeters: 0.18,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "家麻雀和树麻雀几乎完全跟随人类生活：在城市吃面包屑和残渣，在农田吃杂草种子，繁殖期捕虫喂雏。它们是留鸟，冬天也不迁徙，傍晚常成群聚在树上叽叽喳喳“开会”。麻雀数量在一些大城市正在下降，科学家仍在寻找原因。",
  sources: [
    {
        "title": "House sparrow — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/House_Sparrow/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "House sparrow — 英国皇家鸟类保护协会（RSPB）",
        "url": "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/house-sparrow/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页介绍家麻雀/树麻雀这类伴人麻雀，不含其他“雀”类。",
            "城市种群下降的原因尚无定论。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
