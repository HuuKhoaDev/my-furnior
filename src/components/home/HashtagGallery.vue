<template>
  <div class="hashtag">
    <div class="hashtag__header">
      <p class="hashtag__text">Share your setup with</p>
      <h2 class="hashtag__title">#FuniroFurniture</h2>
    </div>
    <div class="hashtag__gallery">
      <div class="hashtag__row hashtag__row--1">
        <div>
          <img style="width: 78px" src="/images/Rectangle 36.png" alt="Image 1" />
          <img src="/images/Rectangle 38.png" alt="Image 2" />
        </div>
        <div>
          <img src="/images/Rectangle 37.png" style="width: 185px" alt="Image 3" />
          <img src="/images/Rectangle 39.png" alt="Image 7" />
        </div>
      </div>
      <div class="hashtag__row hashtag__row--2">
        <img src="/images/Rectangle 40.png" alt="Image 6" />
      </div>
      <div class="hashtag__row hashtag__row--3">
        <div>
          <img src="/images/Rectangle 43.png" alt="Image 4" />
          <img style="width: 100%" src="/images/Rectangle 45.png" alt="Image 5" />
        </div>
        <div>
          <img src="/images/Rectangle 41.png" alt="Image 8" />
          <img src="/images/Rectangle 44.png" alt="Image 9" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hashtag {
  border-bottom: 1px solid #3333332b;
  position: relative;

  &__header {
    padding: 30px 0;
    text-align: center;
    width: 100%;
  }

  &__text {
    font-size: 18px;
    color: #666;
    font-family: Poppins, sans-serif;
  }

  &__title {
    font-size: 36px;
    font-weight: 700;
    color: #2d2d2d;
    font-family: Poppins, sans-serif;
  }

  &__gallery {
    width: 100%;
    display: flex;
    gap: 16px;
    margin: 0 auto;
    align-items: center;
  }

  &__row {
    overflow: hidden;

    &--2 {
      max-width: 259px;
      width: 100%;
      flex-shrink: 0;
    }
  }

  &__row--1 {
    display: grid;
    width: 100%;
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;

    div {
      display: flex;
      align-items: flex-end;
      gap: 16px;

      &:last-child {
        align-items: flex-start;
      }
    }

    img {
      object-fit: cover;
      flex-shrink: 0;

      &:last-child {
        width: 100%;
        flex-shrink: unset;
      }
    }
  }

  &__row--3 {
    display: grid;
    width: 100%;
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;

    div {
      display: flex;
      align-items: flex-end;
      gap: 16px;

      &:last-child {
        align-items: flex-start;
      }
    }
  }
}

@media (max-width: 768px) {
  .hashtag {
    width: 100%;
    padding: 32px;
  }
}
</style>

<script setup></script>
