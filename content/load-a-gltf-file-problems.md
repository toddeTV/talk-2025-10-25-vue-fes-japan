---
layout: basic
---

# Load a glTF file - Problems

<v-clicks>

- <mdi-code class="mr-2"/> Loads only at runtime, nothing in dev
- <ant-design-frown-filled class="text-red-400" /> No typings
  - No code completion
  - No safeguarding on build (missing file, missing node, etc.)
- <ant-design-frown-filled class="text-red-400" /> Get node by name is depth-first in scene graph, e.g. `modelScene.getObjectByName("rock001");`
- <ant-design-frown-filled class="text-red-400" /> Models as public assets (no versioning for caching, etc.)
- <ant-design-frown-filled class="text-red-400" /> All models are always bundled because the bundler does not know what models are used

</v-clicks>
