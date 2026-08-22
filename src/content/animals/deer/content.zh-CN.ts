import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鹿",
  classificationLabel: "鹿科动物",
  visibleFeature: "看它头顶的角，像树枝一样，每年都会脱落再长新的。",
  narration: {
    sentences: [
          "这是鹿，头顶长“树枝”的优雅动物。",
          "鹿角每年都会掉一次，再重新长出来。"
    ],
    pronunciation: [
      {
        text: "鹿",
        reading: "lù",
      },
    ],
  },
  facts: {
    period: "现代（鹿科约 2000 万年前出现至今）",
    discoveryRegions: ["亚洲","欧洲","美洲"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "鹿角是唯一能整支年年再生的哺乳动物器官，长角期间每天能长两厘米，是生物学研究再生的宝藏。只有鹿（除驯鹿雌性也长角）长角，角用来比武争配偶。鹿的嗅觉和听觉极灵敏，遇到危险会竖起尾巴白斑警示同伴。",
  sources: [
    {
        "title": "Deer — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/deer",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Antler regeneration — 纽约州立大学（SUNY）Cobleskill 校区",
        "url": "https://www.cobleskill.edu/about/news/antlers-regeneration",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页以中型鹿（如白尾鹿/梅花鹿）为代表，小型与大型鹿差异大。",
            "角再生速度因种类与年龄而异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
