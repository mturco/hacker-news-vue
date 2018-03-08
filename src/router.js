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
      path: '/top/:page(\\d+)?',
      name: 'topstories',
      component: StoryList,
      props: route => ({
        type: 'topstories',
        page: route.params.page ? parseInt(route.params.page, 10) : 1,
      }),
    },
    {
      path: '/new/:page(\\d+)?',
      name: 'newstories',
      component: StoryList,
      props: route => ({
        type: 'newstories',
        page: route.params.page ? parseInt(route.params.page, 10) : 1,
      }),
    },
    {
      path: '/best/:page(\\d+)?',
      name: 'beststories',
      component: StoryList,
      props: route => ({
        type: 'beststories',
        page: route.params.page ? parseInt(route.params.page, 10) : 1,
      }),
    },
    {
      path: '/ask/:page(\\d+)?',
      name: 'askstories',
      component: StoryList,
      props: route => ({
        type: 'askstories',
        page: route.params.page ? parseInt(route.params.page, 10) : 1,
      }),
    },
    {
      path: '/show/:page(\\d+)?',
      name: 'showstories',
      component: StoryList,
      props: route => ({
        type: 'showstories',
        page: route.params.page ? parseInt(route.params.page, 10) : 1,
      }),
    },
    {
      path: '/jobs/:page(\\d+)?',
      name: 'jobstories',
      component: StoryList,
      props: route => ({
        type: 'jobstories',
        page: route.params.page ? parseInt(route.params.page, 10) : 1,
      }),
    },
    {
      path: '/story/:id(\\d+)',
      name: 'story',
      component: Story,
      props: true,
    },
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active--exact',
});
