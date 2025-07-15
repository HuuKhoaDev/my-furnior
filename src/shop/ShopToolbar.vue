<template>
  <div class="toolbar">
    <div class="toolbar-center">
      <div class="shop-toolbar">
        <div class="shop-toolbar-left">
          <div class="toolbar-view-toggle">
            <button class="toolbar-filter-btn">
              <img src="/images/Vector.png" alt="vector" /> Filter
            </button>
            <button class="view-grid active">
              <img src="/images/Vector (2).png" alt="vector2" />
            </button>
            <button class="view-list">
              <img src="/images/Vector (3).png" alt="vector3" />
            </button>
          </div>
          <div class="toolbar-result-count">Showing 1–16 of 32 results</div>
        </div>
      </div>

      <div class="shop-toolbar-right">
        <div class="toolbar-show">
          <span>Show</span>
          <input
            type="number"
            min="1"
            max="100"
            value="0"
            class="input-show-count"
            name="showCount"
          />
        </div>
        <div class="toolbar-sort">
          <span>Sort by</span>
          <select class="sort-select" name="sortOption">
            <option value="default">Default</option>
            <option value="popularity">Second</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  // padding: 32px;
  width: 100%;
}

.toolbar-center {
  max-width: 1236px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.shop-toolbar {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  font-size: 16px;
}

.shop-toolbar-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: row;
  justify-content: space-between;
}

.toolbar-view-toggle {
  display: flex;
  gap: 20px;
  padding: 0 32px 0 0;
}

.toolbar-filter-btn {
  background: none;
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.icon-filter::before {
  content: '\f0b0';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}

.toolbar-view-toggle button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 4px;
  color: #000;
}

.view-grid.active,
.view-list.active {
  color: #000;
  font-weight: bold;
}

.toolbar-result-count {
  font-weight: 500;
}

.shop-toolbar-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.toolbar-show,
.toolbar-sort {
  display: flex;
  align-items: center;
  gap: 17px;
  justify-content: space-between;
  width: 100%;
}

.toolbar-show,
.toolbar-sort span {
  /* margin: 0 16px 0 0; */
  font-size: 20px;
}

.input-show-count {
  /* width: 100%; */
  padding: 4px;
  margin: 0 24px 0 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  background-color: #fff;
}

.sort-select {
  padding: 6px 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

@media (max-width: 768px) {
  .toolbar {
    padding: 32px;
  }
  .toolbar-center {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .shop-toolbar-left {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
