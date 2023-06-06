<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
  <nav>
    <ul>
      <li class="li--home">
        <RouterLink to="/">
          GRX metal y madera
        </RouterLink>
      </li>
      <li class='li--contact'>
        <RouterLink to="/contact">
          Contact
        </RouterLink>
        <img src='@/assets/images/smallArrow.svg' width='16' height='18' alt="Ir a contacto" class='contact__icon' />
      </li>
      <li>
        <RouterLink to="/about">
          About
        </RouterLink>
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
}

@media (min-width: 1024px) {
  ul {
    padding: 2.5rem 4rem;
  }
}





/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
