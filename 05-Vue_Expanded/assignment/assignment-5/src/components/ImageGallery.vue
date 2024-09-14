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
  <img :src="props.photo" :class="props.class" :width="props.width" :title="props.title" :alt="props.alt">
</template>

<style scoped>

</style>