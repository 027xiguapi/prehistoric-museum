import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "仓鼠",
  classificationLabel: "穴居啮齿动物",
  visibleFeature: "看它鼓鼓的颊囊——“仓鼠”的名字来自德语“囤积者”。",
  narration: {
    sentences: [
          "这是仓鼠，把食物藏在腮帮子里的穴居小兽。",
          "它在野外的地洞能分出卧室、粮仓和卫生间。"
    ],
    pronunciation: [
      {
        text: "仓鼠",
        reading: "cāng shǔ",
      },
    ],
  },
  facts: {
    period: "现代（黄金仓鼠 1930 年代起成为宠物）",
    discoveryRegions: ["叙利亚及周边（黄金仓鼠原产地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.12,
      maxMeters: 0.18,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "宠物仓鼠大多是黄金仓鼠（叙利亚仓鼠）：1930 年在叙利亚沙漠边缘捕获的一窝母仔，几乎成了全世界宠物仓鼠的共同祖先。仓鼠的颊囊能塞进相当于身体一半体积的食物，运回洞中粮仓。它是夜行性独居动物，白天睡觉夜里跑轮，一晚能跑几公里；野生仓鼠在冬季会浅度冬眠。野外黄金仓鼠如今是易危物种，而欧洲的原仓鼠更是极危。",
  sources: [
    {
        "title": "Hamster — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/hamster",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Golden hamster — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Golden_hamster",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间对应黄金仓鼠；侏儒仓鼠更小。",
            "“所有宠物仓鼠源自 1930 年那窝”是通行说法，个别实验室品系有少量其他来源。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
