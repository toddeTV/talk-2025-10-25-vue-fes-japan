import { computed } from 'vue'

export function useStageFlowTools() {
  const url = computed<string | undefined>(() => {
    const url = import.meta.env.VITE_STAGE_FLOW_TOOLS_DEMO_URL
    if (!url) {
      return undefined
    }
    return `${url}/emojis?scale=0.4&transparency=0.7`
  })

  return {
    url,
  }
}
