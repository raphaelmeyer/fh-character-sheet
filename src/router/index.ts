import { createRouter, createWebHistory } from 'vue-router';

import CharacterSheet from '@/views/CharacterSheet.vue';
import SelectCharacter from '@/views/SelectCharacter.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SelectCharacter
    },
    {
      path: '/character/:id',
      component: CharacterSheet
    }
  ]
});

export default router;
