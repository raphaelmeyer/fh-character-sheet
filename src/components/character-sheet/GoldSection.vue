<script setup lang="ts">
import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';

import ItemCounter from './ItemCounter.vue';

defineEmits<{ (e: 'change', diff: number): void }>();
defineProps<{ character: Character; gold: number }>();
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title> Gold </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter
        :value="gold"
        :use-plus-five="true"
        @change="$emit('change', $event)"
      ></ItemCounter>
    </v-card-text>
  </v-card>
</template>
