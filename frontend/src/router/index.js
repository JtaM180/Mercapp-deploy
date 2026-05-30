import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/product/new',
      component: () => import('../views/ProductNewView.vue')
    },
    {
      path: '/product/:id',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/product/:id/edit',
      component: () => import('../views/ProductEditView.vue')
    },
    {
      path: '/cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router