<template>
  <div class="like">
    <PageBanner
      title="Wishlist"
      imageSrc="/images/shop_page.jpg"
      :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Wishlist' }]"
    />

    <div class="content-heart">
      <div v-if="wishlistStore.wishlist.length" class="wishlist-grid">
        <div class="wishlist-item" v-for="product in wishlistStore.wishlist" :key="product.name">
          <img :src="product.image" :alt="product.name" />
          <div class="wishlist">
            <router-link to="/product" class="title">{{ product.name }}</router-link>
            <p>{{ product.price }}</p>
          </div>
          <div class="wishlist-btn">
            <button class="remove-btn" @click="removeFromWishlist(product)">x</button>
          </div>
        </div>
      </div>

      <p class="content-desc" v-else>There is no products in your Wishlist</p>
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
@import url('@/assets/pages/shop-view.scss');
</style>
