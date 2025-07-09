<template>
  <DefaultLayout>
    <template #header>
      <TheHeader />
    </template>

    <router-view />

    <template #footer>
      <TheFooter />
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from './components/layouts/DefaultLayout.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>
