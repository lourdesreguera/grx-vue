<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  showHome: Boolean,
  showContact: Boolean,
  showAbout: Boolean
})
</script>

<template>
  <nav class="li--home">
    <ul>
      <li>
        <RouterLink to="/gallery"> GRX metal y madera </RouterLink>
      </li>
      <li class="li--contact">
        <RouterLink to="/contact"> Contact </RouterLink>
        <img
          src="@/assets/images/smallArrow.svg"
          width="16"
          height="18"
          alt="Ir a contacto"
          class="contact__icon"
        />
      </li>
      <li>
        <RouterLink to="/about"> About </RouterLink>
      </li>
    </ul>
  </nav>
  <nav class="li--home--mobile">
    <ul>
      <li v-show="showHome">
        <RouterLink to="/gallery"> GRX metal y madera </RouterLink>
      </li>
      <li v-show="showContact" class="li--contact">
        <RouterLink to="/contact"> Contact </RouterLink>
        <img
          src="@/assets/images/smallArrow.svg"
          width="16"
          height="18"
          alt="Ir a contacto"
          class="contact__icon"
        />
      </li>
      <li v-show="showAbout">
        <RouterLink to="/about"> About </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0 1.5rem;
  max-width: 1440px;
}

.li--contact {
  display: flex;
  align-items: center;
}

.contact__icon {
  margin-left: 0.5rem;
}

.li--home {
  display: none;
}

@media (min-width: 768px) {
  .li--home {
    display: block;
  }

  .li--home--mobile {
    display: none;
  }
}

@media (min-width: 1024px) {
  ul {
    padding: 2.5rem 4rem;
  }
}
</style>
