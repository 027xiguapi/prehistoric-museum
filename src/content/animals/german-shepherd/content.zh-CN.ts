import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "德国牧羊犬",
  classificationLabel: "全能工作犬",
  visibleFeature: "看它竖立的耳朵和黑黄相间的被毛——这是世界上最出名的警犬。",
  narration: {
    sentences: [
          "这是德国牧羊犬，警察、军队和救援队的好帮手。",
          "电影明星“任丁丁”让全世界认识了这种狗。"
    ],
    pronunciation: [
      {
        text: "德国牧羊犬",
        reading: "dé guó mù yáng quǎn",
      },
    ],
  },
  facts: {
    period: "现代（1899 年在德国登记定型）",
    discoveryRegions: ["德国（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.95,
      maxMeters: 1.15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "1899 年，骑兵上尉马克斯·冯·施特芬尼茨在犬展上买下一只名叫霍兰德的牧羊犬，以此为基础创立德国牧羊犬协会，目标是培育“以工作为本”的犬种。今天它遍布警犬、军犬、搜救犬和导盲犬岗位。一战后英美因忌讳“德国”字样曾改称“阿尔萨斯狼犬”。需要注意的是，现代展示系选育出的过度倾斜背线（“青蛙腿”站姿）与髋关节疾病相关，工作系的背线则更平直。",
  sources: [
    {
        "title": "German Shepherd Dog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/german-shepherd-dog/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "German Shepherd — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/German_Shepherd",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "展示系与工作系在外观和髋关节健康上差异明显。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
