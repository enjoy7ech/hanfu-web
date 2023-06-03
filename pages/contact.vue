<template>
  <div class="d-flex justify-content-center">
    <div class="restriction flex-fill">
      <svg class="text-stroke" viewBox="0 0 500 300" width="100%" height="100%">
        <text
          class="text"
          text-anchor="middle"
          dominant-baseline="middle"
          x="50%"
          y="50%"
        >
          建设中
        </text>
      </svg>
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

<style src="@/assets/style/stoke-anim.css" scoped></style>
