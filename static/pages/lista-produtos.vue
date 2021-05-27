<template>
    <div class="lista-produtos-moveis-page__root">
        <movel-item v-for="(movel, index) in moveis" :movel="movel" :key="index" :id="index"/>
    </div>
</template>

<script>
async function getData() {
    const response = await fetch('/static/assets/internal/moveis-db/moveis.json')
    return response.json()
}

module.exports = {
    components: {
        MovelItem: 'url:/static/components/movel-item.vue'
    },
    data() {
        return {
            moveis: []
        }
    },
    created() {
        getData()
            .then(data => {
                this.moveis = data.moveis
            })
    },
}
</script>

<style scoped>
.lista-produtos-moveis-page__root {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: calc(50vw + (10 * 1rem));
    justify-content: center;
}
</style>
