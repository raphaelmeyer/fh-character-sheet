<script setup lang="ts">
import { computed } from 'vue';

import TickItem from '@/components/character-sheet/TickItem.vue';
import { tickState } from '@/components/character-sheet/tick-state';

defineEmits<{ (e: 'change', diff: number): void }>();
const props = defineProps<{ ticks: number }>();

const rows = computed(() => {
  return [0, 1].map((row) => {
    return [0, 1, 2].map((col) => {
      const group = 9 * row + 3 * col;
      return {
        completed: group + 2 < props.ticks,
        ticks: [0, 1, 2].map((tick) => {
          return tickState(tick + group, props.ticks);
        })
      };
    });
  });
});
</script>

<template>
  <v-row v-for="(row, i) in rows" :key="i">
    <v-col v-for="(group, j) in row" :key="j" class="d-flex align-center">
      <v-icon
        class="mr-4"
        :icon="
          group.completed
            ? 'mdi-checkbox-marked-circle-outline'
            : 'mdi-checkbox-blank-circle-outline'
        "
      >
      </v-icon>
      <TickItem
        v-for="(tick, k) in group.ticks"
        :key="k"
        :state="tick"
        @change="(diff) => $emit('change', diff)"
      >
      </TickItem>
    </v-col>
  </v-row>
</template>
