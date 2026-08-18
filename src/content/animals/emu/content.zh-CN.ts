import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "鸸鹋",
  classificationLabel: "平胸鸟类",
  visibleFeature: "看它细长的脖子和毛茸茸的“头发”，翅膀小得像装饰品。",
  narration: {
    sentences: [
          "这是鸸鹋，澳大利亚不会飞的大鸟。",
          "它虽然不会飞，跑起来却比人快得多。"
    ],
    pronunciation: [
      {
        text: "鸸鹋",
        reading: "ér miáo",
      },
    ],
  },
  facts: {
    period: "现代（鸸鹋属约 100 万年前至今）",
    discoveryRegions: ["澳大利亚大陆"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "鸸鹋是世界第二大的鸟（仅次于鸵鸟），翅膀退化到只有巴掌大，双腿却强健有力，冲刺可达 50 公里/小时。它的羽毛像头发一样松散，不防水却隔热。鸸鹋爸爸是“模范父亲”：妈妈产蛋后离开，爸爸孵蛋两个月不吃不喝，再独自带大雏鸟。",
  sources: [
    {
        "title": "Emu — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/birds/emu/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Emu — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/emu",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间以身高近似（1.5–1.9 米）。",
            "奔跑速度为野外记录近似值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
