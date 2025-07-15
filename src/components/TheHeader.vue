<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__left">
        <router-link to="/" class="header__logo">
          <img src="/public/images/Logo_left.png" alt="" />
        </router-link>
        <h2 class="header__logo-title">Furnior</h2>
      </div>

      <div class="header__menu-toggle">
        <button class="header__toggle-btn" @click="isMenuOpen = !isMenuOpen">
          <img src="/images/bullet-menu-icon-free-vector.jpg" alt="Menu" />
        </button>
      </div>

      <div class="header__dropdown" :class="{ 'is-open': isMenuOpen }">
        <div class="header__menu">
          <ul class="header__menu-list">
            <li class="header__menu-item">
              <router-link to="/" class="header__menu-link">Home</router-link>
            </li>
            <li class="header__menu-item">
              <router-link to="/shop" class="header__menu-link">Shop</router-link>
            </li>
            <li class="header__menu-item">
              <router-link to="/about" class="header__menu-link">About</router-link>
            </li>
            <li class="header__menu-item">
              <router-link to="/contact" class="header__menu-link">Contact</router-link>
            </li>
          </ul>
        </div>

        <div class="header__right">
          <div class="header__action">
            <ul class="header__action-list">
              <li class="header__action-item">
                <button class="header__action-btn">
                  <router-link to="/register" class="header__action-link">
                    <img src="/images/icon_right.png" alt="vector" />
                  </router-link>
                </button>
              </li>

              <li class="header__action-item">
                <router-link to="/sreach" class="header__action-link">
                  <img class="header__icon" src="/images/search_icon.png" alt="search" />
                </router-link>
              </li>

              <li class="header__action-item">
                <button class="header__action-btn">
                  <router-link to="/like" class="header__action-link header__wishlist-icon">
                    <img src="/images/heart_icon.png" alt="heart" />
                    <span class="header__wishlist-count" v-if="wishlistStore.wishlist.length > 0">
                      {{ wishlistStore.wishlist.length }}
                    </span>
                  </router-link>
                </button>
              </li>

              <li class="header__action-item">
                <button class="header__action-btn" @click="showCart = !showCart">
                  <span class="header__cart">
                    <router-link to="#" class="header__action-link">
                      <img src="/images/cart_icon.png" alt="cart" />
                    </router-link>
                    <span id="cart-count" class="header__cart-count">{{ cartItems.length }}</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <TheCart v-if="showCart" :showCart="showCart" @update:showCart="showCart = $event" />
  </header>
</template>

<script setup>
import TheCart from './TheCart.vue'
import router from '@/router'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'

const wishlistStore = useWishlistStore()

const { cartItems } = useCartStore()
console.log(router)
const showCart = ref(false)

const isMenuOpen = ref(false)
</script>

<style lang="scss" scoped>
@import url('@/assets/components/the-header.scss');
@import url('@/assets/base/reset.scss');

.header__wishlist-icon {
  position: relative;
  display: inline-block;
}

.header__wishlist-count {
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #b88e2f;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: bold;
}

@media (max-width: 768px) {
  .header {
    &__nav {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      height: auto;
    }

    &__left {
      width: 100%;
    }

    &__logo {
      height: 28px;
    }

    &__menu-toggle {
      display: flex;
      justify-content: flex-end;
    }

    &__toggle-btn {
      background: transparent;
      border: none;
      padding: 0 30px;

      img {
        width: 40px;
        height: 40px;
      }
    }

    &__dropdown {
      display: none;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      &.is-open {
        display: flex;
        position: absolute;
        height: calc(100vh - 100px);
        background-color: white;
        top: 100%;
      }
    }

    &__menu {
      justify-content: center;
    }

    &__menu-list {
      // flex-direction: column;
      // align-items: flex-start;
      // justify-content: center;
      // padding-left: 20px;

      flex-direction: column;
      display: flex;
      justify-content: center;
    }

    &__menu-link {
      font-size: 30px;
    }

    &__right {
      justify-content: center;
      width: 70%;
      padding: 10px;
      background-color: #fff3e3;
      margin-bottom: 20px;
      border-radius: 30px;
    }

    &__action-list {
      gap: 30px;
    }

    &__icon {
      width: 24px;
      height: 20px;
    }
  }
}
</style>
