import Vue from 'vue'
import Router from 'vue-router'
import api from '../api'

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
          path: 'lesson/:lessonId',
          name: 'lesson',
          component: () => import('../views/lesson/Lesson')
        },
        {
          path: 'lessons',
          name: 'lessons',
          component: () => import('../views/lesson/Lessons')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/profile/Profile')
        },
        {
          path: 'profile/edit',
          name: 'editProfile',
          component: () => import('../views/profile/EditProfile')
        }
      ]
    }
  ]
})
