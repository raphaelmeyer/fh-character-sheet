<script setup lang="ts">
import { computed } from 'vue';

import type { Character } from '@/domain/character';
import { perks as characterPerks } from '@/domain/perks';

import { tickState } from '@/components/character-sheet/tick-state';
import TickItem from '@/components/character-sheet/TickItem.vue';

defineEmits<{ (e: 'change', id: number, diff: number): void }>();
const props = defineProps<{ character: Character; perks: number[] }>();

const data = computed(() => {
  return characterPerks[props.character].map((perk) => ({
    info: perk,
    ticks: Array.from(Array(perk.limit).keys()).map((tick) =>
      tickState(tick, props.perks.at(perk.id) ?? 0)
    )
  }));
});
</script>

<template>
  <v-row v-for="perk in data" :key="perk.info.id">
    <v-col class="d-flex align-center" cols="4">
      <TickItem
        v-for="(tick, k) in perk.ticks"
        :key="k"
        :state="tick"
        @change="(diff) => $emit('change', perk.info.id, diff)"
      >
      </TickItem>
    </v-col>
    <v-col class="d-flex align-center">
      <span>{{ perk.info.text }}</span>
    </v-col>
  </v-row>
</template>
