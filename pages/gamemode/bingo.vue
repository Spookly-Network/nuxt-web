<template>
  <div class="container">

    <section>
      <grid-row>
        <div class="col-12 col-lg-6">
          <div
              class="bg-zinc-900 rounded-lg flex items-center justify-center min-h-[350px] spkly-gamemode-logo-background">
            <div class="h-20">
              <lazy-nuxt-img
                  src="/images/gamemodes/titles/bingo_title.webp"
                  class="max-h-full"
                  alt="Jumpwars logo"
                  loading="lazy"
                  height="80"
                  width="246"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 justify-center items-center flex flex-col text-center pt-5 lg:pt-0">
          <span class="text-neutral-100 text-opacity-50 uppercase font-semibold">{{
              $t("gamemodes.content.header.gamemode")
            }}</span>
          <h1 class="p-0 text-[40px] leading-[60px] font-extrabold">{{ $t("general.bingo") }}</h1>
          <p class="text-neutral-100 text-opacity-70 text-[18px] leading-[26px] max-w-[90%]">
            {{ $t("gamemodes.content.header.bingo") }}
          </p>
        </div>
      </grid-row>
    </section>

    <section>
      <grid-row class="my-28">
        <div class="col-12">
          <spkly-headline :type="2" class="text-center mb-8">
            {{ $t("gamemodes.content.modes.title") }}
          </spkly-headline>
        </div>

        <div class="col-12 col-md-6 mb-6">
          <div class="rounded-lg h-60 flex items-center relative">
            <lazy-nuxt-img src="/images/backgrounds/blur/jungle.jpg"
                           alt=""
                           class="min-h-full min-w-full max-h-full max-w-full object-cover rounded-lg"
                           loading="lazy"
            />
            <h2 class="image-overlay-title text-nowrap">{{ $t("gamemodes.names.bingo-classic") }}</h2>
          </div>

          <p class="text-neutral-100 text-opacity-70 text-[18px] leading-[26px] max-w-[90%] pt-5">
            {{ $t("gamemodes.content.modes.bingo-classic") }}
          </p>
        </div>

        <div class="col-12 col-md-6 mb-6">
          <div class="rounded-lg h-60 flex items-center relative">
            <lazy-nuxt-img src="/images/backgrounds/blur/village.jpg"
                           alt=""
                           class="min-h-full min-w-full max-h-full max-w-full object-cover rounded-lg"
                           loading="lazy"
            />
            <h2 class="image-overlay-title text-nowrap">{{ $t("gamemodes.names.bingo-quick") }}</h2>
          </div>

          <p class="text-neutral-100 text-opacity-70 text-[18px] leading-[26px] max-w-[90%] pt-5">
            {{ $t("gamemodes.content.modes.bingo-quick") }}
          </p>
        </div>
      </grid-row>
    </section>

    <section>
      <blog-preview-row color="bg-lime-300" :query="query"></blog-preview-row>
    </section>
  </div>
</template>

<script setup lang="ts">
import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {path: '/blog', where: [{category: 'Bingo'}], limit: 2, sort: [{date: -1}]}
const {t} = useI18n();
useSeoMeta({
  title: t("general.bingo"),
  description: t("general.seo.descriptions.bingo"),
})
</script>

<style scoped>
.spkly-gamemode-logo-background {
  background-blend-mode: overlay;
  background: url("/images/gamemodes/bingo_header.webp") rgba(30, 30, 30, .15);
  background-size: cover;
}

.image-overlay-title {
  @apply absolute font-extrabold uppercase drop-shadow-2xl;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 40px;
  line-height: 60px;
}
</style>