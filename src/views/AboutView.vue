<script setup>
import NavComponent from '../components/NavComponent.vue'
</script>

<template>
  <section class="section__heading" transition-style="in:circle:center">
    <header>
      <NavComponent showHome showContact />
    </header>
    <main class="container">
      <h1 class="tracking-in-expand">Sobre GRX</h1>
    </main>
  </section>
  <section class="section__about">
    <p>
      En GRX creamos piezas únicas y duraderas que combinan la belleza natural de la madera con la
      elegancia del metal. Nuestro enfoque se basa en trabajar con materiales de alta calidad y
      técnicas artesanales tradicionales para lograr acabados excepcionales en cada proyecto. Nos
      inspiramos en la naturaleza y nos esforzamos por alcanzar la perfección en cada creación.
      ¡Acompáñanos en este viaje artístico y funcional!
    </p>
  </section>
</template>

<style scoped>
@import 'https://unpkg.com/transition-style/transition.hackpack.min.css';

.tracking-in-expand {
  -webkit-animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.section__heading {
  background-image: url('@/assets/images/bcg.webp');
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
}

.section__about {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-text);
}

p {
  font-family: 'Titillium Light';
  font-size: 1rem;
  color: var(--color-background);
  max-width: 700px;
  padding: 0 1.5rem;
  text-align: center;
  line-height: 1.2rem;
}

h1 {
  font-size: 3rem;
  font-family: 'Titillium Bold';
  text-transform: uppercase;
  position: absolute;
  bottom: 2rem;
}

[transition-style='in:circle:center'] {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) circle-in-center both;
}
@keyframes circle-in-center {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(125%);
  }
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }

  40% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }

  40% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@media (min-width: 1024px) {
  p {
    font-size: 1.5rem;
    max-width: 700px;
    line-height: 2.1rem;
  }

  h1 {
    font-size: 10rem;
  }
}
</style>
