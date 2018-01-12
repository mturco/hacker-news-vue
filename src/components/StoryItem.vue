<template>
  <li class="StoryItem" v-if="story.id" :data-id="story.id">
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
        <span class="StoryItem-date" :title="story.time | getFormattedDate">{{ story.time | getTimeSince }}</span>
        <span class="StoryItem-author">by {{ story.by }}</span>
        <span class="StoryItem-score">({{ story.score }} points)</span>
      </div>
    </div>

    <router-link
      v-if="story.descendants >= 0"
      :to="{ name: 'story', params: { id: story.id }}"
      :title="`${story.descendants} comments`"
      class="StoryItem-comments">
      <span class="StoryItem-commentsCount">{{ story.descendants }}</span>
      <comment-icon width="24" height="24" className="StoryItem-commentsIcon" :text="story.descendants"></comment-icon>
    </router-link>
  </li>
</template>

<script>
import db from '@/db';
import { getHost, getTimeSince, getFormattedDate } from '@/filters';
import CommentIcon from '@/components/CommentIcon';

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
  components: {
    CommentIcon,
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
  padding: @spacing-md @spacing-lg;
  background-color: @content-bg;
  color: @faint-text;

  &::before {
    min-width: 2ch;
    line-height: 1.4;
    text-align: right;
  }

  &-header {
    margin-bottom: @spacing-xs;
  }

  &-title {
    color: @text-color;
    line-height: 1.4;
    text-decoration: none;
    transition-property: border-color, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus {
      border-bottom-color: @primary-color;
    }

    &:active {
      background-color: fade(@primary-color, 15%);
    }
  }

  &-host,
  &-meta {
    font-size: 0.8125em;
  }

  &-details {
    flex: 1 1 auto;
    margin: 0 @spacing-md;
  }

  &-comments {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    color: @faint-text;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;

    &:hover,
    &:focus {
      color: @primary-color;
    }

    &Count {
      margin-right: @spacing-xs;
      margin-bottom: 4px;
      font-size: 0.875em;
    }
  }
}
</style>
