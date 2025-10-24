import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
  ],
  server: {
    proxy: {
      '/api-proxy': {
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api-proxy/, ''),
        target: 'https://stage-flow-tools.todde.tv',
      },
    },
  },
  slidev: {
    // markdown: {
    //   markdownItSetup(md) {
    //   },
    // },
    vue: {
      ...templateCompilerOptions,
    },
  },
})
