<template>
  <li class="opacity-70 cursor-pointer hover:opacity-100 font-medium uppercase spkly-menu-link">
    <NuxtLinkLocale :to="props.to">
      <slot></slot>
    </NuxtLinkLocale>
  </li>
</template>

<script setup lang="ts">
  const props = defineProps(['to'])
</script>

<style scoped>
.spkly-menu-link:has(.router-link-active), .spkly-menu-link:has(.router-link-active) {
  @apply opacity-100 font-bold;
}
</style>