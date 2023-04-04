<script setup lang="ts">
import { computed } from 'vue';

import { useMercenaryStore } from '@/stores/mercenary';

import { colors } from '@/domain/colors';

import ItemCounter from './ItemCounter.vue';

const props = defineProps<{ mercenaryId: number }>();
const store = useMercenaryStore();

const gold = computed(() => store.mercenaryById(props.mercenaryId)?.gold ?? 0);
const character = computed(() => store.mercenaryById(props.mercenaryId)?.character);

function change(diff: number): void {
  store.changeGold(props.mercenaryId, diff);
}
</script>

<template>
  <v-card v-if="character" :color="colors[character].background">
    <v-card-item>
      <v-card-title> Gold </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter :value="gold" :use-plus-five="true" @change="change"></ItemCounter>
    </v-card-text>
  </v-card>
</template>
