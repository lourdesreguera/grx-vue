<script setup>
const links = [
  { href: '#', img: 'mailIcon.svg', name: 'email@email.com' },
  { href: '#', img: 'facebookIcon.svg', name: '@facebook' },
  { href: '#', img: 'instagramIcon.svg', name: '@instagram' }
]
</script>

<template>
  <footer class="container">
    <div v-for="link in links" :key="link.name">
      <a :href="link.href" class="link">
        <img :src="`src/assets/images/${link.img}`" :alt="link.name" />
        <p class="name">{{ link.name }}</p>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.container {
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
  .container {
    margin: 7rem 0 3rem 0;
  }

  .name {
    display: block;
    margin-left: 0.5rem;
  }
}
</style>
