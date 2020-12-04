import  { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Vuex',
    component: () => import('../views/Vuex.vue')
  },
  {
    path: '/route',
    name: 'Route',
    component: () => import('../views/Router.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue'),
    children:[
      {
        path: 'lifeCycle',
        name: 'LifeCycle',
        component: () => import('../views/other/lifeCycleFun.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
