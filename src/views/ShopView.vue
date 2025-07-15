<template>
  <div class="shop-page">
    <div class="shop-page__header">
      <PageBanner
        title="Shop"
        imageSrc="/images/shop_page.jpg"
        :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Shop' }]"
      />
      <ShopToolbar />
    </div>

    <div class="shop-page__content">
      <ProductList :current-page="currentPage" :limit="limit" />
      <ThePagination
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        @update:currentPage="(val) => (currentPage = val)"
      />
      <div class="shop-page__spacer"></div>
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
.shop-page {
  font-family: 'Poppins', sans-serif;
  width: 100%;

  &__header {
    background-color: #fdf3e8;
    padding: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__spacer {
    padding: 50px;
  }

  @media (max-width: 768px) {
    max-width: 1440px;
    width: 100%;
    padding: 0 16px;

    &__spacer {
      padding: 32px;
    }
  }
}
</style>
