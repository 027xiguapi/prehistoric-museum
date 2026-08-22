import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "平原斑马（AR 版）",
  classificationLabel: "马科动物（条纹迷彩）",
  visibleFeature: "仔细看条纹：每只斑马的条纹图案都不一样，还能让狮子眼花缭乱。",
  narration: {
    sentences: [
          "这是平原斑马，非洲草原上黑白条纹的“马”。",
          "科学家认为条纹可以迷惑吸血蝇虫，让它们不敢降落。"
    ],
    pronunciation: [
      {
        text: "平原斑马（AR 版）",
        reading: "píng yuán bān mǎ",
      },
    ],
  },
  facts: {
    period: "现代（马科延续数千万年）",
    discoveryRegions: ["非洲东部与南部的草原"],
        size: {
      kind: 'body-length',
      minMeters: 2.2,
      maxMeters: 2.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "平原斑马是三种斑马中数量最多的一种，成群生活在非洲东部和南部的草原上，以草为食，每天要迁徙寻找水源。条纹的功能争论了一百多年：目前最有力的证据是它干扰舌蝇、虻等吸血昆虫的视觉定位，同时也可能帮助同伴互相识别、让捕食者难以锁定个体。斑马的皮肤其实是黑色的，条纹是黑底上长出的白毛。",
  sources: [
    {
        "title": "Plains zebra — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/plains-zebra",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Plains zebra — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Plains_zebra",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆“1048 批次”中另有一只斑马模型，二者来源不同；发布前需决定去留或合并。",
            "条纹防蝇说是当前主流假说，但学界仍在继续验证其他解释。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
