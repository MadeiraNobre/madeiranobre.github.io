const defaultPagePath = '/static/pages'

Vue.use(httpVueLoader)

const router = new VueRouter({
    routes: [
        {
            path: '',
            component: httpVueLoader(defaultPagePath + '/index.vue')
        },
        {
            path: '/produtos',
            component: httpVueLoader('/static/layouts/bar.vue'),
            children: [
                {
                    path: '',
                    component: httpVueLoader(defaultPagePath + '/lista-produtos.vue')
                },
                {
                    path: ':id',
                    component: httpVueLoader(defaultPagePath + '/view-produto.vue')
                }
            ]
        }
    ]
})

new Vue({
    router,
    template: '<router-view></router-view>'
})
    .$mount('#app')
