import type { Locale } from '../i18n/locale'

/**
 * Modern (non-prehistoric) animals shown on the category page as image-only
 * cards. They have no 3D exhibit yet — thumbnails are placeholders under
 * `public/modern-animals/` and can be swapped for real photos anytime.
 */

export type ModernAnimalCategoryId = 'grassland' | 'ocean' | 'sky' | 'forest'

export interface ModernAnimal {
  readonly category: ModernAnimalCategoryId
  readonly id: string
  readonly names: Readonly<Record<Locale, string>>
  readonly thumbnail: string
}

export const modernAnimalCategoryIds: readonly ModernAnimalCategoryId[] = [
  'grassland',
  'ocean',
  'sky',
  'forest',
]

export const modernAnimals: readonly ModernAnimal[] = [
  {
    category: 'grassland',
    id: 'lion',
    names: { 'zh-CN': '狮子', en: 'Lion' },
    thumbnail: '/modern-animals/lion.svg',
  },
  {
    category: 'grassland',
    id: 'tiger',
    names: { 'zh-CN': '老虎', en: 'Tiger' },
    thumbnail: '/modern-animals/tiger.svg',
  },
  {
    category: 'grassland',
    id: 'giraffe',
    names: { 'zh-CN': '长颈鹿', en: 'Giraffe' },
    thumbnail: '/modern-animals/giraffe.svg',
  },
  {
    category: 'ocean',
    id: 'whale',
    names: { 'zh-CN': '鲸鱼', en: 'Whale' },
    thumbnail: '/modern-animals/whale.svg',
  },
  {
    category: 'ocean',
    id: 'jellyfish',
    names: { 'zh-CN': '水母', en: 'Jellyfish' },
    thumbnail: '/modern-animals/jellyfish.svg',
  },
  {
    category: 'ocean',
    id: 'seahorse',
    names: { 'zh-CN': '海马', en: 'Seahorse' },
    thumbnail: '/modern-animals/seahorse.svg',
  },
  {
    category: 'sky',
    id: 'eagle',
    names: { 'zh-CN': '老鹰', en: 'Eagle' },
    thumbnail: '/modern-animals/eagle.svg',
  },
  {
    category: 'sky',
    id: 'owl',
    names: { 'zh-CN': '猫头鹰', en: 'Owl' },
    thumbnail: '/modern-animals/owl.svg',
  },
  {
    category: 'forest',
    id: 'panda',
    names: { 'zh-CN': '大熊猫', en: 'Giant Panda' },
    thumbnail: '/modern-animals/panda.svg',
  },
  {
    category: 'forest',
    id: 'fox',
    names: { 'zh-CN': '狐狸', en: 'Fox' },
    thumbnail: '/modern-animals/fox.svg',
  },
]

export function modernAnimalsByCategory(
  category: ModernAnimalCategoryId,
): readonly ModernAnimal[] {
  return modernAnimals.filter((animal) => animal.category === category)
}

export function modernAnimalName(
  animal: ModernAnimal,
  locale: Locale,
): string {
  return animal.names[locale]
}
