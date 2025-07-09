import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  const addToCart = (product) => {
    cartItems.value.push(product)
  }

  const removeFromCart = (index) => {
    cartItems.value.splice(index, 1)
  }

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
      const cleanedPrice = String(item.price).replace(/[^\d]/g, '')
      return total + parseFloat(cleanedPrice || '0')
    }, 0)
  })

  return { cartItems, addToCart, removeFromCart, cartTotal }
})
