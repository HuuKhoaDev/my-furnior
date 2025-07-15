<template>
  <div class="product-list">
    <TheProductCard v-for="(item, index) in products" :key="index" :product="item" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import ProductService from '@/service/index.ts'
import TheProductCard from '@/components/TheProductCard.vue'

const props = defineProps({
  currentPage: Number,
  limit: Number,
})

const products = ref([])

const fetchProducts = () => {
  const { items } = ProductService.getList(props.currentPage, props.limit)
  products.value = items
}

onMounted(fetchProducts)

watch(() => props.currentPage, fetchProducts)
</script>

<style lang="scss" scoped>
.product-list {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1300px;
  padding: 64px 32px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.product-list > div {
  background: #f9f9f9;
  position: relative;
  width: 100%;
  transition: box-shadow 0.3s ease;
}

.product-list img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
