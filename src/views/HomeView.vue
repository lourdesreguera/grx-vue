<script setup>
import { RouterLink } from 'vue-router'
import NavComponent from '../components/NavComponent.vue'
</script>

<template>
  <div class="container">
    <header>
      <NavComponent showContact showAbout />
    </header>
    <div class="container__img">
      <h1 class="heading">GRX</h1>
      <img
        alt="Miguel Muñoz Gordo"
        class="img"
        src="@/assets/images/miguel.png"
        width="216"
        height="323"
      />
      <h2 class="subheading">Metal y madera</h2>
    </div>
    <RouterLink to="/gallery">
      <div class="container__more">
        <img src="@/assets/images/bigArrow.svg" alt="Ver últimos trabajos" class="arrow" />
        <h3>Últimos trabajos</h3>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  background-image: url('@/assets/images/bcg.webp');
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container__img {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 216px;
  margin: 0 auto;
}

.container__more {
  display: flex;
  align-items: flex-end;
  padding: 0 0 1.5rem 1.5rem;
}

.heading {
  font-family: 'Titillium Bold';
  left: -40px;
  position: absolute;
  top: 0;
  line-height: 0;
}

.subheading {
  font-family: 'Titillium Bold';
  position: absolute;
  bottom: -24px;
  right: -48px;
  max-width: 223px;
  text-transform: uppercase;
}

h3 {
  text-transform: uppercase;
  margin-left: 1rem;
}

.arrow {
  width: 22px;
  height: 28px;
}

@media (min-width: 768px) {
  .heading {
    left: -90px;
  }

  .subheading {
    right: -142px;
  }
}

@media (min-width: 1024px) {
  .container_img {
    max-width: 250px;
  }

  .container__more {
    padding-left: 4rem;
  }

  .heading {
    left: -180px;
  }

  .subheading {
    max-width: 500px;
    bottom: -60px;
    right: -346px;
  }

  .arrow {
    width: 58px;
    height: 72px;
  }

  h3 {
    font-size: 1.5rem;
  }
}

@media (min-width: 1440px) {
  .subheading {
    right: -350px;
  }
}
</style>
