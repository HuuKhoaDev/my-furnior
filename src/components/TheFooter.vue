<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__column">
          <h3 class="footer__logo">Funiro.</h3>
          <p class="footer__address">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Link</h4>
          <ul class="footer__links">
            <li class="footer__link-item"><a class="footer__link" href="">Home</a></li>
            <li class="footer__link-item"><a class="footer__link" href="">Shop</a></li>
            <li class="footer__link-item"><a class="footer__link" href="">About</a></li>
            <li class="footer__link-item">
              <a class="footer__link" href="./contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Help</h4>
          <ul class="footer__links">
            <li class="footer__link-item"><a class="footer__link" href="#">Payment Options</a></li>
            <li class="footer__link-item"><a class="footer__link" href="#">Returns</a></li>
            <li class="footer__link-item"><a class="footer__link" href="#">Privacy Policies</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Newsletter</h4>
          <form class="footer__newsletter">
            <input type="email" class="footer__input" placeholder="Enter Your Email Address" />
            <button type="submit" class="footer__button">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>

    <hr class="footer__divider" />

    <div class="footer__bottom">
      <p class="footer__copyright">2023 funiro. All rights reserved</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('@/assets/components/the-footer.scss');
</style>
