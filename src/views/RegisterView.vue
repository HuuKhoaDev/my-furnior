<template>
  <div class="register-page">
    <div class="register">
      <div class="register__background">
        <img src="/images/top_of_page.png" alt="Background" class="register__background-image" />
      </div>

      <div class="register__content">
        <h2 class="register__title">Signup</h2>

        <div class="register__form-wrapper">
          <form class="register__form">
            <div class="register__group">
              <div class="register__field">
                <label for="email" class="register__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="register__input"
                  placeholder="Type your email"
                  required
                />
              </div>

              <div class="register__field">
                <label for="password" class="register__label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="register__input"
                  placeholder="Type your password"
                  required
                />
              </div>

              <div class="register__field">
                <label for="confirm" class="register__label">Confirm Password</label>
                <input
                  type="password"
                  id="confirm"
                  name="confirm"
                  class="register__input"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button type="submit" class="register__button">Sign up</button>
            </div>
          </form>

          <div class="register__redirect">
            <span class="register__redirect-text">Already have an account?</span>
            <a href="/login.html" class="register__redirect-link">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('@/assets/pages/register-view.scss');
</style>
