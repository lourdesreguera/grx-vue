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
  <section
    transition-style="in:custom:circle-swoop"
    class="container"
    :style="{ backgroundImage: 'url(' + item.srcBigImage + ')' }"
  >
    <RouterLink to="/gallery">
      <img
        :src="
          !item.whiteBcg
            ? '/src/assets/images/smallArrow.svg'
            : '/src/assets/images/smallArrowDark.svg'
        "
        width="40"
        class="icon"
        alt="Volver a la galería"
      />
    </RouterLink>
    <div>
      <h1>
        {{ item.title }}
      </h1>
      <h2>
        {{ item.shortDescription }}
      </h2>
    </div>
    <div>
      <p>
        {{ item.longDescription }}
      </p>
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
</style>
