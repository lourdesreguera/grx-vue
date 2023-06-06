<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  src: String,
  id: Number
})
</script>

<template>
  <div class='container'>
    <img :src='src' :alt='src' class="img" />
    <div class='btn'>
      <RouterLink :to="`/gallery/${id}`" >
          <img src='@/assets/images/viewMoreArrow.png' alt="Ver más" width='34' height='34'/>
        </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}
.img {
  width: 100%;
  height: auto;
  position: relative;
}


.btn {
  background-color: var(--bcgColor);
  position: absolute;
  bottom: 4px;
  width: 40px;
  height: 40px;
  right: 0;
  border-top-left-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.btn__img {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.container__img {
  position: relative;
}

</style>


