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

const ticks = computed(() => {
  return [0, 1].map((row) => {
    return [0, 1, 2].map((col) => {
      const diff = props.ticks - row * 9 - col * 3;
      const ticked = Math.max(0, Math.min(3, diff));
      const icon =
        ticked === 3 ? 'mdi-checkbox-marked-circle-outline' : 'mdi-checkbox-blank-circle-outline';
      return { diff, icon };
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
      <v-row v-for="(row, j) in ticks" :key="j">
        <v-col v-for="(col, i) in row" :key="i" class="d-flex align-center">
          <v-icon class="mr-4" :icon="col.icon"> </v-icon>
          <CheckboxRow
            :ticks="col.diff"
            :limit="3"
            @tick="$emit('tick')"
            @untick="$emit('untick')"
          ></CheckboxRow>
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
