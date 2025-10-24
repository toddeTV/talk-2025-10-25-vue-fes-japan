---
layout: cover
leftOrientation: center
---

<div class="absolute top-65">
    <!-- <h1 class="!text-[2.8rem]"> -->
    <h1 class="!text-5xl">
        Playing with Vue in 3D
    </h1>
    <div>
        with <span class="color-[#26ab7a]">Thorsten Seyschab</span>
    </div>
    <ul class="relative mt-5" v-click="1">
        <li><mdi-message-bubble-outline class="baseColor mr-2" /> IT-Consultant and Web Engineer</li>
        <li><mdi-worker-outline class="baseColor mr-2"/> Fullstack developer, Self-Employed</li>
        <li><mdi-school-outline class="baseColor mr-2" /> Master of Science in Computer Science</li>
    </ul>
    <!-- <li>based in Germany</li> -->
</div>

<div
    class="absolute bottom-20 right-16 px-5 py-2 whitespace-nowrap flex flex-row gap-4"
    v-mark="{ at: 0, color: '#26ab7a', type: 'box' }"
    v-click="0"
>
    <div class="flex flex-col">
        <div class="flex">
            <mdi-web class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://todde.tv/">todde.tv</MyLink>
        </div>
        <div class="flex">
            <mdi-github class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://github.com/toddeTV">toddeTV</MyLink>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="flex">
            <simple-icons-x class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://x.com/toddeTV">toddeTV</MyLink>
        </div>
        <div class="flex">
            <simple-icons-twitch class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://www.twitch.tv/toddeTV">toddeTV</MyLink>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="flex">
            <simple-icons-bluesky class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://bsky.app/profile/todde.tv">todde.tv</MyLink>
        </div>
        <div class="flex">
            <mdi-linkedin class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://www.linkedin.com/in/toddetv/">toddeTV</MyLink>
        </div>
        <!-- TODO wrong discord URI? -->
        <!-- <div class="flex">
            <mdi-discord class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://discordapp.com/users/todde.tv/">todde.tv</MyLink>
        </div> -->
    </div>
</div>

<!-- <div v-click="[0,1]" class="p-3 flex flex-col gap-4 absolute left-50 bottom-19 bg-white rounded-md border z-10 justify-center items-center">
    Join for live interactions 🤗
    <QRCode content="https://c1p.eu/facv" :size="210" />
    <div class="w-full text-md whitespace-nowrap flex flex-row gap-2 justify-center">
        <mdi-web class="baseColor" />
        <MyLink to="https://c1p.eu/facv">https://c1p.eu/facv</MyLink>
    </div>
</div> -->

<div class="absolute top-20 right-60 text-[#ab2657]">
    Join for live interactions 🤗
</div>
<Arrow
    v-bind="{ x1:800, y1:92, x2:860, y2:80, color: '#ab2657' }"
/>

<!-- dummy only to force the click count on this slide manually -->
<!-- <div v-click="2" /> -->

<!--
- You can find me online
- My website is always on the bottom left
- The slides are public - link at the end
-->
