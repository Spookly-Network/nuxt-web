<template>

  <section class="spkly-home-header mt-0">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 flex align-items-center">
          <div>
            <div class="spkly-header-title text-5xl font-extrabold uppercase
            text-center mt-16
            md:text-left md:mt-0">
              Spookly Network
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="items-end flex pt-20 md:pt-36">
            <lazy-nuxt-img
                src="/images/dino.webp"
                alt="Player with dino skin holding the spookly ghost"
                width="636"
                height="509"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <!-- Gamemodes-->
    <section>
      <div class="row">
        <!-- Bingo -->
        <div class="col-12 col-md-6 col-lg-4 mb-5 lg:mb-0">
          <NuxtLinkLocale to="/gamemode/bingo">
            <div class="bg-zinc-900 hover:bg-zinc-950 transition-all
        cursor-pointer p-5 rounded-lg min-h-56 flex items-center">
              <span class="card-title font-bold text-5xl uppercase">{{ $t("general.bingo") }}</span>
            </div>
          </NuxtLinkLocale>
        </div>

        <!-- Jumpwars -->
        <div class="col-12 col-md-6 col-lg-4 mb-5 lg:mb-0">
          <NuxtLinkLocale to="/gamemode/jumpwars">
            <div class="bg-zinc-900 hover:bg-zinc-950 transition-all
        cursor-pointer p-5 rounded-lg min-h-56 flex items-center">
              <span class="card-title font-bold text-5xl uppercase">{{ $t("general.jumpwars") }}</span>
            </div>
          </NuxtLinkLocale>
        </div>

        <!-- Arcade -->
        <div class="col-12 col-md-6 col-lg-4 mb-5 lg:mb-0">
          <NuxtLinkLocale to="/gamemode/arcade">
            <div class="bg-zinc-900 hover:bg-zinc-950 transition-all
        cursor-pointer p-5 rounded-lg min-h-56 flex items-center">
              <span class="card-title font-bold text-5xl uppercase">{{ $t("general.arcade") }}</span>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- Latest blog post -->
    <section>
      <div class="row">
        <div class="col-12">
          <h2 class="uppercase font-bold text-center text-4xl mb-12">{{ $t("homepage.content.headlines.news") }}</h2>
        </div>

        <div class="col-12 col-lg-6">
          <lazy-nuxt-img :src="data?.image" alt="" class="rounded-lg w-full" loading="lazy"/>
        </div>
        <div class="col-12 col-lg-6 flex flex-col gap-2 justify-center pt-5 lg:pt-0">
          <spkly-headline :type="2">{{ data?.title }}</spkly-headline>
          <p>{{ data?.description }}</p>
          <NuxtLinkLocale :to="data?._path">
            <spkly-button>{{ $t("homepage.content.latest.read") }}</spkly-button>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- Discord section -->
    <section>
      <div class="row">
        <div class="col-12">
          <div class="bg-[#5865F2] rounded-lg p-5 lg:p-10 flex justify-between items-center flex-col lg:flex-row">
            <div class="text-[40px] leading-[60px] font-extrabold flex items-center gap-2 md:gap-5 flex-col md:flex-row">
              <i class="fa-brands fa-discord"></i>
              {{ $t("homepage.content.discord.talk") }}
            </div>
            <div>
              <nuxt-link target="_blank" to="https://discord.gg/vncmrcudY5">
                <spkly-button color="bg-[#111111]">
                  {{ $t("homepage.content.discord.cta") }}
                </spkly-button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const {data, pending} = await useAsyncData('home', () => queryContent()
    .sort({ date: -1 })
    .findOne());
let newsPost: any;
useHead({
  title: null
})
</script>

<style scoped>
.spkly-home-header {
  background-size: cover;
  background: rgba(39, 39, 42, .5) url("/images/backgrounds/home-banner.webp") fixed bottom center;
  background-blend-mode: overlay;
}

/*
.spkly-bingo-background {
  background: rgba(24, 24, 27) url("../assets/images/render/bingo_render.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}

.spkly-jumpwars-background {
  background: rgba(24, 24, 27) url("../assets/images/render/jumpwars_render.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
*/
</style>