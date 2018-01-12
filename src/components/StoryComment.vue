<template>
  <div v-if="!comment.deleted" class="StoryComment" :data-id="comment.id">
    <div class="StoryComment-content">
      <div class="StoryComment-meta">
        <span class="StoryComment-author">{{ comment.by }}</span>
        <span class="StoryComment-date" :title="comment.time | getFormattedDate">{{ comment.time | getTimeSince }}</span>
      </div>
      <div class="StoryComment-body" v-html="`<p>${comment.text}`"></div>
    </div>

    <div class="StoryComment-responses">
      <story-comment v-for="subcomment in comment.kids" :key="subcomment" :id="subcomment"/>
    </div>
  </div>
</template>

<script>
import db from '@/db';
import { getTimeSince, getFormattedDate } from '@/filters';

export default {
  name: 'StoryComment',
  props: ['id'],
  data() {
    return {
    };
  },
  firebase() {
    return {
      comment: {
        source: db.ref(`/v0/item/${this.id}`),
        asObject: true,
      },
    };
  },
  filters: {
    getTimeSince,
    getFormattedDate,
  },
};
</script>

<style lang="less" scoped>
@import "../definitions";

.StoryComment {
  padding: @spacing-lg;
  border-top: 1px solid @app-bg;

  &-meta {
    font-size: 0.875em;
  }

  &-date {
    color: @faint-text;
  }

  &-author {
    font-weight: bold;
  }

  &-body {
    font-size: 0.875em;
    line-height: 1.5;
    overflow-wrap: break-word;

    /deep/ p {
      margin: 0.75em 0;
    }

    /deep/ pre {
      overflow-x: auto;
  }
  }

  &-responses {
    margin-bottom: @spacing-lg * -1;
  }
}
</style>
