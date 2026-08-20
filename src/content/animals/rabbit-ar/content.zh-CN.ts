import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "兔子（AR 版）",
  classificationLabel: "兔科动物（欧洲兔）",
  visibleFeature: "看它的耳朵像雷达一样转来转去，连身后的声音也逃不掉。",
  narration: {
    sentences: [
          "这是兔子，长耳朵和大后腿的跳跃高手。",
          "它的眼睛长在头两侧，几乎能看到一整圈的风景。"
    ],
    pronunciation: [
      {
        text: "兔子（AR 版）",
        reading: "tù zi",
      },
    ],
  },
  facts: {
    period: "现代（兔科延续数千万年）",
    discoveryRegions: ["欧洲（起源）","世界各地"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "兔子的两只耳朵可以各自独立转动，像两台微型雷达同时监听不同方向。遇到危险时它用后腿重重跺地，给地下洞穴里的邻居们发“地震警报”。它的牙齿一生都在生长，所以要不停啃草磨牙；开心到极点时还会突然原地起跳扭身，养兔子的人管这叫“开心蹦跳”。",
  sources: [
    {
        "title": "Rabbit — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/rabbit",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "European rabbit — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/European_rabbit",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目与既有“兔子”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。",
            "体长含尾；家兔品种之间体型差异明显。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
