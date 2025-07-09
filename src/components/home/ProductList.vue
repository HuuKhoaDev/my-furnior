<template>
  <div class="products">
    <h2 class="products__title">Our Products</h2>
    <div class="products__grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
      />
    </div>
    <div class="products__load-more">
      <button class="products__show-more">Show More</button>
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  prodcut: Array,
  addToCart: Function,
})

const products = [
  {
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    image: '/images/Syltherine_img.png',
    overlay: true,
    customClass: 'product-card--syltherine',
  },
  {
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    image: '/images/Leviosa_img.png',
    overlay: true,
    customClass: 'product-card--leviosa',
  },
  {
    name: 'Lolito',
    description: 'Luxyry big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    image: '/images/Lolito_img.png',
    overlay: true,
    customClass: 'product-card--lolito',
  },
  {
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    image: '/images/Respira_img.png',
    overlay: true,
    customClass: 'product-card--respira',
  },
  {
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    image: '/images/Grifo_img.png',
    overlay: true,
    customClass: 'product-card--grifo',
  },
  {
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    image: '/images/Muggo_img.png',
    overlay: true,
    customClass: 'product-card--muggo',
  },
  {
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    image: '/images/Pingky_img.png',
    overlay: true,
    customClass: 'product-card--pingky',
  },
  {
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    image: '/images/Potty_img.png',
    overlay: true,
    customClass: 'product-card--potty',
  },
]
</script>

<style lang="scss">
.products {
  padding: 32px;

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
</style>
