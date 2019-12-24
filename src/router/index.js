import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/Layout'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('../views/Main')
        },
        {
          path: 'registration',
          name: 'registration',
          component: () => import('../views/Registration')
        },
        {
          path: 'lesson',
          name: 'lesson',
          component: () => import('../views/Lesson')
        }
      ]
    }
  ]
})
