---
layout: two-cols
---

<Understand3DScenesHeadline />

::left::

<div class="w-full h-23"></div>

<div class="flex flex-col gap-2 mt-3">

  <div
    class="flex flex-row justify-center gap-7"
    v-click="4"
  >
    <div
      class="flex flex-col p-1"
      v-mark="{ at: 4, color: '#36ab7a', type: 'box' }"
    >
      <div class="!w-22 shrink-0 flex flex-col">
        <span class="text-primary text-xl">TresJS</span>
        <span class="text-sm color-gray-500">for Vue/ Nuxt</span>
      </div>
    </div>
    <div
      class="flex flex-col p-1"
      v-mark="{ at: 4, color: '#36ab7a', type: 'box' }"
    >
      <div class="!w-22 shrink-0 flex flex-col">
        <span class="text-primary text-xl">Threlte</span>
        <span class="text-sm color-gray-500">for svelte</span>
      </div>
    </div>
    <div
      class="flex flex-col p-1"
      v-mark="{ at: 4, color: '#36ab7a', type: 'box' }"
    >
      <div class="!w-22 shrink-0 flex flex-col">
        <span class="text-primary text-xl">drei</span>
        <span class="text-sm color-gray-500">for react</span>
      </div>
    </div>
  </div>

  <div
    class="flex flex-row justify-between items-center p-1 mx-8"
    v-mark="{ at: 3, color: '#26ab7a', type: 'box' }"
    v-click="3"
  >
    <div class="!w-22 pr-3 shrink-0 flex flex-col">
      <span class="text-primary text-xl">ThreeJS</span>
      <img src="/assets/logos/ThreeJS.png" />
    </div>
    <div class="w-full text-sm">
      <ul>
        <li>High-level framework on WebGL</li>
        <li>Simplifies 3D objects, cameras, lighting</li>
        <li>Easier tools for animations, scenes, etc.</li>
      </ul>
    </div>
  </div>

  <div
    class="flex flex-row justify-between items-center p-1 mx-4"
    v-mark="{ at: 2, color: '#26ab7a', type: 'box' }"
    v-click="2"
  >
    <div class="!w-20 pr-3 shrink-0 flex flex-col">
      <span class="text-primary text-xl">WebGL</span>
      <img src="/assets/logos/WebGL.png" />
    </div>
    <div class="w-full text-sm">
      <ul>
        <li>Low-level API in the browser</li>
        <li>Direct GPU interaction</li>
        <li>complex (manual handling shaders, buffers, ...)</li>
      </ul>
    </div>
  </div>

  <div
    class="flex flex-row justify-center items-center p-3"
    v-mark="{ at: 1, color: '#26ab7a', type: 'box' }"
    v-click="1"
  >
    <span class="text-primary text-xl">GPU</span>
  </div>

</div>

<div class="absolute top-12 left-140 z-10 flex flex-col gap-4" v-click="5">
  <div>
    <span class="complementaryColor text-xl">declarative</span>

````md magic-move {lines: true, at: 1}
```vue {*}
<script setup lang="ts">
const dirLight = shallowRef<DirectionalLight>()
watch(dirLight, (newValue) => {
  if (!newValue) return
  dirLight.value.shadow.mapSize.width = 1024
})
</script>

<template>
  <TresCanvas>
    <TresDirectionalLight ref="dirLight" color="#FFFFFF"
      :intensity="1.2" :position="[0, 2, 4]" />
  </TresCanvas>
</template>
```
````

  </div>
  <div>
    <span class="complementaryColor text-xl">imperative</span>

````md magic-move {lines: true}
```vue {*}
<script setup lang="ts">
const dirLight = new DirectionalLight(0xFFFFFF, 1.2)
dirLight.position.set(0, 2, 4)
dirLight.value.shadow.mapSize.width = 1024
scene.value.add(dirLight)
</script>

<!-- <template>
</template> -->
```
````

  </div>
</div>

<Arrow
  v-click="5"
  v-bind="{ x1:550, y1:63, x2:190, y2:210, color: '#ab2657' }"
/>
<Arrow
  v-click="5"
  v-bind="{ x1:550, y1:375, x2:190, y2:220, color: '#ab2657' }"
/>
<Arrow
  v-click="5"
  v-bind="{ x1:550, y1:380, x2:180, y2:285, color: '#ab2657' }"
/>

::right::

<FloatingStageFlowToolsResultPage question-key="easy-3d-in-vue" v-click="[0,5]" />
