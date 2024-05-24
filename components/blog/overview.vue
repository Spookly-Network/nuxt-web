<template>
  <div class="row">
    <ContentList :query="query">
      <template v-slot="{ list }">
        <div class="col-12 col-md-6 mb-12" v-for="article in list" :key="article._path">
          <blog-preview :article="article">
          </blog-preview>
        </div>
      </template>
      <template #not-found>
        <div class="col-12">
          <div class="my-[310px]">
            <p class="text-center">
              {{ $t("blog.preview.empty") }}
            </p>
          </div>
        </div>
      </template>
    </ContentList>
  </div>
</template>
<script setup lang="ts">
import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {path: '/blog', sort: [{date: -1}]}
</script>