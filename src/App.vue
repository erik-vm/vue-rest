<script setup lang="ts">
import Header from '@/navigation/Header.vue'
import Footer from '@/navigation/Footer.vue'
</script>

<template>
  <Header />

  <main class="container">
    <RouterView />
  </main>

  <Footer />
</template>
