import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "驴",
  classificationLabel: "家畜（驮运好手）",
  visibleFeature: "看它的长耳朵——驴的耳朵比马长得多，能听到很远的同伴叫声。",
  narration: {
    sentences: [
          "这是驴，人类驯化了五千多年的好帮手。",
          "它能在崎岖的山路上驮运重物，比马更稳当。"
    ],
    pronunciation: [
      {
        text: "驴",
        reading: "lǘ",
      },
    ],
  },
  facts: {
    period: "现代（约五千至七千年前在非洲驯化）",
    discoveryRegions: ["东北非（驯化地）","今遍布全世界"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.8,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "驴的祖先是非洲野驴，在炎热干旱的环境里练就了超强的耐渴能力和高效消化粗饲料的本领。它的“倔强”其实是谨慎：感到危险时先站住评估，而不是像马那样立刻逃跑——这在山路驮运中反而是优点。驴每天要吃大量干草和秸秆，叫声能传三公里远。全球仍有数千万头驴承担运输工作；驴皮制品贸易导致的过度扑杀正威胁部分地区的驴群。",
  sources: [
    {
        "title": "Donkey — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/donkey",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Donkey — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Donkey",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "肩高区间覆盖常见家驴；迷你驴与大型驮驴超出此范围。",
            "驯化时间窗口较宽，取决于对考古证据的不同解读。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
