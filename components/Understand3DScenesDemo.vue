<script setup lang="ts">
import type { TresCanvasProps } from '@tresjs/core/dist/src/components/TresCanvas.vue.js'
import type {
  Object3D,
} from 'three'
import { GLTFModel, OrbitControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { EffectComposerPmndrs, PixelationPmndrs } from '@tresjs/post-processing'
import {
  AmbientLight,
  CameraHelper,
  DirectionalLight,
  NoToneMapping,
  PerspectiveCamera,
  SRGBColorSpace,
  VSMShadowMap,
} from 'three'
import { ref, shallowRef, watch, watchEffect } from 'vue'

const props = defineProps<{
  page: number
  click: number
}>()

function isStep(page: number | number[], click?: number | number[]) {
  const pages = Array.isArray(page) ? page : [page]
  const clicks = Array.isArray(click) ? click : [click]
  if (click === undefined) {
    return pages.includes(props.page)
  }
  return pages.includes(props.page) && clicks.includes(props.click)
}

function isStepMin(page: number) {
  return props.page >= page
}

function isStepMax(page: number) {
  return props.page <= page
}

const showGrid = ref(true)
const showCamera = ref(true)
const showLights = ref(true)
const directionalLightRange = ref('100')
const showPlane = ref(true)
const showCube = ref(true)
const showShadow = ref(true)
const showModel = ref(true)
const showInteraction = ref(true)
const showPostprocessing = ref(true)

const canvasProps = ref<TresCanvasProps>({
  alpha: false,
  clearColor: '#82DBC5',
  outputColorSpace: SRGBColorSpace,
  renderMode: 'always',
  // resize: true, // not present? hmm ... documentation says it's there and important for resizable canvas - weird
  // `VSMShadowMap` better shadows, but more performance heavy; `BasicShadowMap` is faster but has less quality
  shadowMapType: VSMShadowMap, // BasicShadowMap | PCFShadowMap | PCFSoftShadowMap | VSMShadowMap
  shadows: true,
  toneMapping: NoToneMapping,
  useLegacyLights: false,
})

// 8: camera
const perspectiveCamera = new PerspectiveCamera()
perspectiveCamera.position.set(-5, 5, -2)
perspectiveCamera.near = 2
perspectiveCamera.far = 10
const perspectiveCameraHelper = new CameraHelper(perspectiveCamera)
const cameraRef = shallowRef()
watch(cameraRef, (value) => {
  if (!value) {
    return
  }
  value.add(perspectiveCameraHelper)
}, {
  immediate: true,
})
setInterval(() => {
  perspectiveCamera.lookAt(0, 0, 0)
}, 1000)

// 9: lights
const lightsRef = shallowRef()
const lightsHelperRef = shallowRef()
watchEffect(() => {
  if (!lightsRef.value) {
    return
  }
  lightsRef.value.remove(...lightsRef.value.children)
  const ambientLight = new AmbientLight(0xFFFFFF, 0)
  ambientLight.intensity = 0.5
  const directionalLight = new DirectionalLight(0xFFFFFF, 0)
  directionalLight.castShadow = true
  directionalLight.intensity = 1.2
  directionalLight.shadow.camera.near = 5
  directionalLight.shadow.camera.far = +directionalLightRange.value / 10
  directionalLight.shadow.camera.left = -5
  directionalLight.shadow.camera.right = 5
  directionalLight.shadow.camera.top = 5
  directionalLight.shadow.camera.bottom = -5
  // directionalLight.shadow.camera.position.set(0, 3, 7)
  // directionalLight.shadow.camera.lookAt(0, 0, 0)
  directionalLight.position.set(5, 3, 5)
  directionalLight.target.position.set(0, 0, 0)
  // directionalLight.shadow.camera.updateProjectionMatrix()
  const directionalLightHelper = new CameraHelper(directionalLight.shadow.camera)
  lightsRef.value.add(ambientLight)
  lightsRef.value.add(directionalLight)
  if (lightsHelperRef.value) {
    lightsHelperRef.value.remove(...lightsHelperRef.value.children)
    lightsHelperRef.value.add(directionalLightHelper)
  }
})

// 12: models
const modelRef = shallowRef<Object3D>()
// watch(modelRef, (model) => {
//   if(!model) {
//     return
//   }
//   console.dir(model)
//   model.position.set(100, 0, 0)
// }, {
//   immediate: true,
// })
const clickedKey = ref()
const timeout = ref()
function modelClicked(e) {
  if (!showInteraction.value) {
    return
  }
  // console.log(e.object.name)
  clickedKey.value = `"${e.object.name}" clicked`
  clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    clickedKey.value = ''
  }, 3000)
}

// 14: postprocessing
const pixelStrength = ref(10)
</script>

<template>
  <WindowWrapper
    background="#E1F4FF"
    :class="{ 'opacity-0 hidden h-0! w-0!': isStep(5, 5) }"
    max-height
  >
    <!-- 6: canvas -->
    <div v-if="isStepMax(5)" class="h-full h-full bg-[#FFFFFF]" />
    <div v-if="isStep(6, 0)" class="h-full h-full bg-[#FFFFFF]" />

    <TresCanvas
      v-bind="canvasProps"
      class="absolute inset-0"
      :class="{ 'opacity-0 hidden h-0! w-0!': !isStepMin(7) }"
      clear-color="#E1F4FF"
    >
      <TresPerspectiveCamera :position="[-13, 11, 8]" />
      <OrbitControls />

      <!-- 7: world -->
      <TresGridHelper v-if="showGrid" />
      <TresAxesHelper v-if="showGrid" />

      <!-- 8: camera -->
      <TresGroup
        v-if="isStepMin(8) && showCamera"
        ref="cameraRef"
      />

      <!-- 9: lights -->
      <TresGroup
        v-if="isStepMin(9)"
        ref="lightsRef"
      />
      <TresGroup
        v-if="isStepMin(9) && showLights"
        ref="lightsHelperRef"
      />

      <!-- 10: meshes -->
      <TresMesh
        v-if="isStepMin(10) && showPlane"
        :position="[0, -0.01, 0]"
        :receive-shadow="isStepMin(11) && showShadow"
        :rotation="[-Math.PI / 2, 0, 0]"
      >
        <TresPlaneGeometry :args="[10, 10, 10]" />
        <TresMeshToonMaterial color="#fefefe" />
      </TresMesh>
      <TresMesh
        v-if="isStepMin(10) && showCube"
        :cast-shadow="isStepMin(11) && showShadow"
        :position="[0, 1, 0]"
      >
        <TresBoxGeometry
          :args="[2, 2, 2]"
        />
        <TresMeshNormalMaterial />
      </TresMesh>

      <!-- 12: models -->
      <Suspense
        v-if="isStepMin(12) && showModel"
      >
        <GLTFModel
          ref="modelRef"
          :cast-shadow="isStepMin(11) && showShadow"
          path="/assets/models/train-tram-round.glb"
          :receive-shadow="isStepMin(11) && showShadow"
          :scale="1.5"
          @click="modelClicked"
        />
      </Suspense>

      <Suspense
        v-if="isStepMin(14) && showPostprocessing"
      >
        <EffectComposerPmndrs>
          <PixelationPmndrs :granularity="+pixelStrength" />
        </EffectComposerPmndrs>
      </Suspense>
    </TresCanvas>

    <div class="absolute bottom-0 left-0 w-full z-2 flex flex-row justify-start pl-1">
      <div
        v-if="isStepMin(7)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showGrid }"
        @click="showGrid = !showGrid"
      >
        Grid
      </div>
      <div
        v-if="isStepMin(8)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showCamera }"
        @click="showCamera = !showCamera"
      >
        Camera
      </div>
      <div
        v-if="isStepMin(9)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showLights }"
        @click="showLights = !showLights"
      >
        Lights
      </div>
      <div
        v-if="isStepMin(10)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showPlane }"
        @click="showPlane = !showPlane"
      >
        Plane
      </div>
      <div
        v-if="isStepMin(10)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showCube }"
        @click="showCube = !showCube"
      >
        Cube
      </div>
      <div
        v-if="isStepMin(11)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showShadow }"
        @click="showShadow = !showShadow"
      >
        Shadow
      </div>
      <div
        v-if="isStepMin(12)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showModel }"
        @click="showModel = !showModel"
      >
        Model
      </div>
      <div
        v-if="isStepMin(13)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showInteraction }"
        @click="showInteraction = !showInteraction"
      >
        Interaction
      </div>
      <div
        v-if="isStepMin(14)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showPostprocessing }"
        @click="showPostprocessing = !showPostprocessing"
      >
        Postprocessing
      </div>
    </div>
  </WindowWrapper>

  <input
    v-if="isStepMin(9)"
    v-model="directionalLightRange"
    class="cursor-pointer w-20 absolute -bottom-5 left-16"
    max="150"
    min="60"
    type="range"
  >
  <input
    v-if="isStepMin(14)"
    v-model="pixelStrength"
    class="cursor-pointer w-20 absolute -bottom-5 left-90"
    max="30"
    min="0"
    type="range"
  >

  <div
    v-if="clickedKey && isStepMin(13) && showInteraction"
    class="absolute bottom-5 -left-50 w-60 text-center bg-baseColor text-white rounded-lg p-1 rotate-[-10deg]"
  >
    {{ clickedKey }}
  </div>
</template>

<style scoped>
</style>
