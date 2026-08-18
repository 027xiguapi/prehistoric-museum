import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "蜗牛",
  classificationLabel: "腹足类软体动物",
  visibleFeature: "看它背着螺旋形的小房子，走哪儿都带着家。",
  narration: {
    sentences: [
          "这是蜗牛，背着房子慢慢走的小动物。",
          "它爬过的地方会留下一条亮亮的痕迹。"
    ],
    pronunciation: [
      {
        text: "蜗牛",
        reading: "wō niú",
      },
    ],
  },
  facts: {
    period: "现代（腹足类约 5 亿年前出现至今）",
    discoveryRegions: ["全球"],
        size: {
      kind: 'body-length',
      minMeters: 0.02,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "蜗牛用“腹足”像波浪一样蠕动前进，分泌的黏液既保护身体又当胶水，甚至能倒着爬过刀刃不受伤。壳是它随身携带的骨骼和避难所，干燥时蜗牛会封住壳口睡长觉。大部分陆生蜗牛是雌雄同体，见面交换繁殖。",
  sources: [
    {
        "title": "Snail — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/snail",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Snails and slugs — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/molluscs/gastropods/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页以常见庭园蜗牛为代表，巨型种类要大得多。",
            "食性描述以植食性陆生蜗牛为主。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
