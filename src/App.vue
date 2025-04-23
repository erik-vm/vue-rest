<script setup lang="ts">
import Header from './navigation/Header.vue';
import Footer from './navigation/Footer.vue';
</script>

<template>
  <Header></Header>
  <main class="container mt-5">
<RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>
