<template>
  <div>
    <PageBanner
      title="Checkout"
      imageSrc="/images/shop_page.jpg"
      :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'Checkout' }]"
    />

    <div class="checkout">
      <div class="checkout__container">
        <form class="checkout__form">
          <div class="checkout__form-left">
            <h3 class="checkout__form-title">Billing details</h3>

            <div class="checkout__form-row">
              <div class="checkout__form-group">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" name="name" required />
              </div>

              <div class="checkout__form-group">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" required />
              </div>
            </div>

            <div class="checkout__form-group">
              <label for="companyname">Company Name (Optional)</label>
              <input type="text" id="companyname" name="companyname" />
            </div>

            <div class="checkout__form-group">
              <label for="region">Country / Region</label>
              <select name="region" id="region">
                <option value="1" selected>Lanka</option>
                <option value="2">Ikinci Olke</option>
                <option value="3">Ucuncu Olke</option>
              </select>
            </div>

            <div class="checkout__form-group">
              <label for="address">Street Address</label>
              <input type="text" id="address" name="address" required />
            </div>

            <div class="checkout__form-group">
              <label for="city">Town / City</label>
              <input type="text" id="city" name="city" required />
            </div>

            <div class="checkout__form-group">
              <label for="province">Province</label>
              <select name="province" id="province">
                <option value="1" selected>Western Province</option>
                <option value="2">Ikinci Province</option>
                <option value="3">Ucuncu Province</option>
              </select>
            </div>

            <div class="checkout__form-group">
              <label for="zipcode">Zip Code</label>
              <input type="text" id="zipcode" name="zipcode" required />
            </div>

            <div class="checkout__form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div class="checkout__form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div class="checkout__form-group">
              <input
                type="text"
                id="additional"
                name="additional"
                placeholder="Additional information"
              />
            </div>
          </div>

          <div class="checkout__form-right">
            <div class="checkout__content">
              <div class="checkout__order-summary">
                <div class="checkout__order-header">
                  <p>Product</p>
                  <p>Subtotal</p>
                </div>

                <div class="checkout__order-items">
                  <div v-for="(item, index) in cartItems" :key="index" class="checkout__order-item">
                    <div class="checkout__order-item-first">
                      <p class="checkout__order-item-name">
                        {{ item.name }}
                      </p>
                      <p class="checkout__order-item-core">× {{ item.quantity || 1 }}</p>
                    </div>
                    <p class="checkout__order-item-price">Rs. {{ item.price }}</p>
                  </div>
                </div>

                <div class="checkout__order-total">
                  <div class="checkout__order-row">
                    <p>Subtotal</p>
                    <p>Rs. 0</p>
                  </div>

                  <div class="checkout__order-row">
                    <p>Total</p>
                    <p class="checkout__total-price">Rs. {{ cartTotal }}</p>
                  </div>
                </div>
              </div>

              <div class="checkout__payments">
                <div class="checkout__payment-method">
                  <label
                    :class="{
                      'checkout__payment-label': true,
                      'checkout__payment-label--selected': selectedPayment === 'bank',
                    }"
                  >
                    <input
                      type="radio"
                      id="bank"
                      value="bank"
                      name="payment"
                      v-model="selectedPayment"
                    />
                    Direct Bank Transfer
                  </label>

                  <p class="checkout__payment-desc" v-if="selectedPayment === 'bank'">
                    Make your payment directly into our bank account. Please use your Order ID as
                    the payment reference. Your order will not be shipped until the funds have
                    cleared in our account.
                  </p>
                </div>
                <div class="checkout__payment-method">
                  <label
                    :class="{
                      'checkout__payment-label': true,
                      'checkout__payment-label--selected': selectedPayment === 'cash',
                    }"
                  >
                    <input
                      type="radio"
                      id="cash"
                      value="cash"
                      name="payment"
                      v-model="selectedPayment"
                    />
                    Cash On Delivery
                  </label>

                  <p class="checkout__payment-desc" v-if="selectedPayment === 'cash'">
                    Make your payment directly into our bank account. Please use your Order ID as
                    the payment reference. Your order will not be shipped until the funds have
                    cleared in our account.
                  </p>
                </div>
              </div>

              <div class="checkout__privacy-note">
                <p>
                  Your personal data will be used to support your experience throughout this
                  website, to manage access to your account, and for other purposes described in our
                  <strong>privacy policy</strong>.
                </p>
              </div>

              <div class="checkout__place-order">
                <button class="checkout__place-order-btn">Place order</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <FeatureSection />
    </div>
  </div>
</template>
<script setup>
import PageBanner from '@/components/PageBanner.vue'
import FeatureSection from '@/shop/FeatureSection.vue'
import { useCartStore } from '@/stores/cart'
import { ref } from 'vue'
const selectedPayment = ref('')
const { cartItems, cartTotal } = useCartStore()
</script>

<style lang="scss" scoped>
@import url('@/assets/pages/checkout-view.scss');
</style>
