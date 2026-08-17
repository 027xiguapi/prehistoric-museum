/* global document, getComputedStyle */
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:3000'
const shot = process.argv[3] ?? null
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForSelector('.zone-map', { timeout: 60000 })
await page.waitForTimeout(2500)
const info = await page.evaluate(() => {
  const region = document.querySelector('.zone-region[data-zone-id="ocean"]')
  const sign = region?.querySelector('.zone-region__sign')
  if (!region || !sign) return { found: false }
  const regionCs = getComputedStyle(region)
  const signCs = getComputedStyle(sign)
  return {
    found: true,
    overflow: regionCs.overflow,
    signPosition: signCs.position,
    signTop: signCs.top,
    signLeft: signCs.left,
    signLeftVar: regionCs.getPropertyValue('--sign-left'),
    signRect: sign.getBoundingClientRect().toJSON(),
    regionRect: region.getBoundingClientRect().toJSON(),
  }
})
console.log(JSON.stringify(info, null, 2))
if (shot) {
  await page.screenshot({ path: shot })
  console.log(`saved ${shot}`)
}
await browser.close()
