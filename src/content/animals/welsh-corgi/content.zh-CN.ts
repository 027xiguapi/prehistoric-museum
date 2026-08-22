import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "威尔士柯基犬",
  classificationLabel: "牧牛犬（短腿）",
  visibleFeature: "看它的短腿和长腿身——低矮的身材正好能躲过牛踢。",
  narration: {
    sentences: [
          "这是柯基犬，个子小小却能牧牛的“牧牛犬”。",
          "英国女王伊丽莎白二世一生养了三十多只柯基。"
    ],
    pronunciation: [
      {
        text: "威尔士柯基犬",
        reading: "wēi ěr shì kē jī quǎn",
      },
    ],
  },
  facts: {
    period: "现代（威尔士的牧牛犬传统有上千年）",
    discoveryRegions: ["英国威尔士（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.65,
      maxMeters: 0.8,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "柯基在威尔士语里意为“矮狗”。它牧牛的办法是咬牛的后脚跟，牛踢来时它贴地一趴就能躲开。柯基分卡迪根和彭布罗克两个品种：卡迪根有长尾巴，彭布罗克传统上尾巴很短。1933 年起柯基成为英国王室标志，女王的第一只柯基叫“苏珊”。短腿长身带来的椎间盘问题需要注意，还要控制体重。",
  sources: [
    {
        "title": "Pembroke Welsh Corgi — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/pembroke-welsh-corgi/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Welsh Corgi — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Welsh_Corgi",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；卡迪根与彭布罗克两个品种略有差异。",
            "模型接近彭布罗克型。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
