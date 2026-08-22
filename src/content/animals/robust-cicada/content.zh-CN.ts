import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鸣鸣蝉",
  classificationLabel: "秋蝉（“ミンミン”鸣声）",
  visibleFeature: "看它半透明的翅膀收拢在背上——日本夏末的“ミンミン”声就是它。",
  narration: {
    sentences: [
          "这是鸣鸣蝉，夏末初秋“ミンミン”高歌的蝉。",
          "它的歌声明亮急促，越热叫得越欢。"
    ],
    pronunciation: [
      {
        text: "鸣鸣蝉",
        reading: "míng míng chán",
      },
    ],
  },
  facts: {
    period: "现代（蝉科延续数千万年）",
    discoveryRegions: ["日本","东亚与东南亚部分地区"],
        size: {
      kind: 'body-length',
      minMeters: 0.035,
      maxMeters: 0.045,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "鸣鸣蝉（ミンミンゼミ）以急促明亮的“ミーン、ミンミン”声得名，是夏末秋初的代表性蝉鸣。与油蝉相比它出现稍晚，喜欢在山林边缘的树上鸣叫。若虫在地下吸食树根汁液多年，夏末爬出羽化。蝉发音的原理像用手捏响空的易拉罐——雄蝉腹部的鼓膜每秒弯折数百次，中空的体腔把声音放大到百米可闻。",
  sources: [
    {
        "title": "Hyalessa maculaticollis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hyalessa_maculaticollis",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ミンミンゼミ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/minminzemi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含翅膀。",
            "中文名“鸣鸣蝉”为日文名的直译，并非正式中文学名。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
