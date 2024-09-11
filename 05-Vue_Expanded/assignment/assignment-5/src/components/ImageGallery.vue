<script setup>
import { ref } from "vue";

const photos = ref([
      { img: '/src/assets/front-door.jpg', title: 'exterior photo of the front door entrance to Seattle Cinema' },
      { img: '/src/assets/interior2.jpg', title: 'interior photo of the theater showing the seats from the front of the auditorium' },
      { img: '/src/assets/interior.jpg', title: 'interior photo of the theater showing the movie screen from the back of the auditorium' },
      { img: '/src/assets/concessions.png', title: 'interior photo of the concessions stand featuring glowing neon lights' },
    ]
)

</script>

<template>
  <!--Image Gallery. All the images have responsive sizes and the image layout is responsive. Images are also generated dynamically using variables and a "v-for" loop-->
  <div class="container text-center">
    <div class="row">
      <div class="col-xl-6 col-md-6 col-xs-12" v-for="photo in photos" :key="photo">
        <figure>
          <img :src="photo.img" class="img-fluid border border-black" width="640" :alt="photo.title">
        </figure>
      </div>            
    </div>  
  </div>    
</template>

<style scoped>

</style>