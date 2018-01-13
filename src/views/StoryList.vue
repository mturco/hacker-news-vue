<template>
  <div class="StoryList" :data-type="type">
    <ol class="StoryList-list" :style="{ 'counter-reset': `story-index ${startAt}` }">
      <story-item v-for="story in stories" :key="story['.key']" :id="story['.value']"></story-item>
    </ol>

    <div class="StoryList-paging">
      <router-link
        v-if="page > 1"
        :to="{ name: type, params: { page: page - 1 }}"
        class="StoryList-pageLink">&#8592;</router-link>
      <a v-else class="StoryList-pageLink StoryList-pageLink--disabled">&#8592;</a>

      <span class="StoryList-pageNumber">{{ page }}</span>

      <router-link
        :to="{ name: type, params: { page: page + 1 }}"
        class="StoryList-pageLink">&#8594;</router-link>
    </div>
  </div>
</template>

<script>
import db from '@/db';
import StoryItem from '@/components/StoryItem';

const ITEMS_PER_PAGE = 30;

export default {
  name: 'StoryList',
  components: {
    StoryItem,
  },
  props: ['type', 'page'],
  data() {
    return {
      stories: [],
    };
  },
  computed: {
    startAt() {
      return ITEMS_PER_PAGE * (this.page - 1);
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
      const ref = db.ref(`/v0/${this.type}`)
        .limitToFirst(ITEMS_PER_PAGE)
        .orderByKey()
        .startAt(this.startAt.toString());
      this.$bindAsArray('stories', ref);
    },
  },
  watch: {
    type() {
      this.getStories();
    },
    page() {
      this.getStories();
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

  &-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  &-paging {
    display: flex;
    justify-content: center;
  }

  &-pageLink,
  &-pageNumber {
    width: 50px;
    line-height: 50px;
    text-align: center;
  }

  &-pageLink {
    display: block;
    font-size: 2em;
    font-weight: 700;
    text-decoration: none;
    color: @text-color;

    &:hover {
      color: @primary-color;
    }

    &--disabled {
      opacity: 0.25;
      cursor: not-allowed;

      &:hover {
        color: @text-color;
      }
    }
  }

  &-pageNumber {
    color: @faint-text;
  }
}

.StoryItem {
  &::before {
    content: counter(story-index) ".";
    counter-increment: story-index;
  }

  & + & {
    border-top: 1px solid #eee;
  }
}
</style>
