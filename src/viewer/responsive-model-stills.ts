import { museumMode } from '../app-mode'
import { reviewModelPreviewUrl } from '$museum-review-runtime'
import { modelPreviewModules } from './model-preview-modules.generated'

export function modelPreviewFor(
  animalId: string,
  fileName: string,
): string | undefined {
  if (museumMode === 'review') {
    return reviewModelPreviewUrl(animalId, fileName)
  }
  return modelPreviewModules[
    `../content/animals/${animalId}/images/${fileName}`
  ]
}
