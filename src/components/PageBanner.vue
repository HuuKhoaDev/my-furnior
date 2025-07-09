<template>
  <div class="banner">
    <div class="banner-image-wrapper">
      <img :src="imageSrc" :alt="title" class="banner-image" />
      <h2 class="banner-title">{{ title }}</h2>
      <div class="banner-breadcrumbs">
        <template v-for="(item, index) in breadcrumbs">
          <router-link v-if="item.to" :to="item.to" class="breadcrumb-link" :key="'link-' + index">
            {{ item.text }}
          </router-link>
          <span v-else class="breadcrumb-current" :key="'current-' + index">
            {{ item.text }}
          </span>
          <img
            v-if="index < breadcrumbs.length - 1"
            src="/images/dashicons_arrow.png"
            alt="Arrow"
            class="breadcrumb-separator"
            :key="'separator-' + index"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const { title, imageSrc, breadcrumbs } = defineProps({
  title: String,
  imageSrc: String,
  breadcrumbs: Array,
})
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  text-align: center;
  color: #000;
  width: 100%;
}

.banner-image-wrapper {
  position: relative;
  width: 100%;
}

.banner-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  filter: blur(2px) brightness(0.9);
}

.banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 500;
  color: #000000;
  z-index: 2;
}

.banner-breadcrumbs {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000;
  z-index: 2;
  font-size: 16px;
  font-weight: 500;
}

.breadcrumb-link {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}

.breadcrumb-separator {
  width: 16px;
  height: auto;
}

.breadcrumb-current {
  color: #000;
  font-weight: 500;
  font-size: 20px;
}
</style>
