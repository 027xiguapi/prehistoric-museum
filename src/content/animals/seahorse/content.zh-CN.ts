import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "海马",
  classificationLabel: "鱼类",
  visibleFeature: "看它挺直的小身体和卷卷的尾巴，它其实是游泳很慢的小鱼。",
  narration: {
    sentences: ["这是海马，一种生活在海里的小鱼。","它总是挺直身体游泳，还会用卷卷的尾巴勾住海草，不让水流冲走。"],
    pronunciation: [
      { text: "海马", reading: "hǎi mǎ" },
    ],
  },
  facts: {
    period: "现代（全新世）",
    discoveryRegions: ["全球温带和热带浅海"],
    size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "海马虽然名字里带“马”，其实是一种小鱼。它们总是挺直身体在水里慢慢游动，还会用卷卷的尾巴缠住海草休息。海马最特别的地方是：宝宝是由海马爸爸负责“怀孕”孵化的。它们喜欢生活在海草茂盛的浅海里。",
  sources: [
    {
        "title": "Seahorse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/sea-horse",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Seahorses — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/fish/facts/seahorses",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["海马种类很多、体型差异较大，本页以常见中小型海马为代表，尺寸为近似范围。"],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentZhCN
