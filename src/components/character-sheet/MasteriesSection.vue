<script setup lang="ts">
import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';
import { masteries } from '@/domain/masteries';

import PerkText from '@/components/character-sheet/PerkText.vue';

defineEmits<{ (e: 'toggle', mastery: 'first' | 'second'): void }>();
defineProps<{ character: Character }>();
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Masteries</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row class="d-flex align-center">
        <v-col cols="1" class="d-flex align-center">
          <v-checkbox-btn
            density="compact"
            readonly
            :model-value="false"
            @click="() => $emit('toggle', 'first')"
          >
          </v-checkbox-btn>
        </v-col>
        <v-col>
          <PerkText :text="masteries[character].first"></PerkText>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center">
        <v-col cols="1" class="d-flex align-center">
          <v-checkbox-btn
            density="compact"
            readonly
            :model-value="false"
            @click="() => $emit('toggle', 'second')"
          >
          </v-checkbox-btn>
        </v-col>
        <v-col>
          <PerkText :text="masteries[character].second"></PerkText>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
