import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Arabian Horse",
  classificationLabel: "Domestic horse (ancient breed)",
  visibleFeature: "Look at its high-carried tail and dainty head — it seems to dance when it runs.",
  narration: {
    sentences: [
          "This is the Arabian horse, one of the oldest horse breeds in the world.",
          "Light and elegant, with astonishing stamina, it once crossed great deserts carrying messages."
    ],
    pronunciation: [
      {
        text: "Arabian Horse",
        reading: "a-RAY-bi-an HORS",
      },
    ],
  },
  facts: {
    period: "Present day (domesticated for thousands of years)",
    discoveryRegions: ["Arabian Peninsula","worldwide"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.4,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Arabian horses lived alongside Bedouin people in the desert for thousands of years, sometimes sheltering inside tents from sandstorms, so the breed grew people-friendly, clever and brave. Its high tail and dished face are recognised everywhere, and nearly every modern racehorse and riding breed traces back to Arabian blood. Wide nostrils and generous lungs make it a champion of long-distance endurance racing.",
  sources: [
    {
        "title": "Arabian horse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Arabian-horse",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Arabian horse — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Arabian_horse",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The withers height covers typical adults; some racing individuals stand taller.",
            "Breed history follows Bedouin oral tradition, so exact dates are hard to pin down."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
