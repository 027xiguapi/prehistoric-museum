import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "豚鼠",
  classificationLabel: "家养啮齿动物",
  visibleFeature: "看它没有尾巴的圆身子——豚鼠一生都在发出各种“吹口哨”的声音。",
  narration: {
    sentences: [
          "这是豚鼠，又叫“荷兰猪”，来自南美洲的安第斯山区。",
          "它高兴时会原地蹦起来，这个动作叫“爆米花跳”。"
    ],
    pronunciation: [
      {
        text: "豚鼠",
        reading: "tún shǔ",
      },
    ],
  },
  facts: {
    period: "现代（约三千至五千年前在安第斯驯化）",
    discoveryRegions: ["南美洲安第斯山区（驯化地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 0.3,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "豚鼠的祖先不是猪而是南美野生的豚鼠属啮齿动物，被安第斯人驯化为肉食和仪式用途，16 世纪由欧洲水手带回后成为宠物。“几内亚”一名来源成谜，可能来自转运港口或价格讹传。它出生时就毛茸茸、睁着眼，几小时后就能跟着妈妈跑。豚鼠和人类一样不能自己合成维生素 C，必须通过新鲜蔬果补充。它吃草、干草和蔬菜，需要同伴陪伴。",
  sources: [
    {
        "title": "Guinea pig — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/guinea-pig",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Guinea pig — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Guinea_pig",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴——豚鼠没有外露的尾巴。",
            "“几内亚”得名原因有多种说法，均无定论。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
