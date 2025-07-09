<script setup>
defineProps(['product'])
</script>

<template>
  <div class="product-category">
    <img :src="product.img" alt="" />
    <div class="overlay">
      <button class="add-to-cart">Add to cart</button>
      <div class="actions">
        <span><img src="/images/share.png" alt="share" /> Share</span>
        <span><img src="/images/Compare.png" alt="compare" /> Compare</span>
        <span><img src="/images/Like.png" alt="like" /> Like</span>
      </div>
    </div>
    <div class="article-content">
      <h5>{{ product.name }}</h5>
      <p>{{ product.desc }}</p>
      <div class="price">
        <span class="price">{{ product.price }}</span>
        <span class="price_change" v-if="product.priceChange">{{ product.priceChange }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-category {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-category:hover .overlay {
  opacity: 1;
}

.add-to-cart {
  background-color: white;
  color: #b88e2f;
  border: none;
  padding: 10px 20px;
  margin-bottom: 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  max-width: 174px;
  width: 100%;
}

.add-to-cart:hover {
  background-color: #b88e2f;
  color: white;
}

.actions {
  display: flex;
  gap: 15px;
  font-size: 14px;
}

.actions span {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.article-content {
  padding: 16px 20px 30px 16px;
  text-align: left;
  background-color: #eeeeee;
}

.article-content h5 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.article-content p {
  font-size: 16px;
  color: #888;
  margin: 4px 0;
}

.price {
  margin-top: 8px;
}
</style>
