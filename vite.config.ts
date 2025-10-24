import type { UserConfig } from 'vite'
import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')

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
  }
})
