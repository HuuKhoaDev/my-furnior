<template>
  <div class="pagination" v-if="totalPages > 0">
    <div class="pagination__buttons">
      <button
        v-for="page in totalPages"
        :key="page"
        :class="['pagination__button', { 'pagination__button--active': currentPage === page }]"
        @click="changePage(page)"
      >
        {{ page }}
      </button>

      <button
        class="pagination__button pagination__button--next"
        @click="goNextPage"
        :disabled="currentPage >= totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 1,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => {
  return Math.ceil(props.total / props.limit)
})

const changePage = (page) => {
  emit('update:currentPage', page)
}

const goNextPage = () => {
  if (props.currentPage < totalPages.value) {
    emit('update:currentPage', props.currentPage + 1)
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  &__buttons {
    display: flex;
    gap: 28px;
  }

  &__button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background-color: #f9efe5;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover:not(:disabled) {
      background-color: #b88e2f;
      color: #fff;
    }

    &:disabled {
      background-color: #ddd;
      cursor: not-allowed;
    }

    &--active {
      background-color: #b88e2f;
      color: #fff;
    }
  }
}
</style>
