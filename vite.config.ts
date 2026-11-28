import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/osaki-ft/',
  server: {
    proxy: {
      '^/osaki-ft/api/ferry-mail-receiver/now(?:\\?|$)': {
        target: 'https://lab.chimonakiko.net',
        changeOrigin: true,
        /** GitHub Pages のベースパスを除いた Worker 用の URL への変換 */
        rewrite: (path) => path.slice('/osaki-ft'.length),
      },
    },
  },
  plugins: [react(), tailwindcss(), VitePWA({
    injectRegister: 'auto',
    registerType: "autoUpdate",
    manifest: {
      name: "大崎上島フェリー時刻表",
      short_name: "フェリー時刻表",
      description: "大崎上島のフェリー時刻表アプリです",
      theme_color: "#3b82f6",
      background_color: "#eff6ff",
      display: "standalone",
      orientation: "portrait",
      scope: '/osaki-ft/',
      start_url: "/osaki-ft/",
      icons: [
        {
          src: "osaki_ft_logo_192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "osaki_ft_logo_192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "osaki_ft_logo_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "osaki_ft_logo_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  })],
})
