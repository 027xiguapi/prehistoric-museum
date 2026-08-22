import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "小家鼠",
  classificationLabel: "啮齿动物",
  visibleFeature: "看它圆圆的大耳朵和细细的尾巴，它的门牙会一直生长。",
  narration: {
    sentences: [
          "这是小家鼠，世界上陪伴人类最久的小动物之一。",
          "它的门牙一辈子都在长，所以要不停地啃东西来磨牙。"
    ],
    pronunciation: [
      {
        text: "小家鼠",
        reading: "xiǎo jiā shǔ",
      },
    ],
  },
  facts: {
    period: "现代（约 1.5 万年前伴随人类定居至今）",
    discoveryRegions: ["全球（除南极洲）"],
        size: {
      kind: 'body-length',
      minMeters: 0.07,
      maxMeters: 0.1,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "小家鼠原产于西亚和南亚，随人类的粮仓和船只走遍了世界。它是夜行动物，靠胡须“摸”路，靠灵敏的嗅觉和听觉找食物、躲天敌。小鼠也是医学研究中最重要的实验动物之一，帮助人类理解基因和疾病。",
  sources: [
    {
        "title": "House mouse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/house-mouse",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Mus musculus — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Mus_musculus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长不含尾巴；不同地区种群体型略有差异。",
            "与人类共居的年份数为考古学近似估计。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
