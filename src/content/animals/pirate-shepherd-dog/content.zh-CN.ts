import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "德国牧羊犬",
  classificationLabel: "大型工作犬",
  visibleFeature: "看它头上的海盗帽！其实它是一只戴着道具的德国牧羊犬。",
  narration: {
    sentences: [
          "这是一只德国牧羊犬，只是戴了一顶海盗帽子道具。",
          "它是聪明又勇敢的工作犬，经常帮助警察和救援队。"
    ],
    pronunciation: [
      {
        text: "德国牧羊犬",
        reading: "dé guó mù yáng quǎn",
      },
    ],
  },
  facts: {
    period: "现代（1899 年育成至今）",
    discoveryRegions: ["德国"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.55,
      maxMeters: 0.65,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "德国牧羊犬在 1899 年由马克斯·冯·施特凡尼茨定向培育，目标是造出最理想的工作犬。它学得快、胆子大，如今在搜救、警务、导盲等岗位上都很出色。家里养的德牧同样需要“工作”——每天的奔跑、嗅闻游戏和训练会让它快乐。",
  sources: [
    {
        "title": "German Shepherd Dog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/german-shepherd-dog/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/dog",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "肩高为成年犬常见区间。",
            "模型中的海盗帽为素材自带道具，正式场景将移除或说明。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
