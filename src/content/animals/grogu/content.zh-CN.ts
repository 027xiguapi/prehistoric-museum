import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "古古（《曼达洛人》角色）",
  classificationLabel: "虚构角色（星球大战）",
  visibleFeature: "看它的大耳朵和大眼睛——这个五十岁的“孩子”来自星球大战的宇宙。",
  narration: {
    sentences: [
          "这是古古，星战剧集《曼达洛人》里最受欢迎的角色。",
          "观众也叫他“小尤达”，因为他的种族和尤达大师一样神秘。"
    ],
    pronunciation: [
      {
        text: "古古（《曼达洛人》角色）",
        reading: "gǔ gǔ",
      },
    ],
  },
  facts: {
    period: "虚构（剧集 2019 年起播出）",
    discoveryRegions: ["虚构宇宙（星球大战）"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.45,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "古古是《曼达洛人》的主角之一：五十岁的婴儿模样，种族名称在设定中至今保密，能使用原力举起巨石、治愈伤口。剧中他爱吃青蛙状的生物和蓝色的蛋——所以这里把食性记为杂食。这个模型的版权归卢卡斯影业/迪士尼所有，与史前动物不同，正式发布需要权利方授权与品牌审核，在此之前它保持草稿状态。",
  sources: [
    {
        "title": "Grogu — 星球大战官网",
        "url": "https://www.starwars.com/databank/grogu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Grogu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Grogu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是虚构角色而非动物条目，版权归卢卡斯影业/迪士尼所有；发布前需要权利方授权与品牌审核。",
            "体长区间按剧中形象估计，官方未公布精确身高。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
