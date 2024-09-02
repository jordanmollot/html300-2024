<script setup>
import { ref } from "vue";

const name = ref("rental");
</script>

<template>
  <div class="rental">
    <h1>Rental</h1>
    <h2>Welcome to the {{ name }} Page!</h2>
    <p>This is a basic rental component.</p>
  </div>
</template>

<style scoped>
.rental {
  text-align: center;
  margin-top: 20px;
}
</style>