import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Ankylosaurus",
  classificationLabel: "Armoured dinosaur (tail club)",
  visibleFeature: "Look at the bony club at the end of the tail — one swing could break an attacker’s bones.",
  narration: {
    sentences: [
          "This is Ankylosaurus, a dinosaur in bony armour with a club at the end of its tail.",
          "The tail club was such a good defence that even Tyrannosaurus would think twice."
    ],
    pronunciation: [
      {
        text: "Ankylosaurus",
        reading: "ang-KY-lo-sor-us",
      },
    ],
  },
  facts: {
    period: "Late Cretaceous (about 68–66 million years ago)",
    discoveryRegions: ["western North America (United States, Canada)"],
        size: {
      kind: 'body-length',
      minMeters: 6,
      maxMeters: 8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Ankylosaurus was the largest and last of the ankylosaurs, sharing Late Cretaceous North America with Tyrannosaurus. Its back and head were paved with interlocking bony plates studded with spikes, leaving only the belly soft — so it probably crouched low when attacked. The tail club, made of fused bony knobs, could shatter bone according to computer simulations. It snipped low plants with a beaked mouth and processed huge volumes of ferns and shrub leaves in a roomy gut.",
  sources: [
    {
        "title": "Ankylosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Ankylosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ankylosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ankylosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The length is estimated from incomplete skeletons, so the range is wide.",
            "The club’s destructive power comes from mechanical simulations, not direct observation."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
