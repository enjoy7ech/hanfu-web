<template>
  <div class="d-flex justify-content-center">
    <div
      class="restriction flex-fill d-flex align-items-center justify-content-center"
      style="height: 80px"
    >
      <img
        src="/img/logo.svg"
        alt=""
        style="height: 60px"
        @click="$router.push('/')"
      />
      <img
        src="/img/title.svg"
        alt="中国汉服文化网"
        style="height: 40px; margin-left: 12px"
        @click="$router.push('/')"
      />
      <div class="ms-auto d-flex align-items-center pc-nav">
        <a class="nav-link" href="/">首页</a>
        <div class="nav-divider"></div>
        <a class="nav-link" href="/news">汉服资讯</a>
        <div class="nav-divider"></div>
        <a class="nav-link" href="/collection">活动集锦</a>
        <div class="nav-divider"></div>
        <a class="nav-link" href="/encyclopedia">汉服百科</a>
        <div class="nav-divider"></div>
        <a class="nav-link" href="/knowledge">汉服知识</a>
        <div class="nav-divider"></div>
        <a class="nav-link" href="/contact">联系合作</a>
      </div>
      <!-- <div class="ms-auto menuToggle mobile-nav">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <div class="menu"></div>
    </div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-link {
  padding: 0 12px;
  font-size: 24px;
  font-family: calligraphy;
  cursor: pointer;
}

.nav-divider {
  width: 2px;
  height: 20px;
  background: #000;
}

.menuToggle {
  position: relative;
  width: 33px;
  height: 23px;
  cursor: pointer;
  input {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #000;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  input:checked ~ .menu {
    transform: none;
  }

  .menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
}

@media screen and (max-width: 860px) {
  .pc-nav {
    display: none !important;
  }
}

@media screen and (min-width: 860px) {
  .mobile-nav {
    display: none !important;
  }
}
</style>
