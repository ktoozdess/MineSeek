Vue.component('headapp', {
    template: '#headapp'
});




const Home = {template: `<div class="main-container">
<div class="main-container-txt">
<h2>Discover the world of Minecraft mods!</h2>
<p class="home-descr">Find enjoyable, quality content through our modding platform </p>
<router-link to="/mods" class="btn" href="#">View mods library!</router-link >
</div>
</div>`}

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
