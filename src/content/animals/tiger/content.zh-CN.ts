import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: '老虎',
  classificationLabel: '大型猫科动物',
  visibleFeature: '看看它身上黑色的条纹，每只老虎的花纹都不一样，就像我们的指纹。',
  narration: {
    sentences: [
      '这是老虎，世界上最大的猫科动物，它住在森林里。',
      '看看它身上橙色的毛和黑色的条纹，每只老虎的花纹都是独一无二的。',
    ],
    pronunciation: [
      {
        text: '老虎',
        reading: 'lǎo hǔ',
      },
    ],
  },
  facts: {
    period: '现代（约 200 万年前至今）',
    discoveryRegions: ['亚洲'],
    size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 3.9,
    },
    diet: 'carnivore',
  },
  parentClassificationNote:
    '老虎属于猫科豹属，和狮子、豹子是亲戚。它的条纹不只长在毛上，皮肤上也有；每只老虎的条纹图案都不同，研究者靠条纹就能认出个体。老虎喜欢独自生活，擅长游泳，是亚洲森林生态系统顶端的捕食者。',
  sources: [
    {
      title: '虎 — 世界自然基金会（WWF）',
      url: 'https://www.worldwildlife.org/species/tiger',
      accessedOn: '2026-08-18',
    },
    {
      title: 'Tiger — 大英百科全书（Britannica）',
      url: 'https://www.britannica.com/animal/tiger',
      accessedOn: '2026-08-18',
    },
  ],
  editorial: {
    uncertaintyNotes: [
      '体型范围为不同亚种的近似区间，面向家庭阅读，不作为单一精确测量值呈现。',
      '毛色与条纹描述避免绝对化表述，白虎等特殊色型未在此展开。',
    ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
