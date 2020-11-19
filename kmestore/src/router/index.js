import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/admin/admin.vue')
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/product/product-details.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/contact/contact.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router