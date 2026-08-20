import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "蜩（日暮蝉）",
  classificationLabel: "暮蝉（日本秋季物候）",
  visibleFeature: "看它深色的身体和半透明的翅膀——傍晚的“カナカナ”声就来自它。",
  narration: {
    sentences: [
          "这是蜩，日本文学里代表初秋的蝉。",
          "它多在清晨和傍晚鸣叫，叫声像“かなかな”的风铃声。"
    ],
    pronunciation: [
      {
        text: "蜩（日暮蝉）",
        reading: "tiáo",
      },
    ],
  },
  facts: {
    period: "现代（蝉科延续数千万年）",
    discoveryRegions: ["日本","东亚部分地区"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.035,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "蜩（ヒグラシ，汉字也作“日暮”）是日本俳句中的初秋季节词：在油蝉喧闹的正夏之后，它清澈而略带哀愁的“カナカナ”声标志着季节转换。与多数蝉喜欢正午烈日不同，它常在清晨和傍晚、甚至阴天鸣叫。若虫在地下吸食树根汁液数年，夏末秋初羽化。日本著名游戏与动画《寒蝉鸣泣之时》的名字就来自这种蝉。",
  sources: [
    {
        "title": "Tanna japonensis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tanna_japonensis",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ヒグラシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/higurashi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含翅膀。",
            "中文“蜩”泛指多种蝉，此处按日文ヒグラシ对应种介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
