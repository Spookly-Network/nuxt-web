<template>
  <div class="navigation-wrapper bg-zinc-900">
    <div class="container navigation">

      <div class="navigation-section-logo">
        <div class="font-extrabold text-3xl logo">
          <NuxtLinkLocale to="/">
            SPOOKLY
          </NuxtLinkLocale>
        </div>
      </div>

      <div class="navigation-section-links">
        <ul class="flex gap-5 items-center h-full">
          <navigation-link to="/">{{ $t("general.navigation.general.home") }}</navigation-link>
          <navigation-link to="/blog">{{ $t("general.navigation.general.blog") }}</navigation-link>
          <layout-navigation-dropdown :links="gamemodes">{{
              $t("general.navigation.general.gamemodes")
            }}
          </layout-navigation-dropdown>
          <spkly-button v-if="false">{{ $t("general.navigation.general.store") }}</spkly-button>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import NavigationLink from "~/components/layout/navigation-link.vue";
import SpklyButton from "~/components/spkly-button.vue";

const {t} = useI18n()

const gamemodes = [
  {
    name: t("general.navigation.gamemodes.bingo"),
    to: "/gamemode/bingo",
  },
  {
    name: t("general.navigation.gamemodes.jumpwars"),
    to: "/gamemode/jumpwars",
  },
  {
    name: t("general.navigation.gamemodes.arcade"),
    to: "/gamemode/arcade",
  },
  {
    name: t("general.navigation.gamemodes.realms"),
    to: "/gamemode/realms",
  }
]
</script>

<style scoped>
.logo {
  background: linear-gradient(to right, #FF5555, #FFAA00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}

.navigation {
  @apply flex justify-between py-5;

  .navigation-section-logo {

  }

  .navigation-section-links {
    @apply hidden md:block;
  }
}
</style>