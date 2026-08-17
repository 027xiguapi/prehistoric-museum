import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:3457'
const out = process.argv[3] ?? 'zone-select-check.png'
const width = Number(process.argv[4] ?? 1440)
const height = Number(process.argv[5] ?? 900)

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width, height } })
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForSelector('.zone-map', { timeout: 30000 })
await page.waitForTimeout(800)
await page.screenshot({ path: out, fullPage: false })
await browser.close()
console.log(`saved ${out}`)
