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
        <button class="header__toggle-btn">
          <img src="/images/bullet-menu-icon-free-vector.jpg" alt="Menu" />
        </button>
      </div>

      <div class="header__dropdown">
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
                  <router-link to="/like" class="header__action-link">
                    <img src="/images/heart_icon.png" alt="heart" />
                  </router-link>
                </button>
              </li>

              <li class="header__action-item">
                <button class="header__action-btn" @click="showCart = !showCart">
                  <span class="header__cart">
                    <router-link to="#" class="header__action-link">
                      <img src="/images/cart_icon.png" alt="cart" />
                    </router-link>
                    <span id="cart-count" class="header__cart-count">0</span>
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

console.log(router)
const showCart = ref(false)
</script>

<style lang="scss" scoped>
@import url('@/assets/components/the-header.scss');
@import url('@/assets/base/reset.scss');
</style>
