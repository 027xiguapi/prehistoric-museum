import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "英国斗牛犬",
  classificationLabel: "中型伴侣犬",
  visibleFeature: "看它皱巴巴的脸和宽大的下巴——这个品种早已告别斗牛场，成了沙发上的哲学家。",
  narration: {
    sentences: [
          "这是英国斗牛犬，一脸严肃其实脾气很温和。",
          "它打呼噜的声音像一台小拖拉机。"
    ],
    pronunciation: [
      {
        text: "英国斗牛犬",
        reading: "dòu niú quǎn",
      },
    ],
  },
  facts: {
    period: "现代（斗牛运动 1835 年被禁后转型为伴侣犬）",
    discoveryRegions: ["英国（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.65,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "斗牛犬最初为残酷的“纵犬咬牛”娱乐培育：矮壮的身形让牛难以挑翻，宽大的下颌负责死死咬住。1835 年英国禁止这项运动后，繁育者把它改造成温顺的伴侣犬，如今它是英国的国家象征之一，也是耶鲁大学等多所大学的吉祥物。短鼻子带来耐热差、呼吸音重等问题（短吻品种通病），夏天要特别注意防暑。它性格恋家、对孩子宽容，运动量需求低。",
  sources: [
    {
        "title": "Bulldog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/bulldog/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bulldog — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bulldog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含短尾。",
            "短吻品种普遍存在呼吸与散热问题，饲养前应了解相关福利争议。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
