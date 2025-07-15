<template>
  <div class="page-banner">
    <div class="page-banner__image-wrapper">
      <img :src="imageSrc" :alt="title" class="page-banner__image" />
      <h2 class="page-banner__title">{{ title }}</h2>
      <div class="page-banner__breadcrumbs">
        <template v-for="(item, index) in breadcrumbs">
          <router-link
            v-if="item.to"
            :to="item.to"
            class="page-banner__breadcrumb-link"
            :key="'link-' + index"
          >
            {{ item.text }}
          </router-link>

          <span v-else class="page-banner__breadcrumb-current" :key="'current-' + index">
            {{ item.text }}
          </span>

          <img
            v-if="index < breadcrumbs.length - 1"
            src="/images/dashicons_arrow.png"
            alt="Arrow"
            class="page-banner__breadcrumb-separator"
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
.page-banner {
  position: relative;
  text-align: center;
  color: #000;
  width: 100%;

  &__image-wrapper {
    position: relative;
    width: 100%;
  }

  &__image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    filter: blur(2px) brightness(0.9);
  }

  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-weight: 500;
    color: #000;
    z-index: 2;
  }

  &__breadcrumbs {
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

  &__breadcrumb-link {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__breadcrumb-current {
    color: #000;
    font-weight: 500;
    font-size: 20px;
  }

  &__breadcrumb-separator {
    width: 16px;
    height: auto;
  }
}
</style>
