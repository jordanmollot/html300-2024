<script setup>
import { ref } from "vue";

const name = ref("showtimes");
</script>

<template>
  <div class="showtimes">
    <h1>Showtimes</h1>
    <h2>Welcome to the {{ name }} Page!</h2>
    <p>This is a basic showtimes component.</p>
  </div>
</template>

<style scoped>
.showtimes {
  text-align: center;
  margin-top: 20px;
}
</style>