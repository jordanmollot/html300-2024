<script setup>
import { ref } from "vue";

const posters = ref([
      { img: '/src/assets/barry-lyndon-poster.jpeg', title: 'Barry Lyndon', grid: 'col-xl-4 col-md-6 col-xs-12', description: 'Barry Lyndon (1975) - Acclaimed adaptation of William Makepeace Thackeray's novel, in which a likeable young Irishman changes into a conniving, manipulative rogue. The protagonist finds himself homeless after taking part in a fake duel and is then captured by a Prussian highwayman, and meets up with a spy, but his fortunes change when he marries a wealthy titled woman in order to secure his future.' },
      { img: '/src/assets/eyes-wide-shut-poster.jpeg', title: 'Eyes Wide Shut', grid: 'col-xl-4 col-md-6 col-xs-12', description: 'Eyes Wide Shut (1999) - After Dr. Bill Hartford's (Tom Cruise) wife, Alice (Nicole Kidman), admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.' },
      { img: '/src/assets/full-metal-jacket-poster.jpeg', title: 'Full Metal Jacket', grid: 'col-xl-4 col-md-12 col-xs-12', description: 'Full Metal Jacket (1987) - Stanley Kubrick's take on the Vietnam War follows smart-aleck Private Davis (Matthew Modine), quickly christened 'Joker' by his foul-mouthed drill sergeant (R. Lee Ermey), and pudgy Private Lawrence (Vincent D'Onofrio), nicknamed 'Gomer Pyle,' as they endure the rigors of basic training. Though Pyle takes a frightening detour, Joker graduates to the Marine Corps and is sent to Vietnam as a journalist, covering -- and eventually participating in -- the bloody Battle of Hué.' },
    ]
)

</script>

<template>
  <main class="main">
      <h1 class="display-1 p-3">Welcome to The Seattle Cinema!</h1>
      <p class="lead px-4 pb-3">Seattle's premiere movie theater</p>
      <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-3">Now Playing</h1>
      <div class="container text-center">
          <p>Hover your mouse over the movie posters for descriptions of the films</p>
          <div class="row">
              <!--Tooltips used to display movie descriptions when hovering over movie posters. Grid used to make the movie posters layout responsive.-->
              <div v-for="poster in posters" :key="poster" :class="poster.grid">
                  <figure>
                      <img :src="poster.img" data-bs-toggle="tooltip" :title="poster.description" class="img-fluid" width="200" :alt="poster.title">
                  </figure>
              </div>  
          </div>
      </div>
      <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-3">Pricing</h1>
      <div class="px-3">
          <p>General Admission: $11</p>
          <p>Student, Child, Military & Senior: $8</p>
      </div>
      <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-2">Hours</h1>
      <div class="px-3">
          <p>Monday through Sunday</p>
          <p>3pm - 11pm</p>
      </div>
  </main>
</template>

<style scoped>

</style>