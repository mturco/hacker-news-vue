<template>
  <svg viewBox="0 0 24 24" :class="className" :width="width" :height="height">
    <path d="M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M4,4V17.17L5.17,16H20V4H4M6,7H18V9H6V7M6,11H15V13H6V11Z"/>
  </svg>
</template>

<script>
export default {
  name: 'CommentIcon',
  props: ['className', 'width', 'height'],
};
</script>

<style lang="less" scoped>
svg {
  fill: currentColor;
}
</style>
