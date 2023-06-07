<script setup>
import NavComponent from '@/components/NavComponent.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'
import GalleryDetail from '@/components/GalleryDetail.vue'
import items1 from '@/components/items1.js'
import items2 from '@/components/items2.js'
import itemDetail from '@/components/itemsDetail.js'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
  <header>
    <NavComponent />
  </header>
  <main class="container">
    <h1>Últimos trabajos</h1>
    <GalleryComponent :items="items1" />
    <GalleryDetail :item="itemDetail[0]" />
    <GalleryComponent :items="items2" />
  </main>
  <FooterComponent />
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}

h1 {
  font-size: 1.5rem;
  font-family: 'Titillium Bold';
  text-align: center;
  padding: 2.5rem 2rem;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
