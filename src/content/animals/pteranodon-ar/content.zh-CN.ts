import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "无齿翼龙（AR 版）",
  classificationLabel: "翼龙（会飞的爬行动物，不是恐龙）",
  visibleFeature: "看它向后翘的头冠和没有牙齿的长喙——翼龙不是恐龙，是会飞的爬行动物。",
  narration: {
    sentences: [
          "这是无齿翼龙，在恐龙时代的天空中滑翔的大翼龙。",
          "它的翼展比一辆小汽车还长，却没有一颗牙齿。"
    ],
    pronunciation: [
      {
        text: "无齿翼龙（AR 版）",
        reading: "wú chǐ yì lóng",
      },
    ],
  },
  facts: {
    period: "晚白垩世（约 8600 万–8450 万年前）",
    discoveryRegions: ["北美洲内陆海道（美国堪萨斯州等地）"],
        size: {
      kind: 'wingspan',
      minMeters: 5,
      maxMeters: 7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "无齿翼龙生活在晚白垩世的北美内陆海道上空，像今天的信天翁一样借助海上气流长时间滑翔，以俯冲捕鱼为食。它的头冠形状因性别而异——雄性头冠大而向上，可能用于展示。翅膀由一根极度延长的第四指撑起皮膜构成，骨骼中空，体重只有十几到几十千克。在陆地上它可能四肢着地行走。注意：翼龙是会飞的爬行动物，与恐龙是近亲但不是恐龙。",
  sources: [
    {
        "title": "Pteranodon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pteranodon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pteranodon — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pteranodon",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆已有正式收录的无齿翼龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。",
            "翼展区间主要按雄性估计，雌性明显更小。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
