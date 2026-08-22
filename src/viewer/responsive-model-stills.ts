import { museumMode } from '@/src/app-mode'
import { reviewModelPreviewUrl } from '$museum-review-runtime'
import { modelPreviewModules } from '@/src/viewer/model-preview-modules.generated'

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
