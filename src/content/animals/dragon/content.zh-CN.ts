import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "龙（传说生物）",
  classificationLabel: "神话生物",
  visibleFeature: "看它的翅膀和尖角——这是欧洲传说里喷火守宝的龙。",
  narration: {
    sentences: [
          "这是龙，欧洲传说里守护宝藏的会飞的巨兽。",
          "中国的龙象征吉祥和水，与西方的喷火龙完全不同。"
    ],
    pronunciation: [
      {
        text: "龙（传说生物）",
        reading: "lóng",
      },
    ],
  },
  facts: {
    period: "传说（古代神话，东西方各有数千年历史）",
    discoveryRegions: ["欧洲与亚洲的传说"],
        size: {
      kind: 'body-length',
      minMeters: 4,
      maxMeters: 8,
    },
    diet: "unknown",
  },
  parentClassificationNote: "龙是世界各地独立产生的神话生物：欧洲的龙多是喷火、守宝、与骑士决斗的巨兽，而中国的龙能兴云布雨，是皇权和吉祥的象征，两者的形象几乎没有共同点。古生物学家猜想，龙的部分灵感可能来自古人发现的恐龙或大象化石——巨大的头骨很容易被想象成怪兽。这个模型采用欧洲式带翼喷火龙的形象。作为传说生物，它的体型和习性都没有科学数据，这里的数字纯属想象。",
  sources: [
    {
        "title": "Dragon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/topic/dragon-mythological-creature",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dragon — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dragon",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是传说生物而非真实动物；体型数据为文艺作品中的常见想象。",
            "食性标注为“未知”，因为传说中龙的食性描述彼此矛盾。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
