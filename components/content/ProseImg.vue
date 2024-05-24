<template>
  <figure>
    <component
        :is="imgComponent"
        :src="refinedSrc"
        :alt="alt"
        :width="width"
        :height="height"
        loading="lazy"
    />
    <figcaption>
      <span v-html="alt"></span>
    </figcaption>
  </figure>

</template>

<script setup lang="ts">
import {withTrailingSlash, withLeadingSlash, joinURL} from 'ufo'
import {useRuntimeConfig, computed, resolveComponent} from '#imports'

const imgComponent = useRuntimeConfig().public.mdc.useNuxtImage ? resolveComponent('NuxtImg') : 'img'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>

<style scoped>
figure {
  @apply mb-6;
  margin-top: 32px;

  img {
    @apply rounded-lg object-cover max-h-[500px];
    max-height: 100%;
    max-width: 100%;
  }

  figcaption {
    @apply text-neutral-100 text-opacity-50 mt-4;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>