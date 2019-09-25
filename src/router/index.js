import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main'),
      children: [
        {
          path: 'registration',
          name: 'registration',
          component: () => import('../views/Registration')
        }
      ]
    }
  ]
})
