<template>
  <div class="like">
    <PageBanner
      title="Wishlist"
      imageSrc="/images/shop_page.jpg"
      :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Wishlist' }]"
    />

    <div class="content-heart">
      <p>There is no products in your Wishlist</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('@/assets/pages/like-view.scss');
@import url('@/assets/pages/shop-view.scss');
</style>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
</script>
