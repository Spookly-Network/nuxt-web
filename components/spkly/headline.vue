<template>
  <template v-if="props.type == 1">
    <h1 class="headline text-5xl"><slot></slot></h1>
  </template>
  <template v-else-if="props.type == 2">
    <h2 class="headline text-4xl"><slot></slot></h2>
  </template>
  <template v-else-if="props.type == 3">
    <h3 class="headline text-3xl"><slot></slot></h3>
  </template>
  <template v-else-if="props.type == 4">
    <h4 class="headline text-2xl"><slot></slot></h4>
  </template>
  <template v-else-if="props.type == 5">
    <h5 class="headline text-xl"><slot></slot></h5>
  </template>
  <template v-else-if="props.type == 6">
    <h6 class="headline text-lg"><slot></slot></h6>
  </template>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    default: 1,
    type: Number,
    validator(value: number, props) {
      let validValues = [1,2,3,4,5,6];
      return validValues.includes(value);
    },
    required: true
  }
});
</script>

<style scoped>
.headline {
  @apply uppercase font-extrabold;
}
</style>