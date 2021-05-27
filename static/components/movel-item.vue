<template>
    <a :href="`/temporary_index.html?movel=${id}`" class="movel-item-component__main">
        <img class="movel-item-component__image" :src="`/static/assets/internal/moveis-db/imgmoveis/${movel.imgs[0]}`" :alt="movel.nome"/>
        <h2 class="movel-item-component__title">{{ movel.tituloCatalogo }}</h2>
    </a>
</template>

<script>
module.exports = {
    props: ['movel', 'id']
}
</script>

<style scoped>
.movel-item-component__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    margin: 1rem;
    padding: 1rem;
    text-decoration: none;
    color: black;
    transition-property: filter;
    transition-duration: 300ms;
}

    .movel-item-component__main:hover {
        filter: grayscale();
    }

.movel-item-component__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 1rem;
}


@media (max-width: 320px) {
    .movel-item-component__main {
        margin: 0;
        padding: 0rem;
    }
}
</style>
