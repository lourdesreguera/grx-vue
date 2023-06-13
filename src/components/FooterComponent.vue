<script setup>
import mailIcon from '@/assets/images/mailIcon.svg'
import facebookIcon from '@/assets/images/facebookIcon.svg'
import instagramIcon from '@/assets/images/instagramIcon.svg'

const links = [
  { href: '#', img: mailIcon, name: 'email@email.com' },
  { href: '#', img: facebookIcon, name: '@facebook' },
  { href: '#', img: instagramIcon, name: '@instagram' }
]
</script>

<template>
  <footer class="footer">
    <div v-for="link in links" :key="link.name">
      <a :href="link.href" class="link">
        <img :src="link.img" :alt="link.name" />
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
