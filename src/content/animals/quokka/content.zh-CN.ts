import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "短尾矮袋鼠",
  classificationLabel: "小型有袋动物（“微笑天使”）",
  visibleFeature: "看它的嘴角——天生上扬的嘴角让它看起来总在微笑。",
  narration: {
    sentences: [
          "这是短尾矮袋鼠，被称为“世界上最快乐的动物”。",
          "它只生活在澳大利亚西南角的几座小岛和一小块大陆上。"
    ],
    pronunciation: [
      {
        text: "短尾矮袋鼠",
        reading: "duǎn wěi ǎi dài shǔ",
      },
    ],
  },
  facts: {
    period: "现代（袋鼠科延续数千万年）",
    discoveryRegions: ["澳大利亚西南部","罗特尼斯岛等近海岛屿"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "短尾矮袋鼠是袋鼠的迷你亲戚，大小和家猫差不多，吃草、树叶和嫩枝，能很长时间不喝水。罗特尼斯岛的名字就来自它：1696 年荷兰船长把满岛的短尾矮袋鼠当成了大老鼠，把岛命名为“老鼠窝岛”（Rotte nest）。它的“微笑”来自天生的面部结构，加上不怕人的性格，使它成了自拍明星——但与野生动物合影时不能触摸或喂食。受狐狸、野猫和栖息地丧失威胁，它被列为易危物种。",
  sources: [
    {
        "title": "Quokka — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/quokka",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Quokka — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Quokka",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "“最快乐的动物”是媒体昵称，并非科学结论；上扬嘴角只是面部结构。",
            "体长区间不含尾巴。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
