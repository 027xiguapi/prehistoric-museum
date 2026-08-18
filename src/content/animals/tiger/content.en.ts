import type { AnimalContentEn } from '../../types'

export const en = {
  name: 'Tiger',
  classificationLabel: 'Big cat',
  visibleFeature:
    'Look at the black stripes on its orange fur — every tiger has its own pattern, just like your fingerprints.',
  narration: {
    sentences: [
      'This is a tiger, the biggest cat in the world, and it lives in the forest.',
      'Look at its orange fur and black stripes — every tiger wears a pattern all its own.',
    ],
    pronunciation: [
      {
        text: 'Tiger',
        reading: 'TY-ger',
      },
    ],
  },
  facts: {
    period: 'Present day (around 2 million years ago to today)',
    discoveryRegions: ['Asia'],
    size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 3.9,
    },
    diet: 'carnivore',
  },
  parentClassificationNote:
    'Tigers belong to the genus Panthera, making them cousins of lions and leopards. Their stripes grow on the skin, not only the fur, and each pattern is unique enough for researchers to tell individuals apart. Tigers live mostly on their own, love swimming, and are the top hunters of Asian forests.',
  sources: [
    {
      title: 'Tiger — World Wildlife Fund (WWF)',
      url: 'https://www.worldwildlife.org/species/tiger',
      accessedOn: '2026-08-18',
    },
    {
      title: 'Tiger — Encyclopaedia Britannica',
      url: 'https://www.britannica.com/animal/tiger',
      accessedOn: '2026-08-18',
    },
  ],
  editorial: {
    uncertaintyNotes: [
      'The size range spans different subspecies and is presented as a family-friendly approximation, not a single exact measurement.',
      'Coat descriptions avoid absolute wording; special colour forms such as white tigers are not covered here.',
    ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
