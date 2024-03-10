import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: () => import('@/views/mainHome.vue'), name: 'home' },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

export default router;