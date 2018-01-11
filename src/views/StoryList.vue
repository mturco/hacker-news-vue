<template>
  <ul class="StoryList">
    <story-item v-for="story in stories" :key="story['.key']" :id="story['.value']"></story-item>
  </ul>
</template>

<script>
import db from '@/db';
import StoryItem from '@/components/StoryItem';

export default {
  name: 'StoryList',
  components: {
    StoryItem,
  },
  data() {
    return {
    };
  },
  firebase: {
    stories: db.ref('/v0/topstories').limitToFirst(25),
  },
};
</script>

<style lang="less" scoped>
@import "../definitions";

.StoryList {
  max-width: @container-width;
  padding: 0;
  margin: 0 auto;
  list-style-type: none;
}

.StoryItem + .StoryItem {
  margin-top: 1px;
}
</style>
