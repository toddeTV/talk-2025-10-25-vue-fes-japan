# talk-2025-10-25-vue-fes-japan

## project overview

This project contains the slides for my talk titled `Playing with Vue in 3D` on 2025-10-25 at the [Vue Fes Japan](https://vuefes.jp/2025/en/) 2025 conference in Tokyo.

The presented, repository and documentation language is `English`.

You can find pre deployed slides here, so that you can view them without the need of pulling the code and setting the project up yourself:<br>
[https://talk-2025-10-25-vue-fes-japan.vercel.app/](https://talk-2025-10-25-vue-fes-japan.vercel.app/)

## dev

### initial setup

#### needed services

For this presentation to fully work you need the following external resources. You can also disable them in the `.env` if you like not to use these parts of the presentation, see comments in `.env` file.

- A running copy of [zlig](https://github.com/toddeTV/zlig) as a Proof of Concept for a fully browser based 3D game.
- A running copy of [stage-flow-tools](https://github.com/toddeTV/stage-flow-tools) for live questions and interactions for the audience.<br>
  Populate Stage Flow Tools with the questions from `assets/stage-flow-tools/data/predefined-questions.json` to get the right polls for this talk. See the project documentation for help.

#### project setup

1. execute a `git pull`
2. open project in VSCode
3. When working in VSCode, install the recommended extensions/ plugins listed in `.vscode/extensions.json` and enable them
4. Duplicate `.env.example` as `.env` and set the environment variables as you like.
5. Install dependencies: `pnpm i --frozen-lockfile --prefer-offline`.
6. Start dev server with `pnpm dev` (only localhost) or `pnpm dev:network` (exposed to the network).
7. Happy coding <3

### lint and prettier

This project uses lint also for formatting. Read
[why Prettier is not used for every file type](https://antfu.me/posts/why-not-prettier) by antfu.

This project uses [antfu/eslint-config](https://github.com/antfu/eslint-config) for eslint most of the files.

Keep in mind that the plugin names are renamed, see
[Plugins Rename](https://github.com/antfu/eslint-config?tab=readme-ov-file#plugins-renaming), e.g.:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

### Design

#### used icon collections

This project uses the following icon collections in descending order, try sticking to them and use from top to bottom.
Tipp: Favorite them and use the search over all item collections at once: https://icon-sets.iconify.design/?list=favorite

| full name               | shorthand      | license                                                         | note                        |
| ----------------------- | -------------- | --------------------------------------------------------------- | --------------------------- |
| `Material Design Icons` | `mdi`          | Apache 2.0 (commercial use is allowed, no attribution required) |                             |
| `Simple Icons`          | `simple-icons` | CC0 1.0                                                         | Monocolor logos, many.      |
| `SVG Logos`             | `logos`        | CC0 1.0                                                         | Colored logos, not so many. |
| `Ant Design Icons`      | `ant-design`   | MIT                                                             |                             |

## prod

Will use the build command out of `/package.json`.<br>
Depends on where you like to deploy.

## Contribution & Attribution

### Project Contributors

<a href="https://github.com/toddeTV/talk-2025-10-25-vue-fes-japan/graphs/contributors">
<img src="https://contrib.rocks/image?repo=toddeTV/talk-2025-10-25-vue-fes-japan" />
</a>

### Current Core Team Members

- [Thorsten Seyschab](https://todde.tv) as Project Founder & Lead.

### Acknowledgments

**Special Thanks:**<br>
_(People who provided valuable help on specific topics or issues)_

- \[currently none\]

**Helpful Projects:**<br>
_(Projects that provided valuable inspiration or resources.)_

- My own talk titled `Playing with 3D on the Web & Beyond` that was held on 2025-04-08 at the [Dev Day](https://www.devday.de/) 2025 conference in Dresden was the foundation of this project. See the project code here: [https://github.com/toddeTV/talk-2025-04-08-dev-day-conference](https://github.com/toddeTV/talk-2025-04-08-dev-day-conference)

**Additional Tools:**<br>
_(excluding those listed in `./package.json`)_

- [Slidev](https://github.com/slidevjs/slidev) used for creating the slides of the talk.
- [excalidraw](https://excalidraw.com/) was used for sketching & drawing images.

**Assets & Materials Used:**<br>
_(including images & 3D models; mostly only those requiring attribution)_

- Image `thorsten-seyschab.jpg` by [Franziska Kestel](https://franziskakestel.de/).
- Image `WebGL.png` from [https://en.m.wikipedia.org/wiki/File:WebGL_Logo.svg](https://en.m.wikipedia.org/wiki/File:WebGL_Logo.svg), date 2025-06-04.
- Image `ThreeJS.png` from [https://discourse.threejs.org/t/three-js-svg-logo/21835](https://discourse.threejs.org/t/three-js-svg-logo/21835), date 2025-06-04.
- Image `supported-build-tools-from-unplugin.unjs.io.png` from [https://unplugin.unjs.io/](https://unplugin.unjs.io/), date 2025-06-04.
- Image `gltf-type-toolkit-github-screenshot.png` from [https://github.com/toddeTV/gltf-type-toolkit](https://github.com/toddeTV/gltf-type-toolkit), date 2025-01-29.
- Demo of Website [https://zlig.net](https://zlig.net).
- 3D asset(s), Internally identified with ID `18`:
  - Name: `Train Kit`
  - Cost: free
  - License: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) (commercial use allowed, no credits needed)
  - Author: [Kenney](https://kenney.nl/)
  - Downloaded:
    - Date: 2025-03-04
    - From: [kenney](https://kenney.nl/assets/train-kit)

## License

Copyright (c) 2025-present, [Thorsten Seyschab](https://todde.tv)

This project, including original code and models, is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)). Under this license, others are allowed to remix, adapt, and build upon this work non-commercially, provided they credit the project founder and license any derivative works under the same terms.

Please note that this license applies only to the original content authored by the project’s creators. Third-party libraries, assets, 3D models, and other materials utilized in this project are listed under "Attribution/ Contribution" above and remain the property of their original creators, licensed under their respective terms.

The project founder reserves the right to modify the terms of this license or to offer different licensing arrangements for specific use cases.

For the full license text, please see the [LICENSE](./LICENSE) file.

### Need a Different License?

If you are interested in discussing a different licensing arrangement for individual use cases, please feel free to reach out. Custom licensing may be available, but it is not guaranteed.
