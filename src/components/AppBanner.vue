<template>
  <header class="AppBanner">
    <nav class="AppBanner-nav">
      <router-link to="/" exact class="AppBanner-link">Hacker News</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppBanner',
};
</script>

<style lang="less" scoped>
@import "../definitions";

.AppBanner {
  background-color: @primary-color;

  &-nav {
    display: flex;
    max-width: @container-width;
    margin: 0 auto;
  }

  &-link {
    padding: @spacing-md 0;
    color: #fff;
  }
}
</style>
