<template>
  <div class="flex justify-center">
    <div class="container my-40">
      <grid-row>
        <div class="col-span-12">
          <spkly-headline :type="1">Impressum</spkly-headline>
          <spkly-headline :type="2">Angaben gemäß § 5 TMG</spkly-headline>
          <p>Niklas Ehlen<br> Moorblick 15<br> 21614 Buxtehude</p>
          <spkly-headline :type="2">Kontakt</spkly-headline>
          <p>Telefon: +49 171 3382434<br> E-Mail: support@spookly.net</p>
          <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
        </div>
      </grid-row>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
h1 {
  @apply text-xl font-bold uppercase pt-5
  text-opacity-90 text-neutral-100;
}

h2 {
  @apply text-2xl font-bold uppercase pt-5
  text-opacity-90 text-neutral-100;
}
</style>