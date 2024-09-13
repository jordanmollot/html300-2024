<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  img: String,
  class: String,
  width: String,
  title: String,
  alt: String,
})

</script>

<template>
  <!--Image Gallery. All the images have responsive sizes and the image layout is responsive. Images are also generated dynamically using variables and a "v-for" loop-->
  <img :src="props.photo" :class="props.class" :width="props.width" :title="props.title" :alt="props.alt">
</template>

<style scoped>

</style>