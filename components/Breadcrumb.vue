<template>
  <div
    class="d-flex fs-6 fs-md-4 f-han overflow-md-hidden"
    style="padding: 15px 5vw; background: url(/img/bread.jpg); color: #fff"
    v-if="bread.length"
  >
    <div v-for="(item, index) in bread" :key="index">
      <span class="px-2" v-if="index !== 0"> > </span>

      <a
        :href="item.path"
        class="link-light text-decoration-none"
        v-if="index !== bread.length - 1"
      >
        {{ item.name }}
      </a>
      <span v-else>
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
<script setup>
const { meta } = useRoute();
const bread = meta?.bread ?? [];
console.log(123213, meta.bread);
</script>
<style lang="less" scoped></style>
