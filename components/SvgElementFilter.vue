<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  // An array of numbers representing the indices of the SVG children to display. Indices are 1-based.
  displayIndices: number[] | 'all'

  // The SVG content as a string. This can be directly passed from an imported SVG file.
  svgContent: string

  // A string or array of strings representing CSS classes to be applied to the generated inner SVG element.
  svgClass?: string | string[]

  // An optional scale factor to apply to the SVG. This can be used to resize the SVG.
  scale?: number
}>()

const svgContainer = ref(null)
const processedSvg = ref('')

/**
 * Processes the SVG content to identify and selectively display children based on displayIndices.
 */
function processAndFilterSvg() {
  if (!props.svgContent) {
    processedSvg.value = ''
    return
  }

  const parser = new DOMParser()
  const doc = parser.parseFromString(props.svgContent, 'image/svg+xml')
  const svgElement = doc.documentElement

  // Get all direct children of the SVG element
  const children = Array.from(svgElement.children)

  // Clear existing processed SVG content
  processedSvg.value = ''

  // Create a new SVG element to house the filtered children
  const newSvgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  const scaleFactor = props.scale || 1
  newSvgElement.setAttribute('transform', `scale(${scaleFactor})`)

  // Copy attributes from the original SVG to the new one (e.g., viewBox, width, height)
  Array.from(svgElement.attributes).forEach((attr) => {
    newSvgElement.setAttribute(attr.name, attr.value)
  })

  // Apply the classes from the svgClass prop to the new SVG element
  if (props.svgClass) {
    if (Array.isArray(props.svgClass)) {
      // If it's an array, spread the elements. They should already be individual class names.
      newSvgElement.classList.add(...props.svgClass)
    }
    else {
      // If it's a string, split it by whitespace before adding
      props.svgClass.split(' ').forEach((cls) => {
        if (cls) { // Ensure no empty strings from multiple spaces
          newSvgElement.classList.add(cls)
        }
      })
    }
  }

  children.forEach((child, index) => {
    // 1-based indexing for displayIndices prop
    const childNumber = index + 1
    if (props.displayIndices.includes(childNumber as never) || props.displayIndices === 'all') {
      newSvgElement.appendChild(child.cloneNode(true))
    }
  })

  // Serialize the modified SVG back to a string
  processedSvg.value = newSvgElement.outerHTML
}

// Watch for changes in displayIndices, svgContent, or svgClass props to re-process the SVG
watch([
  () => props.displayIndices,
  () => props.svgContent,
  () => props.svgClass,
], processAndFilterSvg, {
  immediate: true,
})

// Initial processing when the component is mounted
onMounted(() => {
  processAndFilterSvg()
})
</script>

<template>
  <div ref="svgContainer" v-html="processedSvg" />
</template>
