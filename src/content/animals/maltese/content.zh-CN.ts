import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "马尔济斯犬",
  classificationLabel: "玩具犬（白色长毛）",
  visibleFeature: "看它拖到地上的白色长毛——这是有着两千多年“宠物史”的古老犬种。",
  narration: {
    sentences: [
          "这是马尔济斯犬，古罗马贵妇怀里的“袖珍犬”。",
          "它的毛像人的头发一样不停生长，几乎不掉毛。"
    ],
    pronunciation: [
      {
        text: "马尔济斯犬",
        reading: "mǎ ěr jì sī quǎn",
      },
    ],
  },
  facts: {
    period: "现代（地中海地区两千多年前已有记载）",
    discoveryRegions: ["地中海地区（传统与马耳他岛相关联）"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "马尔济斯犬是欧洲最古老的玩具犬之一：古希腊作家亚里士多德就曾描述过这种“梅利塔犬”，古罗马贵妇把它藏在衣袖里随身携带。纯白丝滑的长毛是它的标志，需要每天梳理或修剪成短装。它性格活泼亲人、爱叫，别看个子小，胆量可不小。传统上认为它来自马耳他岛，但现代研究对此存疑。",
  sources: [
    {
        "title": "Maltese — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/maltese/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Maltese dog — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Maltese_dog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴与拖地的饰毛。",
            "“产自马耳他岛”是传统说法，古代文献指向地中海多个地点。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
