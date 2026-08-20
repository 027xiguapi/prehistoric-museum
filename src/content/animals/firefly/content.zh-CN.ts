import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "萤火虫",
  classificationLabel: "发光甲虫",
  visibleFeature: "看它腹部的发光器——萤火虫的光是几乎不发热量的“冷光”。",
  narration: {
    sentences: [
          "这是萤火虫，夏夜里提着小灯笼的甲虫。",
          "它一闪一闪，是在用光信号寻找伴侣。"
    ],
    pronunciation: [
      {
        text: "萤火虫",
        reading: "yíng huǒ chóng",
      },
    ],
  },
  facts: {
    period: "现代（萤科延续上亿年）",
    discoveryRegions: ["东亚（日本、中国等地的清洁水边）"],
        size: {
      kind: 'body-length',
      minMeters: 0.01,
      maxMeters: 0.02,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "萤火虫其实是甲虫：腹部的发光细胞里，荧光素在荧光素酶催化下与氧气反应发光，能量转化效率接近百分之百，远超白炽灯。每种萤火虫的闪光节奏都不同，雄虫边飞边闪，雌虫在草丛中按密码回应。幼虫生活在水边，捕食蜗牛和螺类，是凶猛的小猎手。萤火虫对水质和黑暗环境极其敏感，光污染和河道水泥化使它们越来越少见。",
  sources: [
    {
        "title": "Firefly — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/firefly-insect",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Firefly — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Firefly",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间按常见水生萤火虫；不同种类差异较大。",
            "“发光效率百分之百”指化学能到光能的转化，是约数。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
