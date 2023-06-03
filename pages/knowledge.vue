<template>
  <div class="d-flex justify-content-center">
    <div class="restriction flex-fill">
      <div
        class="card-link shadow mb-4"
        v-for="(item, i) in new Array(5).fill()"
        :key="i"
      >
        <img class="left-img shadow" src="/img/temp/1.jpg" alt="" />
        <div
          class="d-flex flex-column justify-content-center f-han fs-6 p-3 ms-auto"
        >
          <div
            style="
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              line-height: 1.1;
            "
          >
            汉服产业春风得意，总规模超十亿 周边产业多点开花
          </div>
          <div class="f-han fs-6 ms-auto mt-auto right-lead">
            <span class="align-middle"> 点击浏览 </span>
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

const active = ref(0);
</script>
<style lang="less" scoped>
@media (max-width: 1200px) {
}

@media (min-width: 1200px) {
}
</style>
