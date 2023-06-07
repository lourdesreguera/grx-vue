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
    <div class="container__img">
      <img :src="item.src" class="img" />
    </div>
    <div class="container__img">
      <img :src="item.src" class="img" />
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
  margin-top: 3rem;
  margin-left: 4rem;
  rotate: 180deg;
}

.container__headings {
  position: absolute;
  margin: 2rem 0 0 4rem;
  max-width: 42rem;
}

.heading {
  font-size: 2rem;
  font-family: 'Titillium Bold';
}

.subheading {
  font-family: 'Titillium Light';
  font-size: 2rem;
}

.description {
  font-family: 'Titillium Light';
  font-size: 1.5rem;
}

.dark {
  color: var(--color-background);
}

.container__description {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 4rem 4rem 0;
  max-width: 29rem;
}

.container__images {
  display: flex;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
}

.container__img {
  width: 50%;
}

.img {
  width: 100%;
  overflow: hidden;
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

@media (min-width: 1024px) {

  .heading,
  .subheading {
    font-size: 4rem;
  }
}
</style>
