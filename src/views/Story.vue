<template>
  <div class="Story" :data-id="story.id">
    <div class="Story-details">
      <div class="Story-header">
        <h1 v-if="story.url" class="Story-title">
          <a :href="story.url" class="Story-link">{{ story.title }}</a>
          <span class="Story-host">({{ story.url | getHost }})</span>
        </h1>
        <h1 v-else class="Story-title">{{ story.title }}</h1>
      </div>
      <div class="Story-meta">
        <span class="Story-author">{{ story.by }}</span>
        <span class="Story-date" :title="story.time | getFormattedDate">{{ story.time | getTimeSince }}</span>
      </div>
      <div v-if="story.text" class="Story-content" v-html="`<p>${story.text}`"></div>
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
    padding: @spacing-lg @spacing-lg @spacing-sm;
    background-color: @content-bg;
    margin-bottom: @spacing-sm;
  }

  &-title {
    display: inline;
    font-size: 1.25em;
    font-weight: 400;
  }

  &-link {
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

  &-host {
    font-weight: normal;
    font-size: 0.7em;
  }

  &-meta {
    margin: @spacing-sm 0;
    font-size: 0.875em;
  }

  &-author {
    font-weight: 700;
  }

  &-date {
    color: @faint-text;
  }

  &-content {
    line-height: 1.5;
    overflow-wrap: break-word;

    /deep/ p {
      margin: 0.75em 0;
    }

    /deep/ pre {
      overflow-x: auto;
    }
  }

  &-comments {
    background-color: @content-bg;
  }
}
</style>
