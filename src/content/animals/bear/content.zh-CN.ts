import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "棕熊",
  classificationLabel: "大型熊科动物",
  visibleFeature: "看它圆圆的耳朵和小眼睛，还有一身厚厚的棕毛。",
  narration: {
    sentences: [
          "这是棕熊，陆地上最大的捕食者之一。",
          "它有厚厚的毛和有力的爪子，冬天会钻进洞里冬眠。"
    ],
    pronunciation: [
      {
        text: "棕熊",
        reading: "zōng xióng",
      },
    ],
  },
  facts: {
    period: "现代（约 50 万年前至今）",
    discoveryRegions: ["亚洲、欧洲、北美洲"],
        size: {
      kind: 'body-length',
      minMeters: 1.7,
      maxMeters: 2.2,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "棕熊虽是熊类中的“大块头”，但主食常常是浆果、坚果和鲑鱼，秋天会拼命进食储存脂肪。它的肩膀隆起一块肌肉，让前臂挖土、翻石头时特别有力。冬眠时心率大幅下降，靠脂肪过冬，春天再带着小熊走出洞穴。",
  sources: [
    {
        "title": "Brown bear — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/brown-bear",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Grizzly bear — 美国国家野生动物联合会（NWF）",
        "url": "https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/Grizzly-Bear",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年棕熊的常见区间，不同地区差异大。",
            "亚种（如灰熊、科迪亚克棕熊）体型差异未展开。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
