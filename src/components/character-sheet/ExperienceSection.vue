<script setup lang="ts">
import type { Mercenary } from '@/domain/character';
import { useMercenaryStore } from '@/stores/mercenary';
import { ref, watchEffect } from 'vue';
import { colors } from '@/domain/colors';

import ItemCounter from './ItemCounter.vue';

const props = defineProps<{ charId: number }>();
const store = useMercenaryStore();

const mercenary = ref<Mercenary>();

watchEffect(() => {
  mercenary.value = store.mercenaryById(props.charId);
});

function change(by: number): void {
  if (mercenary.value) {
    const xp = Math.max(0, mercenary.value.xp + by);
    mercenary.value.xp = xp;
  }
}
</script>

<template>
  <v-card v-if="mercenary" :color="colors[mercenary.character].background">
    <v-card-item>
      <v-card-title> XP </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter :value="mercenary.xp" :has-by-five="true" @change="change"></ItemCounter>
    </v-card-text>
  </v-card>
</template>
