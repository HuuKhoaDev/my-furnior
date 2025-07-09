<template>
  <div class="shop-page-container">
    <div class="shop-header-section">
      <PageBanner
        title="Shop"
        imageSrc="/images/shop_page.jpg"
        :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Shop' }]"
      />
      <ShopToolbar />
    </div>

    <div class="product-list-page">
      <ProductList />
      <ProductPagination />
      <div class="distance"></div>
      <FeatureSection />
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import ShopToolbar from '@/shop/ShopToolbar.vue'
import ProductList from '@/shop/ProductList.vue'
import FeatureSection from '@/shop/FeatureSection.vue'
import ProductPagination from '@/shop/ProductPagination.vue'
</script>

<style lang="scss" scoped>
@import url('@/assets/pages/shop-view.scss');
.shop-header-section {
  background-color: #fdf3e8;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
.distance {
  padding: 50px;
}
</style>
