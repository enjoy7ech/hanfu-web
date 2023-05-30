<template>
  <div class="layout-container">
    <Header></Header>
    <slot />

    <Footer></Footer>
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<style lang="less" scoped>
.layout-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
<style>
@media screen and (max-width: 860px) {
  html {
    font-size: 12px;
  }
}

@media screen and (min-width: 860px) {
  html {
    font-size: 14px;
  }
}
</style>
