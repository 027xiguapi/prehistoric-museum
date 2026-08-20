import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "哈巴狗（AR 版）",
  classificationLabel: "小型家犬（巴哥犬）",
  visibleFeature: "找找它额头上的褶皱——许多哈巴狗的额头上有一个“王子印记”。",
  narration: {
    sentences: [
          "这是哈巴狗，一张扁扁的“黑脸”配一对圆眼睛。",
          "它打起呼噜来像小猪，是天生的沙发伙伴。"
    ],
    pronunciation: [
      {
        text: "哈巴狗（AR 版）",
        reading: "hā ba gǒu",
      },
    ],
  },
  facts: {
    period: "现代（品种逾两千年）",
    discoveryRegions: ["中国（起源）","世界各地"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.55,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "哈巴狗在中国宫廷里当了两千多年的“皇家伴侣”，后来沿着商路漂洋过海，成了欧洲王室的心头好。传说荷兰起义领袖威廉一世曾因宠物哈巴狗的狂吠而躲过夜袭，从此哈巴狗成了奥兰治王室的“吉祥物”。它扁扁的鼻腔让它爱打呼噜、也怕热，夏天要记得帮它降温。",
  sources: [
    {
        "title": "Pug — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pug",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pug — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Pug",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目与既有“哈巴狗”草稿为同一品种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。",
            "“威廉一世夜袭”为流传的王室传说，细节难以考证。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
