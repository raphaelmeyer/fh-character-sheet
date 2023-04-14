<script setup lang="ts">
defineEmits<{ (e: 'tick'): void; (e: 'untick'): void }>();
defineProps<{ ticks: number; limit: number }>();
</script>

<template>
  <v-checkbox-btn
    v-for="i in limit"
    :key="i"
    :model-value="i <= ticks"
    :readonly="i < ticks"
    :disabled="i > ticks + 1"
    density="compact"
    @update:model-value="(on: boolean) => $emit(on ? 'tick' : 'untick')"
  >
  </v-checkbox-btn>
</template>
