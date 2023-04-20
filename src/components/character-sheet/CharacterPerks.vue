<script setup lang="ts">
import { computed } from 'vue';

import type { Character } from '@/domain/character';
import { perks as characterPerks } from '@/domain/perks';

import PerkText from '@/components/character-sheet/PerkText.vue';
import TickItem from '@/components/character-sheet/TickItem.vue';
import { tickState } from '@/components/character-sheet/tick-state';

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
    <v-col class="d-flex align-center" cols="3">
      <TickItem
        v-for="(tick, k) in perk.ticks"
        :key="k"
        :state="tick"
        @change="(diff) => $emit('change', perk.info.id, diff)"
      >
      </TickItem>
    </v-col>
    <v-col>
      <PerkText :text="perk.info.text"></PerkText>
    </v-col>
  </v-row>
</template>
