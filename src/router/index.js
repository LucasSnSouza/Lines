import { createRouter, createWebHistory } from 'vue-router';

import ViewMainBoard from "@/views/ViewMainBoard.vue";
import ViewConfiguration from "@/views/ViewConfiguration.vue";
import ViewCatalog from "@/views/ViewCatalog.vue";
import ViewCreation from "@/views/ViewCreation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-board',
      component: ViewMainBoard,
      meta: { background: 'bg-gradient-brand-one', title: '' }
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: ViewConfiguration,
      meta: { background: 'bg-gradient-brand-two', title: '' }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: ViewCatalog,
      meta: { background: 'bg-gradient-brand-two', title: '' }
    },
    {
      path: '/creation',
      name: 'creation',
      component: ViewCreation,
      meta: { background: 'bg-gradient-brand-two', title: 'Criação' }
    },
  ]
})

export default router
