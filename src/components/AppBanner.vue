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
      <a href="https://github.com/mturco/hacker-news-vue" class="AppBanner-link AppBanner-link--no-mobile">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
        </svg>
      </a>
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

    &--no-mobile {
      @media (max-width: 479px) {
        display: none;
      }
    }

    &.is-active {
      border-bottom-color: #fff;
    }

    svg {
      fill: currentColor;
      vertical-align: middle;
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
