// Stamps the native app version numbers from package.json (the single source
// of truth) before a mobile build: Android versionName/versionCode in
// android/app/build.gradle and iOS MARKETING_VERSION/CURRENT_PROJECT_VERSION
// in the Xcode project. Build numbers are derived as
// major * 10000 + minor * 100 + patch so every release maps to a
// monotonically increasing integer.
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const { version } = JSON.parse(readFileSync(join(repositoryRoot, 'package.json'), 'utf8'))
const semver = /^(\d+)\.(\d+)\.(\d+)(?:[-+].+)?$/.exec(version ?? '')
if (!semver) {
  console.error(`sync-native-version.mjs: package.json version "${version}" is not valid semver (x.y.z).`)
  process.exit(1)
}

const buildNumber = Number(semver[1]) * 10000 + Number(semver[2]) * 100 + Number(semver[3])

const targets = [
  {
    file: join(repositoryRoot, 'android', 'app', 'build.gradle'),
    label: 'android/app/build.gradle',
    replacements: [
      [/versionCode \d+/g, `versionCode ${buildNumber}`],
      [/versionName "[^"]*"/g, `versionName "${version}"`],
    ],
  },
  {
    file: join(repositoryRoot, 'ios', 'App', 'App.xcodeproj', 'project.pbxproj'),
    label: 'ios/App/App.xcodeproj/project.pbxproj',
    replacements: [
      [/CURRENT_PROJECT_VERSION = [^;]+;/g, `CURRENT_PROJECT_VERSION = ${buildNumber};`],
      [/MARKETING_VERSION = [^;]+;/g, `MARKETING_VERSION = ${version};`],
    ],
  },
]

for (const target of targets) {
  // A checkout may only have added one of the native platforms.
  if (!existsSync(target.file)) {
    console.warn(`Skipped ${target.label}: file not found.`)
    continue
  }

  const original = readFileSync(target.file, 'utf8')
  let updated = original
  for (const [pattern, replacement] of target.replacements) {
    if (!updated.match(pattern)) {
      console.error(`sync-native-version.mjs: no match for ${pattern} in ${target.label}.`)
      process.exit(1)
    }
    updated = updated.replace(pattern, replacement)
  }

  if (updated === original) {
    console.log(`${target.label}: already at ${version} (build ${buildNumber}).`)
    continue
  }

  writeFileSync(target.file, updated)
  console.log(`${target.label}: synced to ${version} (build ${buildNumber}).`)
}
