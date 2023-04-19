<script setup lang="ts">
import { computed } from 'vue';

defineEmits<{ (e: 'change', diff: number): void }>();
const props = defineProps<{ ticks: number }>();

type TickState = 'ticked' | 'last-ticked' | 'first-unticked' | 'unticked';

function tickState(tick: number): TickState {
  if (tick < props.ticks - 1) {
    return 'ticked';
  } else if (tick === props.ticks - 1) {
    return 'last-ticked';
  } else if (tick === props.ticks) {
    return 'first-unticked';
  }
  return 'unticked';
}

const rows = computed(() => {
  return [0, 1].map((row) => {
    return [0, 1, 2].map((col) => {
      const group = 9 * row + 3 * col;
      return {
        completed: group + 2 < props.ticks,
        ticks: [0, 1, 2].map((tick) => {
          return tickState(tick + group);
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
      <template v-for="(tick, k) in group.ticks" :key="k">
        <v-checkbox-btn
          v-if="tick === 'ticked'"
          density="compact"
          readonly
          :model-value="true"
          :ripple="false"
        >
        </v-checkbox-btn>
        <v-checkbox-btn
          v-if="tick === 'last-ticked'"
          density="compact"
          readonly
          :model-value="true"
          @click="() => $emit('change', -1)"
        >
        </v-checkbox-btn>
        <v-checkbox-btn
          v-if="tick === 'first-unticked'"
          density="compact"
          readonly
          :model-value="false"
          @click="() => $emit('change', 1)"
        >
        </v-checkbox-btn>
        <v-checkbox-btn v-if="tick === 'unticked'" density="compact" disabled :model-value="false">
        </v-checkbox-btn>
      </template>
    </v-col>
  </v-row>
</template>
