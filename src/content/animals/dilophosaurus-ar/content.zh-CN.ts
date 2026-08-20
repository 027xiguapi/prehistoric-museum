import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "双脊龙（AR 版）",
  classificationLabel: "早期肉食恐龙（双冠）",
  visibleFeature: "看它头顶上两片薄薄的骨冠——那是它的招牌，不是用来打架的。",
  narration: {
    sentences: [
          "这是双脊龙，头顶长着两片并排骨冠的早期肉食恐龙。",
          "真实的它不会喷毒，也没有伞状领圈——那是电影编的。"
    ],
    pronunciation: [
      {
        text: "双脊龙（AR 版）",
        reading: "shuāng jǐ lóng",
      },
    ],
  },
  facts: {
    period: "早侏罗世（约 1.93 亿年前）",
    discoveryRegions: ["北美洲（美国亚利桑那州）"],
        size: {
      kind: 'body-length',
      minMeters: 6,
      maxMeters: 7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "双脊龙生活在恐龙时代刚开始不久的早侏罗世，是当时北美洲最大的陆地掠食者之一。它头骨细长，两片半圆形的骨冠薄而易碎，古生物学家认为那是用于展示识别或求偶的装饰。1993 年电影《侏罗纪公园》把它塑造成会张开领圈、喷射毒液的小怪物——真实的双脊龙长 6–7 米，远比电影里大，而且没有任何证据表明它有领圈或毒腺。它上颌前端有一个缺口，可能帮助它撕咬鱼类或小动物。",
  sources: [
    {
        "title": "Dilophosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Dilophosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dilophosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dilophosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆已有正式收录的双脊龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。",
            "骨冠的功能是推断，无法从化石直接证实。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
