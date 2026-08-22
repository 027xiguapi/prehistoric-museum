import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "棘龙",
  classificationLabel: "半水生肉食恐龙（帆背）",
  visibleFeature: "看它背上高高的“帆”和鳄鱼一样的长嘴——棘龙是最会游泳的大型肉食恐龙。",
  narration: {
    sentences: [
          "这是棘龙，背上长着帆、爱吃鱼的大型肉食恐龙。",
          "它比霸王龙还长，是目前已知最长的肉食恐龙。"
    ],
    pronunciation: [
      {
        text: "棘龙",
        reading: "jí lóng",
      },
    ],
  },
  facts: {
    period: "晚白垩世（约 9900 万–9350 万年前）",
    discoveryRegions: ["北非（摩洛哥、埃及）"],
        size: {
      kind: 'body-length',
      minMeters: 14,
      maxMeters: 15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "棘龙的背帆由长达 1.7 米的脊椎棘支撑，可能用于展示或调节体温。2014 年和 2020 年的新化石彻底改写了它的形象：短后腿、宽大的爪子、桨状的尾巴，说明它大半生泡在北非的河流里，像巨型鹭鸶一样捕食鱼类和锯鳐。圆锥形的牙齿适合咬住滑溜的猎物，鼻孔后移让它能边泡在水里边呼吸。关于它到底是“游泳健将”还是“涉水渔夫”，科学家仍在争论。",
  sources: [
    {
        "title": "Spinosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/spinosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Spinosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Spinosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "最长肉食恐龙的说法基于不完整的化石，估计仍在修正。",
            "“主动游泳”还是“岸边涉水”的生态复原在学界有持续争论。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
