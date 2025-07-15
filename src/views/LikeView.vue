<template>
  <div class="wishlist-page">
    <PageBanner
      title="Wishlist"
      imageSrc="/images/shop_page.jpg"
      :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Wishlist' }]"
    />

    <div class="wishlist-page__content">
      <div v-if="wishlistStore.wishlist.length" class="wishlist-page__grid">
        <div
          class="wishlist-page__item"
          v-for="product in wishlistStore.wishlist"
          :key="product.name"
        >
          <img class="wishlist-page__item-image" :src="product.image" :alt="product.name" />

          <div class="wishlist-page__item-info">
            <router-link to="/product" class="wishlist-page__item-title">
              {{ product.name }}
            </router-link>
            <p class="wishlist-page__item-price">{{ product.price }}</p>
          </div>

          <div class="wishlist-page__item-actions">
            <button class="wishlist-page__remove-btn" @click="removeFromWishlist(product)">
              ×
            </button>
          </div>
        </div>
      </div>

      <p v-else class="wishlist-page__empty-msg">There is no products in your Wishlist</p>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import { useWishlistStore } from '@/stores/wishlist'
const wishlistStore = useWishlistStore()

function removeFromWishlist(product) {
  wishlistStore.toggleWishlist(product)
}
</script>

<style lang="scss" scoped>
@import url('@/assets/pages/like-view.scss');
</style>
