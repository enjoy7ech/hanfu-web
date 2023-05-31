<template>
  <div class="d-flex justify-content-center">
    <div class="response-content">
      <div class="row">
        <div class="col-12 col-md-6 mt-3 lv-1">
          <div id="banner" class="carousel slide overflow-hidden" style="border-radius: 12px">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#banner" v-for="(b, index) in banner" :data-bs-slide-to="index" :class="[index === 0 && 'active']" :key="index"></button>
            </div>
            <div class="carousel-inner">
              <div :class="['carousel-item', index === 0 && 'active']" v-for="(b, index) in banner" :key="index">
                <img :src="b.url" class="ss-img d-block w-100" style="object-fit: cover" alt="" />
                <span class="fs-6 fs-md-5 text-light f-han" style="position: absolute; bottom: 0; left: 1rem; z-index: 2">
                  {{ b.title }}
                </span>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="col-12 col-md-6 mt-3 lv-1">
          <div class="deco-title d-flex align-items-end mb-3">
            <img src="/img/brand.png" style="height: 40px" alt="" />
            <div class="fs-3 f-han ms-3">热搜资讯</div>
            <div class="fs-5 ms-2">Hot News</div>
          </div>

          <div class="hot-news fs-6 f-han">
            <div v-for="(_, index) in new Array(6).fill()" :key="index" @mouseover="active = index" :class="['li-item', active === index && 'active']">
              <div class="image-box">
                <img :src="`/img/banner/banner${index}.jpg`" alt="" />
              </div>
              <span class="number">{{ index + 1 }}</span>
              <span class="text"> 汉服产业春风得意 </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="deco-title d-flex align-items-end">
          <img src="/img/brand.png" style="height: 40px" alt="" />
          <div class="fs-3 f-han ms-3">要点资讯</div>
          <div class="fs-5 ms-2">Key News</div>
        </div>
        <div class="col-12 col-md-4 mt-3" v-for="(_, i) in 12" :key="i">
          <div class="card shadow">
            <img class="left-img shadow" src="/img/banner/banner2.jpg" alt="" />
            <div class="d-flex flex-column justify-content-center f-han fs-6 fs-md-5 ms-4 p-4">
              <div>汉服产业春风得意，总规模超十亿 周边产业多点开花</div>
              <div class="f-han fs-6 fs-md-5 ms-auto mt-auto">点击浏览</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  const active = ref(0);
</script>
<style lang="less" scoped>
  .hot-news {
    * {
      transition: all 0.5s;
    }
    .active {
      &.li-item {
      }
      .image-box {
        height: 100% !important;
        &::after {
          opacity: 1 !important;
        }
      }

      .number {
        z-index: 1;
        color: #fff;
      }
      .text {
        z-index: 1;
        color: #fff;
      }
    }

    .li-item {
      position: relative;
      height: 1.5rem;
      .image-box {
        height: 0;
        border-radius: 12px;
        overflow: hidden;
        width: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &::after {
          content: "";
          position: absolute;
          opacity: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2rem;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.493));
          border-radius: 0 0 12px 12px;
        }
      }
      .number {
        margin-left: 0.5rem;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .text {
        margin-left: 1.5rem;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    .li-item:nth-of-type(1) {
      .number {
        color: rgb(255, 0, 0);
      }
    }

    .li-item:nth-of-type(2) {
      .number {
        color: rgb(255, 85, 0);
      }
    }

    .li-item:nth-of-type(3) {
      .number {
        color: rgb(255, 153, 0);
      }
    }
  }

  .card {
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    border: none;
    .left-img {
      border-radius: 12px;
      width: 60%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 1200px) {
    .lv-1 {
      height: 300px;
      .ss-img {
        height: 300px;
      }
    }
    .active {
      &.li-item {
        height: 142px !important;
      }
    }
    .card {
      height: 100px;
    }
  }

  @media (min-width: 1200px) {
    .lv-1 {
      height: 500px;
      .ss-img {
        height: 500px;
      }
    }

    .active {
      &.li-item {
        height: 343px !important;
      }
    }

    .card {
      height: 200px;
    }
  }
</style>
