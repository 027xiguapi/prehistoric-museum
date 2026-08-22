import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "绿头鸭",
  classificationLabel: "野鸭（绿头鸭）",
  visibleFeature: "找找亮绿色的脑袋——只有鸭先生才有，鸭小姐穿一身斑纹“迷彩服”。",
  narration: {
    sentences: [
          "这是绿头鸭，全世界最常见的野鸭，也是家鸭的祖先。",
          "它吃东西时会屁股朝天倒插进水里，样子滑稽极了。"
    ],
    pronunciation: [
      {
        text: "绿头鸭",
        reading: "lǜ tóu yā",
      },
    ],
  },
  facts: {
    period: "现代（鸭属延续数百万年）",
    discoveryRegions: ["北半球温带","世界各地公园"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.65,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "公园里“嘎嘎”叫的几乎都是绿头鸭妈妈——雌鸭嗓门洪亮，雄鸭的叫声却像悄悄话。绿头鸭是“水面倒立”觅食的高手：尾巴翘上天，脖子在水下够水草和小虫。小鸭出壳当天就会离巢——鸭妈妈把窝筑在高处，绒毛球一样的宝宝们勇敢地往下蹦，然后跟着妈妈走向池塘。几乎所有家鸭都是绿头鸭驯化来的后代。",
  sources: [
    {
        "title": "Mallard — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/mallard",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Mallard — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Mallard/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目（野生绿头鸭）与既有“鸭子”草稿为不同模型，正式收录前将统一处理。",
            "体长含尾；城市公园的绿头鸭常与家鸭杂交，羽色变化很多。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
