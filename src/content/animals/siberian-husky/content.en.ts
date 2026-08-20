import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Siberian Husky",
  classificationLabel: "Sled dog",
  visibleFeature: "Look at the blue eyes and thick double coat — equipment for the Siberian deep freeze.",
  narration: {
    sentences: [
          "This is the Siberian Husky, a sled dog built to run hundreds of kilometres.",
          "Bursting with energy, it howls rather than barks and is a famous escape artist."
    ],
    pronunciation: [
      {
        text: "Siberian Husky",
        reading: "sy-BEER-ee-an HUS-kee",
      },
    ],
  },
  facts: {
    period: "Present day (kept by the Chukchi people for many centuries)",
    discoveryRegions: ["north-eastern Siberia (the Chukchi Peninsula)"],
        size: {
      kind: 'body-length',
      minMeters: 0.85,
      maxMeters: 1.05,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "The Husky was bred by the Chukchi people of Siberia to pull light loads over enormous distances. In the 1925 serum run, sled teams relayed diphtheria antitoxin through a blizzard to save the town of Nome; the lead dogs Togo and Balto became legends, and Balto’s statue stands in New York’s Central Park. Huskies live to run and to be with their pack; they rarely bark but love to howl. Bored huskies remodel gardens and scale fences — and while they shrug off deep cold, they wilt in summer heat.",
  sources: [
    {
        "title": "Siberian Husky — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/siberian-husky/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Siberian Husky — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Siberian_Husky",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the tail.",
            "Not all huskies have blue eyes — brown and odd-eyed combinations are common."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
