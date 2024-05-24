<template>
  <div class="row">
    <div class="col-12">
      <div :class="color + ' text-neutral-950 rounded-lg p-5 md:p-10'">
        <div class="row">
          <div class="col-12 text-center pb-8">
            <h3 class="text-[24px] leading-[32px] font-semibold">{{ $t("blog.preview.title") }}</h3>
            <p class="leading-[24px] font-normal">{{ $t("blog.preview.subtitle") }}</p>
          </div>

          <ContentList :query="query">
            <template v-slot="{ list }">
              <div class="col-12 col-lg-6" v-for="article in list" :key="article._path">
                <blog-preview :article="article" :small="true">
                </blog-preview>
              </div>
            </template>
            <template #not-found>
              <div class="col-12 text-center">
                {{ $t("blog.preview.empty") }}
              </div>
            </template>
          </ContentList>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['query', 'color'])
</script>