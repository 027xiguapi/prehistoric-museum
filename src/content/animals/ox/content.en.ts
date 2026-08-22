import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Ox",
  classificationLabel: "Domestic bovine",
  visibleFeature: "Look at its curved horns and sturdy body, with a thick ridge of muscle along the neck.",
  narration: {
    sentences: [
          "This is the ox, humanity’s oldest partner in the field.",
          "It wears a pair of curved horns and is strong enough to pull a plough."
    ],
    pronunciation: [
      {
        text: "Ox",
        reading: "OKS",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated 8,000–10,000 years ago)",
    discoveryRegions: ["Worldwide (domesticated from the wild aurochs)"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.2,
      maxMeters: 1.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Cattle descend from the extinct, mighty aurochs; the last aurochs died in 1627. Cattle are ruminants whose four stomach chambers host microbes that turn grass into nourishment. An “ox” strictly means a castrated, trained working male used for ploughing and haulage. Cattle can learn their own names, and studies show they remember one another and feel tense when herdmates are stressed.",
  sources: [
    {
        "title": "Cattle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cattle",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Aurochs — 英国自然历史博物馆（NHM）",
        "url": "https://www.nhm.ac.uk/discover/news/2015/november/how-the-aurochs-was-lost.html",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Shoulder height covers common breeds; variation is wide.",
            "Behaviour findings come from limited studies and are summarised."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
