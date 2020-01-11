import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/waiting/:id',
      name: 'waiting',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Waiting.vue')
      }
    },
    {
      path: '/user/:userid/painting/:id',
      name: 'painting',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Painting.vue')
      }
    },
    {
      path: "/user/:userid/settings",
      name: 'settings',
      props: true,
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Settings.vue')
      }
    },
    {
      path: '/docs',
      name: 'documentation',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Docs.vue')
      }
    }
  ],
});

