import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref([])

  const stored = localStorage.getItem('wishlist')
  if (stored) {
    wishlist.value = JSON.parse(stored)
  }

  watch(
    wishlist,
    (newVal) => {
      localStorage.setItem('wishlist', JSON.stringify(newVal))
    },
    { deep: true },
  )

  function toggleWishlist(product) {
    const index = wishlist.value.findIndex((p) => p.name === product.name)
    if (index >= 0) {
      wishlist.value.splice(index, 1)
    } else {
      wishlist.value.push(product)
    }
  }

  function isLiked(product) {
    return wishlist.value.some((p) => p.name === product.name)
  }

  return { wishlist, toggleWishlist, isLiked }
})
