<template>
  <header class="AppBanner">
    <nav class="AppBanner-nav">
      <router-link to="/" exact class="AppBanner-link AppBanner-link--brand"><span class="AppBanner-brand">HN</span></router-link>
      <router-link to="/top" exact class="AppBanner-link">Top</router-link>
      <router-link to="/new" exact class="AppBanner-link">New</router-link>
      <router-link to="/best" exact class="AppBanner-link">Best</router-link>
      <router-link to="/show" exact class="AppBanner-link">Show</router-link>
      <router-link to="/ask" exact class="AppBanner-link">Ask</router-link>
      <router-link to="/jobs" exact class="AppBanner-link">Jobs</router-link>
      <div class="AppBanner-spacer"></div>
      <a href="https://github.com/mturco/hn-vue" class="AppBanner-link">View Source</a>
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
  position: sticky;
  top: 0;
  background-color: @primary-color;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);

  &-nav {
    display: flex;
    max-width: @container-width;
    padding: 0 @spacing-sm;
    margin: 0 auto;

    @media (min-width: @container-width) {
      padding-right: 0;
      padding-left: 0;
    }
  }

  &-link {
    padding: 0 @spacing-sm;
    color: #fff;
    line-height: 50px;
    text-decoration: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.08);
    }

    &--brand {
      padding-left: 0;
      padding-right: 0;
      margin-right: @spacing-md;

      &:hover,
      &:focus {
        background-color: transparent;
      }
    }

    &.is-active {
      border-bottom-color: #fff;
    }
  }

  &-brand {
    padding: 4px;
    border: 2px solid;
    font-weight: 700;
  }

  &-spacer {
    flex: 1 0 0%;
  }
}
</style>
