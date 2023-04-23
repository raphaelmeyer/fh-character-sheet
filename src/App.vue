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
  const data = localStorage.getItem('mercenaries');
  if (data) {
    store.fromJson(data);
  }
});
</script>

<template>
  <RouterView />
</template>
