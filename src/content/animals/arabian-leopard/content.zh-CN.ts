import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "阿拉伯豹",
  classificationLabel: "大型猫科动物",
  visibleFeature: "看它满身玫瑰花结状的斑点，每个斑点图案都独一无二。",
  narration: {
    sentences: [
          "这是阿拉伯豹，世界上最稀有的豹之一。",
          "它身上的玫瑰花结斑点能藏进岩石的影子里。"
    ],
    pronunciation: [
      {
        text: "阿拉伯豹",
        reading: "ā lā bó bào",
      },
    ],
  },
  facts: {
    period: "现代（约 50 万年前分化至今）",
    discoveryRegions: ["阿拉伯半岛"],
        size: {
      kind: 'body-length',
      minMeters: 1.1,
      maxMeters: 1.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "阿拉伯豹是豹的小型亚种，住在阿拉伯半岛的山地和荒漠边缘，主要在夜间捕猎山羊、瞪羚和蹄兔。它是半岛上最大的猫科动物，却极度濒危——据估计野外仅存约两百只。豹还是攀爬高手，能把猎物拖上树安全存放。",
  sources: [
    {
        "title": "Arabian leopard — 世界自然保护联盟（IUCN）",
        "url": "https://www.iucnredlist.org/species/26461/212810598",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Leopard — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/leopard",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "野生数量为近年调查的粗略估计，变化较大。",
            "亚种划分在学界仍有讨论，可能提升为独立种。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
