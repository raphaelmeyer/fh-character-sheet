<script setup lang="ts">
import { computed } from 'vue';

import { useMercenaryStore } from '@/stores/mercenary';

import { colors } from '@/domain/colors';

import ItemCounter from './ItemCounter.vue';

const props = defineProps<{ mercenaryId: number }>();
const store = useMercenaryStore();

const xp = computed(() => store.mercenaryById(props.mercenaryId)?.xp ?? 0);
const character = computed(() => store.mercenaryById(props.mercenaryId)?.character);

function change(diff: number): void {
  store.changeXp(props.mercenaryId, diff);
}
</script>

<template>
  <v-card v-if="character" :color="colors[character].background">
    <v-card-item>
      <v-card-title> XP </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter :value="xp" :use-plus-five="true" @change="change"></ItemCounter>
    </v-card-text>
  </v-card>
</template>
