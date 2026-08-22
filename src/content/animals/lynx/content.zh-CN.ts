import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "猞猁",
  classificationLabel: "猫科动物（猞猁属）",
  visibleFeature: "看它耳朵尖上那两撮黑色的“天线毛”，那是猞猁的名片。",
  narration: {
    sentences: [
          "这是猞猁，北欧森林里神出鬼没的大脚猫。",
          "它宽大的脚掌像雪地靴，能悄悄走过深雪不陷下去。"
    ],
    pronunciation: [
      {
        text: "猞猁",
        reading: "shē lì",
      },
    ],
  },
  facts: {
    period: "现代（猞猁属延续数百万年）",
    discoveryRegions: ["欧洲与亚洲北部森林"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "猞猁是害羞的独行猎手，耳朵尖的黑色长毛像两根天线，帮它精确判断声音的方位。它的脚掌又宽又厚，像自带雪地靴，在深雪上追野兔时轻快得像滑冰。欧洲不少国家曾把猞猁捕到绝迹，近几十年重新引进后森林慢慢恢复了平衡——它是守护森林的“隐形猫”。",
  sources: [
    {
        "title": "Lynx — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/lynx-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Eurasian lynx — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Eurasian_lynx",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本模型属北欧合集，应为欧亚猞猁；与加拿大猞猁外形相近，正式收录前将复核。",
            "猎物构成随地区变化：北欧以狍和野兔为主。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
