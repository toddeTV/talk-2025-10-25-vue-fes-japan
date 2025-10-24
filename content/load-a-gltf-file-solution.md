---
layout: basic
---

# Load a glTF file - Problems Solutions

<div class="absolute w-38 left-79 top-14" v-mark="{ at: 0, color: '#ab2657', type: 'underline' }"></div>
<div class="absolute w-38 left-79 top-15" v-mark="{ at: 0, color: '#ab2657', type: 'underline' }"></div>

<div class="text-gray-400">

- <mdi-code class="mr-2"/> Loads only at runtime, nothing in dev
- <ant-design-frown-filled class="text-red-400" /> No typings
  - No code completion
  - No safeguarding on build (missing file, missing node, etc.)
- <ant-design-frown-filled class="text-red-400" /> Get node by name is depth-first in scene graph, e.g. `modelScene.getObjectByName("rock001");`
- <ant-design-frown-filled class="text-red-400" /> Models as public assets (no versioning for caching, etc.)
- <ant-design-frown-filled class="text-red-400" /> All models are always bundled because the bundler does not know what models are used

</div>

<div class="absolute w-full top-24 bg-white" v-click>

- <mdi-code class="mr-2"/> Loads at build time and can be triggered in dev

</div>

<div class="absolute w-full top-34 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> Typings present
  - Code completion
  - Safeguarding on build (missing file, missing node, etc.)

</div>

<div class="absolute w-full top-65 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> Get node by name on direct path in scene graph, e.g. `IslandScene.island.beach.rock001`

</div>

<div class="absolute w-full top-75 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> Models are in src assets (versioning, etc.)

</div>

<div class="absolute w-full top-85 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> Only bundle used models

</div>
