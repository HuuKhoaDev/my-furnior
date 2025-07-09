<template>
  <div class="banner">
    <PageBanner title="Sreach" imageSrc="/images/shop_page.jpg" />
    <div class="search-wrapper">
      <img src="/images/search_icon.png" alt="search" />
      <input type="text" id="sreach" name="sreach" placeholder="Sreach for product..." />
    </div>
    <div class="distance-sreach"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url('@/assets/pages/sreach-view.scss');
@import url('@/assets/pages/shop-view.scss');
</style>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
</script>
