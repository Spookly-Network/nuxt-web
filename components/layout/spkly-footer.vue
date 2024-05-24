<template>

  <div class="footer-wrapper bg-zinc-900">
    <div class="container footer">
      <div class="footer-section-socials">
        <div>
          <div class="font-extrabold text-[40px] leading-[60px]">SPOOKLY.NET</div>
          <div class="flex gap-4">
            <div>
              <nuxt-link aria-label="Discord" target="_blank" to="https://discord.gg/vncmrcudY5">
                <i class="fa-brands fa-discord"></i>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link aria-label="Instagram" target="_blank" to="https://www.instagram.com/spooklynet/">
                <i class="fa-brands fa-instagram"></i>
              </nuxt-link>
            </div>
            <div>
              <i class="fa-brands fa-threads"></i>
            </div>
            <div>
              <nuxt-link aria-label="X.com" target="_blank" to="https://x.com/zayonde">
                <i class="fa-brands fa-x-twitter"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-section-links flex gap-12 flex-col lg:flex-row">
        <div class="flex flex-col gap-1.5">
          <span class="font-bold uppercase">{{ $t("general.footer.title.language") }}</span>
          <span v-for="locale in availableLocales" :key="locale.code">
            <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
          </span>
        </div>
        <div class="flex flex-col gap-1.5">
          <span class="font-bold uppercase">{{$t("general.footer.title.links")}}</span>
          <span><nuxt-link target="_blank" to="https://discord.gg/vncmrcudY5">{{$t("general.footer.links.discord")}}</nuxt-link></span>
        </div>
        <div class="flex flex-col gap-1.5">
          <span class="font-bold uppercase">{{$t("general.footer.title.legal")}}</span>
          <span><nuxt-link to="/imprint">{{$t("general.footer.legal.imprint")}}</nuxt-link></span>
          <span><nuxt-link to="/privacy">{{$t("general.footer.legal.privacy")}}</nuxt-link></span>
        </div>
      </div>
    </div>
    <p class="text-center text-opacity-40 text-neutral-100 italic font-normal text-sm">Spookly.net is in no way affiliated with or endorsed by Mojang, AB or Microsoft.</p>
  </div>

  <!--  <div class="bg-zinc-900 justify-center flex">-->
  <!--    <div class="container py-16">-->
  <!--      <div class="columns-2 flex justify-between">-->


  <!--        <div class="flex gap-20">-->

  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<style scoped>
.footer {
  @apply flex flex-col gap-12 lg:flex-row justify-between py-10 lg:py-20;

  i {
    font-size: 24px;
  }
}
</style>