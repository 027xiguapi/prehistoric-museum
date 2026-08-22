import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鸽子",
  classificationLabel: "城市常见鸟类",
  visibleFeature: "看它脖子上的彩虹光泽，灰色羽毛会闪出绿色和紫色。",
  narration: {
    sentences: [
          "这是鸽子，最熟悉人类的城市鸟。",
          "它脖子上的羽毛在阳光下会闪出彩虹一样的光。"
    ],
    pronunciation: [
      {
        text: "鸽子",
        reading: "gē zi",
      },
    ],
  },
  facts: {
    period: "现代（约 5000 年前驯化至今）",
    discoveryRegions: ["全球城市"],
        size: {
      kind: 'body-length',
      minMeters: 0.29,
      maxMeters: 0.37,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "城市里的鸽子是驯化家鸽的后代，祖先原鸽生活在海边的悬崖上——所以它们爱在楼房立面上筑巢。鸽子能认路回家，靠的是记忆地标、感知磁场和嗅闻气味。幼鸽喝的不是普通食物，而是亲鸽嗉囊分泌的“鸽乳”。",
  sources: [
    {
        "title": "Rock pigeon — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Rock_Pigeon/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Pigeon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pigeon",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为原鸽/家鸽常见区间。",
            "导航机制是多种线索的综合，学界仍在研究中。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
