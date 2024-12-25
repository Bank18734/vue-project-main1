<script setup>
import { useRouter } from 'vue-router'
import UserLayout from '../../layouts/UserLayout.vue'
import Product from '../../components/Product.vue'

import { useProductStore } from '../../stores/user/product'
import { useCartStore } from '../../stores/user/cart'

const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push({ name: 'cart' })
}
</script>

<template>
  <UserLayout>
    <!-- Products shelf -->
     <Product
        :products="productStore.list"
        :addToCart="addToCart"
        ></Product>
    
  </UserLayout>
</template>
