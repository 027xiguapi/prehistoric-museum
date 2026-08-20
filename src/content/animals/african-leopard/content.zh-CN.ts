import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "非洲豹",
  classificationLabel: "大型猫科动物",
  visibleFeature: "找找它身上的玫瑰花形斑点，那是每只豹都独一无二的花纹。",
  narration: {
    sentences: [
          "这是非洲豹，一位会把猎物搬上树的大猫。",
          "它满身玫瑰花形的斑点，帮它藏进草丛和树影里。"
    ],
    pronunciation: [
      {
        text: "非洲豹",
        reading: "fēi zhōu bào",
      },
    ],
  },
  facts: {
    period: "现代（豹属已延续数百万年）",
    discoveryRegions: ["非洲撒哈拉以南","亚洲部分地区"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "非洲豹是攀爬高手：强壮的肩膀和可伸缩的利爪让它能把比自身体重还重的猎物拖上树，避免被狮子和鬣狗抢走。它身上的“玫瑰花斑”不是纯圆点，而是一圈圈像花朵的空心图案，每只豹的斑纹都像指纹一样独一无二。豹还是全能猎手，会游泳、会爬树，也能在黑暗中看清猎物。",
  sources: [
    {
        "title": "Leopard — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/leopard",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Leopard — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/leopard",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间为雌雄合计的头尾长度，雄豹通常比雌豹大约三分之一。",
            "“非洲豹”指非洲的豹种群；豹在整个非洲和亚洲都有分布。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
