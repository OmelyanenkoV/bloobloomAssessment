// vite.configuration.js
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const host = loadEnv(mode, process.cwd()).VITE_APP_HOST
  const isReport = mode === 'report'

  const plugins = [
    splitVendorChunkPlugin(),
    vue({}),
    Unfonts({
      custom: {
        families: [
          {
            name: 'IBM Plex Sans',
            local: 'IBM Plex Sans',
            src: [
              './src/assets/fonts/IBMPlexSansArabic/IBMPlexSansArabic-Light.woff',
              // './src/assets/fonts/IBMPlexSansArabic/IBMPlexSansArabic-Medium.woff',
              // './src/assets/fonts/IBMPlexSansArabic/IBMPlexSansArabic-Regular.woff',
              // './src/assets/fonts/IBMPlexSansArabic/IBMPlexSansArabic-Bold.woff'
              './node_modules/@quasar/extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
            ]
          }
        ],
        display: 'auto',
        preload: true,
        injectTo: 'head-prepend'
      }
    })
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   injectRegister: 'auto',
    //   workbox: {
    //     cleanupOutdatedCaches: true,
    //     globPatterns: ['**/*.{js,css,ico,png,svg,json,vue,txt,woff2}']
    //   },
    //   manifest: {
    //     name: 'Qiwa',
    //     short_name: 'QIWA',
    //     description:
    //       'Qiwa platform is an electronic platform that provides the Ministry of Human Resources and Social Development services and solutions to enhance the electronic services provided to the labor sector.',
    //     theme_color: '#1c5a7d',
    //     background_color: '#52a8f2',
    //     display: 'standalone',
    //     icons: icons
    //   }
    // })
  ]
  plugins.push(basicSsl())
  if (isReport) {
    plugins.push(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      visualizer({
        filename: './dist/report.html',
        open: true,
        brotliSize: true
      })
    )
  }

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/scss/globalVariables/main.scss";'
        }
      }
    },
    build: {
      minify: true,
      sourcemap: false,
      chunkSizeWarningLimit: 500
    },
    server: {
      https: true,
      port: 8084,
      host: host
    },
    plugins
  }
})
