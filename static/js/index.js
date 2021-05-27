const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
    routes: [
        {
            path: '',
            component: httpVueLoader('/static/pages/index.vue')
        },
        {
            path: '/path',
            component: Bar
        }
    ]
})

new Vue({
    router,
    template: '<router-view></router-view>'
})
    .$mount('#app')
