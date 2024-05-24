<template>
  <section>
    <main class="container blog">
      <ContentDoc>
        <template #not-found>
          <blog-overview></blog-overview>
        </template>
        <template v-slot="{ doc }">
          <div class="row header mb-2">
            <div class="col-12 col-md-10 offset-md-1 mb-16">
              <div class="image-container">
                <img :src="doc.image"
                     alt=""
                     class="w-full h-full object-cover rounded-lg max-h-[500px]"
                >
              </div>
            </div>
            <div class="col-12 col-md-8 offset-md-2">
              <h1 v-html="doc.title"></h1>
              <div class="meta font-medium">
                <span v-html="doc.category" :class="'font-semibold ' + getCategoryColor(doc.category)"></span>
                <span class="px-2">-</span>
                <time v-html="doc.date"></time>
              </div>
            </div>
          </div>
          <div class="row content">
            <div class="col-12 col-md-8 offset-md-2">
              <ContentRenderer :value="doc"/>

              <p>from <span v-html="doc.author"></span></p>
            </div>
          </div>
        </template>
      </ContentDoc>
    </main>
  </section>
</template>
<script setup lang="ts">
function getCategoryColor(name: String) {
  switch (name) {
    case 'General':
      return 'category-red';
  }
}
</script>
<style>
.blog {
  .meta {
    font-size: 16px;
    line-height: 24px;

    .category-red {
      color: rgba(255, 85, 85);
    }
  }

  h1 {
    @apply text-neutral-100 font-extrabold uppercase p-0;
    font-size: 40px;
    line-height: 60px;
  }

  h2 {
    @apply text-neutral-100 font-extrabold mt-14 mb-8 p-0;
    font-size: 30px;
    line-height: 40px;
  }

  h3 {
    @apply text-neutral-100 font-extrabold mt-10 mb-4 p-0;
    font-size: 24px;
    line-height: 36px;
  }

  p {
    @apply text-neutral-100 text-opacity-70 my-6 font-normal;
    font-size: 18px;
    line-height: 32px;
  }

  p:has(h2+*) {
    @apply mt-0;
  }

  ul {
    @apply list-disc pl-7;
  }

  li {
    @apply text-neutral-100 text-opacity-70 my-3 pl-2 font-normal;
    font-size: 18px;
    line-height: 32px;
  }

  li::marker {
    @apply text-zinc-700;
  }

  .image-container {
    background-color: #1E1E1E;
  }
}
</style>