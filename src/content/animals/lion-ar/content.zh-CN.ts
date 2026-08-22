import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "狮子（AR 版）",
  classificationLabel: "大型猫科动物（群居）",
  visibleFeature: "数数它尾巴末端的深色绒球——狮子用尾巴尖和同伴“打招呼”。",
  narration: {
    sentences: [
          "这是狮子，唯一过着大家族生活的猫科动物。",
          "雌狮们一起合作打猎，雄狮的鬃毛是它威风的“围巾”。"
    ],
    pronunciation: [
      {
        text: "狮子（AR 版）",
        reading: "shī zi",
      },
    ],
  },
  facts: {
    period: "现代（狮属延续数百万年）",
    discoveryRegions: ["非洲撒哈拉以南","印度（少量）"],
        size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 3.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "狮子是猫科动物里唯一的“社交达人”：一个狮群通常由几只有血缘关系的雌狮、它们的幼崽和一两头雄狮组成。雌狮们排成扇形围猎，把角马和斑马赶向埋伏的同伴。雄狮那圈鬃毛不只是装饰——研究显示深色浓密的鬃毛能“告诉”对手自己很强壮。夜幕降临后，狮子的吼声能传到八公里外，宣示这片领地的主人。",
  sources: [
    {
        "title": "Lion — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/lion",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Lion — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/lion",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目与既有“狮子”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。",
            "体长为头尾合计；雄狮比雌狮长，鬃毛让它显得更大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
