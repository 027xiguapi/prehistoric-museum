import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "中南大羚",
  classificationLabel: "极危牛科动物（“亚洲独角兽”）",
  visibleFeature: "看它脸上白色的斑纹和两只并排的尖角——从侧面看两只角会叠成一只。",
  narration: {
    sentences: [
          "这是中南大羚，1992 年才被科学界发现的神秘动物。",
          "因为它的两只角从侧面看像独角，人们叫它“亚洲独角兽”。"
    ],
    pronunciation: [
      {
        text: "中南大羚",
        reading: "zhōng nán dà líng",
      },
    ],
  },
  facts: {
    period: "现代（1992 年首次科学描述）",
    discoveryRegions: ["越南与老挝交界的安南山脉"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "中南大羚是 20 世纪最惊人的动物学发现之一：1992 年科学家根据猎人保存的角和头骨确认了这个新物种，此前外界完全不知道它的存在。它只生活在越南与老挝边境潮湿的安南山地森林，以无花果叶等植物为食，性情安静。因为极难遇见（野外目击屈指可数），它被称为“亚洲独角兽”。目前它被世界自然保护联盟列为极危物种，估计野外仅存几十到几百只，主要威胁是盗猎者下的钢丝套。",
  sources: [
    {
        "title": "Saola — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/saola",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Saola — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Saola",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "野外数量极不确定，估计从几十只到几百只不等。",
            "它不是真正的“羚羊亚科”，分类上属于牛亚科，与家牛关系更近。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
