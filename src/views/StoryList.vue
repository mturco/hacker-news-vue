<template>
  <ol class="StoryList" :data-type="this.type">
    <story-item v-for="story in stories" :key="story['.key']" :id="story['.value']"></story-item>
  </ol>
</template>

<script>
import db from '@/db';
import StoryItem from '@/components/StoryItem';

export default {
  name: 'StoryList',
  components: {
    StoryItem,
  },
  props: ['type'],
  data() {
    return {
      stories: [],
    };
  },
  watch: {
    type() {
      this.getStories();
    },
  },
  created() {
    this.getStories();
  },
  methods: {
    getStories() {
      if (this.stories.length) {
        this.$unbind('stories');
      }
      this.$bindAsArray('stories', db.ref(`/v0/${this.type}`).limitToFirst(25));
    },
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
  counter-reset: story-index;
}

.StoryItem::before {
  content: counter(story-index) ".";
  counter-increment: story-index;
}

.StoryItem + .StoryItem {
  border-top: 1px solid #eee;
}
</style>
