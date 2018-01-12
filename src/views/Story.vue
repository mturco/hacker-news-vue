<template>
  <div class="Story" :data-id="story.id">
    <div class="Story-details">
      <div class="Story-header">
        <h1 v-if="story.url" class="Story-title">
          <a :href="story.url">{{ story.title }}</a>
          <span class="Story-host">({{ story.url | getHost }})</span>
        </h1>
        <h1 v-else class="Story-title">{{ story.title }}</h1>
      </div>
      <div class="Story-meta">
        <span class="Story-date" :title="story.time | getFormattedDate">{{ story.time | getTimeSince }}</span>
        <span class="Story-author">by {{ story.by }}</span>
      </div>
      <div v-if="story.text" class="Story-content" v-html="story.text"></div>
    </div>

    <div class="Story-comments">
      <story-comment v-for="comment in story.kids" :key="comment" :id="comment"/>
    </div>
  </div>
</template>

<script>
import db from '@/db';
import { getHost, getTimeSince, getFormattedDate } from '@/filters';
import StoryComment from '@/components/StoryComment';

export default {
  name: 'Story',
  props: ['id'],
  components: {
    StoryComment,
  },
  data() {
    return {
    };
  },
  firebase() {
    return {
      story: {
        source: db.ref(`/v0/item/${this.id}`),
        asObject: true,
      },
    };
  },
  filters: {
    getHost,
    getTimeSince,
    getFormattedDate,
  },
};
</script>

<style lang="less" scoped>
@import "../definitions";

.Story {
  max-width: @container-width;
  margin: 0 auto;

  &-details {
    padding: @spacing-lg;
    background-color: @content-bg;
    margin-bottom: @spacing-sm;
  }

  &-title {
    display: inline;
    font-size: 1.5em;
  }

  &-host {
    font-weight: normal;
    font-size: 0.8125em;
  }

  &-meta {
    margin: @spacing-sm 0;
  }

  &-comments {
    background-color: @content-bg;
  }
}
</style>
