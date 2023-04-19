<script setup lang="ts">
import type { TickState } from '@/components/character-sheet/tick-state';

defineEmits<{ (e: 'change', diff: number): void }>();
defineProps<{ state: TickState }>();
</script>

<template>
  <v-checkbox-btn
    v-if="state === 'ticked'"
    density="compact"
    readonly
    :model-value="true"
    :ripple="false"
  >
  </v-checkbox-btn>
  <v-checkbox-btn
    v-if="state === 'last-ticked'"
    density="compact"
    readonly
    :model-value="true"
    @click="() => $emit('change', -1)"
  >
  </v-checkbox-btn>
  <v-checkbox-btn
    v-if="state === 'first-unticked'"
    density="compact"
    readonly
    :model-value="false"
    @click="() => $emit('change', 1)"
  >
  </v-checkbox-btn>
  <v-checkbox-btn v-if="state === 'unticked'" density="compact" disabled :model-value="false">
  </v-checkbox-btn>
</template>
