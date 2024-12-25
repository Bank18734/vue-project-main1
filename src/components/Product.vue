<script setup>
import { defineProps } from 'vue'

defineProps({
  products: Array,
  addToCart: Function
})

</script>
<template>
    <!-- Products shelf -->
     <div>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      <div v-for="product in products" :key="product.id" class="card card-compact bg-base-100 w-full shadow-xl">
        <figure>
        <img
        class="w-full" :src="product.imageUrl"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.about.substring(0, 100) }}</p>
          <p class="font-bold"> {{ product.price }} ฿</p>
          <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="addToCart(product)">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>