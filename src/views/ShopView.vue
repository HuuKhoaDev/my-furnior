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
      <ProductList :current-page="currentPage" :limit="limit" />
      <ThePagination
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        @update:currentPage="(val) => (currentPage = val)"
      />
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
import ThePagination from '@/components/ThePagination.vue'
import { ref } from 'vue'
import ProductService from '@/service/index.ts'

const currentPage = ref(1)
const limit = ref(8)

const { total } = ProductService.getList(1, limit.value)
</script>

<style lang="scss" scoped>
.shop-header-section {
  background-color: #fdf3e8;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  // width: 105%;
}
.distance {
  padding: 50px;
}

@media (max-width: 768px) {
  .shop-page-container {
    max-width: 1440px;
    width: 100%;
  }
}
</style>
