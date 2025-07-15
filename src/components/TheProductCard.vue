<template>
  <div class="product-card" :class="customClass">
    <div class="product-card__image-wrapper">
      <img :src="product.image" :alt="product.name" class="product-card__image" />
      <div class="product-card__overlay" v-if="product.overlay">
        <button class="product-card__add-to-cart" @click="handleAddToCart">Add to cart</button>
        <div class="product-card__actions">
          <span @click="shareToFacebook"><img src="/images/share.png" alt="share" /> Share</span>
          <span><img src="/images/Compare.png" alt="compare" /> Compare</span>
          <span
            class="product-card__like"
            :class="{ liked: wishlistStore.isLiked(product) }"
            @click="wishlistStore.toggleWishlist(product)"
          >
            <img src="/images/Like.png" alt="like" />
            Like
          </span>
        </div>
      </div>
    </div>
    <div class="product-card__content">
      <h5 class="product-card__name">{{ product.name }}</h5>
      <p class="product-card__description">{{ product.description }}</p>
      <div class="product-card__price">
        <span class="product-card__price-current">{{ product.price }}</span>
        <span class="product-card__price-old" v-if="product.oldPrice">{{ product.oldPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  background: #f9f9f9;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &__image-wrapper {
    position: relative;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
  }

  &__overlay {
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

  &__image-wrapper:hover &__overlay {
    opacity: 1;
  }

  &__add-to-cart {
    background-color: white;
    color: #b88e2f;
    border: none;
    padding: 10px 20px;
    margin-bottom: 12px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    max-width: 174px;
    width: 100%;
  }

  &__add-to-cart:hover {
    background-color: #b88e2f;
    color: white;
  }

  &__actions {
    display: flex;
    font-size: 14px;
    gap: 15px;
  }

  &__actions span {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__content {
    padding: 20px;
    text-align: left;
    background-color: #eeeeee;
  }

  &__name {
    font-size: 24px;
    font-weight: 600;
    font-family: Poppins, sans-serif;
    margin: 0;
  }

  &__description {
    font-size: 16px;
    color: #888;
    font-family: Poppins, sans-serif;
    margin: 0.25rem 0;
  }

  &__price {
    margin-top: 0.5rem;
    font-family: Poppins, sans-serif;
  }

  &__price-current {
    font-weight: 700;
    font-size: 20px;
    color: #000;
    margin-right: 8px;
  }

  &__price-old {
    text-decoration: line-through;
    color: #bbb;
    font-size: 14px;
  }
}
</style>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
const wishlistStore = useWishlistStore()

const { addToCart, cartItems } = useCartStore()
const props = defineProps({
  product: Object,
  customClass: String,
})

function handleAddToCart() {
  console.log('Added to cart:', props.product)
  // emit('addToCart', props.product)

  addToCart(props.product)

  console.log(cartItems)
}

function shareToFacebook() {
  const urlToShare = 'http://localhost:5173/'
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`

  window.open(facebookShareUrl, '_blank', 'width=600,height=400')
}
</script>

<style lang="scss" scoped>
.product-card__like.liked img {
  filter: brightness(0) saturate(100%) invert(29%) sepia(75%) saturate(3341%) hue-rotate(330deg)
    brightness(105%) contrast(101%);
}
</style>
