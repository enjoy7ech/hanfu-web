<template>
  <div class="d-flex flex-column align-items-center">
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
          <img :src="b.url" class="banner-image d-block w-100" alt="" />
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

    <div class="response-content">
      <div class="d-flex justify-content-between my-4">
        <div
          class="d-flex flex-1 p-2 flex-column align-items-center"
          @click="$router.push('/news')"
        >
          <div class="hf-btn">
            <img src="/img/hf/hf1.png" alt="" />
          </div>
          <div class="mt-3 f-han fs-6">汉服资讯</div>
        </div>
        <div class="d-flex flex-1 p-2 flex-column align-items-center">
          <div class="hf-btn">
            <img src="/img/hf/hf2.png" alt="" />
          </div>
          <div class="mt-3 f-han fs-6">活动锦集</div>
        </div>
        <div class="d-flex flex-1 p-2 flex-column align-items-center">
          <div class="hf-btn">
            <img src="/img/hf/hf3.png" alt="" />
          </div>
          <div class="mt-3 f-han fs-6">汉服百科</div>
        </div>
        <div class="d-flex flex-1 p-2 flex-column align-items-center">
          <div class="hf-btn">
            <img src="/img/hf/hf4.png" alt="" />
          </div>
          <div class="mt-3 f-han fs-6">汉服知识</div>
        </div>
        <div class="d-flex flex-1 p-2 flex-column align-items-center">
          <div class="hf-btn">
            <img src="/img/hf/hf5.png" alt="" />
          </div>
          <div class="mt-3 f-han fs-6">联系合作</div>
        </div>
      </div>

      <div class="mb-3">
        <div class="deco-title d-flex align-items-end mb-3">
          <img src="/img/brand.png" style="height: 40px" alt="" />

          <div class="fs-3 f-han ms-3">汉服资讯</div>

          <div class="fs-5 ms-2">Hanfu News</div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="card flex-fil mb-4 overflow-hidden">
              <div
                style="background-image: url(/img/temp/1.jpg)"
                class="card-img-top"
              ></div>

              <div class="card-body">
                <div class="card__info f-han fs-6">
                  聚焦消费热点 | 汉服火出圈 消费风头劲
                </div>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card flex-fill mb-4 overflow-hidden">
              <div
                style="background-image: url(/img/temp/2.jpg)"
                class="card-img-top"
              ></div>

              <div class="card-body">
                <div class="card__info f-han fs-6">
                  唐装汉服轻舞 激发文旅融合新活力
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-6">
            <div class="card flex-fill mb-4 overflow-hidden">
              <div
                style="background-image: url(/img/temp/3.jpg)"
                class="card-img-top"
              ></div>

              <div class="card-body">
                <div class="card__info f-han fs-6">
                  聚焦消费热点 | 汉服火出圈 消费风头劲
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-6">
            <div class="card flex-fill mb-4 overflow-hidden">
              <div
                style="background-image: url(/img/temp/4.jpg)"
                class="card-img-top"
              ></div>

              <div class="card-body">
                <div class="card__info f-han fs-6">
                  唐装汉服轻舞 激发文旅融合新活力
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-6">
            <div class="card flex-fill mb-4 overflow-hidden">
              <div
                style="background-image: url(/img/temp/5.jpg)"
                class="card-img-top"
              ></div>

              <div class="card-body">
                <div class="card__info f-han fs-6">
                  唐装汉服轻舞 激发文旅融合新活力
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="card flex-fill mb-4 overflow-hidden">
              <div
                style="background-image: url(/img/temp/6.jpg)"
                class="card-img-top"
              ></div>

              <div class="card-body">
                <div class="card__info f-han fs-6">
                  唐装汉服轻舞 激发文旅融合新活力
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- news -->
      <div class="d-flex"></div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({ layout: "h-c-f" });
const banner = reactive([
  { url: "/img/banner/banner0.jpg" },
  { url: "/img/banner/banner1.jpg" },
  { url: "/img/banner/banner2.jpg" },
  { url: "/img/banner/banner3.jpg" },
  { url: "/img/banner/banner4.jpg" },
]);
</script>

<style lang="less" scoped>
.hf-btn {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    z-index: 2;
  }
  &::before {
    z-index: 1;
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-radius: 50%;
    border: 1px solid #cd9393;
  }
  &::after {
    z-index: 1;
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    right: 4px;
    border-radius: 50%;
    border: 1px solid #cd9393;
  }
}

.banner-image {
  aspect-ratio: 1.8/1;
  object-fit: cover;
}

.card {
  width: 100%;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}

.card-img-top {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 2/1;
  cursor: pointer;
}
.card__info {
  z-index: 2;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 1200px) {
  .banner-image {
    aspect-ratio: 3/1;
  }
}
@media (max-width: 1200px) {
  .banner-image {
    aspect-ratio: 2/1;
  }
}
</style>
