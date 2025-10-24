<script setup lang="ts">
import { useNav } from '@slidev/client'
import { shallowRef, watchEffect } from 'vue'

const page = shallowRef(-1)
const click = shallowRef(-1)

const pagesToShowUnderstand3DScenesDemo = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

watchEffect(() => {
  const { clicks, currentPage } = useNav()
  page.value = currentPage.value
  click.value = clicks.value
})
</script>

<template>
  <div
    v-if="pagesToShowUnderstand3DScenesDemo.includes(page) && page !== 4"
    class="absolute top-24 left-14 w-110"
  >
    <Understand3DScenesHeadlines :step="page - 4" />
  </div>

  <div
    class="absolute top-24 left-132 w-110"
    :class="{ 'opacity-0 hidden h-0! w-0!': !pagesToShowUnderstand3DScenesDemo.includes(page) }"
  >
    <Understand3DScenesDemo
      :click="click"
      :page="page"
    />
  </div>
</template>
