<script setup>
import NavComponent from '@/components/NavComponent.vue'
import { links } from '@/components/links.js'
</script>

<template>
  <header>
    <NavComponent showHome showAbout />
  </header>
  <main>
    <h1>contacto</h1>
    <h2>
      ¿Te has enamorado de alguna de nuestras obras? ¿Quieres un presupuesto? ¿Tienes alguna duda o
      sugerencia? ¡Contacta con nosotros! Estamos deseando escucharte
    </h2>
    <div class="container">
      <button v-for="link in links" :key="link.name">
        <a v-if="link.mail" :href="`mailto:${link.ref}`" target="_blank">
          <img :src="link.imgDark" :alt="link.name" />
          <p>{{ link.name }}</p>
        </a>
        <a v-else-if="link.phone" :href="`tel:+${link.ref}`" target="_blank">
          <img :src="link.imgDark" :alt="link.name" />
          <p>{{ link.name }}</p>
        </a>
        <a v-else :href="link.href" target="_blank">
          <img :src="link.imgDark" :alt="link.name" />
          <p>{{ link.name }}</p>
        </a>
      </button>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 0 1.5rem;
  text-align: -webkit-center;
}

h1 {
  font-size: 1.5rem;
  font-family: 'Titillium Bold';
  text-align: center;
  padding: 2.5rem 2rem;
  text-transform: uppercase;
}

h2 {
  font-family: 'Titillium Light';
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
}

p {
  font-family: 'Titillium Light';
  font-size: 0.87rem;
  text-transform: lowercase;
  padding-left: 0.5rem;
}

.container {
  background-color: var(--color-text);
  max-width: 280px;
  border-radius: 50%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

button {
  width: 11rem;
  padding: 0.4rem;
  border: none;
  box-shadow: 0px 2px 1px var(--color-background);
  border-radius: 0.12rem;
  margin: 0.4rem 0;
  background-color: #fff;
}

a {
  display: flex;
  align-items: center;
}

@media (min-width: 1024px) {
  h1 {
    font-family: 'Titillium Bold';
    font-size: 2.5rem;
  }

  h2 {
    font-family: 'Titillium Light';
    font-size: 1.2rem;
    line-height: 1.5rem;
    max-width: 700px;
  }

  p {
    font-size: 0.95rem;
    padding-left: 0.6rem;
  }

  .container {
    max-width: 400px;
    height: 400px;
    margin: 2.5rem 0;
  }

  button {
    width: 14rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
}
</style>
