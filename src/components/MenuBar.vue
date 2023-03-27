<script setup lang="ts">
import type { Character } from '@/domain/character'

defineProps<{ character: Character }>()
</script>

<template>
  <v-app-bar color="grey-darken-3">
    <v-app-bar-title>
      <v-icon icon="mdi-account"></v-icon>
      <span> {{ character.name }}</span>
    </v-app-bar-title>
  </v-app-bar>
</template>
