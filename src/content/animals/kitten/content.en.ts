import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Kitten",
  classificationLabel: "Domestic cat youngster",
  visibleFeature: "Count the stripes on its back, then look at its big round eyes.",
  narration: {
    sentences: [
          "This is a kitten — a baby domestic cat, already practising to be a great little hunter.",
          "Its eyes are big and bright, and its ears turn toward every sound."
    ],
    pronunciation: [
      {
        text: "Kitten",
        reading: "KIT-n",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated about 10,000 years ago)",
    discoveryRegions: ["Worldwide (descended from African wildcats)"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Domestic cats descend from African wildcats that began living near human villages about ten thousand years ago, guarding grain stores from rodents. Kittens are born with their eyes closed, and within weeks their play-fights turn into hunting practice. A cat’s whiskers are so sensitive they can tell, even in the dark, whether a gap is wide enough to squeeze through.",
  sources: [
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Domestic cat — 国家地理（Nat Geo）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "Body length excludes the tail and spans kitten to adult as a friendly approximation.",
            "Breeds and individuals vary a lot; this page uses an ordinary tabby kitten as the example."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
