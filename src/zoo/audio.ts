/**
 * Zoo audio.
 *
 * Two deliberate choices:
 *
 * 1. Exhibit *speech* is the museum's own approved narration MP3, never
 *    synthesized here, so what a visitor hears about an animal stays the
 *    reviewed script.
 * 2. There are no animal calls. Nobody knows what a stegosaurus sounded like,
 *    and the museum's editorial notes refuse to present invented sounds as
 *    fact. Everything synthesized below is park ambience and interface
 *    feedback: footfalls, chimes, whooshes.
 */

const SILENT_GAIN = 0.0001

export interface ZooAudioOptions {
  readonly onSpeakingChange?: ((speaking: boolean) => void) | undefined
  readonly onNarrationError?: (() => void) | undefined
}

export class ZooAudio {
  private context: AudioContext | null = null
  private master: GainNode | null = null
  private noiseBuffer: AudioBuffer | null = null
  private narration: HTMLAudioElement | null = null
  private enabled = true
  private speakingNow = false
  private resolveCurrentFinished: (() => void) | null = null
  private currentFinished: Promise<void> | null = null
  private readonly onSpeakingChange: ((speaking: boolean) => void) | undefined
  private readonly onNarrationError: (() => void) | undefined

  constructor(options: ZooAudioOptions = {}) {
    this.onSpeakingChange = options.onSpeakingChange
    this.onNarrationError = options.onNarrationError
  }

  /** Creates the audio graph. Must be called from a user gesture. */
  unlock(): void {
    if (this.context) {
      if (this.context.state === 'suspended') {
        void this.context.resume()
      }
      return
    }
    const AudioContextClass =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    if (!AudioContextClass) {
      return
    }
    this.context = new AudioContextClass()
    this.master = this.context.createGain()
    this.master.gain.value = this.enabled ? 0.9 : SILENT_GAIN
    this.master.connect(this.context.destination)

    const seconds = 1
    const buffer = this.context.createBuffer(
      1,
      this.context.sampleRate * seconds,
      this.context.sampleRate,
    )
    const data = buffer.getChannelData(0)
    for (let index = 0; index < data.length; index += 1) {
      data[index] = Math.random() * 2 - 1
    }
    this.noiseBuffer = buffer
  }

  get isEnabled(): boolean {
    return this.enabled
  }

  setEnabled(on: boolean): void {
    this.enabled = on
    if (this.master && this.context) {
      this.master.gain.setTargetAtTime(
        on ? 0.9 : SILENT_GAIN,
        this.context.currentTime,
        0.05,
      )
    }
    if (!on) {
      this.stopNarration()
    }
  }

  get isSpeaking(): boolean {
    return this.speakingNow
  }

  // ------------------------------------------------------------------- synth

  private tone(
    frequency: number,
    duration: number,
    options: {
      readonly type?: OscillatorType
      readonly gain?: number
      readonly delay?: number
      readonly sweepTo?: number
    } = {},
  ): void {
    const context = this.context
    const master = this.master
    if (!context || !master || !this.enabled) {
      return
    }
    const start = context.currentTime + (options.delay ?? 0)
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = options.type ?? 'sine'
    oscillator.frequency.setValueAtTime(frequency, start)
    if (options.sweepTo !== undefined) {
      oscillator.frequency.exponentialRampToValueAtTime(
        Math.max(options.sweepTo, 1),
        start + duration,
      )
    }
    const peak = options.gain ?? 0.18
    gain.gain.setValueAtTime(SILENT_GAIN, start)
    gain.gain.exponentialRampToValueAtTime(peak, start + 0.012)
    gain.gain.exponentialRampToValueAtTime(SILENT_GAIN, start + duration)
    oscillator.connect(gain)
    gain.connect(master)
    oscillator.start(start)
    oscillator.stop(start + duration + 0.02)
  }

  private noise(
    duration: number,
    options: {
      readonly filter?: number
      readonly gain?: number
      readonly sweepTo?: number
    } = {},
  ): void {
    const context = this.context
    const master = this.master
    if (!context || !master || !this.noiseBuffer || !this.enabled) {
      return
    }
    const start = context.currentTime
    const source = context.createBufferSource()
    source.buffer = this.noiseBuffer
    const filter = context.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(options.filter ?? 900, start)
    if (options.sweepTo !== undefined) {
      filter.frequency.exponentialRampToValueAtTime(
        Math.max(options.sweepTo, 40),
        start + duration,
      )
    }
    const gain = context.createGain()
    const peak = options.gain ?? 0.12
    gain.gain.setValueAtTime(peak, start)
    gain.gain.exponentialRampToValueAtTime(SILENT_GAIN, start + duration)
    source.connect(filter)
    filter.connect(gain)
    gain.connect(master)
    source.start(start)
    source.stop(start + duration + 0.02)
  }

  /** A soft footfall on gravel, varied so a walk never sounds looped. */
  step(): void {
    const jitter = 0.9 + Math.random() * 0.3
    this.noise(0.1 * jitter, { filter: 1500 * jitter, gain: 0.07 })
  }

  /** Two-note marimba greeting used when an exhibit notices you. */
  greet(): void {
    this.tone(587.33, 0.26, { type: 'triangle', gain: 0.16 })
    this.tone(880, 0.34, { type: 'triangle', gain: 0.13, delay: 0.1 })
  }

  /** Rising four-note arpeggio for meeting a new animal. */
  discover(): void {
    const notes = [523.25, 659.25, 783.99, 1046.5]
    notes.forEach((frequency, index) => {
      this.tone(frequency, 0.42, {
        type: 'triangle',
        gain: 0.15 - index * 0.015,
        delay: index * 0.085,
      })
    })
  }

  /** Longer fanfare for completing the whole park. */
  celebrate(): void {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5]
    notes.forEach((frequency, index) => {
      this.tone(frequency, 0.6, {
        type: 'triangle',
        gain: 0.16,
        delay: index * 0.12,
      })
      this.tone(frequency / 2, 0.6, {
        type: 'sine',
        gain: 0.09,
        delay: index * 0.12,
      })
    })
    this.noise(1.1, { filter: 6000, gain: 0.05, sweepTo: 400 })
  }

  click(): void {
    this.tone(1320, 0.07, { type: 'square', gain: 0.05 })
  }

  blocked(): void {
    this.tone(160, 0.2, { type: 'sine', gain: 0.14, sweepTo: 90 })
  }

  whoosh(): void {
    this.noise(0.42, { filter: 320, gain: 0.09, sweepTo: 2600 })
  }

  // --------------------------------------------------------------- narration

  /** Plays one approved narration track, replacing whatever was speaking. */
  async playNarration(url: string | null): Promise<void> {
    this.stopNarration()
    if (!url || !this.enabled) {
      return
    }
    const audio = this.getNarrationElement()
    audio.src = url
    audio.currentTime = 0
    // Created before playback starts, and after the previous track has been
    // stopped, so it belongs to exactly this track.
    this.currentFinished = new Promise((resolve) => {
      this.resolveCurrentFinished = resolve
    })
    this.setSpeaking(true)
    try {
      await audio.play()
    } catch {
      this.setSpeaking(false)
      this.onNarrationError?.()
    }
  }

  stopNarration(): void {
    const audio = this.narration
    if (!audio) {
      return
    }
    audio.pause()
    audio.removeAttribute('src')
    this.setSpeaking(false)
  }

  private getNarrationElement(): HTMLAudioElement {
    if (this.narration) {
      return this.narration
    }
    const audio = new Audio()
    audio.preload = 'auto'
    audio.addEventListener('ended', this.handleNarrationEnded)
    audio.addEventListener('pause', this.handleNarrationEnded)
    audio.addEventListener('error', this.handleNarrationError)
    this.narration = audio
    return audio
  }

  private handleNarrationEnded = (): void => {
    this.setSpeaking(false)
  }

  private handleNarrationError = (): void => {
    this.setSpeaking(false)
    this.onNarrationError?.()
  }

  private setSpeaking(speaking: boolean): void {
    if (this.speakingNow === speaking) {
      return
    }
    this.speakingNow = speaking
    if (!speaking) {
      const resolve = this.resolveCurrentFinished
      this.resolveCurrentFinished = null
      resolve?.()
    }
    this.onSpeakingChange?.(speaking)
  }

  /**
   * Resolves when the track most recently handed to `playNarration` stops.
   *
   * Call this *after* `playNarration`, never before: stopping the previous
   * track is the first thing playback does, so a promise registered earlier
   * would be resolved by that stop and the caller would think a track it had
   * not yet heard had already finished.
   */
  whenFinished(): Promise<void> {
    return this.currentFinished ?? Promise.resolve()
  }

  dispose(): void {
    this.stopNarration()
    if (this.narration) {
      this.narration.removeEventListener('ended', this.handleNarrationEnded)
      this.narration.removeEventListener('pause', this.handleNarrationEnded)
      this.narration.removeEventListener('error', this.handleNarrationError)
      this.narration = null
    }
    this.master?.disconnect()
    this.master = null
    if (this.context) {
      void this.context.close()
      this.context = null
    }
    this.noiseBuffer = null
  }
}
