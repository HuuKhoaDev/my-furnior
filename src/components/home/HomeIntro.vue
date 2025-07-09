<template>
  <div class="homepage__intro">
    <div class="homepage__content">
      <div class="homepage__introduction">
        <div class="introduction">
          <div class="introduction__header">
            <small class="introduction__subtitle">New Arrival</small>
            <h2 class="introduction__title">
              Discover Our <br />
              New Collection
            </h2>
            <p class="introduction__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis.
            </p>
            <a href="#" class="introduction__button">BUY NOW</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homepage {
  overflow: hidden;

  &__content {
    background: url('/images/top_of_page.png') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 120px 80px;
    font-family: Poppins, sans-serif;
  }

  .introduction {
    max-width: 643px;
    width: 100%;

    &__header {
      background-color: #fff3e3;
      padding: 50px;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }

    &__subtitle {
      color: #000000;
      font-size: 16px;
      font-weight: 600;
      padding: 8px 0;
      letter-spacing: 2px;
    }

    &__title {
      font-size: 50px;
      color: #b88e2f;
      font-weight: 700;
      line-height: 1.3;
    }

    &__description {
      padding-bottom: 48px;

      color: rgb(51 51 51);
      font-size: 18px;
      font-weight: 500;
      color: #333333;
      line-height: 28px;
      max-width: 600px;
    }

    &__button {
      display: inline-block;
      background-color: #b88e2f;
      color: white;
      padding: 20px 64px;
      font-weight: 700;
      font-size: 15px;
      border: none;
      transition: background-color 0.3s ease;
      border: 1px solid #fff;
    }

    &__button:hover {
      background-color: #fff3e3;
      color: #b88e2f;
      border: 1px solid #b88e2f;
    }
  }
}
</style>
