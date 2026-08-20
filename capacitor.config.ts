import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.leonmadethis.museum',
  appName: '史前动物博物馆',
  webDir: 'out',
  // The exported bundle is served from the WebView's local root; the bundled
  // server scheme keeps modern Web APIs (WebGL, fetch) available on Android.
  server: {
    androidScheme: 'https',
  },
}

export default config
