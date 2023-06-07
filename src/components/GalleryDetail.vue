<script setup>
import GalleryItem from './GalleryItem.vue';

defineProps({
    item: Object
})
</script>

<template>
    <section>
        <div class='container__img'>
            <GalleryItem :src='item.src' :id="item.id" />
        </div>
        <p class='title container__title'>
            {{ item.title }}
        </p>
    </section>
</template>

<style scoped>
section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 1.5rem;
}

.title {
    font-family: 'Titillium Bold';
    font-size: 3rem;
    line-height: 1;
    text-transform: uppercase;
}

@media (min-width: 768px) {
    section {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
    }

    .container__img {
        padding-left: 0.5rem;
    }

    .container__title {
        padding-right: 0.5rem;
    }
}

@media (min-width: 1024px) {
    section {
        padding: 4rem;
    }

    .container__img {
        width: 60%;
    }

    .container__title {
        width: 40%;
    }

    .title {
        font-size: 5rem;
    }
}

@media (min-width: 1440px) {
    .title {
        font-size: 6.5rem;
    }
}
</style>