<script setup>
import { ref, computed } from "vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Showtimes from "./components/Showtimes.vue";
import Rental from "./components/Rental.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

const routes = {
  "/": Home,
  "/about": About,    
  "/showtimes": Showtimes,
  "/rental": Rental,


};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <!-- header component and slot used to for header -->
  <HeaderComponent>
    <template v-slot:header>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning p-4">
        <a class="navbar-brand" href="index.html">The Seattle Cinema</a>
        <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/showtimes">Showtimes</a>
                </li>                        
                <li class="nav-item">
                    <a class="nav-link" href="#/rental">Rental</a>
                </li>
            </ul>
        </div>
      </nav>
    </template>  
  </HeaderComponent>

  <component :is="currentView" />
  <footer class="p-4 bg-warning">The Seattle Cinema, copyright 2024</footer>
</template>

<style scoped>

</style>