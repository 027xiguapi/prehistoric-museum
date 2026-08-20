import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "剑龙（AR 版）",
  classificationLabel: "装甲恐龙（骨板与尾刺）",
  visibleFeature: "看它背上两排骨板和尾巴上的四根尖刺——尾巴是武器，骨板可能是“广告牌”。",
  narration: {
    sentences: [
          "这是剑龙，背着两排大骨板的植食恐龙。",
          "它的脑袋只有小狗那么大，尾巴上的尖刺却能赶跑掠食者。"
    ],
    pronunciation: [
      {
        text: "剑龙（AR 版）",
        reading: "jiàn lóng",
      },
    ],
  },
  facts: {
    period: "晚侏罗世（约 1.55 亿–1.5 亿年前）",
    discoveryRegions: ["北美洲西部","葡萄牙"],
        size: {
      kind: 'body-length',
      minMeters: 6.5,
      maxMeters: 9,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "剑龙背上 17–22 块骨板里布满血管沟槽，可能用来展示识别、威吓敌人，也可能帮助散热。尾巴末端四根 60–90 厘米的尖刺有个绰号叫“死神的尾巴”（thagomizer）——这个名字竟然源自漫画《远岸》的一个笑话，后来被科学家正式采用。有化石证据显示异特龙的尾椎曾被剑龙的尾刺刺穿。剑龙的脑容量是出名的笑话素材，但“尾巴里还有第二个大脑”的说法并不正确。",
  sources: [
    {
        "title": "Stegosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Stegosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Stegosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stegosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆已有正式收录的剑龙条目；此模型为谷歌 AR 捕获版，发布前需决定去留或合并。",
            "骨板的具体功能（展示、识别、散热）难以从化石直接证实。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
