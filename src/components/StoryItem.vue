<template>
  <li class="StoryItem" v-if="story.id" :data-id="story.id">
    <div class="StoryItem-score" :title="`${story.score} points`">{{ story.score }}</div>

    <div class="StoryItem-details">
      <div class="StoryItem-header">
        <template v-if="story.url">
          <a :href="story.url" class="StoryItem-title">{{ story.title }}</a>
          <span class="StoryItem-host">({{ story.url | getHost }})</span>
        </template>
        <router-link v-else :to="{ name: 'story', params: { id: story.id }}" class="StoryItem-title">
          {{ story.title }}
        </router-link>
      </div>

      <div class="StoryItem-meta">
        <span class="StoryItem-author">by {{ story.by }}</span>
        <span class="StoryItem-date" :title="story.time | getFormattedDate">{{ story.time | getTimeSince }}</span>
      </div>
    </div>

    <router-link
      :to="{ name: 'story', params: { id: story.id }}"
      :title="`${story.descendants} comments`"
      class="StoryItem-comments">
      {{ story.descendants }}
    </router-link>
  </li>
</template>

<script>
import db from '@/db';
import { getHost, getTimeSince, getFormattedDate } from '@/filters';

export default {
  name: 'StoryItem',
  props: ['id'],
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

.StoryItem {
  display: flex;
  padding: @spacing-md;
  background-color: @content-bg;

  &-host,
  &-meta {
    font-size: 0.8125em;
  }

  &-details {
    flex: 1 1 auto;
    margin: 0 @spacing-sm;
  }

  &-score,
  &-comments {
    display: flex;
    align-items: center;
    font-size: 1.25em;
  }

  &-score {
    flex: 0 0 60px;
    justify-content: center;
  }

  &-comments {
    flex: 0 0 auto;
  }
}
</style>
