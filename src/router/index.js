import { createRouter, createWebHistory } from "vue-router"

import HomeView from '../views/user/HomeView.vue'
import LoginView from '../views/user/LoginView.vue'
import SearchView from '../views/user/SearchView.vue'
import ProfileView from '../views/user/ProfileView.vue'
import CartView from '../views/user/CartView.vue'
import CheckoutView from '../views/user/CheckoutView.vue'
import SuccessView from '../views/user/SuccessView.vue'
import ProductCartView from '../views/user/ProductCartView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/login",  
            name: "login",
            component: LoginView,
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileView,
        },
        {
            path: "/search",
            name: "search",
            component: SearchView,
        },
        {
            path: "/productcart",
            name: "productcart",
            component: ProductCartView,
        },
        {
            path: "/cart",
            name: "cart",
            component: CartView,
        },
        {
            path: "/checkout",
            name: "checkout",
            component: CheckoutView,
        },
        {
            path: "/success",
            name: "success",
            component: SuccessView,
        },

    ],
})

export default router