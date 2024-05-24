<template>
  <div class="container">

    <section>
      <grid-row>
        <div class="col-12 col-lg-6">
          <div class="bg-zinc-900 rounded-lg flex items-center justify-center min-h-[350px] spkly-gamemode-logo-background">
            <div class="h-20">
              <lazy-nuxt-img
                  src="/images/gamemodes/titles/arcade_title.webp"
                  class="max-h-full"
                  alt="Jumpwars logo"
                  loading="lazy"
                  height="80"
                  width="320"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 justify-center items-center flex flex-col text-center pt-5 lg:pt-0">
          <span class="text-neutral-100 text-opacity-50 uppercase font-semibold">{{ $t("gamemodes.content.header.development") }}</span>
          <h1 class="p-0 text-[40px] leading-[60px] font-extrabold">{{ $t("general.arcade") }}</h1>
          <p class="text-neutral-100 text-opacity-70 text-[18px] leading-[26px] max-w-[90%]">
            {{ $t("gamemodes.content.header.arcade") }}
          </p>
        </div>
      </grid-row>
    </section>

    <section>
      <blog-preview-row color="bg-sky-300" :query="query"></blog-preview-row>
    </section>
  </div>
</template>

<script setup lang="ts">
import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {path: '/blog', where: [{category: 'Arcade'}], limit: 2, sort: [{date: -1}]}

const {t} = useI18n();
useSeoMeta({
  title: t("general.arcade"),
  description: t("general.seo.descriptions.arcade"),
})
</script>

<style scoped>
.spkly-gamemode-logo-background {
  //background-blend-mode: overlay;
  //background: url("/assets/images/render/bingo_header_image.png") rgba(30, 30, 30, .15);
  //background-size: cover;
}
</style>