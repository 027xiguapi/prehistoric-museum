import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "水母",
  classificationLabel: "刺胞动物",
  visibleFeature: "看它半透明的伞状身体和飘动的触手，像一把会游动的降落伞。",
  narration: {
    sentences: ["这是水母，一种生活在海里的古老动物。","它半透明的身体像一把伞，一下一下地收缩，推动自己向前漂。"],
    pronunciation: [
      { text: "水母", reading: "shuǐ mǔ" },
    ],
  },
  facts: {
    period: "现代（全新世）",
    discoveryRegions: ["全球各大洋"],
    size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "水母是一种非常古老的海洋动物，早在几亿年前就已经出现在地球上。它们没有大脑、心脏和骨骼，身体大部分是水。水母用伞状身体一下一下地收缩来游泳，长长的触手可以用来捕捉小动物。有些水母会蜇人，所以看到它们最好保持距离。",
  sources: [
    {
        "title": "Jellyfish — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/jellyfish",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Jellyfish — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/invertebrates/facts/jellyfish",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["水母种类繁多、大小差别很大，本页尺寸为常见品种的近似范围。"],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentZhCN
