<script setup>
import { links } from '@/components/links.js'
</script>

<template>
  <footer class="footer">
    <div v-for="link in links" :key="link.name">
      <a
        v-show="!link.phone"
        v-if="link.mail"
        :href="`mailto:${link.ref}`"
        class="link"
        target="_blank"
      >
        <img :src="link.img" :alt="link.name" />
        <p class="name">{{ link.name }}</p>
      </a>
      <a v-show="!link.phone" v-else :href="link.href" class="link" target="_blank">
        <img :src="link.img" :alt="link.name" class="img" />
        <p class="name">{{ link.name }}</p>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
}

.name {
  display: none;
  font-family: 'Titillium Light';
  font-size: 0.8rem;
  text-transform: lowercase;
}

@media (min-width: 1024px) {
  .footer {
    margin: 7rem 0 3rem 0;
  }

  .name {
    display: block;
    margin-left: 0.5rem;
  }
}
</style>
