<script setup lang="ts">
import { ref } from 'vue'

import ItemCounter from './ItemCounter.vue'

const xp = ref(0)

function change(by: number): void {
  xp.value = Math.max(0, xp.value + by)
}
</script>

<template>
  <v-card color="grey-lighten-3">
    <v-card-item>
      <v-card-title> XP </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter :value="xp" :has-by-five="true" @change="change"></ItemCounter>
    </v-card-text>
  </v-card>
</template>
