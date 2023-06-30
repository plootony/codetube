import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/Done.vue'),
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('../views/Favor.vue'),
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: () => import('../views/Deleted.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/Help.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
    },
  ],
});

export default router;
