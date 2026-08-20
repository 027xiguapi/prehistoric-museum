import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "花栗鼠",
  classificationLabel: "颊囊小松鼠",
  visibleFeature: "看它鼓起来的腮帮子——那两个“口袋”能塞进一整把坚果。",
  narration: {
    sentences: [
          "这是花栗鼠，背着五条深色条纹的小松鼠。",
          "它把坚果塞进腮帮子里，运回地洞储藏过冬。"
    ],
    pronunciation: [
      {
        text: "花栗鼠",
        reading: "huā lì shǔ",
      },
    ],
  },
  facts: {
    period: "现代（松鼠科延续数千万年）",
    discoveryRegions: ["北美洲东部森林","亚洲北部（西伯利亚花栗鼠）"],
        size: {
      kind: 'body-length',
      minMeters: 0.18,
      maxMeters: 0.3,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "花栗鼠是住在地洞里的小松鼠，背上的五条深色条纹是标志。它的颊囊撑到极限时头能大三倍，一次最多能搬运几十颗橡子。秋天它疯狂储存食物——一个洞穴的存粮可以多达几千颗。它吃坚果、种子、蘑菇、鸟蛋和小昆虫，属于杂食。冬眠时它不是一觉睡到底，而是每隔几天醒来吃点存粮。",
  sources: [
    {
        "title": "Chipmunk — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/chipmunk",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chipmunk — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chipmunk",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间含尾巴。",
            "亚洲只有西伯利亚花栗鼠一种，其余二十多种都在北美洲。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
