import { computed, ref } from 'vue'

const isLoggedIn = ref(false)

async function login(apiUrl: string) {
  if (isLoggedIn.value) {
    return
  }

  const username = (import.meta as any).env.VITE_STAGE_FLOW_TOOLS_DEMO_USER as string | undefined
  const password = (import.meta as any).env.VITE_STAGE_FLOW_TOOLS_DEMO_PASSWORD as string | undefined

  if (!username || !password) {
    return
  }

  await fetch(`${apiUrl}/api/auth/login`, {
    body: JSON.stringify({ password, username }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  isLoggedIn.value = true
}

export function useStageFlowTools() {
  const iframeUrl = computed<string | undefined>(() => {
    const url = (import.meta as any).env.VITE_STAGE_FLOW_TOOLS_DEMO_URL as string | undefined
    if (!url) {
      return undefined
    }
    return url
  })

  const apiUrl = '/api-proxy'

  login(apiUrl)

  return {
    apiUrl,
    iframeUrl,
  }
}
