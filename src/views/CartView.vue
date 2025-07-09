<template>
  <div class="">
    <PageBanner
      title="Cart"
      imageSrc="/images/shop_page.jpg"
      :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Cart' }]"
    />
    <div class="cart-container">
      <div class="cart-container__content">
        <p class="cart-empty-message">There is no products in cart</p>
        <div class="cart-items"></div>

        <div class="cart-summary">
          <p class="cart-summary__title">Cart Totals</p>

          <div class="cart-summary__content">
            <div class="cart-summary__row">
              <div class="cart-summary__item">
                <p class="cart-summary__label">Subtotal</p>
                <p class="cart-summary__value">Rs. 0</p>
              </div>

              <div class="cart-summary__item">
                <p class="cart-summary__label">Total</p>
                <p class="cart-summary__value cart-summary__value--total">Rs. 0</p>
              </div>
            </div>
          </div>
          <a href="./checkout.html">Checkout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
</script>

<style lang="scss" scoped>
@import url('@/assets/base/reset.scss');
@import url('@/assets/pages/cart-view.scss');
@import url('@/assets/pages/shop-view.scss');
</style>
