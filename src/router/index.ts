import { createRouter, createWebHistory } from 'vue-router';

import CharacterSheet from '@/views/CharacterSheet.vue';
import MercenaryList from '@/views/MercenaryList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MercenaryList
    },
    {
      path: '/character/:id',
      component: CharacterSheet
    }
  ]
});

export default router;
