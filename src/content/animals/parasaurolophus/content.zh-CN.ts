import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "副栉龙",
  classificationLabel: "鸭嘴龙类恐龙（长头冠）",
  visibleFeature: "看它脑袋后面拖着的长管子——那是一支天生的“低音号”。",
  narration: {
    sentences: [
          "这是副栉龙，头顶拖着一根长长的空心冠管。",
          "它用这根管子发出低沉的鸣叫，声音能传很远。"
    ],
    pronunciation: [
      {
        text: "副栉龙",
        reading: "fù zhì lóng",
      },
    ],
  },
  facts: {
    period: "晚白垩世（约 7650 万–7300 万年前）",
    discoveryRegions: ["北美洲西部（美国、加拿大）"],
        size: {
      kind: 'body-length',
      minMeters: 7.5,
      maxMeters: 10,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "副栉龙是鸭嘴龙科中头冠最夸张的成员，空心冠管从鼻孔一直延伸到脑后，长度可以超过一米。科学家用 CT 扫描重建冠管内部并模拟吹奏，得到的音调低沉悠长，类似长号——这种叫声可能用于群体联络或求偶。它的嘴里有数百颗不断替换的牙齿，组成“牙齿电池”来研磨坚韧的植物。副栉龙平时四足行走，逃跑时可以只用两条后腿奔跑。",
  sources: [
    {
        "title": "Parasaurolophus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Parasaurolophus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Parasaurolophus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Parasaurolophus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "叫声重建来自计算机模拟，实际音域可能更宽。",
            "已知物种的头冠长度差异很大，本条目按最长的沃氏副栉龙描述。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
