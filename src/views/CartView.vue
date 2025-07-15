<template>
  <div class="cart">
    <PageBanner
      title="Cart"
      imageSrc="/images/shop_page.jpg"
      :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Cart' }]"
    />
    <div class="cart__container">
      <div class="cart__content">
        <p v-if="cartItems.length === 0" class="cart__empty-message">
          There is no products in cart
        </p>
        <div v-else class="cart__items">
          <div class="cart__item-header">
            <p></p>
            <p class="cart__item-col cart__item-col--product">Product</p>
            <p class="cart__item-col cart__item-col--price">Price</p>
            <p class="cart__item-col cart__item-col--quantity">Quantity</p>
            <p class="cart__item-col cart__item-col--subtotal">Subtotal</p>
          </div>

          <div v-for="(item, index) in cartItems" :key="index" class="cart__item">
            <div
              style="display: flex; align-items: center; gap: 20px"
              class="cart__item-col cart__item-col--product"
            >
              <img :src="item.image" alt="product" class="cart__item-image" />
              <router-link to="/product" class="cart__item-name">{{ item.name }}</router-link>
            </div>
            <p class="cart__item-col cart__item-col--price">{{ item.price }}</p>
            <p class="cart__item-col cart__item-col--quantity">{{ item.quantity || 1 }}</p>
            <p class="cart__item-col cart__item-col--subtotal">Rs. {{ calcSubtotal(item) }}</p>
            <span class="cart__item-remove" @click="removeFromCart(index)">
              <img src="/public/images/Pin.png" alt="" />
            </span>
          </div>
        </div>

        <div class="cart__summary">
          <p class="cart__summary-title">Cart Totals</p>

          <div class="cart__summary-content">
            <div class="cart__summary-row">
              <div class="cart__summary-item">
                <p class="cart__summary-label">Subtotal</p>
                <p class="cart__summary-value">Rs. {{ cartTotal }}</p>
              </div>
              <div class="cart__summary-item">
                <p class="cart__summary-label">Total</p>
                <p class="cart__summary-value cart__summary-value--total">Rs. {{ cartTotal }}</p>
              </div>
            </div>
          </div>

          <router-link to="/checkout" class="cart__checkout-link">Checkout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import { useCartStore } from '@/stores/cart'

const { cartItems, cartTotal, removeFromCart } = useCartStore()
const calcSubtotal = (item) => {
  const price = parseInt(String(item.price).replace(/[^\d]/g, '')) || 0
  const qty = item.quantity || 1
  return price * qty
}
</script>

<style lang="scss" scoped>
@import url('@/assets/base/reset.scss');
@import url('@/assets/pages/cart-view.scss');
@import url('@/assets/pages/shop-view.scss');
</style>
