<template>
  <div class="product-list">
    <ProductCard v-for="(item, index) in products" :key="index" :product="item" />
  </div>
</template>

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
</style>

<script setup>
import ProductCard from './ProductCard.vue'

const products = [
  {
    id: 1,
    img: '/images/Syltherine_img.png',
    name: 'Syltherine',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 2,
    img: '/images/Leviosa_img.png',
    name: 'Leviosa ',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 3,
    img: '/images/Lolito_img.png',
    name: 'Lolito',
    desc: 'Description for Product 1',
    price: '2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 4,
    img: '/images/Respira_img.png',
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 5,
    img: '/images/Syltherine_img.png',
    name: 'Syltherine',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 6,
    img: '/images/Leviosa_img.png',
    name: 'Leviosa ',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },
  {
    id: 7,
    img: '/images/Lolito_img.png',
    name: 'Lolito',
    desc: 'Description for Product 1',
    price: '2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 8,
    img: '/images/Respira_img.png',
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 9,
    img: '/images/Syltherine_img.png',
    name: 'Syltherine',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },
  {
    id: 10,
    img: '/images/Leviosa_img.png',
    name: 'Leviosa ',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 11,
    img: '/images/Lolito_img.png',
    name: 'Lolito',
    desc: 'Description for Product 1',
    price: '2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 12,
    img: '/images/Respira_img.png',
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 13,
    img: '/images/Syltherine_img.png',
    name: 'Syltherine',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },
  {
    id: 14,
    img: '/images/Leviosa_img.png',
    name: 'Leviosa ',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 15,
    img: '/images/Lolito_img.png',
    name: 'Lolito',
    desc: 'Description for Product 1',
    price: '2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 16,
    img: '/images/Respira_img.png',
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 17,
    img: '/images/Syltherine_img.png',
    name: 'Syltherine',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },
  {
    id: 18,
    img: '/images/Leviosa_img.png',
    name: 'Leviosa ',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 19,
    img: '/images/Lolito_img.png',
    name: 'Lolito',
    desc: 'Description for Product 1',
    price: '2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 20,
    img: '/images/Respira_img.png',
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 21,
    img: '/images/Syltherine_img.png',
    name: 'Syltherine',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },
  {
    id: 22,
    img: '/images/Leviosa_img.png',
    name: 'Leviosa ',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 23,
    img: '/images/Lolito_img.png',
    name: 'Lolito',
    desc: 'Description for Product 1',
    price: '2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 24,
    img: '/images/Respira_img.png',
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 25,
    img: '/images/Syltherine_img.png',
    name: 'Syltherine',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },
  {
    id: 26,
    img: '/images/Leviosa_img.png',
    name: 'Leviosa ',
    desc: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 27,
    img: '/images/Lolito_img.png',
    name: 'Lolito',
    desc: 'Description for Product 1',
    price: '2.500.000',
    priceChange: 'Rp 3.500.000',
  },

  {
    id: 28,
    img: '/images/Respira_img.png',
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 2.500.000',
    priceChange: 'Rp 3.500.000',
  },
]
</script>
