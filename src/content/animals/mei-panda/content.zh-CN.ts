import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "小美（红熊猫形态）",
  classificationLabel: "动画角色（《青春变形记》）",
  visibleFeature: "看看她蓬松的红棕色绒毛和圆圆的耳朵，再找找她有点不好意思的表情。",
  narration: {
    sentences: [
          "这是小美，电影《青春变形记》里一激动就会变成红熊猫的女孩。",
          "变身后的她毛茸茸、软乎乎，连烦恼也跟着“膨胀”。"
    ],
    pronunciation: [
      {
        text: "小美（红熊猫形态）",
        reading: "xiǎo měi",
      },
    ],
  },
  facts: {
    period: "虚构角色（电影 2022 年上映）",
    discoveryRegions: ["虚构故事（加拿大多伦多）"],
        size: {
      kind: 'body-length',
      minMeters: 1.8,
      maxMeters: 2.5,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "在皮克斯电影《青春变形记》里，13 岁的李小美一激动就会变成一只巨大的红熊猫——这是家族女性代代相传的“成长考验”。电影用毛茸茸的变身讲每个孩子都会遇到的事：大情绪来了怎么办？导演石之予把自己华人家庭的成长记忆放进了故事。现实中的红熊猫是喜马拉雅山里濒危的小动物，电影走红后，更多人开始关注它们的保护。",
  sources: [
    {
        "title": "Turning Red — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Turning_Red",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Turning Red — 互联网电影数据库（IMDb）",
        "url": "https://www.imdb.com/title/tt8097060/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目为迪士尼/皮克斯动画的虚构角色，仅作草稿展示；正式收录需要版权方授权与品牌审查。",
            "电影中红熊猫形态远高于成年人，本模型为较小的可爱版本，尺寸按模型近似。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
