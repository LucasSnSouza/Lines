import { createRouter, createWebHistory } from 'vue-router';

import ViewMainBoard from "@/views/ViewMainBoard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-board',
      component: ViewMainBoard
    },
  ]
})

export default router
