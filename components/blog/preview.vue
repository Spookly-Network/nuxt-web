<template>
  <div class="blog-article">
    <nuxt-link :to="article._path">
      <figure>
        <img
            :src="article.image"
            loading="lazy"
        />
      </figure>
      <div class="blog-article-content">
        <h2>{{ article.title }}</h2>
        <div class="meta font-medium">
          <span v-html="article.category" :class="'font-semibold ' + getCategoryColor(article.category)"></span>
          <span class="px-2">-</span>
          <time v-html="article.date"></time>
        </div>
        <p v-if="!small">{{ article.description }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['article', 'small']);

function getCategoryColor(name: String) {
  switch (name) {
    case 'General':
      return 'category-red';
  }
}
</script>

<style scoped>
.blog-article {
  figure {
    img {
      @apply rounded-lg object-cover max-h-[500px];
      max-height: 100%;
      max-width: 100%;
    }
  }

  .blog-article-content {
    h2 {
      @apply mt-5 mb-2 font-semibold;
      font-size: 20px;
      line-height: 30px;
    }

    .meta {
      @apply mb-2;
      font-size: 16px;
      line-height: 24px;

      .category-red {
        color: rgba(255, 85, 85);
      }
    }

    p {
      @apply mt-0;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;

      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>