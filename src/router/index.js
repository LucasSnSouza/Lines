import { createRouter, createWebHistory } from 'vue-router';

import ViewMainBoard from "@/views/ViewMainBoard.vue";
import ViewConfiguration from "@/views/ViewConfiguration.vue";
import ViewCatalog from "@/views/ViewCatalog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-board',
      component: ViewMainBoard
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: ViewConfiguration
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: ViewCatalog
    },
  ]
})

export default router
