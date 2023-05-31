<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <div id="banner" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#banner"
            v-for="(b, index) in banner"
            :data-bs-slide-to="index"
            :class="[index === 0 && 'active']"
            :key="index"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            :class="['carousel-item', index === 0 && 'active']"
            v-for="(b, index) in banner"
            :key="index"
          >
            <img
              :src="b.url"
              class="d-block w-100"
              style="aspect-ratio: 1/0.618; object-fit: cover"
              alt=""
            />
            <span
              class="fs-6 fs-md-5 text-light f-han"
              style="position: absolute; bottom: 0; left: 1rem; z-index: 2"
            >
              {{ b.title }}
            </span>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#banner"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#banner"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="col-6 col-md-6"></div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "h-c-f",
});

const banner = reactive([
  { url: "/img/banner/banner0.jpg", title: "少年志｜薪火相传" },
  { url: "/img/banner/banner1.jpg", title: "少年志｜薪火相传" },
  { url: "/img/banner/banner2.jpg", title: "少年志｜薪火相传" },
  { url: "/img/banner/banner3.jpg", title: "少年志｜薪火相传" },
  { url: "/img/banner/banner4.jpg", title: "少年志｜薪火相传" },
]);
</script>
