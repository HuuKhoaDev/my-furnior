<template>
  <div class="products">
    <h2 class="products__title">{{ title }}</h2>
    <div class="products__grid">
      <TheProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
      />
    </div>
    <div class="products__load-more">
      <button class="products__show-more" v-if="isShowButtonShowMore" @click="addMore">
        Show More
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import ProductService from '@/service/index.ts'
import TheProductCard from '../TheProductCard.vue'

defineProps({
  prodcut: Array,
  addToCart: Function,
  title: String,
})

const products = ref([])
const page = ref(1)
const total = ref(0)

const isShowButtonShowMore = computed(() => {
  return products.value.length < total.value
})

const addMore = () => {
  page.value++

  fetchData()
}

const fetchData = () => {
  const res = ProductService.getList(page.value, 8)
  products.value = [...products.value, ...res.items]

  total.value = res.total
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss">
.products {
  padding: 32px;
  max-width: 1440px;
  width: 100%;

  &__title {
    padding: 30px 20px;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: center;
    font-family: Poppins, sans-serif;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
  }

  &__load-more {
    text-align: center;
    margin-top: 30px;
  }

  &__show-more {
    padding: 12px 80px;
    font-size: 18px;
    font-weight: 500;
    background-color: #fff;
    color: #b88e2f;
    border: 1px solid #b88e2f;
    cursor: pointer;
  }

  &__show-more:hover {
    background: #b88e2f;
    color: #fff;
  }
}

@media (max-width: 768px) {
  .products {
    padding: 32px;
    width: 100%;

    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
