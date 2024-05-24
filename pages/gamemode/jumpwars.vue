<template>
  <div class="container">
    <section>
      <grid-row>
        <div class="col-12 col-lg-6">
          <div
              class="bg-zinc-900 rounded-lg flex items-center justify-center min-h-[350px] spkly-gamemode-logo-background">
            <div class="h-20">
              <lazy-nuxt-img
                  src="/images/gamemodes/titles/jumpwars_title.webp"
                  class="max-h-full"
                  alt="Jumpwars logo"
                  loading="lazy"
                  height="80"
                  width="466"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 justify-center items-center flex flex-col text-center pt-5 lg:pt-0">
          <span class="text-neutral-100 text-opacity-50 uppercase font-semibold">{{
              $t("gamemodes.content.header.gamemode")
            }}</span>
          <h1 class="p-0 text-[40px] leading-[60px] font-extrabold">{{ $t("general.jumpwars") }}</h1>
          <p class="text-neutral-100 text-opacity-70 text-[18px] leading-[26px] max-w-[90%]">
            {{ $t("gamemodes.content.header.jumpwars") }}
          </p>
        </div>
      </grid-row>
    </section>

    <section>
      <grid-row>
        <div class="col-12">
          <spkly-headline :type="2" class="text-center mb-8">
            {{ $t("gamemodes.content.maps.title") }}
          </spkly-headline>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mb-6">
          <div class="cursor-pointer rounded-lg h-60 flex items-center">
            <lazy-nuxt-img src="/images/maps/acent.webp"
                           class="min-h-full min-w-full max-h-full max-w-full object-cover rounded-lg"
                           alt=""
                           loading="lazy"
                           height="1080"
                           width="1920"
            />
          </div>
          <span class="mt-1 opacity-50 size-5 font-semibold uppercase">
          {{ $t("gamemodes.content.maps.acent") }}
        </span>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mb-6">
          <div class="cursor-pointer rounded-lg h-60 flex items-center">
            <lazy-nuxt-img src="/images/maps/cherry.webp"
                           class="min-h-full min-w-full max-h-full max-w-full object-cover rounded-lg"
                           alt=""
                           loading="lazy"
                           height="1080"
                           width="1920"
            />
          </div>
          <span class="mt-1 opacity-50 size-5 font-semibold uppercase">
          {{ $t("gamemodes.content.maps.cherry") }}
        </span>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mb-6">
          <div class="cursor-pointer rounded-lg h-60 flex items-center">
            <lazy-nuxt-img src="/images/maps/haven.webp"
                           class="min-h-full min-w-full max-h-full max-w-full object-cover rounded-lg"
                           alt=""
                           loading="lazy"
                           height="1080"
                           width="1920"
            />
          </div>
          <span class="mt-1 opacity-50 size-5 font-semibold uppercase">
          {{ $t("gamemodes.content.maps.haven") }}
        </span>
        </div>
      </grid-row>
    </section>

    <section>
      <blog-preview-row color="bg-fuzzy-wuzzy-brown-300" :query="query"></blog-preview-row>
    </section>
  </div>
</template>

<script setup lang="ts">
import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = {path: '/blog', where: [{category: 'Jumpwars'}], limit: 2, sort: [{date: -1}]}

const {t} = useI18n();
useSeoMeta({
  title: t("general.jumpwars"),
  description: t("general.seo.descriptions.jumpwars"),
})
</script>

<style scoped>
.spkly-gamemode-logo-background {
  background-blend-mode: overlay;
  background: url("/images/gamemodes/jumpwars.webp") rgba(30, 30, 30, .15);
  background-size: cover;
}
</style>