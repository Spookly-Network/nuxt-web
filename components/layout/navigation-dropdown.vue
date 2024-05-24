<template>
  <li class="opacity-70 cursor-pointer hover:opacity-100 font-medium uppercase spkly-menu-dropdown relative" v-click-outside="close">
    <div @click="toggle()">
      <slot></slot>
    </div>
    <div :class="'navigation-dropdown ' + (open ? 'absolute' : 'hidden') " role="menu" aria-orientation="vertical"
         aria-labelledby="menu-button" tabindex="-1">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->

      <template v-for="(link, index) in links" :key="index">
        <NuxtLinkLocale :to="link.to" class="opacity-70 cursor-pointer hover:opacity-100 font-medium uppercase
        block px-4 py-4 spkly-menu-link" role="menuitem" tabindex="-1">
          {{ link.name }}
        </NuxtLinkLocale>
      </template>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(['links'])
let open = ref(false);

function toggle() {
  open.value = !open.value;
}

function close() {
  if (open.value) open.value = false;
}
</script>

<style scoped>
.spkly-menu-dropdown:has(.router-link-active) {
  @apply opacity-100 font-bold;
}

.navigation-dropdown {
  @apply right-0 z-10 mt-2 w-56 origin-top-right
  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-zinc-900;

  .spkly-menu-link {
    @apply hover:bg-zinc-800 rounded-lg;
    &.router-link-active {
      @apply opacity-100 font-bold;
    }
  }
}
</style>