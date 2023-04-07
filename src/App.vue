<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import JsonServer from './components/test/JsonServer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <JsonServer />
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/lyrics">Lyrics</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
