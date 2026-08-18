import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "剑齿虎",
  classificationLabel: "史前大型猫科动物",
  visibleFeature: "看看它嘴边露出的两根长牙，像两把弯刀一样锋利。",
  narration: {
    sentences: [
          "这是剑齿虎，一种生活在冰河时代的史前大猫。",
          "它嘴里有两根像弯刀一样的大长牙，是它最有名的标志。"
    ],
    pronunciation: [
      {
        text: "剑齿虎",
        reading: "jiàn chǐ hǔ",
      },
    ],
  },
  facts: {
    period: "更新世（约 250 万年前 — 约 1 万年前）",
    discoveryRegions: ["南北美洲"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "剑齿虎并不是现代老虎的祖先，而是猫科中一个早已灭绝的分支。它最著名的两根上犬齿长达二十多厘米，像弯刀一样，适合切割猎物柔软的腹部。它四肢粗壮、擅长扑抱，可能以当时的大地懒和野牛类为食。冰河时代结束时，气候和猎物都发生了变化，剑齿虎也随之灭绝。",
  sources: [
    {
        "title": "Smilodon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Smilodon",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Sabre-toothed cats — 英国自然历史博物馆",
        "url": "https://www.nhm.ac.uk/discover/sabre-toothed-cats.html",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "剑齿虎是对整个剑齿猫族类的通称，本页以最著名的属种（Smilodon，刃齿虎）为代表介绍。",
            "体长区间为属种近似范围，面向家庭阅读，不作为精确测量值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
