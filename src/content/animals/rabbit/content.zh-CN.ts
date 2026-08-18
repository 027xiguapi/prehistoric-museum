import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "兔子",
  classificationLabel: "兔形目动物",
  visibleFeature: "看它长长的耳朵，能像雷达一样转向声音的方向。",
  narration: {
    sentences: [
          "这是兔子，长耳朵的跳跃高手。",
          "它的耳朵又长又会转，还能帮身体散热。"
    ],
    pronunciation: [
      {
        text: "兔子",
        reading: "tù zi",
      },
    ],
  },
  facts: {
    period: "现代（兔科约 4000 万年前出现至今）",
    discoveryRegions: ["全球（家兔驯化自欧洲穴兔）"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "兔子几乎什么都怕，所以长了一整套“保命装备”：长耳朵收集四面八方的声音，大眼睛几乎能看到身后的景象，强有力的后腿让它能急转弯逃跑。兔子吃自己的软便便以再吸收营养。它们住在自己挖的洞穴里，群居生活。",
  sources: [
    {
        "title": "Rabbit — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/rabbit",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "House rabbit — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Oryctolagus_cuniculus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为欧洲穴兔/家兔常见区间。",
            "行为描述以穴兔为主，野兔习性有所不同。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
