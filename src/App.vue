<script setup lang="ts">
import { RouterView } from 'vue-router';

import { useMercenaryStore } from '@/stores/mercenary';
import { onMounted } from 'vue';

const store = useMercenaryStore();

store.$onAction((action) => {
  action.after(() => {
    localStorage.setItem('mercenaries', JSON.stringify(store.mercenaries));
  });
});

onMounted(() => {
  const stored = localStorage.getItem('mercenaries');
  if (stored) {
    const mercenaries = JSON.parse(stored);
    store.mercenaries = mercenaries;
  }
});
</script>

<template>
  <RouterView />
</template>
