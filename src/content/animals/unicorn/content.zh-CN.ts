import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "独角兽（传说生物）",
  classificationLabel: "神话生物",
  visibleFeature: "看它额头上的螺旋独角——传说只有最纯洁的心灵才能接近它。",
  narration: {
    sentences: [
          "这是独角兽，欧洲传说里额生独角的白色骏马。",
          "现实中的“独角兽角”其实是独角鲸的长牙。"
    ],
    pronunciation: [
      {
        text: "独角兽（传说生物）",
        reading: "dú jiǎo shòu",
      },
    ],
  },
  facts: {
    period: "传说（古希腊文献已有记载）",
    discoveryRegions: ["欧洲传说（形象源于对印度等地的传闻）"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.4,
      maxMeters: 1.8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "独角兽的记载可追溯到古希腊：历史学家克特西亚斯描述过印度的“独角野驴”。中世纪欧洲人相信独角兽的角（alicorn）能解百毒，王公贵族高价收购“独角兽角”——这些角其实来自北极的独角鲸，16 世纪才被揭穿。传说独角兽野性难驯，只会向纯洁的人靠近。它是苏格兰的国家象征，与英格兰的狮子相对。作为传说生物，体型按马估计。",
  sources: [
    {
        "title": "Unicorn — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/topic/unicorn",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Unicorn — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Unicorn",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是传说生物而非真实动物；体型按马估计。",
            "食性按马类推，因为传说中未明确描述。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
