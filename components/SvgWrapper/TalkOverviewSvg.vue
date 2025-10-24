<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed, toRefs } from 'vue'
import SvgElementFilter from '../SvgElementFilter.vue'
import mySvgContent1 from '/assets/excalidraw-drawings/talk-overview/talk-overview-1_light.svg?raw'
import mySvgContent2 from '/assets/excalidraw-drawings/talk-overview/talk-overview-2_light.svg?raw'
import mySvgContent3 from '/assets/excalidraw-drawings/talk-overview/talk-overview-3_light.svg?raw'
import mySvgContent4 from '/assets/excalidraw-drawings/talk-overview/talk-overview-4_light.svg?raw'

const props = withDefaults(defineProps<{
  clickStart?: number
}>(), {
  clickStart: 1,
})

const { clickStart } = toRefs(props)

const { clicks } = useNav()

const click = computed(() => clicks.value + clickStart.value - 1)

const mySvgContent = computed(() => {
  switch (click.value) {
    case 1:
      return mySvgContent1
    case 2:
      return mySvgContent2
    case 3:
      return mySvgContent3
    case 4:
      return mySvgContent4
    default:
      return undefined
  }
})
</script>

<template>
  <SvgElementFilter
    v-if="mySvgContent"
    display-indices="all"
    svg-class="w-full"
    :svg-content="mySvgContent"
  />
</template>
