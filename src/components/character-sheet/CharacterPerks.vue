<script setup lang="ts">
import { computed } from 'vue';

import type { Character } from '@/domain/character';
import { perks as characterPerks } from '@/domain/perks';

defineEmits<{ (e: 'change', id: number, diff: number): void }>();
const props = defineProps<{ character: Character; perks: number[] }>();

type TickState = 'ticked' | 'last-ticked' | 'first-unticked' | 'unticked';

function tickState(id: number, tick: number): TickState {
  const ticks = props.perks.at(id) ?? 0;
  if (tick < ticks - 1) {
    return 'ticked';
  } else if (tick === ticks - 1) {
    return 'last-ticked';
  } else if (tick === ticks) {
    return 'first-unticked';
  }
  return 'unticked';
}

const data = computed(() => {
  return characterPerks[props.character].map((perk) => ({
    info: perk,
    ticks: Array.from(Array(perk.limit).keys()).map((tick) => tickState(perk.id, tick))
  }));
});
</script>

<template>
  <v-row v-for="perk in data" :key="perk.info.id">
    <v-col class="d-flex align-center" cols="4">
      <template v-for="(tick, k) in perk.ticks" :key="k">
        <v-checkbox-btn
          v-if="tick === 'ticked'"
          density="compact"
          readonly
          :model-value="true"
          :ripple="false"
        >
        </v-checkbox-btn>
        <v-checkbox-btn
          v-if="tick === 'last-ticked'"
          density="compact"
          readonly
          :model-value="true"
          @click="() => $emit('change', perk.info.id, -1)"
        >
        </v-checkbox-btn>
        <v-checkbox-btn
          v-if="tick === 'first-unticked'"
          density="compact"
          readonly
          :model-value="false"
          @click="() => $emit('change', perk.info.id, 1)"
        >
        </v-checkbox-btn>
        <v-checkbox-btn v-if="tick === 'unticked'" density="compact" disabled :model-value="false">
        </v-checkbox-btn>
      </template>
    </v-col>
    <v-col class="d-flex align-center">
      <span>{{ perk.info.text }}</span>
    </v-col>
  </v-row>
</template>
