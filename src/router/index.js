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
      name: 'topstories',
      component: StoryList,
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
