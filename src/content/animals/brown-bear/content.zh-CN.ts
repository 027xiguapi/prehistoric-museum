import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "棕熊（AR 版）",
  classificationLabel: "大型熊科动物",
  visibleFeature: "看它肩膀上鼓起的大肌肉包，那是挖洞和翻石头的“大力士肩膀”。",
  narration: {
    sentences: [
          "这是棕熊，森林里的大力士，最爱蹲在河边捞鱼吃。",
          "冬天来之前，它会吃得胖胖的，然后钻进洞里睡上一整个冬天。"
    ],
    pronunciation: [
      {
        text: "棕熊（AR 版）",
        reading: "zōng xióng",
      },
    ],
  },
  facts: {
    period: "现代（熊科延续约 2000 万年）",
    discoveryRegions: ["欧亚大陆北部","北美洲西北部"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 2.8,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "棕熊是杂食大胃王：浆果、坚果、草根、松果、鲑鱼，甚至飞蛾都是它的食物，秋天里一天能吃下几万卡路里。肩膀上的大肌肉是挖土专用的，挖老鼠、翻石头找虫都不在话下。它看起来笨重，短跑却能追上自行车；冬眠时心跳降到每分钟不到十次，靠夏天攒下的脂肪过冬。",
  sources: [
    {
        "title": "Brown bear — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/brown-bear",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Brown bear — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/brown-bear",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目与既有“棕熊”草稿为同一种熊的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。",
            "体长区间涵盖各地区亚种；科迪亚克棕熊可以更长更重。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
