<script setup lang="ts">
import { computed } from 'vue';

import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';
import { perks } from '@/domain/perks';

defineEmits<{ (e: 'tick'): void; (e: 'untick'): void }>();
const props = defineProps<{ character: Character; ticks: number }>();

const rows = computed(() => {
  return [0, 1].map((row) =>
    [0, 1, 2].map((col) => ({
      completed: row * 9 + col * 3 + 2 < props.ticks,
      ticks: [0, 1, 2]
        .map((i) => row * 9 + col * 3 + i)
        .map((i) => ({
          ticked: i < props.ticks,
          disabled: i < props.ticks - 1 || props.ticks < i
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
            :readonly="tick.disabled"
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
      <v-row v-for="perk in perks[character]" :key="perk.id">
        <v-col class="d-flex align-center" cols="2">
          <v-checkbox-btn v-for="i in perk.num" :key="i" density="compact"></v-checkbox-btn>
        </v-col>
        <v-col class="d-flex align-center">
          <span>{{ perk.text }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
