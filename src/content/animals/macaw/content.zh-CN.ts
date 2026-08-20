import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "金刚鹦鹉",
  classificationLabel: "大型鹦鹉（金刚鹦鹉族）",
  visibleFeature: "看它弯弯的大嘴像一把胡桃钳，连最硬的坚果也能夹开。",
  narration: {
    sentences: [
          "这是金刚鹦鹉，中南美洲雨林里的大个子鹦鹉。",
          "它披着一身彩虹羽毛，还常常和伴侣并肩飞成一列。"
    ],
    pronunciation: [
      {
        text: "金刚鹦鹉",
        reading: "jīn gāng yīng wǔ",
      },
    ],
  },
  facts: {
    period: "现代（鹦鹉家族延续数千万年）",
    discoveryRegions: ["中南美洲热带雨林"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 1,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "金刚鹦鹉的喙能咬开棕榈坚果，可种子里的毒素也一并下肚——于是它和同伴飞到河边的“黏土崖”，吃一口泥土来中和毒素，像随身携带的“解药”。它和伴侣常常一夫一妻相伴多年，连叫声都是彼此配合的“二重唱”。聪明的它抓食物时会固定用左脚或右脚，就像人有惯用手。",
  sources: [
    {
        "title": "Macaw — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/macaw",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Macaw — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Macaw",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长含长尾；不同种类大小差别很大，区间以常见大型种类为准。",
            "黏土崖的作用以解毒假说为主流解释，学界仍有讨论。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
