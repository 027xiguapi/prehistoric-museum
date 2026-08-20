import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "比格犬",
  classificationLabel: "嗅觉猎犬",
  visibleFeature: "看它耷拉着的大耳朵——大耳朵能把地上的气味“扫”向鼻子。",
  narration: {
    sentences: [
          "这是比格犬，靠鼻子工作的猎犬。",
          "它的鼻子有两亿多个嗅觉感受器，是人类的四十多倍。"
    ],
    pronunciation: [
      {
        text: "比格犬",
        reading: "bǐ gé quǎn",
      },
    ],
  },
  facts: {
    period: "现代（现代品种定型于 19 世纪的英国）",
    discoveryRegions: ["英国（品种定型地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.55,
      maxMeters: 0.7,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "比格犬是猎兔的小型猎犬：猎人徒步跟在欢叫的比格犬群后面追兔子，所以它天生嗓门洪亮、合群、耐力强。它的嗅觉仅次于寻血猎犬，机场检疫里常见它嗅查行李中的食物。史努比的原型就是比格犬。它性格友善、和孩子相处融洽，但“鼻子一开机就听不见你叫它”，出门必须牵绳。贪吃天性也让它容易发胖，需要控制食量。",
  sources: [
    {
        "title": "Beagle — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/beagle/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Beagle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Beagle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "嗅觉感受器数量是文献中的约数，不同资料口径不一。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
