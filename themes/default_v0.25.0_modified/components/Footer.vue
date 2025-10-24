<script setup lang="ts">
import { configs, useNav } from '@slidev/client'
import { computed } from 'vue'

// const { $slidev } = useSlideContext()
const { currentPage, total } = useNav()

const subtractFromTotalPageCount = configs.themeConfig.subtractFromTotalPageCount
  ? +configs.themeConfig.subtractFromTotalPageCount
  : 0

const pageCurrent = computed(() => currentPage.value)
const pageTotal = computed(() => total.value)
const pageTotalFake = computed(() => total.value - subtractFromTotalPageCount)
const isAfterLastSlide = computed(() => pageCurrent.value > pageTotalFake.value)

const pageProcess = computed(() => {
  const process = Math.round(((pageCurrent.value * 100) / pageTotalFake.value) * 100) / 100
  if (process < 0)
    return 0
  if (process > 100)
    return 100
  return process
})
</script>

<template>
  <!-- infos: left website hyperlink and right the page number -->
  <footer class="absolute bottom-0 left-0 w-full px-14 pb-8 -z-1">
    <div class="w-full flex justify-between">
      <MyLink
        v-if="configs.author.website"
        class="mb-0 baseColor !border-b-0"
        :to="`https://${configs.author.website}`"
      >
        <mdi-web class="baseColor mr-1" />
        {{ configs.author.website }}
      </MyLink>
      <div class="baseColor flex gap-1">
        <span>{{ pageCurrent }}</span>
        <span
          v-if="configs.themeConfig.showTotalPageCount"
        >/</span>
        <span
          v-if="configs.themeConfig.showTotalPageCount"
          :class="{ 'text-decoration-line text-gray-400': isAfterLastSlide }"
        >{{ pageTotalFake }}</span>
        <div class="w-0 h-0 relative">
          <span
            v-if="configs.themeConfig.showTotalPageCount && isAfterLastSlide"
            class="absolute left-0.5 top-0 text-right"
          >{{ pageTotal }}</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- progress bar -->
  <div v-if="configs.themeConfig.showPageProcessBar" class="absolute bottom-0 left-0 w-full">
    <div class="w-full h-2">
      <div class="processColor h-2" :style="`width: ${pageProcess}%`" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.processColor {
  background-color: var(--slidev-theme-primary);
}
</style>
