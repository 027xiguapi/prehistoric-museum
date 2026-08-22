import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "霸王龙（AR 版）",
  classificationLabel: "大型肉食恐龙（“恐龙之王”）",
  visibleFeature: "看它香蕉大小的牙齿和短短的前肢——小短手其实非常强壮。",
  narration: {
    sentences: [
          "这是霸王龙，陆地上咬合力最强的动物之一。",
          "它的名字意思是“暴君蜥蜴王”。"
    ],
    pronunciation: [
      {
        text: "霸王龙（AR 版）",
        reading: "bà wáng lóng",
      },
    ],
  },
  facts: {
    period: "晚白垩世（约 6800 万–6600 万年前）",
    discoveryRegions: ["北美洲西部（美国、加拿大）"],
        size: {
      kind: 'body-length',
      minMeters: 12,
      maxMeters: 13,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "霸王龙是恐龙时代落幕前的顶级掠食者：体重 8–9 吨，咬合力估计 3–6 吨，足以咬碎骨头——它的粪便化石里确实含有骨渣。锯齿状牙齿像铁钉一样粗，断了还能再长。前肢虽短得够不着嘴，却有两根指头和粗壮的肌肉，可能在起身或近身缠斗时派上用场。它的嗅觉极其灵敏，双眼朝前提供立体视觉。幼年霸王龙可能长着一层绒毛状羽毛，成年个体是否有羽毛仍在争论。",
  sources: [
    {
        "title": "Tyrannosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Tyrannosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Tyrannosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tyrannosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆已有正式收录的霸王龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。",
            "成年个体是否有羽毛、咬合力具体数值，均为持续研究中的问题。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
