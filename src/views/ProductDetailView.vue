<template>
  <div class="product-detail-wrapper">
    <nav class="product-detail__breadcrumb">
      <div class="product-detail__next">
        <router-link class="product-detail__breadcrumb-link" to="/">
          Home
          <img src="/public/images/Right arrow.png" alt="" />
        </router-link>

        <router-link class="product-detail__breadcrumb-link" to="/shop">
          Shop
          <img src="/public/images/Right arrow.png" alt="" />
        </router-link>

        <span class="product-detail__breadcrumb-currents"
          ><img src="/public/images/Column.png" alt=""
        /></span>
        <span class="product-detail__breadcrumb-current">Asgaard sofa</span>
      </div>
    </nav>

    <div class="product-detail">
      <div class="product-detail__main">
        <div class="product-gallery">
          <img class="product-gallery__main-image" src="/images/Muggo_img.png" alt="Asgaard sofa" />
          <div class="product-gallery__thumbnails">
            <div class="product-gallery__small">
              <img src="/public/images/Product.png" class="product-gallery__thumbnail" />
              <img src="/public/images/Product-sofa.png" class="product-gallery__thumbnail" />
              <img src="/public/images/Stuart-sofa.png" class="product-gallery__thumbnail" />
              <img src="/public/images/Maya-sofa.png" class="product-gallery__thumbnail" />
            </div>
          </div>
        </div>

        <div class="product-info">
          <h1 class="product-info__title">Asgaard sofa</h1>
          <p class="product-info__price">Rp 250.000,00</p>

          <div class="product-info__rating">
            <img src="/public/images/Star.png" alt="" />
            <img src="/public/images/Star.png" alt="" />
            <img src="/public/images/Star.png" alt="" />
            <img src="/public/images/Star.png" alt="" />
            <span class="product-info__review-count">
              <img src="/public/images/Column.png" alt="" />
              (5 Customer Review)
            </span>
          </div>

          <p class="product-info__description">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>

          <div class="product-info__colors">
            <p class="product-info__colors-label">Colors</p>
            <div class="product-info__colors-list">
              <span class="product-info__color product-info__color--yellow"></span>
              <span class="product-info__color product-info__color--black"></span>
              <span class="product-info__color product-info__color--purple"></span>
            </div>
          </div>

          <div class="product-info__actions">
            <div class="product-info__quantity">
              <button class="product-info__quantity-btn">-</button>
              <span class="product-info__quantity-value">1</span>
              <button class="product-info__quantity-btn">+</button>
            </div>
            <button class="product-info__add-to-cart">Add To Cart</button>
            <button class="product-info__compare">+ Compare</button>
          </div>

          <div class="product-info__fake"></div>

          <div class="product-info__meta">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
            <div class="product-info__socials">
              <p>Share:</p>
              <img src="/public/images/Facebook.png" alt="Facebook" />
              <img src="/public/images/Inta.png" alt="LinkedIn" />
              <img src="/public/images/Twitter.png" alt="Twitter" />
            </div>
          </div>
        </div>
      </div>

      <div class="product-tabs">
        <div class="product-tabs__headers">
          <button class="product-tabs__tab product-tabs__tab--active">Description</button>
          <button class="product-tabs__tab">Additional Information</button>
          <button class="product-tabs__tab">Reviews [5]</button>
        </div>
        <div class="product-tabs__content">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
            speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
            the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
            engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is
            a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
            and extended highs for a sound that is both articulate and pronounced. The analogue
            knobs allow you to fine tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.
          </p>
          <div class="product-tabs__images">
            <img
              src="/public/images/Cloud sofa three seater + ottoman_2 1.png"
              class="product-tabs__image"
            />
            <img
              src="/public/images/Cloud sofa three seater + ottoman_1 1.png"
              class="product-tabs__image"
            />
          </div>
        </div>
      </div>

      <ProductList title="Related Products" />
    </div>
  </div>
</template>

<script setup>
import ProductList from '@/components/home/ProductList.vue'
</script>

<style lang="scss" scoped>
@import url('@/assets/pages/product-view.scss');
</style>
