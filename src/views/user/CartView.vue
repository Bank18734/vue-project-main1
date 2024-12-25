<script setup>
import { RouterLink } from 'vue-router'

import UserLayout from '../../layouts/UserLayout.vue'
import Close from '../../components/icons/Close.vue'

import { useCartStore } from '../../stores/user/cart'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value)
  cartStore.updateQuantity(index, newQuantity)
}

</script>

<template>
  <UserLayout>
    <div class="container mx-auto">
    <div class="flex ">  
    <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
    </div>
    <div>
    <div class="flex ">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div v-if="cartStore.items.length === 0">
          Cart is empty
        </div>
        <div v-else v-for="(item, index) in cartStore.items" :key="item" class="flex">
          <div class="flex-1">
            <img class="w-full p-10" :src="item.imageUrl"/>
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="relative grid grid-cols-2">
                  <div>
                    <div class="text-xl font-bold">{{ item.name }}</div>
                    <div>{{ item.about }}</div>
                    <div>{{ item.price }} ฿</div>
                  </div>
                  <div>
                    <select v-model="item.quantity" @change="changeQuantity($event, index)" class="block w-1/2 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option v-for="quantity in [1,2,3,4,5]" :key="quantity">
                        {{ quantity }}
                      </option>
                    </select>
                  </div>
                  <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                    <Close></Close>
                  </div>
                </div>  
              </div>
              <div><b>In Stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-20 h-full bg-slate-300 p-4 border-2 border-slate-600">
        <div class="text-xl font-bold">Order Summary</div>
        <div class="my-4 space-y-2 divide-y divide-black">
        <div class="flex justify-between py-2">
          <div>ราคาสินค้าทั้งหมด</div>
          <div>{{ cartStore.summaryPrice }}</div>
        </div>
        <div class="flex justify-between py-2">
          <div>ค่าจัดส่ง</div>
          <div>30</div>
        </div>
        <div class="flex justify-between py-2">
          <div>ราคารวมทั้งหมด</div>
          <div>{{ cartStore.summaryTotalprice }}</div>
        </div>
        </div>
        <RouterLink :to="{ name: 'checkout' }" class="btn btn-primary w-full mt-4">
            ชำระเงิน</RouterLink>
      </div>
    </div>
  </div>
  </div>

  </UserLayout>
</template>