<template>
  <div class="dark">
    <layout-navigation></layout-navigation>
    <div class="content">
      <nuxt-page></nuxt-page>
    </div>
    <layout-spkly-footer></layout-spkly-footer>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()

useHead({
  titleTemplate: (title?: string) => !title ? `${t('general.seo.default-title')} - Spookly` : `${title} - Spookly`,
});
</script>