import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "彩虹吉丁虫",
  classificationLabel: "吉丁虫科（金属光泽）",
  visibleFeature: "看它彩虹般的金属光泽——这种颜色不是色素，而是壳层结构反射出来的。",
  narration: {
    sentences: [
          "这是彩虹吉丁虫，会发光的“飞行宝石”。",
          "日本的法隆寺曾用几万片吉丁虫鞘翅装饰佛龛。"
    ],
    pronunciation: [
      {
        text: "彩虹吉丁虫",
        reading: "cǎi hóng jí dīng chóng",
      },
    ],
  },
  facts: {
    period: "现代（吉丁虫科延续上亿年）",
    discoveryRegions: ["日本","东亚森林"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.04,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "吉丁虫的彩虹色来自鞘翅表层的纳米级多层结构，光在层间反射干涉产生金属光泽，所以即使制成标本也永不褪色——日本奈良法隆寺的玉虫厨子佛龛就用上万片玉虫鞘翅镶嵌。幼虫蛀食枯木或衰弱木的木质部，成虫盛夏访花吸汁。有些吉丁虫能探测森林火灾的红外线，专门飞往刚烧毁的林地产卵。",
  sources: [
    {
        "title": "Buprestidae — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Buprestidae",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "玉虫（タマムシ）— 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/tamamushi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间按常见吉丁虫；科内差异较大。",
            "“法隆寺玉虫厨子”的装饰数量与细节在史料中记载不一。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
