import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "圣诞老人",
  classificationLabel: "节日传说角色",
  visibleFeature: "看看他雪白的胡子和红色套装，再找找腰带上亮亮的大方扣。",
  narration: {
    sentences: [
          "这是圣诞老人，传说中平安夜给孩子们送礼物的白胡子爷爷。",
          "据说他驾着驯鹿雪橇，一夜之间跑遍全世界。"
    ],
    pronunciation: [
      {
        text: "圣诞老人",
        reading: "shèng dàn lǎo rén",
      },
    ],
  },
  facts: {
    period: "传说角色（原型为 4 世纪主教，现代形象定型于 19 世纪）",
    discoveryRegions: ["故事源于欧洲","形象流行于全世界"],
        size: {
      kind: 'body-length',
      minMeters: 1.6,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "圣诞老人的原型是 4 世纪小亚细亚米拉城的主教圣尼古拉斯，传说他喜欢悄悄送礼物给需要的人。荷兰人把他叫作“圣塔克劳斯”，随移民漂洋过海到了美洲；1823 年的诗《圣尼古拉斯来访》为他配上了驯鹿雪橇和烟囱，19 世纪的插画又给他穿上了红衣白边的大棉袄。今天他成了全世界孩子圣诞节最期待的客人。",
  sources: [
    {
        "title": "Santa Claus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/topic/Santa-Claus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Santa Claus — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Santa_Claus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目为非动物的虚构节日角色，仅作草稿展示；正式收录需要单独的版权与品牌审查。",
            "“可口可乐广告创造了红衣圣诞老人”是常见误解，红衣形象在广告出现前已有，广告只是让它更加深入人心。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
