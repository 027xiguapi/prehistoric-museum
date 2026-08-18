import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "雪纳瑞犬",
  classificationLabel: "家犬品种",
  visibleFeature: "看它的“眉毛”和“胡子”，像一位慈祥的小老头。",
  narration: {
    sentences: [
          "这是雪纳瑞犬，长着胡子眉毛的小狗。",
          "它胡子上容易沾水和食物，饭后要擦“胡子”。"
    ],
    pronunciation: [
      {
        text: "雪纳瑞犬",
        reading: "xuě nà ruì quǎn",
      },
    ],
  },
  facts: {
    period: "现代（约 500 年前育成至今）",
    discoveryRegions: ["全球（起源自德国）"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.7,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "雪纳瑞得名于德语“胡子”（Schnauze），15 世纪的德国农场里它是抓老鼠的全能帮手。标志性的眉毛和胡子其实有实际作用：保护脸部不受老鼠反咬和荆棘伤害。它警觉聪明、掉毛少，是不错的看家犬；三个体型（迷你/标准/巨型）其实是三个不同品种。",
  sources: [
    {
        "title": "Standard Schnauzer — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/standard-schnauzer/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/dog",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长以标准雪纳瑞为主，迷你与巨型体型不同。",
            "育成年代为历史近似值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
