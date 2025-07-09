<template>
  <div class="pagination">
    <div class="pagination-btn">
      <button class="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>Next</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-btn {
  display: flex;
  gap: 28px;
}

.pagination button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #f9efe5;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination button:hover {
  background-color: #b88e2f;
  color: #fff;
}

.pagination button.active {
  background-color: #b88e2f;
  color: #fff;
}
</style>
