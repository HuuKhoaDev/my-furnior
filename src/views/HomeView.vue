<template>
  <div class="homepage">
    <HomeIntro />
    <CategorySection />
    <ProductList title="Our Products" />
    <InspirationSection />
    <HashtagGallery />
  </div>
</template>

<script setup>
import HomeIntro from '@/components/home/HomeIntro.vue'
import CategorySection from '@/components/home/CategorySection.vue'
import ProductList from '@/components/home/ProductList.vue'
import InspirationSection from '@/components/home/InspirationSection.vue'
import HashtagGallery from '@/components/home/HashtagGallery.vue'
</script>

<style scoped lang="scss"></style>
