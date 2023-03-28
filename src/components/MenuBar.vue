<script setup lang="ts">
import type { Character } from '@/domain/character'
import deathwalkerIcon from '@/assets/any2cards/fh-deathwalker-bw-icon.png'

defineProps<{ character: Character }>()
</script>

<template>
  <v-app-bar color="grey-darken-3">
    <v-app-bar-title>
      <v-avatar color="grey-lighten-3">
        <v-img :src="deathwalkerIcon" max-height="1.5em" max-width="1.5em"></v-img>
      </v-avatar>
      <span class="ml-4">{{ character.name }}</span>
    </v-app-bar-title>
  </v-app-bar>
</template>
