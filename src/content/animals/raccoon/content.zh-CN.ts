import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "浣熊",
  classificationLabel: "浣熊科动物",
  visibleFeature: "看它黑色的“眼罩”和灵活的前爪，像戴着面具的小偷。",
  narration: {
    sentences: [
          "这是浣熊，戴着“眼罩”的机灵鬼。",
          "它的前爪特别灵活，能拧开瓶盖、摸出水里的食物。"
    ],
    pronunciation: [
      {
        text: "浣熊",
        reading: "huàn xióng",
      },
    ],
  },
  facts: {
    period: "现代（约 250 万年前分化至今）",
    discoveryRegions: ["北美洲","引入欧洲与日本"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "浣熊的黑眼罩可能有助于减少眩光、方便夜间视物。它们的前爪感知极灵敏，湿润后更像“手”；浣熊常把食物在水里搓来搓去，因此得了“洗食物”的名声。浣熊聪明且适应力强，在城市里学会了翻垃圾桶和过马路。",
  sources: [
    {
        "title": "Raccoon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/raccoon",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Raccoon — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/raccoon-facts",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "眼罩功能的解释为学界假说之一。",
            "体长不含尾巴，城市个体常更胖。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
