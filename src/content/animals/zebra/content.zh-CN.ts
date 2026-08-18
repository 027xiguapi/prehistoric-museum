import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "斑马",
  classificationLabel: "马科动物",
  visibleFeature: "看它黑白相间的条纹，每只斑马的花纹都不一样。",
  narration: {
    sentences: [
          "这是斑马，穿着条纹“外套”的马的亲戚。",
          "每只斑马的条纹都不相同，就像我们的指纹。"
    ],
    pronunciation: [
      {
        text: "斑马",
        reading: "bān mǎ",
      },
    ],
  },
  facts: {
    period: "现代（约 400 万年前分化至今）",
    discoveryRegions: ["非洲草原"],
        size: {
      kind: 'body-length',
      minMeters: 2.2,
      maxMeters: 2.7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "斑马条纹的用途有好几种解释：让吸血虻眼花、在奔跑的群中迷惑捕食者、帮助彼此认出个体，也可能有散热作用。斑马家族由一只雄马带领，成员靠叫声和表情交流。它们跑得很快，也敢于踢打来保护自己。",
  sources: [
    {
        "title": "Zebra — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/zebra",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Why do zebras have stripes? — 《科学美国人》（Scientific American）",
        "url": "https://www.scientificamerican.com/article/why-do-zebras-have-stripes/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页涵盖平原斑马等三种斑马，体长为近似区间。",
            "条纹功能仍是活跃的研究话题。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
