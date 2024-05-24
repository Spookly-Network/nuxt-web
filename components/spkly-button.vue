<template>
  <button :class="'spkly-button ' + color +' px-9 py-1.5 rounded-md font-semibold uppercase'">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    default: 'bg-blue-600',
  }
});
</script>

<style scoped>
.spkly-button {
  @apply py-2 px-8;
}
</style>