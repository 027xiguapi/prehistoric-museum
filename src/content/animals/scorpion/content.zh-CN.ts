import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "蝎子",
  classificationLabel: "蛛形纲节肢动物",
  visibleFeature: "看它翘起的带毒尾巴和一双大钳子，背部还会发蓝光。",
  narration: {
    sentences: [
          "这是蝎子，夜晚出来的蛛形纲小猎手。",
          "它在紫外灯下会发出蓝绿色的荧光。"
    ],
    pronunciation: [
      {
        text: "蝎子",
        reading: "xiē zi",
      },
    ],
  },
  facts: {
    period: "现代（约 4.3 亿年前出现至今）",
    discoveryRegions: ["全球温暖干旱地区"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "蝎子比恐龙古老得多，几亿年来几乎没变样。它们夜晚出来捕猎，用钳子抓住猎物、尾巴注入毒液。蝎子的外骨骼在紫外光下发荧光——科学家用紫光灯在沙漠里数蝎子。母蝎会把小蝎背在背上照顾，这在节肢动物里很少见。",
  sources: [
    {
        "title": "Scorpion — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/scorpion",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Scorpions — 亚利桑那-索诺拉沙漠博物馆（ASDM）",
        "url": "https://www.desertmuseum.org/kids/oz/long-fact-sheets/Scorpions.php",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间涵盖常见种类；帝王蝎等可达 20 厘米。",
            "毒性因种类而异，绝大多数对人不危险。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
