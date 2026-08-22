import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "普·文·辛杜（扣杀）",
  classificationLabel: "羽毛球运动员",
  visibleFeature: "看她高高跃起、全力下压——扣杀是羽毛球里最有威力的得分手段。",
  narration: {
    sentences: [
          "这是辛杜跳起来扣杀羽毛球的瞬间。",
          "扣杀时羽毛球像箭一样射向对方场地，时速能超过 400 公里。"
    ],
    pronunciation: [
      {
        text: "普·文·辛杜（扣杀）",
        reading: "pǔ · wén · xīn dù",
      },
    ],
  },
  facts: {
    period: "现代（约 2020 年发布的动作捕捉模型）",
    discoveryRegions: ["印度"],
        size: {
      kind: 'body-length',
      minMeters: 1.75,
      maxMeters: 1.83,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "扣杀要求运动员在最高点击球，手臂像鞭子一样甩动，把球向下压入对方场地。吉尼斯纪录认可的最快扣杀时速超过 490 公里。辛杜身高约 1.79 米，起跳后的击球点极高，是她标志性的得分武器。这个模型捕捉的是她腾空扣杀的瞬间。",
  sources: [
    {
        "title": "P V Sindhu — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/pv-sindhu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "P. V. Sindhu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/P._V._Sindhu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。",
            "同一名运动员另有多拍相持和击球组合两个模型，发布前需决定保留或合并方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
