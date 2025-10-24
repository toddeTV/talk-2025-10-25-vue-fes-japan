---
layout: basic
---

# Plugin Pipeline

<div class="flex flex-row w-full gap-20 mt-10">
    <div class="flex flex-col w-full flex-grow-0">
        <div
            class="relative px-2 py-1"
            v-click="1"
            v-mark="{ at: 1, color: '#26ab7a', type: 'box' }"
        >
            <span class="text-2xl">glTF files</span>
        </div>
        <ul
            class="mt-7"
            v-click="1"
        >
            <li><simple-icons:typescript class="baseColor mt-0.5 mr-2" /> not TypeSafe</li>
        </ul>
    </div>
    <div class="flex flex-col w-full flex-grow-0">
        <div
            class="relative px-2 py-1"
            v-click="2"
            v-mark="{ at: 2, color: '#26ab7a', type: 'box' }"
        >
            <span class="text-2xl">Vite Plugin</span>
            <div class="absolute w-13 left-0 top-4" v-mark="{ at: 5, color: '#ab2657', type: 'underline' }"></div>
            <div class="absolute w-13 left-0 top-5" v-mark="{ at: 5, color: '#ab2657', type: 'underline' }"></div>
        </div>
        <ul
            class="mt-7"
            v-click="2"
        >
            <li><ant-design:code-outlined class="baseColor mt-0.5 mr-2" /> preprocess</li>
            <li><mdi:code class="baseColor mt-0.5 mr-2" /> code gen</li>
            <li><simple-icons:typescript class="baseColor mt-0.5 mr-2" /> now TypeSafe</li>
        </ul>
    </div>
    <div class="flex flex-col w-full flex-grow-0">
        <div
            class="relative px-2 py-1"
            v-click="5"
            v-mark="{ at: 5, color: '#26ab7a', type: 'box' }"
        >
            <span class="text-2xl"><simple-icons:unjs class="baseColor mt-0.5 mr-2" />/unplugin</span>
        </div>
        <ul
            class="mt-7"
            v-click="5"
        >
            <li>esbuild</li>
            <li>Farm</li>
            <li>Rolldown</li>
            <li>Rollup</li>
            <li>Rspack</li>
            <li>Vite</li>
            <li>Webpack</li>
        </ul>
    </div>
    <div class="flex flex-col w-full flex-grow-0">
        <div
            class="relative px-2 py-1"
            v-click="3"
            v-mark="{ at: 3, color: '#26ab7a', type: 'box' }"
        >
            <span class="text-2xl">Vue Project</span>
            <div class="absolute w-13 left-0 top-4" v-mark="{ at: 4, color: '#ab2657', type: 'underline' }"></div>
            <div class="absolute w-13 left-0 top-5" v-mark="{ at: 4, color: '#ab2657', type: 'underline' }"></div>
        </div>
        <ul
            class="mt-7"
            v-click="4"
        >
            <li>Vue</li>
            <li>Nuxt</li>
            <li>Astro</li>
            <li>React</li>
            <li>Next</li>
            <li>Svelte</li>
            <li>Angular</li>
        </ul>
    </div>
</div>

<Arrow
    v-click="2"
    v-bind="{ x1:240, y1:155, x2:290, y2:155, color: '#26ab7a' }"
/>
<Arrow
    v-click="[3,5]"
    v-bind="{ x1:490, y1:155, x2:785, y2:155, color: '#26ab7a' }"
/>
<Arrow
    v-click="5"
    v-bind="{ x1:490, y1:155, x2:540, y2:155, color: '#26ab7a' }"
/>
<Arrow
    v-click="5"
    v-bind="{ x1:730, y1:155, x2:785, y2:155, color: '#26ab7a' }"
/>
