import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "节节蝉",
  classificationLabel: "秋蝉（“ツクツク”鸣声）",
  visibleFeature: "看它细长的身体和透明的翅膀——日本夏末的“ツクツクボウシ”就是它。",
  narration: {
    sentences: [
          "这是节节蝉，夏末唱“ツクツクボウシ”的蝉。",
          "它的歌声先升调再降调，像在数着夏天剩下的日子。"
    ],
    pronunciation: [
      {
        text: "节节蝉",
        reading: "jié jié chán",
      },
    ],
  },
  facts: {
    period: "现代（蝉科延续数千万年）",
    discoveryRegions: ["日本","东亚部分地区"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.04,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "节节蝉（ツクツクボウシ）的日文名是把鸣声“ツクツク”和“法师（ボウシ）”拼起来的拟声名，中文常译作“节节蝉”或按学名称作“沃氏蝉”。它的鸣声节奏感极强：先是加速的“唧唧”，进入高亢的“ツクツク”段，最后缓缓收尾，被日本人视为夏去秋来的声音风景。若虫在地下生活数年，八月下旬到九月是它的舞台。",
  sources: [
    {
        "title": "Meimuna opalifera — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Meimuna_opalifera",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ツクツクボウシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/tsukutsukubousi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含翅膀。",
            "中文名“节节蝉”为拟声意译，并非正式中文学名。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
