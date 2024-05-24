<template>
  <div class="container">

    <section>
      <grid-row>
        <div class="col-12 col-lg-6">
          <div
              class="bg-zinc-900 rounded-lg flex items-center justify-center min-h-[350px] spkly-gamemode-logo-background">
            <div class="h-20">
              <lazy-nuxt-img
                  src="/images/gamemodes/titles/realms_title.webp"
                  class="max-h-full"
                  alt="Jumpwars logo"
                  loading="lazy"
                  height="80"
                  width="334"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 justify-center items-center flex flex-col text-center pt-5 lg:pt-0">
          <span class="text-neutral-100 text-opacity-50 uppercase font-semibold">{{ $t("gamemodes.content.header.development") }}</span>
          <h1 class="p-0 text-[40px] leading-[60px] font-extrabold">{{ $t("general.realms") }}</h1>
          <p class="text-neutral-100 text-opacity-70 text-[18px] leading-[26px] max-w-[90%]">
            {{ $t("gamemodes.content.header.realms") }}
          </p>
        </div>
      </grid-row>
    </section>

    <section>
      <blog-preview-row color="bg-violet-300" :query="query"></blog-preview-row>
    </section>
  </div>
</template>

<script setup lang="ts">
import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {path: '/blog', where: [{category: 'Realms'}], limit: 2, sort: [{date: -1}]}

const {t} = useI18n();
useSeoMeta({
  title: t("general.realms"),
  description: t("general.seo.descriptions.realms"),
})
</script>

<style scoped>
</style>