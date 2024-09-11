<script setup>
import { ref } from "vue";
import { ImageGallery } from "/ImageGallery.vue";
</script>

<template>
  <main class="main">
      <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-2">About the theater</h1>
      <div class="p-3">
          <p class="lead">The Seattle Cinema is the longest-running independent cinema in the city, and has become a landmark of the film community.</p>
          <p>Opened in 1970 by Randy Findley in a converted dentist’s office, the cinema became the city’s first arthouse, showcasing foreign and revival films. The cinema was such a success it led to Randy’s opening the Seven Gables Cinema and eventually starting the local Seven Gables Theatres chain, which inevitably got swallowed by the national Landmark Cinema Corporation. The Seattle Cinema was never part of the Seven Gables chain; it has remained a popular independent venue.</p>
          <p>A nonprofit film arts organization, the Northwest Film Forum, saved the theater from closure in 1997, remodeled it, and revitalized interest in the venerable institution. Since 2004, a strong group of dedicated staff and volunteers focus attention and energy on continuing the tradition of this treasured cinema. Over the years, literally hundreds of cinema classics, rarities and truly independent cinema from around the world have been presented in the charming confines of The Seattle Cinema.</p>
      </div>
  </main>
  <!--Image Gallery imported from ImageGallery.vue-->
  <section>
    <ImageGallery />   
  </section>
</template>

<style scoped>

</style>