import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref(JSON.parse(localStorage.getItem('cart') || '[]'))

  const addToCart = (product) => {
    cartItems.value.push(product)
  }

  const removeFromCart = (index) => {
    cartItems.value.splice(index, 1)
  }

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
      const numeric = String(item.price).replace(/[^\d]/g, '')
      return total + Number(numeric || 0)
    }, 0)
  })

  watch(
    cartItems,
    (newCart) => {
      localStorage.setItem('cart', JSON.stringify(newCart))
    },
    { deep: true },
  )

  return { cartItems, addToCart, removeFromCart, cartTotal }
})
