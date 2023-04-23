<script setup lang="ts">
import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';
import { masteries as descriptions, type Mastery } from '@/domain/masteries';

import PerkText from '@/components/character-sheet/PerkText.vue';
import type { Masteries } from '@/domain/mercenary';

defineEmits<{ (e: 'toggle', mastery: Mastery): void }>();
defineProps<{ character: Character; masteries: Masteries }>();

const masteryIds: Mastery[] = ['first', 'second'];
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Masteries</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row v-for="mastery in masteryIds" :key="mastery" class="d-flex align-center">
        <v-col cols="1" class="d-flex align-center">
          <v-checkbox-btn
            density="compact"
            readonly
            :model-value="masteries[mastery]"
            @click="() => $emit('toggle', mastery)"
          >
          </v-checkbox-btn>
        </v-col>
        <v-col>
          <PerkText :text="descriptions[character][mastery]"></PerkText>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
