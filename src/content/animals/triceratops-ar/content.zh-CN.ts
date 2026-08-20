import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "三角龙（AR 版）",
  classificationLabel: "角龙类恐龙（三只角）",
  visibleFeature: "数它脸上的角：眼睛上方两根长角，鼻子上还有一根短角。",
  narration: {
    sentences: [
          "这是三角龙，长着三只角和大颈盾的植食恐龙。",
          "它和霸王龙生活在同一时代，是霸王龙的猎物之一。"
    ],
    pronunciation: [
      {
        text: "三角龙（AR 版）",
        reading: "sān jiǎo lóng",
      },
    ],
  },
  facts: {
    period: "晚白垩世（约 6800 万–6600 万年前）",
    discoveryRegions: ["北美洲西部（美国、加拿大）"],
        size: {
      kind: 'body-length',
      minMeters: 8,
      maxMeters: 9,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "三角龙是非鸟恐龙灭绝前最后出现的角龙类之一，化石在地狱溪组非常丰富，是科学家了解最透彻的恐龙之一。颈盾由两块颅骨向后延伸而成，年轻个体的颈盾边缘骨片朝外翘起，长大后逐渐与颈盾融合——牛角龙一度被认为是独立属，现在主流观点认为它只是三角龙的老年形态。三角龙用喙状嘴剪断低矮的蕨类和灌木，数百颗牙齿组成的齿系不断替换。有带咬痕的化石显示它确实与霸王龙交过手。",
  sources: [
    {
        "title": "Triceratops — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Triceratops",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Triceratops — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Triceratops",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆已有正式收录的三角龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。",
            "“牛角龙即老年三角龙”是主流但仍在争论的假说。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
