<script setup lang="ts">
import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';

import ItemCounter from '@/components/character-sheet/ItemCounter.vue';

defineEmits<{ (e: 'change', diff: number): void }>();
defineProps<{ character: Character; xp: number }>();
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title> XP </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter
        :value="xp"
        :use-plus-five="true"
        @change="(diff) => $emit('change', diff)"
      ></ItemCounter>
    </v-card-text>
  </v-card>
</template>
