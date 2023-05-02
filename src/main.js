import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import Home from "./pages/Home.vue"
import UserDetails from "./pages/UserDetails.vue"
import AddUser from "./pages/AddUser.vue"
import UpdateUser from "./pages/UpdateUser.vue"
import Error from "./pages/Error.vue"

import App from './App.vue'

import './assets/main.css'



const routes = [
    { path: '/', component: Home, alias: '/users' },
    { path: '/users/:id', component: UserDetails },
    { path: '/users/add', component: AddUser },
    { path: '/users/update/:id', component: UpdateUser },
    { path: '/:NotFound(.*)*', component: Error, meta: { hideNavbar: true } },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
