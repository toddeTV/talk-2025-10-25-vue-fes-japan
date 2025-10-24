<script setup lang="ts">
import { configs } from '@slidev/client'
import { computed } from 'vue'
import Footer from '../components/Footer.vue'
import { handleBackground, resolveAssetUrl } from '../layoutHelper'

const props = withDefaults(defineProps<{
  background?: string
  leftOrientation: 'top' | 'center' | 'bottom'
}>(), {
  background: '',
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="flex flex-row justify-between h-full">
      <div
        class="flex flex-col h-full max-w-2/3 pr-8"
        :class="{
          'justify-start': props.leftOrientation === 'top',
          'justify-center': props.leftOrientation === 'center',
          'justify-end': props.leftOrientation === 'bottom',
        }"
      >
        <slot />
      </div>
      <div class="flex flex-col justify-center h-full max-w-1/3">
        <img
          :alt="`Avatar of ${configs.author.name}`"
          class="rounded-full w-full border-5 border-baseColor"
          :src="resolveAssetUrl(configs.author.avatar)"
        >
      </div>
    </div>
    <Footer />
  </div>
</template>
