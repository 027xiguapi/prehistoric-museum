import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "奶牛",
  classificationLabel: "家畜（荷斯坦奶牛）",
  visibleFeature: "看它黑白花的大块头——这是世界上产奶量最高的奶牛品种。",
  narration: {
    sentences: [
          "这是荷斯坦奶牛，一杯牛奶背后每天要吃几十千克草料。",
          "牛有四个胃，会把吃下去的草再呕回嘴里细细嚼。"
    ],
    pronunciation: [
      {
        text: "奶牛",
        reading: "nǎi niú",
      },
    ],
  },
  facts: {
    period: "现代（家牛约一万年前驯化；荷斯坦品种两千年选育史）",
    discoveryRegions: ["荷兰与德国北部（荷斯坦品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 2.4,
      maxMeters: 2.7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "黑白花的荷斯坦-弗里赛奶牛是全球奶牛的主力，一头高产奶牛一年能产上万升牛奶。牛是反刍动物：草先粗粗咽下，闲下来时送回嘴里细嚼慢咽，一天反刍八小时左右。奶牛也有最好的朋友——研究发现牛群中普遍存在固定的“闺蜜”关系，分开后心率都会升高。现代奶牛业也带来甲烷排放与动物福利的讨论，值得边吃边想。",
  sources: [
    {
        "title": "Holstein-Friesian — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Holstein-Friesian",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dairy cattle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dairy_cattle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；不同奶牛品种体型差异大。",
            "产奶量随品种、饲养和地区差异极大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
