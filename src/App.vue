<template>
  <div id="app">
    <AppBanner/>
    <router-view/>
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner';

export default {
  name: 'app',
  components: {
    AppBanner,
  },
};
</script>

<style lang="less">
@import "normalize.css";
@import "definitions";

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: @app-bg;
  font-size: 16px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
