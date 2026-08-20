import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "金雕",
  classificationLabel: "大型猛禽（鹰科）",
  visibleFeature: "看看它金色的后颈羽毛和钩子一样的喙，那是天空猎手的标志。",
  narration: {
    sentences: [
          "这是金雕，山野上空最威风的大型猛禽。",
          "它俯冲下来的时候，脚上的利爪能一下抓住狐狸和野兔。"
    ],
    pronunciation: [
      {
        text: "金雕",
        reading: "jīn diāo",
      },
    ],
  },
  facts: {
    period: "现代（鹰类延续数千万年）",
    discoveryRegions: ["北半球山区与草原"],
        size: {
      kind: 'wingspan',
      minMeters: 1.8,
      maxMeters: 2.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "金雕的后颈羽毛在阳光下泛着金光，这也是它名字的由来。它是北半球分布最广的猛禽之一，捕猎时先在高空盘旋锁定目标，再收翅俯冲，时速可达两百多公里。抓到猎物时，四根脚趾同时发力，爪子的握力比人的手还大。很多国家都有驯养金雕的传统，金雕也因此成为草原文化里的图腾鸟。",
  sources: [
    {
        "title": "Golden eagle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/golden-eagle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Golden eagle — 康奈尔鸟类学实验室（Cornell Lab）",
        "url": "https://www.allaboutbirds.org/guide/Golden_Eagle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "翼展区间涵盖雌雄，雌鸟通常更大。",
            "俯冲速度的数字多来自观测估计，不同来源出入较大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
