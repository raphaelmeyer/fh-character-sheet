<script setup lang="ts">
import { computed } from 'vue';

import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';
import { perks as characterPerks } from '@/domain/perks';

import CheckboxRow from './CheckboxRow.vue';

defineEmits<{
  (e: 'changeTicks', diff: number): void;
  (e: 'change', id: number, diff: number): void;
}>();
const props = defineProps<{ character: Character; ticks: number; perks: number[] }>();

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
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Perks</v-card-title>
    </v-card-item>
    <v-card-text>
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
              @click="() => $emit('changeTicks', -1)"
            >
            </v-checkbox-btn>
            <v-checkbox-btn
              v-if="tick === 'first-unticked'"
              density="compact"
              readonly
              :model-value="false"
              @click="() => $emit('changeTicks', 1)"
            >
            </v-checkbox-btn>
            <v-checkbox-btn
              v-if="tick === 'unticked'"
              density="compact"
              disabled
              :model-value="false"
            >
            </v-checkbox-btn>
          </template>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row v-for="chPerk in characterPerks[character]" :key="chPerk.id">
        <v-col class="d-flex align-center" cols="4">
          <CheckboxRow
            :ticks="perks.at(chPerk.id) ?? 0"
            :limit="chPerk.num"
            @tick="$emit('change', chPerk.id, 1)"
            @untick="$emit('change', chPerk.id, -1)"
          >
          </CheckboxRow>
        </v-col>
        <v-col class="d-flex align-center">
          <span>{{ chPerk.text }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
