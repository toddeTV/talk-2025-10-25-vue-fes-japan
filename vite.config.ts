import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
  ],
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
