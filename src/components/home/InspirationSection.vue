<template>
  <div class="inspiration">
    <div class="inspiration__content">
      <h3 class="inspiration__title">50+ Beautiful rooms inspiration</h3>
      <p class="inspiration__description">
        Our designer already made a lot of beautiful prototipe of rooms<br />
        that inspire you
      </p>
      <button class="inspiration__button">Explore More</button>
    </div>
    <div class="inspiration__carousel carousel">
      <button class="carousel__arrow carousel__arrow--left">&#10094;</button>

      <div class="carousel__image">
        <img src="/images/Rectangle_img.png" alt="Room 1" />
        <div class="carousel__caption">
          <small class="carousel__caption-subtitle">1 - Bed Room</small>
          <div class="carousel__caption-title">
            <strong>Inner Peace</strong>
            <button class="carousel__caption-arrow">&#8594;</button>
          </div>
        </div>
      </div>

      <div class="carousel__image carousel__image--hidden">
        <img src="/images/Rectangle 25.png" alt="Room 2" />
      </div>

      <button class="carousel__arrow carousel__arrow--right">&#10095;</button>

      <div class="carousel__dots">
        <span class="carousel__dot-wrapper"
          ><span class="carousel__dot carousel__dot--active"></span
        ></span>
        <span class="carousel__dot-wrapper"><span class="carousel__dot"></span></span>
        <span class="carousel__dot-wrapper"><span class="carousel__dot"></span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inspiration {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdf8f2;
  padding: 40px 80px;
  padding-right: 0;
  width: 100%;
  max-width: 1440px;

  &__content {
    flex: 1;
    padding-right: 40px;
  }

  &__title {
    font-size: 40px;
    font-weight: bold;
    color: #2d2d2d;
    font-family: Poppins, sans-serif;
    word-wrap: break-word;
    padding-bottom: 4px;
  }

  &__description {
    font-weight: 500;
    font-size: 16px;
    color: #616161;
    padding-bottom: 24px;
    font-family: Poppins, sans-serif;
  }

  &__button {
    background: #c09747;
    color: #fff;
    padding: 12px 40px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    max-width: 200px;
    width: 100%;
    border: 1px solid transparent;

    &:hover {
      background: #fdf8f2;
      color: #c09747;
      border: 1px solid #c09747;
    }
  }
}

.carousel {
  position: relative;
  flex: 2;
  display: flex;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding: 44px 0;

  &__arrow {
    background: #fff;
    color: #f9a825;
    border: 1px solid #ddd;
    width: 40px;
    border-radius: 50%;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    z-index: 2;

    &--left {
      left: -30px;
    }

    &--right {
      right: 30px;
    }
  }

  &__image {
    width: 100%;
    position: relative;

    // &--hidden {
    //   display: none;
    // }

    img {
      width: 100%;
      max-width: 404px;
      display: block;
    }
  }

  &__caption {
    position: absolute;
    bottom: 20px;
    left: 30px;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    border-radius: 6px;

    &-subtitle {
      font-size: 14px;
      color: #555;
    }

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      gap: 10px;
    }

    &-arrow {
      background: #c09747;
      color: white;
      border: none;
      padding: 7px 12px;
      cursor: pointer;
    }
  }

  &__dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }

  &__dot-wrapper {
    width: 30px;
    height: 30px;
    margin: 0 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__dot {
    height: 13px;
    width: 13px;
    background-color: #ccc;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s;

    &--active {
      background-color: #c09747;
    }
  }
}
</style>
