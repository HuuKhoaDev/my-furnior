<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__header">
        <h3 class="contact__title">Get In Touch With Us</h3>
        <p class="contact__description">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div class="contact__content">
        <div class="contact__info-group">
          <div class="contact__info-item">
            <img src="/images/Address.png" alt="address" class="contact__icon" />
            <div class="contact__info-text">
              <p class="contact__info-title">Address</p>
              <p>
                236 5th SE Avenue, New <br />
                York NY10000, United States
              </p>
            </div>
          </div>

          <div class="contact__info-item">
            <img src="/images/Phone.png" alt="phone" class="contact__icon" />
            <div class="contact__info-text">
              <p class="contact__info-title">Phone</p>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div class="contact__info-item">
            <img src="/public/images/Clock.png" alt="time" class="contact__icon" />
            <div class="contact__info-text">
              <p class="contact__info-title">Working Time</p>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div class="contact__form-wrapper">
          <form class="contact__form">
            <div class="contact__form-group">
              <label for="name" class="contact__label">Your Name</label>
              <input id="name" type="text" placeholder="Abc" class="contact__input" />
            </div>

            <div class="contact__form-group">
              <label for="email" class="contact__label">Email address</label>
              <input id="email" type="email" placeholder="Abc@def.com" class="contact__input" />
            </div>

            <div class="contact__form-group">
              <label for="subject" class="contact__label">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="This is an optional"
                class="contact__input"
              />
            </div>

            <div class="contact__form-group">
              <label for="message" class="contact__label">Message</label>
              <textarea
                id="message"
                placeholder="Hi! I’d like to ask about"
                class="contact__textarea"
              ></textarea>
            </div>

            <button type="submit" class="contact__submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>

    <FeatureSection />
  </div>
</template>

<script setup>
import FeatureSection from '@/shop/FeatureSection.vue'
</script>

<style lang="scss" scoped>
@import url('@/assets/pages/contact-view.scss');
@import url('@/assets/pages/shop-view.scss');
</style>
