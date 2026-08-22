import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "西施犬",
  classificationLabel: "中国宫廷伴侣犬",
  visibleFeature: "看它华丽的长毛和短短的鼻子——名字的意思是“小狮子”。",
  narration: {
    sentences: [
          "这是西施犬，中国皇宫里养大的伴侣犬。",
          "它的任务不是工作，而是陪伴主人上千年。"
    ],
    pronunciation: [
      {
        text: "西施犬",
        reading: "xī shī quǎn",
      },
    ],
  },
  facts: {
    period: "现代（唐宋以来宫廷绘画中已有形象）",
    discoveryRegions: ["中国（品种发源地，经西藏宫廷犬繁育而成）"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "西施犬由西藏献给中国皇室的宫廷犬繁育而来，在明清宫廷中备受宠爱。“西施”是英文 Shih Tzu（狮子）的中文译名——佛教传说里佛陀出门常有小狮子相随，它因此被视为祥瑞。20 世纪这个品种一度只剩十几只，现代所有西施犬都是那 14 只犬的后代。长毛需要每日梳理；短鼻使它不耐热，夏天要避免中暑。",
  sources: [
    {
        "title": "Shih Tzu — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/shih-tzu/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Shih Tzu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Shih_Tzu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴与饰毛。",
            "“14 只幸存者”是现代品种谱系研究的通行说法。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
