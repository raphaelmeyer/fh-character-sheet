<script setup lang="ts">
defineProps<{ value: number; usePlusFive?: boolean }>();
defineEmits<{ (e: 'change', diff: number): void }>();
</script>

<template>
  <v-row>
    <v-col class="font-weight-bold">{{ value }}</v-col>
    <v-col align="right">
      <v-icon icon="mdi-chevron-down" @click="$emit('change', -1)"></v-icon>
      <v-icon icon="mdi-chevron-up" @click="$emit('change', 1)"></v-icon>
      <v-icon v-if="usePlusFive" icon="mdi-chevron-double-down" @click="$emit('change', -5)">
      </v-icon>
      <v-icon v-if="usePlusFive" icon="mdi-chevron-double-up" @click="$emit('change', 5)"> </v-icon>
    </v-col>
  </v-row>
</template>
