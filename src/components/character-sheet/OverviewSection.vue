<script setup lang="ts">
import { computed } from 'vue';

import { characters, type Character } from '@/domain/character';
import { colors } from '@/domain/colors';

const props = defineProps<{ name: string; character: Character; xp: number }>();

const color = computed(() => colors[props.character]);

interface Level {
  id: number;
  xp: number;
}

const levels: Level[] = [
  { id: 1, xp: 0 },
  { id: 2, xp: 45 },
  { id: 3, xp: 95 },
  { id: 4, xp: 150 },
  { id: 5, xp: 210 },
  { id: 6, xp: 275 },
  { id: 7, xp: 345 },
  { id: 8, xp: 420 },
  { id: 9, xp: 500 }
];

const levelId = computed(() => {
  return levels.reduce((id, level) => (level.xp <= props.xp ? level.id : id), 0);
});
</script>

<template>
  <v-card :color="color.background">
    <v-card-item>
      <v-card-title>{{ characters[character] }}</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-timeline direction="horizontal" truncate-line="both" side="end">
        <v-timeline-item
          v-for="level in levels"
          :key="level.id"
          :dot-color="level.xp <= xp ? color.primary : 'grey-lighten-2'"
          :size="level.id === levelId ? 'small' : 'x-small'"
          fill-dot
        >
          <template #icon>{{ level.id }}</template>
          <div>{{ level.xp }}</div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
