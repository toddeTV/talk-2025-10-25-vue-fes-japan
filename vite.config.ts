import type { UserConfig } from 'vite'
import { cwd } from 'node:process'
import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig, loadEnv } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, cwd(), '')

  const proxyTarget = env.VITE_STAGE_FLOW_TOOLS_DEMO_URL

  const server: UserConfig['server'] = {}

  if (proxyTarget) {
    server.proxy = {
      '/api-proxy': {
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api-proxy/, ''),
        target: proxyTarget,
      },
    }
  }

  return {
    plugins: [
      svgLoader(),
    ],
    server,
    slidev: {
      // markdown: {
      //   markdownItSetup(md) {
      //   },
      // },
      vue: {
        ...templateCompilerOptions,
      },
    },
  } as UserConfig
})
