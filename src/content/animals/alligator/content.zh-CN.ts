import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鳄鱼（短吻鳄）",
  classificationLabel: "鳄目爬行动物",
  visibleFeature: "看它宽宽的嘴巴，闭嘴时牙齿都藏在嘴唇后面。",
  narration: {
    sentences: [
          "这是短吻鳄，像活化石一样的古老爬行动物。",
          "它闭嘴时看不到牙齿，这和尖嘴鳄鱼不一样。"
    ],
    pronunciation: [
      {
        text: "鳄鱼（短吻鳄）",
        reading: "è yú",
      },
    ],
  },
  facts: {
    period: "现代（鳄类约 8300 万年前出现至今）",
    discoveryRegions: ["美国东南部","中国长江流域"],
        size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 4,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "短吻鳄和恐龙是远房亲戚，两亿年来身体几乎没变。它们咬合力惊人，却是“温柔的父母”：妈妈守巢孵蛋，把孵出的小鳄鱼含在嘴里送去水里。短吻鳄宽吻闭嘴不露牙，尖吻的鳄（crocodile）闭嘴露出下牙——这是最简单的区分方法。",
  sources: [
    {
        "title": "Alligator — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/alligator",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "American alligator — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/reptiles/facts/american-alligator",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长以美洲短吻鳄为代表，扬子鳄更小。",
            "咬合力数值因研究方法而异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
