<template>
  <div class="blog-page">
    <PageBanner
      title="About"
      imageSrc="/images/shop_page.jpg"
      :breadcrumbs="[{ text: 'Home', to: '/' }, { text: 'About' }]"
    />

    <div class="about-container">
      <div class="about">
        <div class="about-left">
          <div class="blog-list">
            <div class="blog-item">
              <img src="/public/images/Compute.png" alt="about-page" />
              <div class="information">
                <span><img src="/images/icon_left.png" alt="user" /> Admin </span>
                <span><img src="/images/calendar.png" alt="calendar" /> 19 June 2025</span>
                <span><img src="/images/tag.png" alt="tag" /> Wood </span>
              </div>
              <div class="describe">
                <h3>Exploring new ways of decorating</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                </p>
                <a href="">Read more</a>
              </div>
            </div>

            <div class="blog-item">
              <img src="/images/pen.png" alt="Pen Image" />
              <div class="information">
                <span><img src="/images/icon_left.png" alt="user" /> Admin </span>
                <span><img src="/images/calendar.png" alt="calendar" /> 19 June 2025</span>
                <span><img src="/images/tag.png" alt="tag" /> Wood </span>
              </div>
              <div class="describe">
                <h3>Exploring new ways of decorating</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                </p>
                <a href="">Read more</a>
              </div>
            </div>

            <div class="blog-item">
              <img src="/images/Cafe.jpg" alt="about-page" />
              <div class="information">
                <span><img src="/images/icon_left.png" alt="user" /> Admin </span>
                <span><img src="/images/calendar.png" alt="calendar" /> 19 June 2025</span>
                <span><img src="/images/tag.png" alt="tag" /> Wood </span>
              </div>
              <div class="describe">
                <h3>Exploring new ways of decorating</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                </p>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>

        <div class="about-right">
          <div class="search-wrapper">
            <img src="/images/search_icon.png" alt="search" />
            <input type="text" id="search" name="search" />
          </div>
          <div class="classify">
            <div class="categories">
              <p>Categories</p>
              <div class="category-list">
                <div class="list">
                  <span>Crafts</span>
                  <span>2</span>
                </div>
              </div>
              <div class="category-list">
                <div class="list">
                  <span>Design</span>
                  <span>8</span>
                </div>
              </div>
              <div class="category-list">
                <div class="list">
                  <span>Handmade</span>
                  <span>7</span>
                </div>
              </div>
            </div>

            <div class="posts">
              <p>Recent Posts</p>
              <div class="post-recent">
                <div class="recent-image">
                  <img src="/images/notebook.png" alt="" />
                  <div class="post-title">
                    <span>Going all-in with millennial design</span>
                    <span>19 June 2025</span>
                  </div>
                </div>
                <div class="recent-image">
                  <img src="/images/read_more.jpg" alt="" />
                  <div class="post-title">
                    <span>Going all-in with millennial design</span>
                    <span>19 June 2025</span>
                  </div>
                </div>
                <div class="recent-image">
                  <img src="/images/glass.png" alt="" />
                  <div class="post-title">
                    <span>Going all-in with millennial design</span>
                    <span>19 June 2025</span>
                  </div>
                </div>
                <div class="recent-image">
                  <img src="/images/pen.png" alt="Pen Image" />
                  <div class="post-title">
                    <span>Going all-in with millennial design</span>
                    <span>19 June 2025</span>
                  </div>
                </div>
                <div class="recent-image">
                  <img src="/images/table.png" alt="" />
                  <div class="post-title">
                    <span>Going all-in with millennial design</span>
                    <span>19 June 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductPagination />
    <div class="distance"></div>
    <FeatureSection />
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import FeatureSection from '@/shop/FeatureSection.vue'
import ProductPagination from '@/shop/ProductPagination.vue'
</script>

<style lang="scss" scoped>
@import url('@/assets/pages/about-view.scss');
@import url('@/assets/pages/shop-view.scss');

.distance {
  padding: 50px;
}
</style>
