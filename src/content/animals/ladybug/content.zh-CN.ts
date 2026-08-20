import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "七星瓢虫",
  classificationLabel: "益虫（蚜虫克星）",
  visibleFeature: "数一数它背上的黑点——不多不少正好七颗。",
  narration: {
    sentences: [
          "这是七星瓢虫，背上有七颗星的迷你甲虫。",
          "它一天能吃掉上百只蚜虫，是花园的免费保镖。"
    ],
    pronunciation: [
      {
        text: "七星瓢虫",
        reading: "qī xīng piáo chóng",
      },
    ],
  },
  facts: {
    period: "现代（瓢虫科延续数千万年）",
    discoveryRegions: ["欧洲、亚洲与北美洲"],
        size: {
      kind: 'body-length',
      minMeters: 0.007,
      maxMeters: 0.01,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "七星瓢虫只有指甲盖大小，却是蚜虫的噩梦：成虫和幼虫都以蚜虫为食，一只瓢虫一生能吃掉几千只。遇到危险时，它会从腿关节处渗出黄色的苦液（“反射性出血”），让捕食者难以下口。鲜艳的红黑配色是警告色：“我有难吃的化学物质，别碰我。”冬天它们成百上千聚在一起越冬，春天再散开产卵——卵总是产在蚜虫群附近。",
  sources: [
    {
        "title": "Seven-spot ladybird — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Coccinella_septempunctata",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ladybird — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/ladybug",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为毫米级，模型会被大幅放大展示。",
            "“七星”是该种的固定特征，但瓢虫科其他种类斑点数差异很大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
