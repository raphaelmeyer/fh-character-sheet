<script setup lang="ts">
import type { Character } from '@/domain/character';

import { avatars } from '@/domain/icons';
import { colors } from '@/domain/colors';

defineProps<{ character: Character }>();
</script>

<template>
  <v-app-bar :color="colors[character.character].primary">
    <v-app-bar-title>
      <v-avatar :color="colors[character.character].background">
        <v-img :src="avatars[character.character]" max-height="1.5em" max-width="1.5em"></v-img>
      </v-avatar>
      <span class="ml-4">{{ character.name }}</span>
    </v-app-bar-title>
  </v-app-bar>
</template>
