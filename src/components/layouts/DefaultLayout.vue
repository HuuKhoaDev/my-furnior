<template>
  <div class="default-layout">
    <div class="default-layout__header">
      <slot name="header" />
    </div>

    <TheContainer>
      <slot />
    </TheContainer>

    <div class="default-layout__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import TheContainer from '../TheContainer.vue'
</script>

<style lang="scss">
.default-layout {
  padding-top: 82px;
}
</style>
