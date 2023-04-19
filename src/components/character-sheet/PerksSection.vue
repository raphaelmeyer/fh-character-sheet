<script setup lang="ts">
import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';

import CharacterPerks from '@/components/character-sheet/CharacterPerks.vue';
import PerkTicks from '@/components/character-sheet/PerkTicks.vue';

defineEmits<{
  (e: 'changeTicks', diff: number): void;
  (e: 'changePerk', id: number, diff: number): void;
}>();
defineProps<{ character: Character; ticks: number; perks: number[] }>();
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Perks</v-card-title>
    </v-card-item>
    <v-card-text>
      <PerkTicks :ticks="ticks" @change="(diff) => $emit('changeTicks', diff)"></PerkTicks>

      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <CharacterPerks
        :character="character"
        :perks="perks"
        @change="(id, diff) => $emit('changePerk', id, diff)"
      ></CharacterPerks>
    </v-card-text>
  </v-card>
</template>
