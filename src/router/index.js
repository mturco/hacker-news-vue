import Vue from 'vue';
import Router from 'vue-router';
import StoryList from '@/views/StoryList';
import Story from '@/views/Story';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/top',
    },
    {
      path: '/top',
      name: 'topstories',
      component: StoryList,
      props: { type: 'topstories' },
    },
    {
      path: '/new',
      name: 'newstories',
      component: StoryList,
      props: { type: 'newstories' },
    },
    {
      path: '/best',
      name: 'beststories',
      component: StoryList,
      props: { type: 'beststories' },
    },
    {
      path: '/ask',
      name: 'askstories',
      component: StoryList,
      props: { type: 'askstories' },
    },
    {
      path: '/show',
      name: 'showstories',
      component: StoryList,
      props: { type: 'showstories' },
    },
    {
      path: '/jobs',
      name: 'jobstories',
      component: StoryList,
      props: { type: 'jobstories' },
    },
    {
      path: '/story/:id',
      name: 'story',
      component: Story,
      props: true,
    },
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active--exact',
});
