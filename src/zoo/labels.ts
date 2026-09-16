import { CanvasTexture, SRGBColorSpace, Sprite, SpriteMaterial } from 'three'

const FONT_STACK =
  '"Noto Sans SC Variable", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Nunito", system-ui, sans-serif'

export interface LabelContent {
  /** Localized animal name, the headline of the card. */
  readonly name: string
  /** Period plus habitat, e.g. `晚侏罗世 · 草原`. */
  readonly subtitle: string
  /** Zone tone, used for the card's accent bar. */
  readonly accent: string
  /** Shows a star once the visitor has met the animal. */
  readonly discovered: boolean
}

const CARD_WIDTH = 640
const CARD_HEIGHT = 300
const SCALE = 2

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  context.beginPath()
  context.moveTo(x + radius, y)
  context.arcTo(x + width, y, x + width, y + height, radius)
  context.arcTo(x + width, y + height, x, y + height, radius)
  context.arcTo(x, y + height, x, y, radius)
  context.arcTo(x, y, x + width, y, radius)
  context.closePath()
}

/** Shrinks the font until the text fits the card's inner width. */
function fitFont(
  context: CanvasRenderingContext2D,
  text: string,
  maximum: number,
  weight: number,
  availableWidth: number,
): number {
  let size = maximum
  for (;;) {
    context.font = `${weight} ${size}px ${FONT_STACK}`
    if (context.measureText(text).width <= availableWidth || size <= 18) {
      return size
    }
    size -= 2
  }
}

/**
 * Draws one exhibit card: a warm museum-style plaque carrying the localized
 * name, its period and habitat, and a star once the animal has been met.
 */
function createLabelTexture(content: LabelContent): CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = CARD_WIDTH * SCALE
  canvas.height = CARD_HEIGHT * SCALE
  const context = canvas.getContext('2d')
  if (!context) {
    return new CanvasTexture(canvas)
  }
  context.scale(SCALE, SCALE)

  const inset = 12
  const innerWidth = CARD_WIDTH - inset * 2

  // Card body with a soft drop shadow so it lifts off the park.
  context.save()
  context.shadowColor = 'rgba(43, 58, 44, 0.3)'
  context.shadowBlur = 22
  context.shadowOffsetY = 9
  roundRect(context, inset, 10, innerWidth, CARD_HEIGHT - 90, 30)
  context.fillStyle = '#fffdf7'
  context.fill()
  context.restore()

  context.lineWidth = 5
  context.strokeStyle = '#e8dcc2'
  roundRect(context, inset, 10, innerWidth, CARD_HEIGHT - 90, 30)
  context.stroke()

  // Zone accent bar along the top edge.
  context.save()
  roundRect(context, inset, 10, innerWidth, CARD_HEIGHT - 90, 30)
  context.clip()
  context.fillStyle = content.accent
  context.fillRect(inset, 10, innerWidth, 13)
  context.restore()

  context.textAlign = 'left'
  context.textBaseline = 'middle'

  const textLeft = inset + 34
  const textWidth = innerWidth - 68 - (content.discovered ? 30 : 0)

  const nameSize = fitFont(context, content.name, 92, 900, textWidth)
  context.fillStyle = '#20352f'
  context.font = `900 ${nameSize}px ${FONT_STACK}`
  context.fillText(content.name, textLeft, 96)

  // Habitat dot, then the muted period · habitat line.
  context.beginPath()
  context.arc(textLeft + 9, 176, 9, 0, Math.PI * 2)
  context.fillStyle = content.accent
  context.fill()
  const subtitleSize = fitFont(context, content.subtitle, 40, 600, textWidth - 34)
  context.fillStyle = '#5c6e68'
  context.font = `600 ${subtitleSize}px ${FONT_STACK}`
  context.fillText(content.subtitle, textLeft + 30, 177)

  if (content.discovered) {
    drawStar(context, CARD_WIDTH - inset - 46, 66, 24, '#f4b85f')
  }

  // Downward pointer, so the card clearly belongs to the animal below it.
  context.beginPath()
  context.moveTo(CARD_WIDTH / 2 - 30, CARD_HEIGHT - 84)
  context.lineTo(CARD_WIDTH / 2 + 30, CARD_HEIGHT - 84)
  context.lineTo(CARD_WIDTH / 2, CARD_HEIGHT - 22)
  context.closePath()
  context.fillStyle = '#fffdf7'
  context.fill()
  context.lineWidth = 5
  context.strokeStyle = '#e8dcc2'
  context.stroke()

  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  texture.anisotropy = 4
  return texture
}

function drawStar(
  context: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  color: string,
): void {
  context.beginPath()
  for (let point = 0; point < 10; point += 1) {
    const r = point % 2 === 0 ? radius : radius * 0.45
    const angle = (point / 10) * Math.PI * 2 - Math.PI / 2
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    if (point === 0) {
      context.moveTo(x, y)
    } else {
      context.lineTo(x, y)
    }
  }
  context.closePath()
  context.fillStyle = color
  context.fill()
  context.lineWidth = 3
  context.strokeStyle = '#ffffff'
  context.stroke()
}

export interface ExhibitLabel {
  readonly sprite: Sprite
  setContent: (content: LabelContent) => void
  dispose: () => void
}

export function createExhibitLabel(
  content: LabelContent,
  worldWidth: number,
): ExhibitLabel {
  const aspect = CARD_HEIGHT / CARD_WIDTH
  let texture = createLabelTexture(content)
  const material = new SpriteMaterial({
    map: texture,
    transparent: true,
    // Labels stay readable through the ridge; the HUD toggle hides them all.
    depthTest: false,
    depthWrite: false,
  })
  const sprite = new Sprite(material)
  sprite.name = 'exhibit-label'
  sprite.scale.set(worldWidth, worldWidth * aspect, 1)
  sprite.center.set(0.5, 0)
  sprite.renderOrder = 900
  sprite.userData.baseWidth = worldWidth
  sprite.userData.labelAspect = aspect

  return {
    sprite,
    setContent: (next: LabelContent) => {
      const previous = texture
      texture = createLabelTexture(next)
      material.map = texture
      material.needsUpdate = true
      previous.dispose()
    },
    dispose: () => {
      texture.dispose()
      material.dispose()
    },
  }
}
