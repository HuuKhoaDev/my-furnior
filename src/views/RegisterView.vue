<template>
  <div class="auth" :class="{ 'auth--login': isLogin }">
    <div class="auth__container">
      <div class="auth__background">
        <img src="/images/top_of_page.png" alt="Background" />
      </div>

      <div class="auth__forms-wrapper">
        <div class="auth__forms">
          <div class="auth__form-panel">
            <h2 class="auth__form-title">Signup</h2>
            <form class="auth__form-body" @submit.prevent="handleRegister">
              <input v-model="registerEmail" type="email" placeholder="Email" required />
              <input v-model="registerPassword" type="password" placeholder="Password" required />
              <input
                v-model="registerConfirm"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <button type="submit">Sign up</button>
              <p class="auth__switch-text">
                Already have an account? <span @click="isLogin = true">Login</span>
              </p>
            </form>
          </div>

          <div class="auth__form-panel">
            <h2 class="auth__form-title">Login</h2>
            <form class="auth__form-body" @submit.prevent="handleLogin">
              <input v-model="loginEmail" type="email" placeholder="Email" required />
              <input v-model="loginPassword" type="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <p class="auth__switch-text">
                Don’t have an account? <span @click="isLogin = false">Sign up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLogin = ref(false)

const registerEmail = ref('')
const registerPassword = ref('')
const registerConfirm = ref('')

const loginEmail = ref('')
const loginPassword = ref('')

function handleRegister() {
  if (!registerEmail.value || !registerPassword.value) {
    alert('Vui lòng nhập đầy đủ')
    return
  }

  if (registerPassword.value !== registerConfirm.value) {
    alert('Mật khẩu không khớp')
    return
  }

  const user = {
    email: registerEmail.value,
    password: registerPassword.value,
  }

  localStorage.setItem('user', JSON.stringify(user))
  alert('Đăng ký thành công!')
  isLogin.value = true
}

function handleLogin() {
  const storedUser = JSON.parse(localStorage.getItem('user'))

  if (!storedUser) {
    alert('Chưa có tài khoản nào được đăng ký')
    return
  }

  if (loginEmail.value === storedUser.email && loginPassword.value === storedUser.password) {
    alert('Đăng nhập thành công!')
    router.push('/')
  } else {
    alert('Sai email hoặc mật khẩu')
  }
}
</script>

<style scoped lang="scss">
@import url('@/assets/pages/register-view.scss');
</style>
