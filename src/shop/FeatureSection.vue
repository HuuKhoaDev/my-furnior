<template>
  <div class="features">
    <div class="feature-wrap">
      <div class="feature-item" v-for="feature in features" :key="feature.title">
        <img :src="feature.image" :alt="feature.title" />
        <div class="text">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    image: '/public/images/Cup.png',
    title: 'High Quality',
    subtitle: 'crafted from top materials',
  },
  { image: 'public//images/Tick.png', title: 'Warranty Protection', subtitle: 'Over 2 years' },
  { image: '/images/Hand.png', title: 'Free Shipping', subtitle: 'Order over 150 $' },
  { image: 'public//images/People.png', title: '24 / 7 Support', subtitle: 'Dedicated support' },
]
</script>

<style lang="scss" scoped>
.features {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f1e7;
  width: 100%;
}

.feature-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 105px 53px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.feature-item img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.feature-item h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}

.feature-item p {
  margin: 4px 0 0 0;
  font-size: 17px;
  color: #7c7c7c;
}
</style>
