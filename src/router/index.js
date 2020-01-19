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
          path: 'lesson',
          name: 'lesson',
          props: true,
          async beforeEnter (to, from, next) {
            let incomingUser = to.query.contactId;
            delete to.query.contacId;
            let lesson = (await api.post('/lessons/create', {incomingUser})).data;

            console.log(lesson)

          },
          component: () => import('../views/Lesson')
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
