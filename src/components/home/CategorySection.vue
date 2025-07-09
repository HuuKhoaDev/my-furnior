<template>
  <div class="category">
    <div class="category__header">
      <h3 class="category__title">Browse The Range</h3>
      <p class="category__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="category__list">
      <div class="category__item" v-for="(item, index) in categories" :key="index">
        <img class="category__image" :src="item.image" :alt="item.name" />
        <h3 class="category__name">{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category {
  text-align: center;
  padding: 40px 32px;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 20px;
  background-color: #fff;

  &__title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 8px;
    font-family: Poppins, sans-serif;
  }

  &__subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 48px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    flex-wrap: wrap;
  }

  &__item {
    border-radius: 12px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    transition: transform 0.3s ease;
  }

  &__item:hover {
    transform: scale(1.03);
  }

  &__image {
    width: 100%;
    object-fit: cover;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  &__name {
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
    color: #333;
  }
}
</style>

<script setup>
const categories = [
  { image: '/images/cart_img.png', name: 'Dining' },
  { image: '/images/living_img.png', name: 'Living' },
  { image: '/images/bedroom_img.png', name: 'Bedroom' },
]
</script>
