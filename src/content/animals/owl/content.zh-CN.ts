import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "猫头鹰",
  classificationLabel: "夜行性猛禽",
  visibleFeature: "看它展开的翅膀，猫头鹰的羽毛边缘有锯齿，飞起来几乎没有声音。",
  narration: {
    sentences: [
          "这是猫头鹰，夜晚出动的安静猎手。",
          "它的脸像小雷达，能听清雪地下老鼠的动静。"
    ],
    pronunciation: [
      {
        text: "猫头鹰",
        reading: "māo tóu yīng",
      },
    ],
  },
  facts: {
    period: "现代（约 5500 万年前至今）",
    discoveryRegions: ["全球（除南极洲）"],
        size: {
      kind: 'group-range',
      minMeters: 0.15,
      maxMeters: 0.7,
      note: "猫头鹰家族种类很多，小的只有麻雀的两倍大，最大的雕鸮接近 70 厘米高。",
    },
    diet: "carnivore",
  },
  parentClassificationNote: "猫头鹰的眼睛长在正前方，就像望远镜一样适合判断距离；脖子却特别灵活，能转过大半圈。它飞行时羽毛边缘的锯齿打散气流声，猎物几乎听不到它靠近。多数猫头鹰在夜里活动，白天躲在树洞或枝叶间休息。",
  sources: [
    {
        "title": "Owl — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/owl",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Strigiformes — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Strigiformes/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页介绍猫头鹰这一类群，模型的具体种类待专家复核。",
            "体型以类群区间描述，不做单一精确值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
