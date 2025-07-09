<template>
  <DefaultLayout>
    <template #header>
      <TheHeader />
    </template>
    <TheCart :showCart="showCart" :cartItems="cartItems" @update:showCart="showCart = $event" />

    <router-view :addToCart="addToCart" />

    <template #footer>
      <TheFooter />
    </template>
  </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from './components/layouts/DefaultLayout.vue'
import TheHeader from './components/TheHeader.vue'
import TheCart from './components/TheCart.vue'
import TheFooter from './components/TheFooter.vue'

const cartItems = ref([])
const showCart = ref(false)

function addToCart(product) {
  cartItems.value.push(product)
  showCart.value = true
}
</script>
