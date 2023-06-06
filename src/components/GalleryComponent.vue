<script setup>
import GalleryItem from './GalleryItem.vue';
defineProps({
    items: Array
})
</script>

<template>
    <section class="grid">
        <div v-for="(item) in items" :key="item.id" :className="`item ${item.grid}`">
            <GalleryItem :src='item.src' :id='item.id' />
            <p>Descripción breve del producto</p>
        </div>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    column-gap: 1rem;
    row-gap: 2rem;
    padding: 0 1.5rem;
}

p {
    font-size: 0.8rem;
    padding-top: 1rem;
}

.item {
    grid-column: 1 / 11;
}

@media (min-width: 768px) {
    .grid {
        row-gap: 1.5rem;
    }

    .one {
        grid-column: 1 / 5;
    }

    .two {
        grid-column: 5 / 9;
    }

    .three,
    .nine {
        grid-column: 9 / 11;
    }

    .four,
    .ten {
        grid-column: 1 / 6;
    }

    .five,
    .eleven {
        grid-column: 6 / 11;
    }

    .seven {
        grid-column: 1 / 4;
    }

    .eight {
        grid-column: 4 / 9;
    }
}

@media (min-width: 1024px) {
    .grid {
        padding: 0 4rem;
    }

    .one,
    .seven {
        grid-column: 1 / 4;
    }

    .two,
    .eight {
        grid-column: 4 / 7;
    }

    .three,
    .nine {
        grid-column: 7 / 8;
    }

    .four {
        grid-column: 8 / 9;
    }

    .five {
        grid-column: 9 / 11;
    }

    .ten {
        grid-column: 8 / 10;
    }

    .eleven {
        grid-column: 10 / 11;
    }
}

@media (min-width: 1440px) {
    .grid {
        column-gap: 1.5rem;
    }
}</style>