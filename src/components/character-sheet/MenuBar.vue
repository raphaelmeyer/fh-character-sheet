<script setup lang="ts">
import type { Mercenary } from '@/domain/character';

import { avatars } from '@/domain/icons';
import { colors } from '@/domain/colors';

defineProps<{ mercenary: Mercenary }>();
</script>

<template>
  <v-app-bar :color="colors[mercenary.character].primary">
    <v-app-bar-title>
      <v-avatar :color="colors[mercenary.character].background">
        <v-img :src="avatars[mercenary.character]" max-height="1.5em" max-width="1.5em"></v-img>
      </v-avatar>
      <span class="ml-4">{{ mercenary.name }}</span>
    </v-app-bar-title>
    <template #append>
      <v-btn icon="mdi-home" :to="{ path: '/' }"></v-btn>
    </template>
  </v-app-bar>
</template>
