Vue.component('headapp', {
    template: '#headapp'
});

Vue.component('headapp', {
    template: '#headapp'
});


const Home = {template: '<h1>Home</h1>'}

const Mods = {template: '<h1>Mods</h1>'}

const routes = [
       { path: '/home', component: Home},
       { path: '/mods', component: Mods},
    
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
