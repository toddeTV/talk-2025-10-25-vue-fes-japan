---
layout: basic
---

# glTF type generation

<v-clicks :depth="2">

- Let `three.js` load the glTF file and then reflect & persist the object (no own file parsing)
- <ant-design-frown-filled class="text-red-400" /> `three.js` is for runtime, especially the loaders (only in browser, not in node runtime)
  - <ant-design-smile-filled class="text-green-400" /> Solution: patch and implement it to run in node dev and pipe model into it (get runtime object in dev)
    - <ant-design-smile-filled class="text-green-400" /> No own parsing
    - <ant-design-smile-filled class="text-green-400" /> Exactly what the user gets when they load the model in their runtime

</v-clicks>

<v-clicks class="mt-2">

- API Design in favor of **usability:** prioritize by usage e.g. `IslandScene.island.beach.rock001`
  - <mdi-code class="text-gray-400" /> Implement by packing the model in one (potentially very large) object
  - <ant-design-smile-filled class="text-green-400" /> Good usability bc user can use the scene graph that mirrors the glTF structure to navigate
  - <ant-design-frown-filled class="text-red-400" /> Larger bundle size due to the one (potentially very large) object
- Generate types out of the runtime object by taking the names of all children
- Store scene graph paths with the child indices linked to the child names
<!-- - Use handlebars to generate files -->

</v-clicks>

<!--

- Problem with patch: we need two GLTFLoaders & a patch would patch both:

  1. Patched for plugin, version fixed, bundled
  2. Original for user, version free, not bundled

  - Solution: use `three-stdlib` (extraction of the `three.js` examples directory)

=========

- API Design in favor of **bundle size:** prioritize by usage e.g. `getRock001(getBeach(getIsland(getIslandScene(model))))`
  - Implement by e.g. `function getSomething(parent) { return parent.children[xxx]; }`
  - :) Unused functions could get tree-shaken
  - :( Not very user friendly
- API Design in favor of **combination**: crawl the user code & generate only used paths as direct pointer
  - :( Crawling user applications? Really?

-->
