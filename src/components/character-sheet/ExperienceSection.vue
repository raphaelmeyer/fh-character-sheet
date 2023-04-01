<script setup lang="ts">
import type { Character } from '@/domain/character';
import { useCharacterStore } from '@/stores/character';
import { ref, watchEffect } from 'vue';
import { colors } from '@/domain/colors';

import ItemCounter from './ItemCounter.vue';

const props = defineProps<{ charId: number }>();
const store = useCharacterStore();

const character = ref<Character>();

watchEffect(() => {
  character.value = store.fetchCharacter(props.charId);
});

function change(by: number): void {
  if (character.value) {
    const xp = Math.max(0, character.value.xp + by);
    character.value.xp = xp;
  }
}
</script>

<template>
  <v-card v-if="character" :color="colors[character.character].background">
    <v-card-item>
      <v-card-title> XP </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter :value="character.xp" :has-by-five="true" @change="change"></ItemCounter>
    </v-card-text>
  </v-card>
</template>
