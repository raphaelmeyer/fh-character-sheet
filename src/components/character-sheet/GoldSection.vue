<script setup lang="ts">
import { ref } from 'vue'

import ItemCounter from './ItemCounter.vue'

const gold = ref(0)

function change(by: number): void {
  gold.value = Math.max(0, gold.value + by)
}
</script>

<template>
  <v-card color="grey-lighten-3">
    <v-card-item>
      <v-card-title> Gold </v-card-title>
    </v-card-item>
    <v-card-text>
      <ItemCounter :value="gold" :has-by-five="true" @change="change"></ItemCounter>
    </v-card-text>
  </v-card>
</template>
