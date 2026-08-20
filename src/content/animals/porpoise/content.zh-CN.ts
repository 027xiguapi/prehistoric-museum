import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "鼠海豚",
  classificationLabel: "齿鲸（鼠海豚科）",
  visibleFeature: "看它小小的三角形背鳍，像一把小铲子立在背上。",
  narration: {
    sentences: [
          "这是鼠海豚，北欧海域里害羞的小鲸鱼。",
          "它很少跳出海面，换气时只轻轻冒头，像海里的“小幽灵”。"
    ],
    pronunciation: [
      {
        text: "鼠海豚",
        reading: "shǔ hǎi tún",
      },
    ],
  },
  facts: {
    period: "现代（鼠海豚科延续数百万年）",
    discoveryRegions: ["北大西洋与北太平洋沿岸冷水海域"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 1.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "鼠海豚是最小的鲸类之一，和海豚是表亲却大不相同：个子更小、嘴更短，牙齿像小铲子而不是圆锥。它生性害羞，几乎不跳跃、不追船，浮出水面时只发出轻轻的喷气声，水手们叫它“海里的猪哼哼”。它用回声定位在浑浊的近海找小鱼小虾。渔网缠绕是它最大的威胁，许多渔船已经开始使用声学警报器帮它躲开。",
  sources: [
    {
        "title": "Porpoise — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/porpoise",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Harbour porpoise — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Harbour_porpoise",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本模型的源文件曾出现蒙皮权重缺陷，转换时已做确定性修复；正式收录前将复核动画效果。",
            "北大西洋、黑海等不同种群体型和习性有差异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
