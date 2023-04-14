<script setup lang="ts">
import { computed } from 'vue';

import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';
import { perks as perkInfo } from '@/domain/perks';

import CheckboxRow from './CheckboxRow.vue';

defineEmits<{
  (e: 'tick'): void;
  (e: 'untick'): void;
  (e: 'change', id: number, diff: number): void;
}>();
const props = defineProps<{ character: Character; ticks: number; perks: number[] }>();

const rows = computed(() => {
  return [0, 1].map((row) =>
    [0, 1, 2].map((col) => ({
      completed: row * 9 + col * 3 + 2 < props.ticks,
      ticks: [0, 1, 2]
        .map((i) => row * 9 + col * 3 + i)
        .map((i) => ({
          ticked: i < props.ticks,
          readonly: i < props.ticks - 1,
          disabled: props.ticks < i
        }))
    }))
  );
});
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Perks</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row v-for="(row, ri) in rows" :key="ri">
        <v-col v-for="(col, ci) in row" :key="ci" class="d-flex align-center">
          <v-icon
            class="mr-4"
            :icon="
              col.completed
                ? 'mdi-checkbox-marked-circle-outline'
                : 'mdi-checkbox-blank-circle-outline'
            "
          >
          </v-icon>
          <v-checkbox-btn
            v-for="(tick, i) in col.ticks"
            :key="i"
            :disabled="tick.disabled"
            :readonly="tick.readonly"
            :model-value="tick.ticked"
            density="compact"
            @update:model-value="(on: boolean) => $emit(on ? 'tick' : 'untick')"
          >
          </v-checkbox-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row v-for="info in perkInfo[character]" :key="info.id">
        <v-col class="d-flex align-center" cols="4">
          <CheckboxRow
            :ticks="perks.at(info.id) ?? 0"
            :limit="info.num"
            @tick="$emit('change', info.id, 1)"
            @untick="$emit('change', info.id, -1)"
          >
          </CheckboxRow>
        </v-col>
        <v-col class="d-flex align-center">
          <span>{{ info.text }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
