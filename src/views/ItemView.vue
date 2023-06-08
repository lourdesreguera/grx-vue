<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products.js'

const id = ref('')
const route = useRoute()

onMounted(() => {
  id.value = route.params.id
})

const store = useProductsStore()
const { findItem } = store

const item = ref({})

watchEffect(() => {
  window.scrollTo(0, 0)
  if (id.value) {
    item.value = findItem(id.value)
  }
})
</script>

<template>
  <section transition-style="in:custom:circle-swoop" class="container"
    :style="{ backgroundImage: 'url(' + item.srcBigImage + ')' }">
    <RouterLink to="/gallery">
      <img :src="
        !item.whiteBcg
          ? '/src/assets/images/smallArrow.svg'
          : '/src/assets/images/smallArrowDark.svg'
      " width="40" class="icon" alt="Volver a la galería" />
    </RouterLink>
    <div class="container__headings">
      <h1 :class="!item.whiteBcg ? 'heading' : 'heading dark'">
        {{ item.title }}
      </h1>
      <h2 :class="!item.whiteBcg ? 'subheading' : 'subheading dark'">
        {{ item.shortDescription }}
      </h2>
    </div>
    <div class="container__description">
      <p :class="!item.whiteBcg ? 'description' : 'description dark'">
        {{ item.longDescription }}
      </p>
    </div>
  </section>
  <section class="container__images">
    <div class="container__img1">
      <img :src="item.src" class="img" />
    </div>
    <div class="container__img2">
      <img :src="item.src" class="img" />
    </div>
    <div class="container__img3">
      <img :src="item.src" class="img" />
    </div>
  </section>
</template>

<style scoped>
@import 'https://unpkg.com/transition-style/transition.hackpack.min.css';

.container {
  background-size: cover;
  height: 100vh;
  background-position: center;
  position: relative;
}

.icon {
  margin-top: 2rem;
  margin-left: 1rem;
  rotate: 180deg;
}

.container__headings {
  position: absolute;
  margin: 1rem 0 0 1rem;
  max-width: 15rem;
}

.heading {
  font-size: 2rem;
  font-family: 'Titillium Bold';
}

.subheading {
  font-family: 'Titillium Light';
  font-size: 2rem;
  margin-top: 0.5rem;
}

.description {
  font-family: 'Titillium Light';
  font-size: 1rem;
}

.dark {
  color: var(--color-background);
}

.container__description {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 1rem 2rem 0;
  max-width: 12rem;
}

.container__images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 150px);
  column-gap: 0;
  row-gap: 0;
  max-width: 600px;
  margin: 2rem auto;
}

.container__img1 {
  grid-column: 1 / 1;
  grid-row: 1 / 3;
  overflow: hidden;
}

.container__img2 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  overflow: hidden;
}

.container__img3 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow: hidden;
}

.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@keyframes in-circle-swoop {
  from {
    clip-path: var(--circle-top-left-out);
  }

  to {
    clip-path: var(--circle-bottom-right-in);
  }
}

[transition-style='in:custom:circle-swoop'] {
  --transition__duration: 5s;
  animation-name: in-circle-swoop;
}

@media (min-width: 768px) {
  .container__images {
    grid-template-rows: repeat(2, 200px);
    max-width: 700px;
    margin: 4rem auto;
  }
  .container__headings {
  margin: 2rem 0 0 3rem;
  max-width: 42rem;
}
.icon {
  margin-top: 2rem;
  margin-left: 3rem;
}
.container__description {
  margin: 0 2rem 3rem 0;
  max-width: 20rem;
}
}

@media (min-width: 1024px) {

  .heading,
  .subheading {
    font-size: 4rem;
  }

  .description {
    font-family: 'Titillium Light';
    font-size: 1.5rem;
  }

  .container__description {
    margin: 0 4rem 4rem 0;
    max-width: 29rem;
  }

  .container__headings {
    margin: 2rem 0 0 4rem;
  }

  .icon {
    margin-top: 3rem;
    margin-left: 4rem;
  }

  .container__images {
    max-width: 800px;
    margin: 5rem auto;
  }
}
</style>
