<template>
  <div id="cart-sidebar" :class="{ 'cart-sidebar--visible': showCart }" class="cart-sidebar">
    <div class="cart-sidebar__content">
      <div class="cart-sidebar__header">
        <h2 class="cart-sidebar__title">Shopping Cart</h2>
        <button class="cart-sidebar__close" @click="$emit('update:showCart', false)">×</button>
      </div>
      <div class="cart-sidebar__body">
        <p class="cart-sidebar__empty-message">There is no products in cart</p>
      </div>
      <div class="cart-sidebar__footer">
        <div class="cart-sidebar__subtotal">
          <span class="cart-sidebar__label">Subtotal</span>
          <span class="cart-sidebar__value">Rs. 0</span>
        </div>
        <div class="cart-sidebar__actions">
          <router-link to="/cart" style="width: 100%">
            <button class="cart-sidebar__button">
              <router-link to="/cart">Cart</router-link>
            </button>
          </router-link>
          <button class="cart-sidebar__button">
            <router-link to="/checkout">Checkout</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  showCart: Boolean,
})
defineEmits(['update:showCart'])
</script>

<style lang="scss" scoped>
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 447px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px 32px;
  z-index: 9999;
  transform: translateX(100%);
  transition: transform 0.3s ease;

  &--visible {
    transform: translateX(0);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    position: relative;
    padding-bottom: 26px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #d9d9d9;
    }
  }

  &__title {
    margin: 0;
  }

  &__close {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
  }

  &__body {
    display: flex;
    flex-direction: column;
    height: 60vh;
    font-size: 20px;
    color: #666;
    text-align: center;
    margin: 24px 0;
    overflow-y: auto;
  }

  &__empty-message {
    margin: 0;
  }

  &__footer {
    padding-top: 20px;
  }

  &__subtotal {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    color: #b88e2f;
    padding: 24px 0;
    border-bottom: 1px solid #ccc;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px;
  }

  &__button {
    padding: 8px;
    border: 1px solid black;
    background: none;
    cursor: pointer;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 400;
    width: 100%;

    a {
      color: black;
      text-decoration: none;
    }

    &:hover {
      background-color: white;
      color: #b88e2f;
      border-color: #b88e2f;

      a {
        color: #b88e2f;
      }
    }
  }
}
</style>
