import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "金凤蝶",
  classificationLabel: "凤蝶（燕尾形后翅）",
  visibleFeature: "看它后翅上尖尖的“尾巴”——凤蝶的名字就来自这对燕尾。",
  narration: {
    sentences: [
          "这是金凤蝶，拖着燕尾的大蝴蝶。",
          "它的毛毛虫遇到危险时会伸出橙色的“臭角”吓退敌人。"
    ],
    pronunciation: [
      {
        text: "金凤蝶",
        reading: "jīn fèng dié",
      },
    ],
  },
  facts: {
    period: "现代（凤蝶科延续数千万年）",
    discoveryRegions: ["欧亚大陆与北美洲"],
        size: {
      kind: 'wingspan',
      minMeters: 0.08,
      maxMeters: 0.1,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "金凤蝶（Papilio machaon）是分布最广的凤蝶之一，幼虫吃胡萝卜、芹菜等伞形科植物，头后有可翻出的橙色臭角（臭腺），能释放驱敌的气味。化蛹时它用一根丝线把蛹斜挂在枝条上，像一个悬空的吊床。后翅的“尾巴”能转移鸟类攻击，让蝴蝶只损失一点翅尖就逃走。成虫访花吸蜜，是重要的传粉者。",
  sources: [
    {
        "title": "Old World swallowtail — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Papilio_machaon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "キアゲハ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/kiageha.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "翅展区间按常见个体；不同亚种差异较大。",
            "模型按“凤蝶”通称处理，以金凤蝶为参照种。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
